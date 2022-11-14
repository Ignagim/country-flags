import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Country from "./Country";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  /* grid-template-columns: 1fr 1fr 1fr; */
  background: var(--background);
  padding: 4em 2em;
  border: 1px solid red;
`;

function CountryList() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);

  const countryList = useSelector((state) => {
    if ("" !== state.filterByRegion) {
      return state.countryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
      })
      .catch(() => {
        console.log("Hubo un error, lol");
      });
  }, [dispatch]);

  const filterByName = (e) => {
    setInputValue(e.target.value);
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: e.target.value,
    });
  };

  const clearInput = () => {
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: "",
    });
    setInputValue("");
  };

  return (
    <CountryListStyled>
      <input type="text" value={inputValue} onChange={filterByName} />

      {inputValue && <button onClick={clearInput}>Clear Input</button>}

      {countryListByName.length === 0 && inputValue && (
        <p>
          <strong>{inputValue}</strong> Not found in countries
        </p>
      )}

      {countryList.map(({ name, flag, population, region, capital }) => {
        return (
          <Country
            key={name}
            name={name}
            flag={flag}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </CountryListStyled>
  );
}

export default CountryList;
