import styled from "styled-components";

const SelectInput = styled.select`
  width: 100%;
  height: 40px;
  background: white;
  font-size: 14px;
  border: 1px solid #F0F0F0;
  margin-left: 10px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  background-color: #F0F0F0;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export { SelectInput };
