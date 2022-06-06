import { makeStyles } from 'tss-react/mui';

export const usePageStoriesStyles = makeStyles()(theme => {
  return {
    app: {
      display: 'flex',
      height: '100%'
    },
    appBar: {
      width: 48,
      height: '100%',
      backgroundColor: theme.palette.secondary.main,
      zIndex: 1500
    },

    header: {
      padding: theme.spacing(0, 4),
      boxSizing: 'border-box'
    },
    headerControls: {
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      flex: 1
    },
    content: {
      padding: theme.spacing(4),
      boxSizing: 'border-box'
    }
  };
});
