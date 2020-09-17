import { getUserInfo, getEducationsByUserId } from "../index";
import ajax from "../ajax";

jest.mock("../ajax");

describe("api", () => {
  test("should get user info", async () => {
    const user = {
      id: 1,
      name: "KAMIL",
      age: 24,
      avatar: "https://inews.gtimg.com/newsapp_match/0/3581582328/0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.",
    };
    ajax.mockImplementation(() => Promise.resolve(user));
    await expect(getUserInfo(1)).resolves.toEqual(user);
  });
  test("should get education by user id", async () => {
    // TODO feedback: mock数据不需要这么复杂
    const educations = [
      {
        userId: 1,
        year: "1990",
        title: "I was born in Katowice",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.",
      },
      {
        userId: 1,
        year: "2005",
        title: "Secondary school specializing in artistic",
        description:
          "Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.",
      },
      {
        userId: 1,
        year: "2009",
        title: "First level graduation in Graphic Design",
        description:
          "Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde repellat.",
      },
    ];
    ajax.mockImplementation(() => Promise.resolve(educations));
    await expect(getEducationsByUserId(1)).resolves.toEqual(educations);
  });
});
