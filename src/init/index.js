import { getUserInfo, getEducationsByUserId } from "../api";
import renderUserInfo from "../render/renderUserInfo";
import renderEducation from "../render/renderEducation";

const initUserId = 1;

export function initUserInfo() {
  getUserInfo(initUserId).then((user) => {
    renderUserInfo(user);
  });
}

export function initEducation() {
  getEducationsByUserId(initUserId).then((educations) => {
    renderEducation(educations);
  });
}
