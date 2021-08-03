import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext, useState } from 'react';
import Admin from './components/Admin/Admin/Admin';
import Positioning from './components/Positioning/Positioning/Positioning';
import BusinessPayment from './components/Positioning/BusinessPayment/BusinessPayment';
import Recommended from './components/Admin/Recommended/Recommended';
import Contacts from './components/Contacts/Contacts/Contacts';
import Message from './components/Admin/Message/Message';
import Blog from './components/Blog/Blog/Blog';
import BlogControl from './components/Admin/BlogControl/BlogControl';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/positioning">
            <Positioning></Positioning>
          </Route>
          <Route path="/business/recommended/:id">
            <BusinessPayment></BusinessPayment>
          </Route>
          <Route path="/recommended">
            <Recommended></Recommended>
          </Route>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route path="/message">
            <Message></Message>
          </Route>
          <Route path="/blogControl">
            <BlogControl></BlogControl>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );

}

export default App;
