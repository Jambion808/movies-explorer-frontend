import { useState, useCallback } from "react";

 export function useForm() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setValues({
            ...values,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: e.target.validationMessage,
        });

        setIsValid(e.target.closest('.form').checkValidity());
    }

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        }, [setValues, setErrors, setIsValid]
    )

    return {
        values,
        errors,
        isValid,
        handleChange,
        resetForm,
        setValues
    };
};

