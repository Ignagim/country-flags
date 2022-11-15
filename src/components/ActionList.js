import styled from "styled-components";
import { Region as FilterByRegion } from "./Region";
import Search from "./Search";
import Wrapper from "./Wrapper";

const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }
`;

function ActionList() {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <FilterByRegion />
        </div>
      </Wrapper>
    </ActionListStyled>
  );
}

export default ActionList;
