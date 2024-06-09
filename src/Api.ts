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

export function GET_ALL_POSTS() {
  return {
    url: API_URL + "/posts",
    options: {
      method: "GET",
    },
  };
}

export function GET_POST(id: string) {
  return {
    url: API_URL + "/posts/find/" + id,
    options: {
      method: "GET",
    },
  };
}

export function POST_COMMENT<T>(token: string, body: T) {
  return {
    url: API_URL + "/comments",
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

export function GET_COMMENTS_POST(id: string) {
  return {
    url: API_URL + "/comments/post/" + id,
    options: {
      method: "GET",
    },
  };
}

export function GET_NEW_POSTS() {
  return {
    url: API_URL + "/posts?new=new",
    options: {
      method: "GET",
    },
  };
}

export function GET_POSTS_BY_CATEGORY(id: string) {
  return {
    url: API_URL + "/posts?category=" + id,
    options: {
      method: "GET",
    },
  };
}
