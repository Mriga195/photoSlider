import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const checkLocalStorage = () => {
    try {
      const item = window.localStorage.getItem(key);

      return item !== null ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  };

  const [value, setValue] = useState(checkLocalStorage);

  const setValueAndStorage = (newValue) => {
    try {
      const updatedValue =
        newValue instanceof Function ? newValue(value) : newValue;
      setValue(updatedValue);
      window.localStorage.setItem(key, JSON.stringify(updatedValue));
    } catch (err) {
      console.log(err);
    }
  };

  return [value, setValueAndStorage];
};

export default useLocalStorage;
