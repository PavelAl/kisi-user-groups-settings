import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import { usePageBodyStyles } from './PageBody.styles';
import { PageBodyProps } from './PageBody.types';

export const PageBody: React.FC<PropsWithChildren<PageBodyProps>> = props => {
  const { className, children } = props;
  const { classes } = usePageBodyStyles();

  return <div className={classNames(classes.root, className)}>{children}</div>;
};
