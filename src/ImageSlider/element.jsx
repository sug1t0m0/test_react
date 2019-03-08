import styled from "styled-components";

export const ButtonsOuter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  width: 50%;
  background-color: #fff;
  justify-content: space-around;
`;

export const Button = styled.div`
  width: 10px;
  height: 10px;
  background: #f5f0f5;
  border: 3px solid #d0a9f5;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    background: #f0d9ff;
  }
`;

export const Img = styled.img`
  width: 94%;
  margin: auto;
`;

export const ImgOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SlideOuter = styled.div`
  margin: auto;
  width: 100%;
  font-size: 28px;
`;
