const Employee = require("../lib/Employee");

describe("testing Employee Getters", () => {
    const emp = new Employee("1", "Brandon", "something@Gmail.com")
    test('getRole', () => {
        expect(emp.getRole()).toBe("Employee");
    });
    test('getId', () => {
        expect(emp.getId()).toBe("1");
    });
    test('getName', () => {
        expect(emp.getName()).toBe("Brandon");
    });
    test('getEmail', () => {
        expect(emp.getEmail()).toBe("something@Gmail.com");
    });
})