export const BASE_URL = ' https://api.nomoreparties.co/beatfilm-movies'

const processResponse = (res) => {
    if (res.ok) {
      const response = res.json();
      // console.log(response);
      return response;
    }
    return Promise.reject(new Error("Ошибка"));
  };

  export const getMovies = () => {
    return fetch(BASE_URL, {
        method: "GET",
        headers: {
            // Accept: "application/json",
            'Content-Type': "application/json"
        }
    })
    .then(processResponse)
  }