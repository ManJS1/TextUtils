import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = '#2f3036';
      showAlert("Dark Mode has been Enabled","success");
      // document.title = "TextUtils-DarkMode";
    }
    else{setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
      // document.title = "TextUtils-LightMode"
    }
  }
  return (
    <div>
        {/* <Navbar title="TextUtils" abouttext="About TextUtils"/> */}
        {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about"  element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode}/>}/>
         </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode}/>
        </div>
        {/* </Router> */}
    </div>
  );
}

export default App;
