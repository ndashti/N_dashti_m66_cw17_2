import React, { Component } from "react";

export default class TodoItem extends Component{

    render(){
        return(
                <li style={{'background-color':'pink',color:'black',display:'flex',justifyContent:'space-between',width:'300px',margin:'auto'}}>
                    <div style={{justifyContent:'flex-start'}}>
                    <span style={{margin:'0 5px 0 0'}}>{this.props.index}</span>
                    {this.props.title}
                    </div>

                    <div style={{justifyContent:'flex-end'}}>
                        <button onClick={this.props.remove}>X</button>
                        <button onClick={this.props.doneTodo}>Done</button>
                    </div>

                </li>
        )
    }
}