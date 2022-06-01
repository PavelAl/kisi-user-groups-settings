import { makeStyles } from 'tss-react/mui';

export const useHelloStyles = makeStyles({ name: 'Hello' })(theme => ({
  root: {
    padding: theme.spacing(1),
  },
}));
