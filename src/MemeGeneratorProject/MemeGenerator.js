import React,{Component} from 'react'

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
        .then(response=> response.json())
        .then((data)=>{
            this.setState({
                allMemeImgs : data.data.memes
            })
           // console.log(this.state.allMemeImgs[0])
        })
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event)=>{
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        var randNum = Math.floor( Math.random() * this.state.allMemeImgs.length );
        var randMemeImg = this.state.allMemeImgs[randNum];
        this.setState({
            randomImg : randMemeImg.url
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>

                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <br />

                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator