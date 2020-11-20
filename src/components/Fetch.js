import React,{Component} from 'react'

class Fetch extends Component{
    constructor(){
        super()
        this.state={
            loading: false,
            character: {}
        }
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        fetch("https://swapi.dev/api/people/1/")
            .then(response=> response.json())
            .then(data => {
                this.setState({
                    character: data,
                    loading: false
                })
                console.log(this.state.character)
            });
    }

    render(){
        return(
            <div>
                {this.state.loading ? "Loading.." : this.state.character.name}
            </div>
        )
    }
}

export default Fetch