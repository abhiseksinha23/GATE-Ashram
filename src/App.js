import Container from '@material-ui/core/Container';
import MainNavigation from './components/MainNavigation';

const App = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <MainNavigation>
      </MainNavigation>
    </Container>
  );
}

export default App;
