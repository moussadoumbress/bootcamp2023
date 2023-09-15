import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Homepage from "./components/Homepage";
import Register from "./components/Register"
function App() {

  const [user, setUser] = useState([])

  useEffect(() => {
    fetch(" https://freefakeapi.io/api#collection_posts")
      .then(res => 
        res.json()
      )
      .then(data => {
        console.log(data, "DATA");
        setUser(data.user);
      })
      .catch(err => console.log(err))
  }, []);
  
  return  (
    <div className="App">
      <Homepage/>
      <Register/>
    
    </div>
  );

}

export default App;
