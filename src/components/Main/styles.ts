import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 30px;
  &::-webkit-scrollbar {
    width: 9px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.7);
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 1);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

export const Header = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const Title = styled.h1`
  font-size: 2.7em;
  font-weight: bolder;
`;
export const ListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  & + div {
    margin-top: 30px;
  }
`;
