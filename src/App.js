import MyInfo from './components/MyInfo'
import Footer from './components/Footer'
import TodoListProject from './components/MainComponent'
import Header from './components/Header'
import Props from './components/Props'
import Joke from './components/Joke'
import Products from './components/Products'
import StatePract from './components/States'
import CondRendering from './components/CondRendering'
import Fetch from './components/Fetch'
import Form from './components/Form'
import FormContainer from './components/FormPracticeContainer'
import MemeGeneratorProject from './MemeGeneratorProject/App'

function App(){
    return(
        <div>
            {/* <Header />
            <FormContainer />
            <Form />
            <Fetch />
            <CondRendering />
            <Props />
            <StatePract />
            <Joke />
            <Products />
            <MyInfo />
            <Footer /> */}

            <MemeGeneratorProject />
            <br />
            <br />
            <br />
            <TodoListProject />
        </div>
    )
}

export default App