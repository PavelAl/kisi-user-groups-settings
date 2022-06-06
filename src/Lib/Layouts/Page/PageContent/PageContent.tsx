import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

import { usePageContentStyles } from './PageContent.styles';
import { PageContentProps } from './PageContent.types';

export const PageContent: FC<PropsWithChildren<PageContentProps>> = props => {
  const { className, children } = props;
  const { classes } = usePageContentStyles();

  return <div className={classNames(classes.root, className)}>{children}</div>;
};
