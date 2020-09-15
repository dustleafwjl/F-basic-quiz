import "./style/index.scss";
import { getUserInfo } from "./api";
import renderUserInfo from "./render/renderUserInfo";

function initUserInfo() {
  getUserInfo(1).then((user) => {
    renderUserInfo(user);
  });
}

initUserInfo();
