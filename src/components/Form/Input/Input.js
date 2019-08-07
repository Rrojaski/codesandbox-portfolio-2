import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: ${props => (props.largeText ? "100px" : "40px")};
  margin-bottom: ${props => (props.noMargin ? "0" : "10px")};
  padding: 0 10px !important;
  height: ${props => (props.largeText ? "180px" : "40px")};
  background: ${(props) => (props.backColor)};
  color: ${(props) => (props.color)};
  border: none;
  cursor: ${(props) => (props.pointer ? 'pointer' : 'auto')};
  border-radius: 2px;
`;

export default Input;
