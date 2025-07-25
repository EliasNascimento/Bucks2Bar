// Regex from your script.js
const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;

test("Valid username: contains uppercase, special character, number, and at least 6 chars", () => {
  expect(regex.test("Test@1")).toBe(true);
  expect(regex.test("A1!aaa")).toBe(true);
  expect(regex.test("Password1!")).toBe(true);
});

test("Invalid username: missing uppercase", () => {
  expect(regex.test("test@1")).toBe(false);
});

test("Invalid username: missing special character", () => {
  expect(regex.test("Test123")).toBe(false);
});

test("Invalid username: missing number", () => {
  expect(regex.test("Test@aa")).toBe(false);
});

test("Invalid username: less than 6 characters", () => {
  expect(regex.test("T@1a")).toBe(false);
});
