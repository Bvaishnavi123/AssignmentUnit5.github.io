import styled from "styled-components";

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  border-radius:6px;
  border : 0px;
  background-color: ${(props)=>props.change==="first"?"white":"#9575cd"};
  color:${(props)=>props.change==="first"?"black":"white"};
   
  &:nth-child(1) {
    background-color: #2064eb;
    color: white;
  }
  &:nth-child(2) {
      border : 1px solid grey;
  }
  &:nth-child(3) {
      border : 1px dashed grey;
  }
  &:nth-child(5) {
      color: #2c93e1;
      background-color: white;
  }
`;

export { Button };
