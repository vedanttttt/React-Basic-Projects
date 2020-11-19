import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            text: "This is State",
            isLoggedIn: false,
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState((prevState)=>{
            return{
                count: prevState.count+1
        }
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.text}</h2>
                <Child text={this.state.text} />
                <h1>You are currently logged {(this.state.isLoggedIn) ? "in" : "out"}</h1>
                <button onClick={()=> console.log("I was clicked")} >Click Me</button>

                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click to add</button>
            </div>
        )
    }
}

class Child extends React.Component{
    render(){
        return(
        <h3>{this.props.text}</h3>
        )
    }
}

export default App