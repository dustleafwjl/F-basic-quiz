import { getUserInfo, getEducationsByUserId, useTest } from "../index";

describe("api", () => {
  test("should get user info", async () => {
    useTest();
    expect(getUserInfo(1)).toEqual(expect.any(Promise));
  });
  test("should get education by user id", async () => {
    useTest();
    expect(getEducationsByUserId(1)).toEqual(expect.any(Promise));
  });
});
