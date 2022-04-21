import styled from "styled-components";

const Div = styled.div`
  width: 400px;
  border: 1px solid black;
  padding: 5px;
  margin: auto;
  display: flex;
  background-color: ${(props) =>
    props.theme === "Light" ? "#FAF5E4" : "black"};
`;


export { Div };
