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

  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: 480px 200px;
      justify-content: space-between;
    }
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
