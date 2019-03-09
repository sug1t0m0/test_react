import styled from "styled-components";

export const Text = styled.p`
  font-size: ${props => (props.fontSize ? props.fontSize : 17)}px;
  font-family: "M PLUS Rounded 1c";
  font-weight: ${props => (props.isBold ? 800 : 300)};
  margin 0;
`;
