import axios from "axios";

const API_KEY = "Your-API-Key-Here";

async function createUser(email, password) {
  // send a request to the server (firebase) to create a new user
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
