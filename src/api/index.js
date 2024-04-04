export async function getUserInformation() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
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

export async function getFavoriteList(keyword) {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const body = await response.json();
  const links = body.folder.links;
  if (!keyword) return links;
  return filterByKeyword(links, keyword);
}

export function filterByKeyword(links, keyword) {
  const lowered = keyword.toLowerCase();
  return links.filter(({ title }) => title.toLowerCase().includes(lowered));
}



