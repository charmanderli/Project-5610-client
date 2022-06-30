export function getPostsByLocation(params) {
  const url = "/api/posts/search?" + new URLSearchParams(params);
  return fetch(url, {
    method: "GET",
  });
}
