# Claude Code Guidelines for LeetCode Solutions Repository

This document provides guidelines for working with this LeetCode solutions repository when using Claude Code.

## Repository Structure

This repository contains solutions to LeetCode problems, organized by problem number in the `problems/` directory. Each problem has its own folder (e.g., `problems/2243/`) containing:
- `README.md` - Problem description
- Solution files in various languages

## README.md Formatting Standards

When creating or editing problem README.md files in the `problems/` directory, follow these formatting requirements:

### Title and Structure
- First line should be formatted with `#` and include the problem number
- Example: `# 2243. Calculate Digit Sum of a String`
- Do not remove the problem number from the title

### Content to Remove
Remove the following elements if present in problem descriptions:
- Solved status indicators
- Difficulty labels (Easy/Medium/Hard)
- Topics tags
- Premium lock icons
- Companies information
- Hint sections

### Formatting Rules

#### Inline Code and Values
- Format numbers, boolean values (`true`/`false`), and code-like samples with single backticks
- Format variable names with single backticks
- Example: `s`, `k`, `"346"`, `true`, `13`

#### Lists
- If content appears to be a list (often indicated by a preceding line ending with `:`), format each line with `-`
- Constraints should always be formatted as a list

#### Example Sections
- Example headings should be formatted with `###`
- Format as: `### Example 1:`, `### Example 2:`, etc.
- Example content (excluding headings) should be in triple backticks
- Include `Input:`, `Output:`, and `Explanation:` within the code block

Example format:
```
### Example 1:

\```
Input: s = "11111222223", k = 3
Output: "135"
Explanation:
- For the first round, we divide s into groups of size 3...
\```
```

#### Constraints Section
- Constraints heading should be formatted with `###`
- Format as: `### Constraints:`
- Each constraint should be a list item starting with `-`
- Format numbers, values, and code samples within constraints using single backticks

#### Mathematical Notation
- Numbers that represent exponents should be formatted with `^`
- Convert: `104` → `10^4`, `109` → `10^9`, `103` → `10^3`
- Apply this to any number that looks like it might be an exponent notation

## General Best Practices

When working with this repository:
- Maintain consistency with existing file structures
- Ensure all code examples are properly formatted
- Keep README files clean and focused on the problem description
- Use proper markdown formatting throughout
- Test that all markdown renders correctly

## Example of Well-Formatted README

See [problems/2243/README.md](problems/2243/README.md) for a reference implementation of these formatting standards.
