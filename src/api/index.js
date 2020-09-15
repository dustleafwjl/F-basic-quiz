let baseUrl = "http://localhost:8080";

export const useTest = () => {
  baseUrl = "http://localhost:3000";
};

export const getUserInfo = async (userId) => {
  const fetchData = await fetch(`${baseUrl}/users/${userId}`);
  const result = await fetchData.json();
  return result;
};

export const getEducationsByUserId = async (userId) => {
  const fetchData = await fetch(`${baseUrl}/users/${userId}/educations`);
  const result = await fetchData.json();
  return result;
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
