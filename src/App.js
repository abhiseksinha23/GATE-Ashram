import { Route, Switch, Redirect } from 'react-router-dom';
import { navigationRoutes } from './utils/navigationRoutes';
import Container from '@material-ui/core/Container';
import MainNavigation from './components/MainNavigation';

const App = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <MainNavigation>
        <Switch>
          <Route exact path={`${navigationRoutes.HOME}`}>
            <h1>BRANCH LIST</h1>
          </Route>
          <Route exact path={`${navigationRoutes.QUESTION_BANK}`}>
            <h1>QUESTION BANK</h1>
          </Route>
          <Redirect to={`${navigationRoutes.HOME}`} />
        </Switch>
      </MainNavigation>
    </Container>
  );
}

export default App;
