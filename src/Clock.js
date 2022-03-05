import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            time :new Date()
        }
    }

    tick =() => {
        this.setState({
            time :new Date()
        })
    }

    componentDidMount(){
        this.timerId = setInterval(() => this.tick(),1000)
    }

    componentWillUnmount(){
        // clearInterval(this.interval)
        this.timerId.clearInterval();
    }

  render() {
    return (
      <div>
          {this.state.time.toLocaleTimeString()}
      </div>
    )
  }
}
