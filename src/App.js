import Modal from 'react-modal';
import Calendar from './components/Calendar';
import './App.css'

Modal.setAppElement('#root');


function App() {
  return(
    <>
    {/* <div style={{ width:'40%' , height:'35%'}}> */}
    <Calendar/>
    {/* </div> */}
    </>
  )
}

export default App;
