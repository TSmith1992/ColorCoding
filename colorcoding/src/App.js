import './App.css';
import React,{ useState,useEffect } from "react"
import LoginPage from './Components/LoginPage';
import StatsPage from './Components/StatsPage';

function App() {
  const fetchAPI="http://localhost:3000/userList"
  const [userList, setUserList] =useState([])
  const [defaultLogin, setDefaultLogin] = useState({userName:"", profilePic:"", winArray:[] })

  useEffect(() => {
    fetch(fetchAPI)
    .then(r => r.json())
    .then(uList => setUserList(uList))
  }, [])

  //function to handle submission of new profile
  function handleSubmit(e){
    //upon submission, user can be redirected to game page
    //did not keep e.prevenDefault() because page would be redirected to gaming page anyway
    //e.preventDefault()
    fetch(fetchAPI, {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body : JSON.stringify(defaultLogin)
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }
  
  //function to create new profile
  function onAddNewUser(e){
    const name=e.target.name;
    let value=e.target.value;
    setDefaultLogin({...defaultLogin, [name]:value})
  }

  return (
    <div className="App">
      <LoginPage onAddNewUser={onAddNewUser} defaultLogin={defaultLogin} handleSubmit={handleSubmit}/>
      <StatsPage userList={userList}/>
    </div>
  );
}

export default App;
