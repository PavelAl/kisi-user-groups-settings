import { Typography } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Page } from '../Page';
import { PageBody } from '../PageBody';
import { PageContent } from '../PageContent';
import { PageHeader } from '../PageHeader';

import { usePageStoriesStyles } from './Page.stories.styles';

export default {
  title: 'Layouts/Page'
} as Meta;

interface Args {}

export const Default: Story<Args> = ({}) => {
  const { classes } = usePageStoriesStyles();
  const { app, header, headerControls, title, content } = classes;

  return (
    <div className={app}>
      <Page>
        <PageBody>
          <PageHeader className={header}>
            <div className={headerControls}>
              <Typography variant="h1" className={title}>
                Header
              </Typography>
            </div>
          </PageHeader>

          <PageContent className={content}>
            <Typography variant="h1" className={title}>
              Content
            </Typography>
          </PageContent>
        </PageBody>
      </Page>
    </div>
  );
};

Default.args = {};
Default.storyName = 'Page';
