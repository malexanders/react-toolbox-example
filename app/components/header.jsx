import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Button from 'react-toolbox/lib/button';
import DialogTest from './Dialog';
import style from './style';

const MainAppBar = () => (
  <AppBar className={style.appbar} flat>
    <h1 className={style.title}>Roadtrippin</h1>
    {/*<Button className={style.button} icon="add" floating accent/>*/}
	<DialogTest />
  </AppBar>
);

export default MainAppBar;
