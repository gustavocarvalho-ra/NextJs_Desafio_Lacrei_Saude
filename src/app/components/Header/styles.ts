import styled from "styled-components"

export const MainHeader = styled.div `
  max-width: 100vw;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5.5rem 0 5.5rem;

  h2 {
    color: var(--primary-color);
    font-weight: 700;

    span {
      font-weight: 900;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      
      width: 8rem;
      height: 3rem;
      font-weight: 900;
      border-radius: .5em;
      color: blue;
      border: none;
      transition: all .7s;

      button {
        color: var(--primary-color);
        font-size: 1.2rem;
        font-weight: 700;
        cursor: pointer;
        background: transparent;
        border: none;
        width: 100%;
        height: 100%;
        transition: all .7s;

          &:hover {
          background: var(--secondary-color);
        }
      }
    }

    .log {
      background: var(--primary-color);
      color: #fff;
      
      &:hover {
        background: #007756;
      }
    }
  }
`