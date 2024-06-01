export const API_URL = "http://localhost:5000/api";

export function TOKEN_POST<T>(body: T) {
  return {
    url: API_URL + "/auth/login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token: string) {
  return {
    url: API_URL + "/auth/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
