const baseURL: string = process.env.VUE_APP_BASE_URL || "http://localhost:9001";

export async function getAllAccounts() {
  const response = await fetch(`${baseURL}/accounts`);
  return await response.json();
}

export async function getAllClaims() {
  const response = await fetch(`${baseURL}/claims`);
  return await response.json();
}
