import $ from "jquery";

export const getEducationHtml = (educations) => {
  let educationHtml = "";
  educations.forEach((education) => {
    const itemHtml = `<section class="education-element">
      <div class="element-year">
        ${education.year}
      </div>
      <div class="element-experience">
        <p class="element-experience-event">
          ${education.title}
        </p>
        <p class="element-experience-description">
          ${education.description}
        </p>
      </div>
    </section>`;
    educationHtml += itemHtml;
  });
  return educationHtml;
};

const renderEducation = (educations) => {
  const educationHtml = getEducationHtml(educations);
  $(".education-list").html(educationHtml);
};

export default renderEducation;
