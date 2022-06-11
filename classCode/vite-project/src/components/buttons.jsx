// export const Button = ({children,onClick})=>{
//    return <button onClick={onClick}>{children}</button>
// }
import styled from 'styled-components';

const Button = styled.button`
  background-color :${(props)=>props.theme ==="dark" ?"red":"yellow"};
  color : ${(props)=>props.theme ==="dark" ?"yellow":"red"};
  padding : 10px;
  margin : 10px;
  text-decoration : none;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }
`;




export {Button}