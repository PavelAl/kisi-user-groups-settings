import { Button } from '@mui/material';
import React from 'react';

import { useHelloStyles } from './HelloVite.styles';

interface HelloViteProps {}

export const HelloVite: React.FC<HelloViteProps> = () => {
  const { classes } = useHelloStyles();

  return (
    <div className={classes.root}>
      <p>Hello Vite + React!</p>

      <Button onClick={() => alert('Hello')}>Hello</Button>
    </div>
  );
};
