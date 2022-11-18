import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Country from "./Country";
import Wrapper from "./Wrapper";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-template-columns: repeat(auto-fill, 270px);
  grid-column-gap: 75px;
  justify-content: center;
  background: var(--background);
  padding: 3em 0em;
`;

function CountryList() {
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "" && countryListByName.length === 0) {
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

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default CountryList;
