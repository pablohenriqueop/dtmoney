import styled from "styled-components";

export const Container = styled.section`
  margin-top: 3rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 400;
      color: var(--text-body);
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1.5rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

      &:first-child {
        color: var(--text-title);
      }
    }
  }
`;
