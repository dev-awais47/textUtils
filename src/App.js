import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';


function App() {
  return (
    <>
      <Navbar title="TextUtils" homepage="Home" About="About us" />

      <div className='container my-3'>
        <TextArea heading="Enter your Text here.." />
      </div>
      
    </>
  );
}

export default App;
