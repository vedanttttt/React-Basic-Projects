import Jokes from './Jokes'
import jokesData from '../jokesData'

function Joke(){

    const jokeComponents = jokesData.map((joke) => {
        return (
            <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />
        )
    })

    return(
        <div>
            {jokeComponents}
        </div>
    )
}

export default Joke