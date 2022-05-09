
import logo from './logo.svg'
import './App.css'
import { Route, Routes} from "react-router-dom"
import { Home } from './components/home/Home'
function App() {
  return <>
    <div className='App'>

      <Routes>

        <Route path="/" element={<Home></Home>}> </Route>
        {/* <Route path="/:title" element={<SinglePage></SinglePage>}> </Route> */}
        
      </Routes>


    </div>
  </>

}

export default App
//0d5c533e390b465b871030f8f9e94c34