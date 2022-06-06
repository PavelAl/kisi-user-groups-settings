import { makeStyles } from 'tss-react/mui';

export const useNavigationListItemStyles = makeStyles({
  name: 'NavigationListItem'
})(theme => ({
  button: {
    padding: theme.spacing(0, 3)
  }
}));
