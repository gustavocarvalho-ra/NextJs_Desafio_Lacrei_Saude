import styled from "styled-components"

export const MainHeader = styled.div `
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: var(--primary-color);
  
    span {
      font-weight: 800;
    }
  }
`