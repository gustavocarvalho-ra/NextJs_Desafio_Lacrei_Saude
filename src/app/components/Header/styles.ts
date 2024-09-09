import styled from "styled-components"

export const MainHeader = styled.div `
  max-width: 100vw;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 4em 0 4em;

  h2 {
    color: var(--primary-color);
  
    span {
      font-weight: 900;
    }
  }
`