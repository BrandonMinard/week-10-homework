const Manager = require("../lib/Manager");

describe("testing Manager Getters", () => {
    const emp = new Manager("1", "Brandon", "something@Gmail.com", "340")
    test('getRole', () => {
        expect(emp.getRole()).toBe("Manager");
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
    test('getOfficeNum', () => {
        expect(emp.getOfficeNum()).toBe("something@Gmail.com");
    });
})