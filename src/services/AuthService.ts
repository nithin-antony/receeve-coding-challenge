const fakeLogin = (ms: number, userName: string, password: string) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (
        password === "receeve@2022" &&
        (userName === "REC456" || userName === "REC556")
      ) {
        localStorage.setItem("user", JSON.stringify(userName));
        resolve({ autnticated: true });
      } else {
        reject({ autnticated: false });
      }
    }, ms)
  );
};

const fackeLogout = (ms: number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ data: true });
    }, ms)
  );
};

export async function login(userName: string, password: string) {
  return await fakeLogin(3000, userName, password);
}

export async function logout() {
  localStorage.removeItem("user");
  return await fackeLogout(3000);
}
