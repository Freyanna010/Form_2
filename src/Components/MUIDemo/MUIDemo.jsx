import React from 'react';
import Button from '@mui/material/Button';

import classes from './MUIDemo.module.scss';

const MUIDemo = () => (
  <div className={classes.component}>
    <Button variant="text">Первая кнопка</Button>
    <Button variant="text">Вторая кнопка</Button>
  </div>
);

export default MUIDemo;