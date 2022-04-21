import { Card } from "antd";
import { Div } from "./Informationstyler";
import { Switch } from 'antd';
import { useState } from "react";

export const Information = () => {

    const [theme,setTheme] = useState("Light")
  return (
    <Div theme={theme}>
      <div style = {{
          width:"320px",
        //   border: "1px solid black"
      }}>
        <Card
         // title="Default size card"
          //={<a href="#">More</a>}
          style={{ width: 300 , background:`${theme==="Light"?"#FAF5E4":"black"}`,color:`${theme==="Light"?"black":"white"}`,border:`${theme==="Light"?"1px solid black":"1px solid white"}`}}
        >
          <p>Card 1</p>
          <p>Positive anything is better than negative nothing.</p>
          <p>Miracles happen to those who believe in them.</p>
        </Card>
        <Card
          size="small"
         // title="Small size card"
          //extra={<a href="#">More</a>}
          style={{ width: 300 , background:`${theme==="Light"?"#FAF5E4":"black"}`,color:`${theme==="Light"?"black":"white"}`,border:`${theme==="Light"?"1px solid black":"1px solid white"}`}}
        >
          <p>Card 2</p>
          <p>One small positive thought can change your whole day.</p>
          <p>Be positive. Be true. Be kind.</p>
        </Card>
        <Card
          size="small"
          //title="Small size card"
         // extra={<a href="#">More</a>}
         style={{ width: 300 , background:`${theme==="Light"?"#FAF5E4":"black"}`,color:`${theme==="Light"?"black":"white"}`,border:`${theme==="Light"?"1px solid black":"1px solid white"}`}}
        >
          <p>Card 3</p>
          <p>If you are positive, you'll see opportunities instead of obstacles.</p>
          <p>All our dreams can come true, if we have the courage to pursue them</p>
        </Card>
      </div>
      <div  style = {{
          width:"50px",
        //   border: "1px solid black"
      }}>
      <Switch onClick={()=>{
          setTheme(theme==="Light"?"Dark":"Light")
      }}/>
      </div>
    </Div>
  );
};
