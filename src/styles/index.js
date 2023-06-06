import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 895px;
  background: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .title {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: #32a852;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  padding: 8px 24px;
  width: 224px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #333333;

  &::placeholder {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Button = styled.button`
  width: 112px;
  height: 50px;
  background: #32a852;
  border-radius: 10px;
  border: none;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const Item = styled.li`
  padding: 13px 10px 13px 24px;
  width: 354px;
  min-height: 50px;
  background: ${(props) => (props.checked ? "#f8f8f8" : "#ffffff")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: ${(props) => (props.checked ? "line-through" : "none")};
    color: ${(props) => (props.checked ? "#999999" : "#333333")};

    width: 80%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }

  i {
    font-size: 24px;
    color: ${(props) => (props.checked ? "#999999" : "#333333")};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-direction: row-reverse;
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
`;

export const SuccessMessage = styled.p`
  color: #32a852;
  font-size: 14px;
  margin-top: 5px;
`;
