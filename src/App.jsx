import Router from './Router'
import './App.css'
import { Toaster } from 'react-hot-toast';
// import { HashRouter } from 'react-router-dom'


function App() {

  return (
    <>
        {/* <HashRouter> */}
          <Toaster/>
          <Router/>
        {/* </HashRouter> */}
    </>
  );
}

export default App
