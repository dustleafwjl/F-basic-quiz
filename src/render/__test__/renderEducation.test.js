import { getEducationHtml } from "../renderEducation";

describe("render education in page", () => {
  test("should get user info", () => {
    // Arrange
    const expected = [
      {
        id: 1,
        userId: 1,
        year: 1997,
        title: "First level graduation in Graphic Design",
        description:
          "Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde repellat.",
      },
    ];
    // Act
    const result = getEducationHtml(expected);
    // Assert
    expect(result).toEqual(`<section class="education-element">
      <div class="element-year">
        1997
      </div>
      <div class="element-experience">
        <p class="element-experience-event">
          First level graduation in Graphic Design
        </p>
        <p class="element-experience-description">
          Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde repellat.
        </p>
      </div>
    </section>`);
  });
});
