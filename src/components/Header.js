import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";

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
  .dark-mode {
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
`;

function Header() {
  const handleClick = () => {};
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <h1>Where in the world?</h1>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                <i className="fa-regular fa-moon"></i>
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
