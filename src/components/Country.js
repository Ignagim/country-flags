import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .details {
    padding: 1.5em;
  }
  h2 {
    margin: 0;
    margin-bottom: 1em;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
`;

function Country({ name, flag, population, region, capital }) {
  return (
    <CountryStyled>
      <img loading="lazy" src={flag} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
