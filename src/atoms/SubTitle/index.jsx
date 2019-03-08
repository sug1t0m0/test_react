import styled from "styled-components";

export const SubTitle = styled.h3`
  font-size: ${props => (props.fontSize ? props.fontSize : 20)}px;

  font-family: "M PLUS Rounded 1c";
  font-weight: ${props => (props.isBold ? 800 : 300)};
`;
