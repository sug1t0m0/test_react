import styled from "styled-components";

export const FlexOuter = styled.div`
  background-color: #fefcf0;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexInner = styled.div`
  width: ${props => (props.innerWidth ? props.innerWidth : "100%")};
`;
