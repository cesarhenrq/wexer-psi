import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'card-container container container container'
    'card-container content content content';
`;

export const CardContainer = styled.div`
  grid-area: card-container;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 100%;
`;

export const Container = styled.div`
  grid-area: container;
`;

export const Content = styled.div`
  grid-area: content;
`;
