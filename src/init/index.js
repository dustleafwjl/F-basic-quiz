import { getUserInfo, getEducationsByUserId } from "../api";
import { renderUserInfo, renderEducation } from "../render";

function getUserId() {
  const pathArr = window.location.path.split("/");
  if (pathArr[1] === "users" && pathArr.length === 3) {
    return pathArr[2];
  }
  return undefined;
}

const initUserId = getUserId();

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
