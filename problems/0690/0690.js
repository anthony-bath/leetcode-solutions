/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const lookup = new Map();

  for (const employee of employees) {
    lookup.set(employee.id, employee);
  }

  let total = 0;
  const queue = [id];

  while (queue.length > 0) {
    const currentId = queue.shift();
    const employee = lookup.get(currentId);
    total += employee.importance;
    queue.push(...employee.subordinates);
  }

  return total;
};
