import Grid from '@material-ui/core/Grid';
import BranchCard from '../BranchCard';

const branchList = [
    {
        name: 'COMPUTER SCIENCE',
        code: 'CSE',
    },
    {
        name: 'CIVIL',
        code: 'CE',
    },
    {
        name: 'ELECTRICAL',
        code: 'EEE',
    },
    {
        name: 'MECHANICAL',
        code: 'ME',
    }
]

export default function BranchList() {

    const renderCards = () => {
        return branchList.map(branch => (
            <Grid item xs={12} sm={6} lg={4}>
                <BranchCard
                    key={branch.code}
                    branch={branch}
                />
            </Grid>
        ));
    }

    return (
        <Grid container spacing={2} xs={12}>
            {renderCards()}
        </Grid>
    );
}
