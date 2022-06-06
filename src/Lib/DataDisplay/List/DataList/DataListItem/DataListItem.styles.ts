import { makeStyles } from 'tss-react/mui';

export const useDataListItemStyles = makeStyles({
  name: 'DataListItem'
})(theme => ({
  root: {
    padding: theme.spacing(0, 3)
  }
}));
