import { makeStyles } from 'tss-react/mui';

export const usePageHeaderStyles = makeStyles({
  name: 'PageHeader'
})(() => ({
  root: {
    height: 64,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
}));
