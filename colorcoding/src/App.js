import logo from './logo.svg';
import './App.css';
import React,{ useState,useEffect } from "react"
import LoginPage from './Components/LoginPage';
import StatsPage from './Components/StatsPage';

//Imported hooks from react-router dom and react. Created console.log of Fetch API request to
//possibly place in state variable. 

function App() {
  const fetchAPI="http://localhost:3000/userList"
  const [userList, setUserList] =useState([])
  const [defaultLogin, setDefaultLogin] = useState({userName:"", image:"", winArray:[] })

  useEffect(() => {
    fetch(fetchAPI)
    .then(r => r.json())
    .then(uList => setUserList(uList))
  }, [])

  function handleSubmit(e){
    //upon submission, user can be redirected to game page
    //console.log('test');
    e.preventDefault()
    // fetch(fetchAPI, {
    //   method:"POST",
    //   headers:{
    //     "Content-Type": "application/json"
    //   },
    //   body.JSON.stringify(defaultLogin)
    // })
    // .then(r => r.json())
    // .then(data => console.log(data))
  }
  
  function onAddNewUser(e){
    const name=e.target.name;
    const value=e.target.value;
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
