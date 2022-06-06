import { makeStyles } from 'tss-react/mui';

export const usePageStyles = makeStyles({
  name: 'Page'
})(() => ({
  root: {
    width: '100%',
    position: 'relative'
  }
}));
