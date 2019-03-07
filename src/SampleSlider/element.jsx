import styled from "styled-components";

export const Text = styled.p`
  height: 30px;
  text-align: center;
`;

export const SlideOuter = styled.div`
  margin: auto;
  width: 100%;
  font-size: 28px;
`;

export const Outer = styled.div`
  background: #f6f6f6;
  display: flex;
  padding: 5px 5px;
  justify-content: center;
  align-items: center;
`;

export const PrevButton = styled.button`
  position: absolute;
  width: 35px;
  height: 35px;
  text-indent: -9999px;
  background-repeat: no-repeat;
  background: #d0a9f5;
  transform: rotate(90deg);
  z-index: 3;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  &::after {
    transform: translateX(-50%) translateX(-2px) translateY(-50%);
    border-width: 9px 12px 9px 0;
    border-color: transparent #fff transparent transparent;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const NextButton = styled.button`
  position: absolute;
  width: 35px;
  height: 35px;
  text-indent: -9999px;
  background-repeat: no-repeat;
  background: #d0a9f5;
  z-index: 4;
  transform: translateY(-35px) rotate(-90deg);
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  &::after {
    transform: translateX(-50%) translateX(-2px) translateY(-50%);
    border-width: 9px 12px 9px 0;
    border-color: transparent #fff transparent transparent;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 4;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
  }
  &:hover {
    cursor: pointer;
  }
`;
