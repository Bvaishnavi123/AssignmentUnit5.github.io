
import{useState,useEffect} from "react"
import "./showdata.css"
export const ShowData = ()=>{
    const [data,setdata] = useState([])

const getData = async()=>{
        const res = await fetch("http://localhost:8080/posts").then((d)=>d.json())
        setdata(res)
     }
     useEffect(() => {
         getData()
     },[])
     
    return (
       <div>
           {data.map((e)=>{
              return <table>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Department</th>
              </tr>
              <tr>
                <td>{e.name}</td>
                <td>{e.address}</td>
                <td>{e.Department}</td>
              </tr>
            </table>
           })}
       </div>
    )
}





export   const getData = async()=>{
    const res = await fetch("http://localhost:8080/posts").then((d)=>d.json())
    setdata(res)
 }
