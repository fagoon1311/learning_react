import { useEffect, useState } from "react"
const Profile = (props) => {
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Hi from fn based cmp")
        }, 1000)
        console.log("Useeffecet")
        return()=>{
            clearInterval(timer)
            console.log("Use effect retrurn")
        }
    },[])
    console.log("Render")
    return(
        <div>
            <h2>Profile Function page</h2>
            <h3>Name: {props.name}</h3>
            <h3>Count: {count}</h3>
            <h3>Count2:{count2}</h3>
            <button onClick={()=>{
                setCount(1)
                setCount2(2)
                }}>SetCount</button>
        </div>
    )

}

export default Profile