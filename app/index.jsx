// You can also include here commons if you want with import 'react-toolbox/lib/commons';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import Header from './components/header';
import style from './style';
import MapControl from './components/App.jsx';

ReactDOM.render((
  <div>
    <Header />
	<MapControl />
  </div>
), document.getElementById('app'));
