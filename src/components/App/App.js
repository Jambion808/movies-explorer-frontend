import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Main } from "../Main/Main";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { NotFound } from "../NotFound/NotFound";
import { Profile } from "../Profile/Profile";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Marking } from "../Marking/Marking";
import { Header } from "../Header/Header";
// {
//   checkToken,
//   register,
//   login,
//   editProfile,
//   savedMovies,
//   deleteMovies,
//   getSavedMovies,
// } from "../../utils/MainApi";
import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigation = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const { pathname } = useLocation();
  const [isPreloader, setIsPreloader] = useState(false);
  const [isInfoNotifyOpen, setIsInfoNotifyOpen] = useState(false);
  const [isMassage, setIsMassage] = useState("");
  const [isSavedMovies, setIsSavedMovies] = useState([]);

  useEffect(() => {
    handleTokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getUserFromToken =() => {

  // }

  useEffect(() => {
    if (loggedIn) {
      MainApi.getSavedMovies()
        .then((movies) => {
          const ownSavedMovies = movies.filter(
            (data) => data.owner === currentUser.id
          );
          setIsSavedMovies(ownSavedMovies);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [currentUser, loggedIn, setIsSavedMovies]); //////////

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
          if (pathname === "/sign-in" || pathname === "/sign-up") {
            navigation("/movies", { replace: true });
          } else {
            navigation(`${pathname}`, { replace: true });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  function handleRegistration(name, email, password) {
    setIsPreloader(true);
    MainApi.register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsInfoNotifyOpen(true);
        setIsMassage("Что-то пошло не так");
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    navigation("/", { replace: true });
    localStorage.removeItem("entireFilmList");
    localStorage.removeItem("alldatalist");
    setIsSavedMovies([]);
  }

  function handleLogin(email, password) {
    setIsPreloader(true);
    MainApi.login(email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
          navigation("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        setIsInfoNotifyOpen(true);
        setIsMassage("Что-то пошло не так");
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

  function handleSubmitProfile(name, email) {
    setIsPreloader(true);
    MainApi.editProfile(name, email)
      .then((data) => {
        navigation("/profile", { replace: true });
        setCurrentUser(data);
        setIsInfoNotifyOpen(true);
        setIsMassage("Пользователь обновлен");
      })
      .catch((err) => {
        console.log(err);
        setIsInfoNotifyOpen(true);
        setIsMassage("При обновлении профиля произошла ошибка.");
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

  function closeMessage() {
    setIsInfoNotifyOpen(false);
    setIsMassage("");
  }

  // function handleSaveMovies(data) {
  //   setIsPreloader(true);
  //   MainApi.savedMovies(data)
  //     .then((res) => {
  //       setIsSavedMovies([res,...isSavedMovies]);
  //     })
  //     .finally(() => {setIsPreloader(false)})
  //     .catch((err) => console.log(err));
  // }

  // console.log(currentUser)
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Marking loggedIn={loggedIn}>
                <Main />
              </Marking>
            }
          />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                isSavedMovies={isSavedMovies}
                setIsSavedMovies={setIsSavedMovies}
                setIsInfoNotifyOpen={setIsInfoNotifyOpen}
                setIsMassage={setIsMassage}
                isInfoNotifyOpen={isInfoNotifyOpen}
                isMassage={isMassage}
                closeMessage={closeMessage}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                isSavedMovies={isSavedMovies}
                setIsSavedMovies={setIsSavedMovies}
                isInfoNotifyOpen={isInfoNotifyOpen}
                isMassage={isMassage}
                closeMessage={closeMessage}
              />
            }

            // element={
            //   <Marking loggedIn={loggedIn}>
            //     <SavedMovies
            //     isSavedMovies={isSavedMovies}
            //     setIsSavedMovies={setIsSavedMovies}
            //     />
            //   </Marking>
            // }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                handleLogout={handleLogout}
                handleSubmitProfile={handleSubmitProfile}
                isInfoNotifyOpen={isInfoNotifyOpen}
                isMassage={isMassage}
                isPreloader={isPreloader}
                closeMessage={closeMessage}
              />
            }

            // element={
            //   <>
            //     <Header loggedIn={loggedIn} />
            //     <Profile
            //       handleLogout={handleLogout}
            //       handleSubmitProfile={handleSubmitProfile}
            //       isInfoNotifyOpen={isInfoNotifyOpen}
            //       isMassage={isMassage}
            //       isPreloader={isPreloader}
            //       // name={"Виталий"}
            //       // email={"pochta@yandex.ru"}
            //     />
            //   </>
            // }
          />
          <Route
            path="/sign-in"
            element={
              <Login
                handleLogin={handleLogin}
                isInfoNotifyOpen={isInfoNotifyOpen}
                isMassage={isMassage}
                closeMessage={closeMessage}
              />
            }
          />
          <Route
            path="/sign-up"
            element={
              <Register
                handleRegistration={handleRegistration}
                isInfoNotifyOpen={isInfoNotifyOpen}
                isMassage={isMassage}
                closeMessage={closeMessage}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
