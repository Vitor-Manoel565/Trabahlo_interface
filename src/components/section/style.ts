import styled from "styled-components";

export const paragraph = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5rem;
`;


export const containerSubscription = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const text = styled.p`
  font-family: var(--font-text);
  font-size: 30px;
  color: var(--second-color);
`;

export const valueSubscription = styled.span`
  color: var(--color-value);
  font-size: 30px;
  font-weight: bold;
`;

export const title = styled.h1`
  font-family: var(--font-titles);
  color: var(--primary-color);
  letter-spacing: 1px;
  width: 100%;
`;