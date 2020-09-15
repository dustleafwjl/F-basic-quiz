import $ from "jquery";

const renderUserInfo = (user) => {
  console.log(user);
  $(".header-avatar").attr("src", user.avatar);
  $(".header-description").html(
    `MY NAME IS ${user.name} ${user.age}YO AND THIS IS MY RESUME/CV`
  );

  $(".about-description").html(user.description);
};

export default renderUserInfo;
