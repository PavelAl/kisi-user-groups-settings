import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import { usePageStyles } from './Page.styles';
import { PageProps } from './Page.types';

export const Page: React.FC<PropsWithChildren<PageProps>> = props => {
  const { className, children } = props;
  const { classes } = usePageStyles();

  return <div className={classNames(classes.root, className)}>{children}</div>;
};
