import styled from "styled-components"

const Div = styled.div`

background-color:${(props)=>props.theme===true?"black":"white"};
color: white;
width:90%;
//height:700px;
margin: auto;
margin-top:10px;
display: flex;
padding: 10px;
padding-bottom:20px;



`
export {Div}