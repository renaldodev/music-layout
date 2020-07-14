import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 10px;
  position: relative;
  > div + div {
    margin-top: 30px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index:-1;
  }
`;
