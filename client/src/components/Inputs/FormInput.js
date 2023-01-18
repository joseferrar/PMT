import styled from "styled-components";

const Input = styled.input`
  height: 40px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #F0F0F0;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  background-color: #F0F0F0;
//   :focus {
//     border-color: pink;
//     box-shadow: 0 0 8px 0 pink;
//   }
`;

const StyledInput = styled.div`
  position: relative;
  & > svg {
    position: absolute;
    left: 0;
    top: 8px;
    padding: 9px 8px;
    fill: black;
    transition: 0.3s;
  }

  input:focus + svg {
    fill: dodgerBlue;
  }
  button {
    position: absolute;
    right: 0;
    top: 8px;
    top: 0;
    background-color: transparent;
    top: 16px;
    border: none;
  }

  &.inputWithIcon {
    position: relative;
  }
`;

export { StyledInput, Input };
