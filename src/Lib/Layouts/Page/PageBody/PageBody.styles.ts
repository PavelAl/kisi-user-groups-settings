import { makeStyles } from 'tss-react/mui';

export const usePageBodyStyles = makeStyles({
  name: 'PageBody'
})(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  }
}));
