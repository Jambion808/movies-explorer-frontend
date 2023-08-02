import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Main } from "../Main/Main";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { NotFound } from "../NotFound/NotFound";
import { Profile } from "../Profile/Profile";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Marking } from "../Marking/Marking";
import { Header } from "../Header/Header";

function App() {
  const navigation = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  function handleRegistration() {
    navigation("/sign-in", { replace: true });
  }

  function handleLogout() {
    setLoggedIn(false);
    navigation("/", { replace: true });
  }

  function handleLogin() {
    setLoggedIn(true);
    navigation("/", { replace: true });
  }

  return (
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
            <Marking loggedIn={loggedIn}>
              <Movies />
            </Marking>
          }
        />

        <Route
          path="/saved-movies"
          element={
            <Marking loggedIn={loggedIn}>
              <SavedMovies />
            </Marking>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <Profile
                handleLogout={handleLogout}
                name={"Виталий"}
                email={"pochta@yandex.ru"}
              />
            </>
          }
        />
        <Route path="/sign-in" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/sign-up"
          element={<Register handleRegistration={handleRegistration} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
