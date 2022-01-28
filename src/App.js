import './style.css'
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
      <Routes/>
      <ToastContainer position='top-center' autoClose={3000}/>
    </div>
  );
}

export default App;
