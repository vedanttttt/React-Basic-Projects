import MyInfo from './components/MyInfo'
import Footer from './components/Footer'
import MainComponent from './components/MainComponent'
import Header from './components/Header'
import Props from './components/Props'
import Joke from './components/Joke'
import Products from './components/Products'
import StatePract from './components/States'
import CondRendering from './components/CondRendering'

function App(){
    return(
        <div>
            <Header />
            <CondRendering />
            <Props />
            <StatePract />
            <Joke />
            <Products />
            <MainComponent />
            <MyInfo />
            <Footer />
        </div>
    )
}

export default App