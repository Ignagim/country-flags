import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import slugify from "slugify";

const CountryStyled = styled.div`
  text-align: left;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  cursor: pointer;
  &:hover .details {
    border-radius: 0 0 5px 5px;
    border: 1px solid var(--black);
    border-top: none;
  }
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
    vertical-align: bottom;
  }
  .details {
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: border 0.2s ease-in-out;
    background: var(--white);
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${name.toLowerCase()}`);
  };
  return (
    <CountryStyled onClick={handleClick}>
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
