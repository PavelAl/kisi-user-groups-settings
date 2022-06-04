import { makeStyles } from 'tss-react/mui';

export const useGroupsPageStyles = makeStyles({
    name: 'GroupsPage'
})(theme => ({
    root: {
        '& > *': {
            marginBottom: theme.spacing(1)
        }
    }
}));
