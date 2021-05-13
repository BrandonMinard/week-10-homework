const Intern = require("../lib/Intern");

describe("testing Employee Getters", () => {
    const emp = new Intern("1", "Brandon", "something@Gmail.com", "School Of Hard Knocks")
    test('getRole', () => {
        expect(emp.getRole()).toBe("Intern");
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
    test('getSchool', () => {
        expect(emp.getSchool()).toBe("School Of Hard Knocks");
    });

})