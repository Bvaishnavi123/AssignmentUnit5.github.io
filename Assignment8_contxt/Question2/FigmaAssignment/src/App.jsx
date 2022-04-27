import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {Drawer} from "./Components/sideDrawer"
import {Div} from "./Components/div"
import { Switch } from '@chakra-ui/react'

function App() {
 const [theme,settheme] = useState(false)
  return (
    
    <div className="App">
      <Div theme={theme}>
      <h1 style={{marginRight:"10px"}}>My Dashboard</h1>
      <Switch colorScheme='teal' size='lg' onChange={()=>{
        return settheme(!theme);
      }}/>
      </Div>
      <Drawer></Drawer>
    </div>
  )
}

export default App
