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
import StateHooks from './components/StateHooks'
import UseEffectHooks from './components/UseEffectHooks'
import UseEffectHooks2 from './components/UseEffectHooks2'

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

            {/* <UseEffectHooks2 />
            <UseEffectHooks />
            <StateHooks /> */}

            <MemeGeneratorProject />
            <br />
            <br />
            <br />
            <TodoListProject />
        </div>
    )
}

export default App