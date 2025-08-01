#!/usr/bin/env python3

import os
import re
from pathlib import Path


def fix_constraints_in_file(filepath):
    """Fix constraints formatting in a single README file"""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Split into lines for processing
    lines = content.split("\n")
    new_lines = []
    in_constraints = False

    for line in lines:
        # Check if we're entering constraints section
        if line.strip() == "### Constraints:":
            in_constraints = True
            new_lines.append(line)
            continue

        # If we're in constraints section
        if in_constraints:
            # Check for empty line (continues constraints section)
            if line.strip() == "":
                new_lines.append(line)
                continue

            # Check if constraints section ended (new heading)
            elif line.startswith("#"):
                in_constraints = False
                new_lines.append(line)
                continue

            # Process constraint line
            elif line.strip():
                # Remove any existing backticks to start fresh
                clean_line = line.replace("`", "").strip()

                # Skip if it doesn't look like a constraint
                if not clean_line.startswith("-") and not clean_line:
                    in_constraints = False
                    new_lines.append(line)
                    continue

                # Ensure it starts with dash
                if not clean_line.startswith("-"):
                    clean_line = f"- {clean_line}"

                # Now apply backticks only where needed:

                # 1. Mathematical expressions with inequalities/equalities
                clean_line = re.sub(
                    r"(-?\d+(?:\^\d+)?)\s*(<=|>=|<|>|==|!=)\s*([a-zA-Z_]\w*(?:\[[^\]]*\])?)\s*(<=|>=|<|>|==|!=)\s*(-?\d+(?:\^\d+)?)",
                    r"`\1 \2 \3 \4 \5`",
                    clean_line,
                )

                # 2. Simple ranges like "1 <= x <= 100"
                clean_line = re.sub(
                    r"([a-zA-Z_]\w*(?:\[[^\]]*\])?)\s*(<=|>=|<|>|==|!=)\s*(-?\d+(?:\^\d+)?)",
                    r"`\1 \2 \3`",
                    clean_line,
                )
                clean_line = re.sub(
                    r"(-?\d+(?:\^\d+)?)\s*(<=|>=|<|>|==|!=)\s*([a-zA-Z_]\w*(?:\[[^\]]*\])?)",
                    r"`\1 \2 \3`",
                    clean_line,
                )

                # 3. Standalone numbers
                clean_line = re.sub(r"\b(\d+(?:\^\d+)?)\b", r"`\1`", clean_line)

                # 4. Variable names with array notation
                clean_line = re.sub(
                    r"\b([a-zA-Z_]\w*\[[^\]]*\])\b", r"`\1`", clean_line
                )

                # 5. Boolean values
                clean_line = re.sub(r"\b(true|false|null)\b", r"`\1`", clean_line)

                # 6. Character literals in quotes
                clean_line = re.sub(r"'([^']+)'", r"`'\1'`", clean_line)
                clean_line = re.sub(r'"([^"]+)"', r'`"\1"`', clean_line)

                # 7. Array/range notation like [1, 100] or ['a', 'z']
                clean_line = re.sub(r"\[([^\]]+)\]", r"`[\1]`", clean_line)

                # 8. Standalone variable names (be conservative)
                # Only for common programming variable patterns
                clean_line = re.sub(
                    r"\b([a-z]+(?:[A-Z][a-z]*)*)\s+(?=is|consists|contains|will)",
                    r"`\1` ",
                    clean_line,
                )

                # Clean up multiple spaces and fix spacing
                clean_line = re.sub(r"\s+", " ", clean_line)

                new_lines.append(clean_line)
                continue

        # Default: keep line as is
        new_lines.append(line)

    # Write back the file
    new_content = "\n".join(new_lines)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)


def main():
    problems_dir = Path("problems")

    # Find all README.md files
    readme_files = list(problems_dir.glob("*/README.md"))

    print(f"Fixing constraints formatting in {len(readme_files)} README.md files...")

    count = 0
    for readme_file in readme_files:
        try:
            # Read original content
            with open(readme_file, "r") as f:
                original = f.read()

            fix_constraints_in_file(readme_file)

            # Check if file changed
            with open(readme_file, "r") as f:
                new_content = f.read()

            if original != new_content:
                count += 1
                print(f"Fixed: {readme_file}")

        except Exception as e:
            print(f"Error processing {readme_file}: {e}")

    print(f"Finished fixing constraints formatting in {count} files")


if __name__ == "__main__":
    main()
