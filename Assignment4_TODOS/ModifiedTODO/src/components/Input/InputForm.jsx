import {useState} from "react"

export  const InputForm = (props)=>{
    const [text,setText] = useState("")
    const submitHandler =(event)=>{
        event.preventDefault()
        props.onAddItem(text)
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter Your Todo" onChange={(e)=>{
                //console.log(e.target.value)
                setText(e.target.value)
            }}/>
            <input type="submit" value="Submit" />
        </form>
    )
}