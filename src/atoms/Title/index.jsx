import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${props => (props.fontSize ? props.fontSize : 22)}px;

  font-family: "M PLUS Rounded 1c";
  font-weight: ${props => (props.isBold ? 800 : 300)};
`;
