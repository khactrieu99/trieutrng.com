import client from "./Client";
import { LOGIN, LOGOUT } from "./EndPoints";

export const doLogin = (username, password) => {
  const url = LOGIN;

  let bodyFormData = new FormData();
  bodyFormData.append('username', username);
  bodyFormData.append('password', password);

  return client.post(url, bodyFormData);
};

export const doLogout = () => {
  const url = LOGOUT;
  return client.get(url);
}
