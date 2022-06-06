import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import { usePageHeaderStyles } from './PageHeader.styles';
import { PageHeaderProps } from './PageHeader.types';

export const PageHeader: React.FC<PropsWithChildren<PageHeaderProps>> = props => {
  const { className, children } = props;
  const { classes } = usePageHeaderStyles();

  return <div className={classNames(classes.root, className)}>{children}</div>;
};
