const API_BASE = "https://ranekapi.origamid.dev/json/api/";

export const getApiData = async (url) => {
  const link = await fetch(`${API_BASE}${url}`);
  const json = await link.json();
  return json;
};
