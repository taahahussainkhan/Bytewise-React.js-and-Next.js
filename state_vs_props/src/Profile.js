import React from "react";
export default class Profile  extends React.Component {
    constructor(){
        super();
        this.state={
            name:'',
            email:''
        }
    }
    updateState(){
        this.setState({
            name:'Taaha Hussain Khan',
            email:'taaha128@gmail.com',
            age:'21'
        })
    }
    revertState(){
        this.setState({
            name:'',
            email:'',
            age:''
        })
    }
    render(props) {
        return (
             <div>
                
                <h1>----S T A T E       P R A C T I C E ----</h1>
                <h4>
                    Name: {this.state.name}
                </h4>
                <h6>
                    Email: {this.state.email}
                </h6>
                <h6>
                    Age: {this.state.age}
                </h6>
                <button onClick={()=>{
                    this.updateState()
                }}>Update</button>

                <button onClick={()=>{
                    this.revertState()
                }}>Revert</button>
             </div>
       
        );
    }
}