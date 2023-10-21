import "./SearchForm.css";
import { useForm } from "../../hook/FormValidation";
import { useEffect, 
  // useState 
} from "react";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";
import { InfoNotify } from "../../InfoNotify/infoNotify";

export function SearchForm(props) {
  const { values, setValues, handleChange, isValid} = useForm({});
  // const [isShorts, setIsShorts] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleGetMovies(values.film, props.isShorts)
  };

  function handleShort() {
    props.setIsShorts(!props.isShorts);
  }

  useEffect(() => {
    if(props.isLastFilms){
      setValues({'film' : props.isLastFilms, ...values})
    }
  },[props.isLastFilms, setValues])

  return (
    <>
    <section className="search">
      <form className="search__form form">
        <input
          className="search__input"
          value={values.film || ""}
          onChange={handleChange}
          name="film"
          id="film"
          type="text"
          placeholder="Фильм"
          minLength={1}
          maxLength={30}
          autoComplete="off"
          required
        />
        <button
          disabled={props.isLoading}
          className={
            isValid
              ? "search__button"
              : "search__button  search__button-off"
          }
          onClick={handleSubmit}
          type="submit"
        />
      </form>
      <FilterCheckbox isCheck={props.isShorts} checkHandler={handleShort}/>
    </section>
    <InfoNotify isInfoNotifyOpen={props.isInfoNotifyOpen} isMassage={props.isMassage} closeMessage={props.closeMessage}/>
    </>
  );
}
