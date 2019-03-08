import styled from "styled-components";

export const Text = styled.p`
  font-size: ${props => (props.fontSize ? props.fontSize : 16)}px;

  font-family: "M PLUS Rounded 1c";
  font-weight: ${props => (props.isBold ? 800 : 300)};
`;
