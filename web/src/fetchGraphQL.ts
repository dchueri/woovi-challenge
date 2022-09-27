import { getUserLocalStorage } from "./context/AuthProvider/util";

async function fetchGraphQL(text: any, variables?: any) {
  let jwt = getUserLocalStorage();
  if (!jwt) {
    jwt = { token: "" };
  }

  const response = await fetch("https://woovi-server.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt.token}`,
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
