export async function getUserInformation() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1"
  );
  const body = await response.json();
  return body;
}

export async function getHeaderInformation() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const body = await response.json();
  const header = body.folder;
  return header;
}

export async function getFavoriteList(keyword, folderId) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}`
  );
  const body = await response.json();
  const links = body.data;
  if (!keyword) return links;
  return filterByKeyword(links, keyword);
}

export async function getAllFavoriteList(keyword) {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/links`
  );
  const body = await response.json();
  const links = body.data;
  if (!keyword) return links;
  return filterByKeyword(links, keyword);
}

export function filterByKeyword(links, keyword) {
  const lowered = keyword.toLowerCase();
  return links.filter(({ title }) => title?.toLowerCase().includes(lowered));
}

export async function getFolderName() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1/folders");
  const body = await response.json();
  const data = body.data;
  return data;
}

