import axios from "axios";

const API_KEY = "Your_API_Key";

export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  // send a request to the server (firebase) to create a new user
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data);
}

export async function createUser(email, password) {
  // send a request to the server (firebase) to create a new user
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
