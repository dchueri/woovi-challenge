import { getUserLocalStorage } from "./context/AuthProvider/util";

async function fetchGraphQL(text: any, variables?: any) {
  const jwt = getUserLocalStorage();
  const response = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt.token}`,
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
