import React,{Component} from 'react'
import Conditional from './Conditional'

class CondRendering extends Component{
    constructor(){
        super()
        this.state={
            isLoading: true,
            unReadMessages: [
                "Hi",
                "Nai"
            ],
            loggedIn: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading: false
            })
        },1500)
    }

    handleClick(){
        this.setState((prevState)=>{
            return{
            loggedIn : !prevState.loggedIn
        }
        })
    }

    render(){
        return(
            <div>
                {this.state.unReadMessages.length>0 && <h1>You have {this.state.unReadMessages.length} unread messages.</h1>}
                
                <h2>{this.state.loggedIn ? "Logged In" : "Logged Out"}</h2>
                <button onClick={this.handleClick}>{this.state.loggedIn ? "Log Out" : "Log In"}</button>

                <Conditional isLoading={this.state.isLoading} />
            </div>
        )
    }
}

export default CondRendering