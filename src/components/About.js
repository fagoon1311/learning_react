import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass'
import ProfileFunctionalComponent from './Profile'
import userContext from '../utils/UseContext'
import { useContext } from 'react'

// const About2 = () => {
//   return (
//     <div>
//         <h1>About us page</h1>
//         <p>Ye hai humara app...</p>
//         <Profile name={"Fagoon"}/>
//         <ProfileFunctionalComponent name={"Fagoon Sharma"}/>

//     </div>
//   )
// }

class About extends React.Component{
  constructor(props){
    super(props)
   
    //console.log("parent - constr")
    

  }

  componentDidMount(){
    
    //console.log("parent - CDM")

  }
  render(){
    //console.log("parent - render")
    return (
      <div>
          <userContext.Consumer >
          {({user})=> <h4>z{user.name}-{user.email}</h4>}

          </userContext.Consumer>
          <h1>About us page</h1>
          <p>Ye hai humara app...</p>
          {/* <Profile name={"Fagoon "}/> */}
          
          <ProfileFunctionalComponent name={"Fagoon Sharma"}/>
  
      </div>
    )
  }
}
export default About