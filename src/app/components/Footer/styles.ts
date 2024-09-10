import styled from "styled-components"

export const MainFooter = styled.div`
  max-width: 100vw;
  height: 14em;
  display: flex;
  justify-content: center;

  .container {
    width: 70%;
    display: flex;
    justify-content: center;
    gap: 10rem;

    .fot {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .test {
      text-decoration: none;
    }
  }
`