import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
  padding: 2rem 0 12rem 0;
`;

export const Content = styled.div`
  max-width: 1140px;
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--light-blue);
    padding: 0.6rem 2rem;
    border: none;
    display: inline-block;
    border-radius: var(--border-radius);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
