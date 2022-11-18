import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

const HeaderStyled = styled.div`
  background-color: var(--white);
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
  h1 {
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color: var(--dark);
  }
  .dark-mode {
    cursor: pointer;
    p {
      font-size: 12px;
      font-weight: 600;
    }
    .moon {
      margin-right: 7px;
      i {
        transform: rotate(-20deg);
      }
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 3em;
    h1 {
      font-size: 24px;
    }
    .dark-mode {
      p {
        font-size: 1rem;
      }
    }
  }
`;

function Header({ setDarkMode, darkMode }) {
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          <div className="dark-mode">
            <p onClick={handleClick}>
              {!darkMode ? (
                <>
                  <span className="moon">
                    <i className="fa-regular fa-moon"></i>
                  </span>
                  Dark Mode
                </>
              ) : (
                <>
                  <span className="moon">
                    <i className="fa-solid fa-moon"></i>
                  </span>
                  Light Mode
                </>
              )}
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
