import { makeStyles } from 'tss-react/mui';

export const useGroupDetailsPageStyles = makeStyles({
  name: 'GroupDetailsPage'
})(theme => ({
  page: {
    paddingBottom: theme.spacing(2),

    '& > *': {
      maxWidth: 800,
      margin: 'auto'
    }
  },

  header: {
    padding: theme.spacing(4),
    boxSizing: 'border-box'
  },

  content: {
    padding: theme.spacing(2)
  }
}));
