import { makeStyles } from 'tss-react/mui';

export const useAddLockStyles = makeStyles({
  name: 'AddLock'
})(theme => ({
  root: {
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
