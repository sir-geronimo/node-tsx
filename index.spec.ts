import { describe, test, expect } from "@jest/globals";
import { User } from "./user";

describe("User", () => {
  test("should create a user and say hello", () => {
    const user = new User("123", "Alice");

    const message = user.sayHello("Hello, world!");

    expect(message).toBe("Alice says: Hello, world!");
  });

  test("should generate a UUID when id is not provided", () => {
    const user = new User("", "Bob");

    expect(user.id).toBeDefined();
    expect(user.id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
    );
  });

  test("should use provided id when id is not empty", () => {
    const user = new User("custom-id", "Charlie");

    expect(user.id).toBe("custom-id");
  });

  test("should return the user's name", () => {
    const user = new User("456", "Diana");

    expect(user.name).toBe("Diana");
  });

  test("should return the user's id", () => {
    const user = new User("789", "Eve");

    expect(user.id).toBe("789");
  });

  test("should say hello with different messages", () => {
    const user = new User("000", "Frank");

    const message1 = user.sayHello("Good morning!");
    const message2 = user.sayHello("How are you?");

    expect(message1).toBe("Frank says: Good morning!");
    expect(message2).toBe("Frank says: How are you?");
  });

  test("should handle empty message", () => {
    const user = new User("111", "Grace");

    const message = user.sayHello("");

    expect(message).toBe("Grace says: ");
  });

  test("should handle special characters in message", () => {
    const user = new User("222", "Henry");

    const message = user.sayHello("Hello @#$%^&*()!");

    expect(message).toBe("Henry says: Hello @#$%^&*()!");
  });
});
