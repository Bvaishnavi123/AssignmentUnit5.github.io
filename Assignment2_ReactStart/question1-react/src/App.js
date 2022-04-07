import logo from './logo.svg';
import './App.css';

function App() {
  const MOS =["Android","Blackberry","iphone","Windows Phone"]
  const MM = ["Samsung","HTC","Apple","Micromax"]
  return (
    <div className="App">
       <h1>Mobile Operating system</h1>
       {MOS.map((e)=>{
         return <System system={e}/>
       })}
       <h1>Mobile Manufactures</h1>
       {MM.map((e)=>{
          return <System system = {e}/>
       })}
    </div>
  );
}

function System(prop){
  return <ul><li>{prop.system}</li></ul>
}

export default App;
