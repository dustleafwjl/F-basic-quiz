import { initUserInfo, initEducation } from "../index";
import * as api from "../../api";

describe("init page", () => {
  test("should init call getUserInfo", async () => {
    const getUserInfoSpy = jest.spyOn(api, "getUserInfo");
    initUserInfo();
    expect(getUserInfoSpy).toHaveBeenCalled();
  });
  test("should init call getEducationsByUserId", async () => {
    const getEducationsByUserIdSpy = jest.spyOn(api, "getEducationsByUserId");
    initEducation();
    expect(getEducationsByUserIdSpy).toHaveBeenCalled();
  });
});
