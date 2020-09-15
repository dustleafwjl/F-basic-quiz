import { getUserInfo, getEducationsByUserId } from "../index";

jest.mock("../ajax");

describe("api", () => {
  test("should get user info", async () => {
    await expect(getUserInfo(1)).resolves.toEqual({});
  });
  test("should get education by user id", async () => {
    await expect(getEducationsByUserId(1)).resolves.toEqual({});
  });
});
