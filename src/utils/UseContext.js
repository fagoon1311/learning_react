import { createContext } from "react";

const userContext = createContext({
    user:{
    name: "dummy name",
    email: "dummyemail@gmail.com" 
    }
})

export default userContext