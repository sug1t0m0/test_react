import React from "react";

import { Text } from "../../atoms/Text/";
import { Title } from "../../atoms/Title/";
import { SubTitle } from "../../atoms/SubTitle/";
import { FlexOuter, FlexInner } from "./element";

export const ParagraphWithCenteredElements = props => {
  return (
    <FlexOuter>
      <FlexInner innerWidth={props.innerWidth}>
        <Title gapHeight={props.gapHeight} isBold={true}>
          {props.title}
        </Title>
        <SubTitle gapHeight={props.gapHeight} isBold={true}>
          {props.subTitle}
        </SubTitle>
        {props.body
          .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
          .split("\n")
          .filter(str => str.length !== 0)
          .map((str, i) => {
            return <Text key={i}>{str}</Text>;
          })}
      </FlexInner>
    </FlexOuter>
  );
};
