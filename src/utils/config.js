const TIME_OUT = 10000;
const TOKEN_KEY = "token";

const appConfig = {
  APP_KEY: "15521096",
  APP_SECRET: "20ee7d6400dda1hdk13b1j2b",
};

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export { TIME_OUT, getToken, appConfig };
