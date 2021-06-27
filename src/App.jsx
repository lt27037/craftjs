// pages/index.js

import React from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';

import { Toolbox } from './layouts/Toolbox';
import { SettingsPanel } from './layouts/SettingsPanel';
import { Topbar } from './layouts/Topbar';

import Text from './components/Text';
import Button from './components/Button';
import Container from './components/Container';
import { Card } from './components/Card';

import {Editor, Frame, Element} from "@craftjs/core";

const App = () => {
  return (
    <div>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
        <Editor resolver={{Card, Button, Text, Container}}> 
          <Grid container spacing={3}>
            <Grid item >
              <Topbar />
            </Grid>
            <Grid item xs={5}>
              <Frame>
                <Element is={Container} padding={5} background="#eee" canvas>
                  <Card />
                  <Button size="small" variant="outlined">Click</Button>
                  <Text size="small" text="Hi world!" />
                  <Element is={Container} padding={2} background="#999" canvas>
                    <Text size="small" text="It's me again!" />
                  </Element>
                </Element>
              </Frame>
            </Grid>
            <Grid item xs={3}>
              <Paper>
                  <Toolbox />
                  <SettingsPanel />
              </Paper>          
            </Grid>
          </Grid>
        </Editor>
    </div>
  );
}

export default App;
