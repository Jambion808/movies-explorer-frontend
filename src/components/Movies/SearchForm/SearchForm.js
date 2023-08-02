import "./SearchForm.css";
import { useForm } from "../../hook/FormValidation";
import { useState } from "react";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";

export function SearchForm() {
  const { values, isValid, handleChange, resetForm } = useForm({});
  const [isShort, setIsShort] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  function handleShort() {
      setIsShort(!isShort);
  }

  return (
    <section className="search">
      <form className="search__form form">
        <input
          className="search__input"
          value={values.film || ""}
          onChange={handleChange}
          name="film"
          id="film"
          type="film"
          placeholder="Фильм"
          minLength={2}
          maxLength={30}
          autoComplete="off"
          required
        />
        <button
          disabled={!isValid}
          className={
            isValid
              ? "search__button"
              : "search__button  search__button-off"
          }
          onClick={handleSubmit}
          type="submit"
        />
      </form>
      <FilterCheckbox isCheck={isShort} checkHandler={handleShort}/>
    </section>
  );
}
