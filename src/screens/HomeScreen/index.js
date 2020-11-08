import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import BranchList from '../../components/BranchList';

export default function HomeScreen() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Typography variant="h4">
                Welcome to GATE Ashram
            </Typography>
            <BranchList />
        </Container>
    );
}
