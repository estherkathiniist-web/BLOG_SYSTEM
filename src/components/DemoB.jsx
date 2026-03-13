import React, { Component } from 'react'

class DemoB extends Component {
 constructor(props){
    super(props)

    this.state = {

    }
    console.log("constructor method Demo B")
 }
 //Mounting Phase
 static getDerivedStateFromProps(state,props){
    console.log("getDerivedStateFromProp in Demo B")
    return null

 }
 componentDidMount(){
    console.log("componentDidMount in Demo B")
 }

 //Update phase
 shouldComponentUpdate(state, props){
    console.log("shouldComponentUpdate in Demo B")
    return true
 }

 getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate in Demo B")
 }
 
 componentDidUpdate(){
    console.log("componentDidUpdate in Demo B")
 }
 //Mounting phase
 componentWillUnmount(){
    console.log("componentWillUnmount in Demo A")
 }


 render(){
    console.log("Render method in Demo B")
    return(
        <div>
            <h1>TEST CLASS COMPONENT IN DEMO B</h1>
        </div>
    )
 }
}
export default DemoB;
