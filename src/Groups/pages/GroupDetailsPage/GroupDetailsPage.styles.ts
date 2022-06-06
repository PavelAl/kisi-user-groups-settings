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
    '& > *': {
      maxWidth: 800,
      margin: 'auto'
    }
  },

  paper: {
    padding: theme.spacing(2),

    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(2)
    }
  },

  addLock: {
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 3),

    '& > *:not(:last-child)': {
      marginRight: theme.spacing(2)
    }
  }
}));
