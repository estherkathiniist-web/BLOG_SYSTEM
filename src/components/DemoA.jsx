import React, { Component } from 'react'

class DemoA extends Component {
 constructor(props){
    super(props)

    this.state = {
        name:"Essy"

    }
    console.log("constructor method Demo A")
 }
 //Mounting Phase
 static getDerivedStateFromProps(state,props){
    console.log("getDerivedStateFromProp in Demo A")
    return null

 }
 componentDidMount(){
    console.log("componentDidMount in Demo A")
 }
 //Update phase
 shouldComponentUpdate(state, props){
    console.log("shouldComponentUpdate in Demo A")
    return true
 }

 getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate in Demo A")
 }
 
 componentDidUpdate(){
    console.log("componentDidUpdate in Demo A")

    changeState = () =>{
        this.setState({
            name:"Esther"
        })
    }
 }
 //Mounting phase
 componentWillUnmount(){
    console.log("componentWillUnmount in Demo A")
 }

 render(){
    console.log("Render method in Demo A")
    return(
        <div>
            <h1>TEST CLASS COMPONENT</h1>
            <button onClick={this.changeState}>Change State</button>
            <DemoB/>
        </div>
    )
 }
}
export default DemoA;
