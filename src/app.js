import "./style/index.scss";
import { getUserInfo, getEducationsByUserId } from "./api";
import renderUserInfo from "./render/renderUserInfo";
import renderEducation from "./render/renderEducation";

function initUserInfo() {
  getUserInfo(1).then((user) => {
    renderUserInfo(user);
  });
}

function initEducation() {
  getEducationsByUserId(1).then((educations) => {
    renderEducation(educations);
  });
}

initUserInfo();
initEducation();
