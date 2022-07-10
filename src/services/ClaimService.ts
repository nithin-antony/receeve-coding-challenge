export async function getAllAccounts() {
  const response = await fetch("http://localhost:9001/accounts");
  return await response.json();
}

export async function getAllClaims() {
  const response = await fetch("http://localhost:9001/claims");
  return await response.json();
}
