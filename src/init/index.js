import { getUserInfo, getEducationsByUserId } from "../api";
import { renderUserInfo, renderEducation } from "../render";

function getUserId() {
  const pathSearchArr = window.location.search.replace("?", "").split("=");
  if (pathSearchArr[0] === "userId") {
    return pathSearchArr[1];
  }
  return 1;
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
