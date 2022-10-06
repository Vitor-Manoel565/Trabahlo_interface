import styled from "styled-components";

export const containerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
`;

export const logo = styled.img`
  width: 150px;
  height: 150px;
`;

export const title = styled.h1`
  font-family: var(--font-titles);
  color: var(--primary-color);
  letter-spacing: 1px;
  width: 100%;
  font-size: 45px;
`;

export const subtitle = styled.figcaption`
  font-family: var(--font-text);
  font-weight: 200;
  font-size: 25px;
  color: var(--second-color);
`;

export const containerTitles = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10%;
`;
