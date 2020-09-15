import $ from "jquery";

const renderEducation = (educations) => {
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
  $(".education-list").html(educationHtml);
};

export default renderEducation;
