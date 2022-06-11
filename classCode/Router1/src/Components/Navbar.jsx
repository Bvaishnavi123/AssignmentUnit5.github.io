import { Link } from "react-router-dom"

export const Navbar = ()=>{
    const data = [
       {path: '/',title: 'Home'},
       {path:"/about",title: 'About'},
       {path:"/user",title: 'User'}
    ]
    return (<div>
    {data.map((e,i)=>{
        return <Link to={e.path} key={i}>{e.title}</Link>
    })}</div>
    )
}