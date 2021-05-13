const Engineer = require("../lib/Engineer");

describe("testing Engineer Getters", () => {
    const emp = new Engineer("1", "Brandon", "something@Gmail.com", "brandonMinard")
    test('getRole', () => {
        expect(emp.getRole()).toBe("Engineer");
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
    test('getGithub', () => {
        expect(emp.getGithub()).toBe("brandonMinard");
    });
})