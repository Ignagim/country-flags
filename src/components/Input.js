import styled from "styled-components";

const InputStyled = styled.label`
  display: inline-flex;
  background-color: #fff;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  align-items: center;
  padding: 0 2rem;
  border-radius: 5px;
  flex: 1;
  i {
    color: #c4c4c4;
    margin-right: 1em;
  }
  input {
    flex: 1;
    height: 48px;
    line-height: 48px;
    border: none;
    font-size: 0.7em;
    outline: none;
    &::placeholder {
      color: #c4c4c4;
    }
  }
`;

function Input({ ...props }) {
  return (
    <InputStyled>
      <i className="fa-solid fa-magnifying-glass"></i>{" "}
      <input type="text" {...props} />
    </InputStyled>
  );
}

export default Input;
