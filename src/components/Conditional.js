function Conditional(props){

    // if(props.isLoading)
    // return <h1>Loading...</h1>
    // else
    // return <h1>This is cool</h1>
    return(
        <h1>{props.isLoading ? "Loading.." : "This is cool"}</h1>
    )
}

export default Conditional