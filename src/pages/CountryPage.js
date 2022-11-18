import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import CountrySelected from "../components/CountrySelected";
import Wrapper from "../components/Wrapper";

const CountryPageStyled = styled.div`
  .back {
    background-color: var(--white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 0.7em 2.2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 1em;
    color: var(--black);
    i {
      margin-right: 5px;
    }
  }

  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`;

function CountryPage() {
  const navigate = useNavigate();
  const { countryName } = useParams();
  let DBcountry = useSelector((state) =>
    state.countryList.find(
      (item) => item.name.toLowerCase() === countryName.toLowerCase()
    )
  );
  const [country, setCountry] = useState(DBcountry);

  useEffect(() => {
    if (!country) {
      navigate("/");
    }
  }, [navigate, country]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <CountryPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}>
          <i className="fa-sharp fa-solid fa-arrow-left"></i> Back
        </button>
        <CountrySelected {...country} />
      </Wrapper>
    </CountryPageStyled>
  );
}

export default CountryPage;
