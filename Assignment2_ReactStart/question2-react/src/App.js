import logo from './logo.svg';
import './App.css';

function App() {
  const linksGiven =["Service","Project","About"]
  return (
    <div className="App">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHelOmQPNYuEM3urLi6MWhhxoUL9GuGW9mCA&usqp=CAU" id="logo"></img>
       <div className="linkcontent">
       {linksGiven.map((e)=>{
        //  console.log(e)
         return <Link link = {e}/>
       })}
       </div>
       
      <button id="buttn">Contact</button>


       

    </div>
  );
}
function Link(promp){
  return <p>{promp.link}</p>
}

export default App;
