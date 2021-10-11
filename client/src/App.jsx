import './App.css';
import { Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './screens/Home/Home';
import Explore from './screens/Explore/Explore';
import StoryDetail from './screens/StoryDetail/StoryDetail';
import StoryCreate from './screens/StoryCreate/StoryCreate';
import StoryEdit from './screens/StoryEdit/StoryEdit';
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn';
import SignOut from './components/SignOut/SignOut';

function App() {

  const [user, setUser] = useState(null)

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
          <Home />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/stories/:id">
          <StoryDetail />
        </Route>
        <Route exact path="/story-create">
          <StoryCreate />
        </Route>
        <Route exact path="/stories/:id/edit">
          <StoryEdit />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-out">
          <SignOut />
        </Route>
        <Route exact path="/">
       
        </Route>
      </Switch>
    </div>
  );
}

export default App;
