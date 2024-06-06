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

export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: API_URL + "/auth/verify-token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
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

export function USER_POST<T>(body: T) {
  return {
    url: API_URL + "/auth/register",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function POST_POST<T>(body: T, token: string) {
  return {
    url: API_URL + "/posts",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    },
  };
}
