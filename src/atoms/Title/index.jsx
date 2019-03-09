import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${props => (props.fontSize ? props.fontSize : 26)}px;
  font-family: "M PLUS Rounded 1c";
  font-weight: ${props => (props.isBold ? 800 : 300)};
  text-align: center;
  margin-top: 0px;
  margin-bottom: ${props => (props.gapHeight ? props.gapHeight : 0)}px;
`;
