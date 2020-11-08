import { Route, Switch, Redirect } from 'react-router-dom';
import { navigationRoutes } from './utils/navigationRoutes';
import Container from '@material-ui/core/Container';
import MainNavigation from './components/MainNavigation';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <MainNavigation>
        <Switch>
          <Route exact path={`${navigationRoutes.HOME}`}>
            <HomeScreen />
          </Route>
          <Redirect to={`${navigationRoutes.HOME}`} />
        </Switch>
      </MainNavigation>
    </Container>
  );
}

export default App;
