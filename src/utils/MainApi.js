// export const BASE_URL = "https://pickof.nomoreparties.sbs";
export const BASE_URL = "http://localhost:3000";


const processResponse = (res) => {
    if (res.ok) {
      const response = res.json();
      // console.log(response);
      return response;
    }
    return Promise.reject(new Error("Ошибка"));
  };

  export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`,{
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({name, email, password})
    }).then(processResponse);
};

export const login = async(email, password) => {
    let response = await fetch(`${BASE_URL}/signin`,{
    // return fetch(`${BASE_URL}/signin`,{
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({email, password})
    })
    response = await(response?.json())
    // .then(processResponse)
    // .then((data) => {
    //   localStorage.setItem('jwt', data.token)
      localStorage.setItem('jwt', response.token)
      return await checkToken(response.token)
    //   return data
    // })
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    }).then(processResponse);
}; 

export const editProfile = (name, email) => {
    const token = localStorage.getItem('jwt');
    return fetch(`${BASE_URL}/users/me`, {
      method: "PATCH",
      headers: {
        authorization : `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email}),
    }).then(processResponse);
  }

  export const savedMovies = (data) => {
    const token = localStorage.getItem('jwt');
    return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        headers: {
          authorization : `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            country : data.country,
            director : data.director,
            duration : data.duration,
            year : data.year,
            description : data.description,
            image : `https://api.nomoreparties.co/${data.image.url}`,
            trailerLink : data.trailerLink,
            thumbnail : `https://api.nomoreparties.co/${data.thumbnail}`,
            movieId : data.movieId,
            nameRU : data.nameRU,
            nameEN : data.nameEN,
          }),
    })
    .then(processResponse);
  }

  export const deleteMovies = (movieId) => {
    const token = localStorage.getItem('jwt');
    return fetch(`${BASE_URL}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization : `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }).then(processResponse);
  }

  export const getSavedMovies = () => {
    const token = localStorage.getItem('jwt');
    return fetch(`${BASE_URL}/movies`, {
      method: "GET",
      headers: {
        authorization : `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }).then(processResponse);
  }


