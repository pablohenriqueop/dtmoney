import styled from "styled-components";

type BoxProps = {
  hightlight?: string;
};

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  position: relative;
  transform: translateY(-50%);

  @media (max-width: 720px) {
    margin-top: 3rem;
    transform: none;
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  background-color: var(--shape);
  border-radius: var(--border-radius);
  padding: 1.6rem 2rem;
  color: var(--text-title);
`;

export const BoxTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Value = styled.h4`
  font-size: 2.1rem;
  margin-top: 0.2rem;
`;

export const BoxTitle = styled.span``;

export const BoxTitleIcon = styled.img``;
