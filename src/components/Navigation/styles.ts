import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const NavigationItem = styled.li`
  width: 100%;
  height: 35px;

  &:not(:last-child) {
    margin-bottom: 1px;
  }
`;

export const NavigationLink = styled.a.attrs({href:"#0"})`
  width: 100%;
  display: block;
  padding: 6px 8px;
  text-decoration: none;
  color:#fff;
  font-size:18px;
  border-radius:4px;
  transition:background-color 300ms;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
