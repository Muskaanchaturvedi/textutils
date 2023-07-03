import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#042743"
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light Mode has been enabled","success") ;  
    }
  }

  //nested routing
  //shoutout to yourself, you did it all by yourself
  const rou = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
            <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-3">
            <Outlet/>
            </div>
        </div>
      ),
      children: [
        { index: true, 
          element:<Textform showAlert={showAlert} heading=" TextUtils - WordCounter, CharacterCounter, Remove Extra Spaces " mode={mode} /> 
        },
        
        { path: '/about',
         element:<About mode={mode}/>},

      ],
    }
  ]);
  
  return (
    <>
      <RouterProvider router={rou} />
    </>
  );
}

export default App;
