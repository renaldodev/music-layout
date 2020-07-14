import styled from 'styled-components';
import Button from '../Button';

export const Container = styled(Button)`
   display:flex;
   align-items:center;
`;


export const Icon=styled.div`
  > svg{
    width:21px;
    height:21px;
    fill:#fff;
  }
  margin-right:20px;
`
export const Text=styled.div`
   > *{
     font-size:14px;
   }
`