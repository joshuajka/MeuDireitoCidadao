import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    max-width: 90%;
  }
`;