import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// app context wrapper
import { AppContextProvider } from './context/appContext'

// private route
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

// import pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AddArtistPage from './pages/AddArtistPage';
import AddMusicPage from './pages/AddMusicPage';

// components
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/add-artist" component={AddArtistPage} />
          <PrivateRoute exact path="/add-music" component={AddMusicPage} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
