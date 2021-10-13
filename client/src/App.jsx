import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './screens/Home/Home';
import Explore from './screens/Explore/Explore';
import StoryDetail from './screens/StoryDetail/StoryDetail';
import StoryCreate from './screens/StoryCreate/StoryCreate';
import StoryEdit from './screens/StoryEdit/StoryEdit';
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';
import { verifyUser } from './services/users';

function App() {

  const [user, setUser] = useState(null)
  console.log("user: " ,user);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])



  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/explore">
          <Explore user={user}/>
        </Route>
        <Route exact path="/stories/:id">
          <StoryDetail user={user}/>
        </Route>
        <Route exact path="/story-create">
          {user ? <StoryCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/stories/:id/edit">
          {user ? <StoryEdit user={user} /> : <Redirect to="/sign-in" />}
        </Route>
        <Route exact path="/sign-up">
          <SignUp setUser={setUser}/>
        </Route>
        <Route exact path="/sign-in">
          <SignIn setUser={setUser}/>
        </Route>
        <Route exact path="/sign-out">
          <SignOut setUser={setUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
