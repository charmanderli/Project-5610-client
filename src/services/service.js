const host = "http://localhost:5000";

export function getPostsByLocation(params) {
  const url = host + "/api/posts/search?" + new URLSearchParams(params);
  return fetch(url, {
    method: "GET",
  });
}
