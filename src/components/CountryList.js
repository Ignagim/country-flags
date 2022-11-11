import { useEffect, useState } from "react";
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
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountryList(data);
      })
      .catch(() => {
        console.log("Hubo un error, lol");
      });
  }, []);

  return (
    <CountryListStyled>
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
