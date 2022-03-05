// import './button.scss';

import React,{Component} from "react";

class Button extends Component{ 
    render(){
        return(
            <button className='btn-primary' onClick={this.props.clickHandler}>{this.props.title}</button>
        )
    }
}

export default Button 

