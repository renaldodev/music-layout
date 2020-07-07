import styled from "styled-components";

export const Container = styled.div`
  max-width:1300px;
  width:1300px;
  height:100vh;
  display: grid;
  grid-template-columns: 220px auto;
  position:relative;
  overflow: hidden;
  grid-template-areas:
    "LB CC"
    "LB CC"
    "LB CC";

    &::before {
    --offset: 50px;

    content: "";
    position: absolute;
    top: calc(-1 * var(--offset));
    left: calc(-1 * var(--offset));
    right: calc(-1 * var(--offset));
    bottom: calc(-1 * var(--offset));
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
    filter: blur(var(--offset));
    background: inherit;
    z-index:-1;
  }
  * >{
    position: relative;
  }
`;
