import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
`;

export const Item=styled.div`
    padding:0 8px;
    & + div{
      margin-top:3px;
    }

`
export const Title=styled.span`
  font-size:12px;
  color:var(--gray);
  padding-left:8px;
  margin-bottom:5px;
`