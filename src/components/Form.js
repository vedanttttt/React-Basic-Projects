//Formik is react library for react forms

import React,{Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
            isFriend: true,
            gender: "",
            favGame: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target //destructuring
        type === "checkbox" ? this.setState({
            [name] : checked
        }) : this.setState({
            // [event.target.name] : event.target.value
            [name] : value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName"    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text"
                    value={this.state.lastName} name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <textarea
                onChange={this.handleChange}
                value={"Some default value"} />
                <br />
                <label>
                    <input 
                        type="checkbox"
                        name="isFriend"
                        checked={this.state.isFriend}
                        onChange={this.handleChange}
                        />
                    isFriendly ?
                </label>
                <br />
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                        />
                    Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                        />
                    Female
                </label>
                <br />
                <label>Favorite Game: </label>
                <select 
                value={this.state.favGame} name="favGame"
                onChange={this.handleChange}>
                    <option>Football</option>
                    <option>Cricket</option>
                    <option>Hockey</option>
                </select>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h1>{this.state.gender.length>0 && `You are a ${this.state.gender}`}</h1>
                <h1>{this.state.favGame.length>0 && `You like to play ${this.state.favGame}`}</h1>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form