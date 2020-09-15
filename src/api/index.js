import ajax from "./ajax";

const baseUrl = "http://localhost:8080";

export const getUserInfo = async (userId) => {
  const url = `${baseUrl}/users/${userId}`;
  return ajax(url);
};

export const getEducationsByUserId = async (userId) => {
  const url = `${baseUrl}/users/${userId}/educations`;
  return ajax(url);
};

export const createUser = async (user) => {
  const fetchData = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      body: JSON.stringify(user),
    },
  });
  const result = await fetchData.json();
  return result;
};
