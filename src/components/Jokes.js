function Jokes(props){
    return(
        <div>
            {/* <h3>{ (props.que!=null) ?  `Question : ${props.que}` : ""}</h3> */}
            <h3 style={{display: (props.question!=null) ? "block" : "none"}}>Question: {props.question}</h3>
            <h3 style={{color: (props.question==null) ? "gray" : "black"}}>Answer: {props.punchLine}</h3>
            <br />
        </div>
    )
}

export default Jokes