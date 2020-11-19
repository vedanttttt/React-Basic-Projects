function MyInfo(){
    const firstname = "Vedant";
    const lastname = "Agarwal";
    const date = new Date();
    const hour = date.getHours();
    let timeOfDay
    var styles = {
        color: "green",
        backgroundColor: "yellow",
        fontSize: "100px"
    }

    if(hour<12){
        timeOfDay="morning"
        styles.backgroundColor="green"
    }
    else if(hour>=12 && hour<19){
        timeOfDay="evening"
        styles.backgroundColor="blue"
    }
    else
        timeOfDay="night"
    
    return(
        <div>
            <h1>Hello {`${firstname} ${lastname}`}</h1>
            <h4 style={styles}>Good {timeOfDay}</h4>
        <ul>
        <li>Hi</li>
        <li>Hey</li>
        <li>heyya</li>
        </ul>
        {/*we can only return 1 jsx component, like here we are returning ul , if there are more, you can use div tag */}
        <Child />
    </div>
    )
}

function Child(){
    return(
        <div>
            <h3>This is child component</h3>
        </div>
    )
}

export default MyInfo