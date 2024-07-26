import './App.css';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Groups/Home/Home';
import Register from './Components/Groups/UserAuthentication/Register/Register';
import Login from './Components/Groups/UserAuthentication/Login/Login';
import ShowingUser from './Components/Groups/Home/ShowingUser';
import TodoListForUser from './Components/TodoListForUser/TodoListForUser';

// import EditDetails from './Components/TodoList/EditDetails';
// import { useState } from 'react';
// import CountRef from './Components/UseRef/CountRef';
// import Userlist from './Components/UserList/Userlist';
// import ExampleApi from './Components/ExampleApi/ExampleApi';
// import TodoList from './Components/TodoList/TodoList';


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/showingUser" element={<ShowingUser/>}/>
          <Route path="/todolistuser" element={<TodoListForUser/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Register/> */}
      {/* <Home/> */}
      {/* <Home/> */}
      {/* <ExampleApi/> */}
      {/* <Userlist/> */}
      {/* <CountRef/> */}
      {/* <Router>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/edit" element={<EditDetails />} />
          </Routes>
        </Router> */}
    </div>
  );
}

export default App;
