SELECT e.name Employee
FROM Employee e, Employee m
WHERE e.managerId=m.id AND e.salary > m.salary;