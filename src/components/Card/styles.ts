import styled from 'styled-components';
import { IProps } from './index';

export const Container = styled.div<IProps>`
  height: 310px;
  background: ${(props) => (props?.src ? `url(${props.src})` : 'pink')};

  background-size: cover;
  border-radius: 13px;
  position: relative;
`;

export const TextInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  padding: 20px 0;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
    background: rgba(255, 255, 255, 0.5);
    filter:blur(0.5px);
  }
`;
