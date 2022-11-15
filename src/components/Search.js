import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Input from "./Input";

const SearchStyled = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  .close {
    position: absolute;
    right: 1em;
    top: 1em;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;

function Search() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

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
    <SearchStyled>
      <Input
        placeholder="Search for a country..."
        value={inputValue}
        onChange={filterByName}
      />
      {inputValue && (
        <i className="fas fa-times close" onClick={clearInput}></i>
      )}
    </SearchStyled>
  );
}

export default Search;
