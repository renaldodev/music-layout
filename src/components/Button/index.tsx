import styled from 'styled-components';

export default styled.div`
   outline:0;
   width:100%;
   padding:8px;
   border-radius:4px;
   background:inherit;
   color:#fff;
   border:0;

   &:hover, &.active{
     cursor: pointer;
     background:rgba(0,0,0,.4)
   }
`;
