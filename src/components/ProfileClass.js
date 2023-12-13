import React from "react";
import userContext from "../utils/UseContext";
import { useContext } from "react";


class Profile extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     count: 0,
        //     count2: 0
        // }
        this.state={
            userinfo:{
            name:"DummyName",
            location:"Dummy Location"
            }
          }
    console.log("child - constr"+ this.props.name)

    }


    async componentDidMount(){
        // since calling an api we are making this function async.
    // const data = await fetch("https://api.github.com/users/fagoon1311")
    // const json = await data.json()
    // console.log(json)
    // this.setState({
    //   userinfo: json
    // })
    // to put this data in ui we will make a sstate
    this.timer = setInterval(()=>{
        console.log("Hi Fagoon ")
    }, 1000)
    console.log("child- cdm"+ this.props.name)

    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Componenet will unmount")
 
    }

    render(){
    console.log("child - render"+ this.props.name)

        return (
            <div>
                <h1>Profile class component</h1>
                <img src={this.state.userinfo.avatar_url}></img>
                <h2>Name: {this.state.userinfo.name}</h2>
                <h2>Location: {this.state.userinfo.location}</h2>
                <h3>Bio: {this.state.userinfo.bio}</h3>
                {/* <h3>Count:{this.state.count}</h3>
                <h3>Count2:{this.state.count2}</h3>
                <button onClick={()=>{this.setState({
                    count:1,
                    count2:2
                    })
                    }}>setcount</button> */}
        </div>
        
        )
    }   





}

export default Profile;