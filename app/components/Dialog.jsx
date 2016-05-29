import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import Button from 'react-toolbox/lib/button';
import style from './style';

class DialogTest extends React.Component {
	state = {
		active: false
	};

	handleToggle = () => {
		this.setState({active: !this.state.active});
	}

	actions = [
		{ label: "Cancel", onClick: this.handleToggle },
		{ label: "Save", onClick: this.handleToggle }
	];

	render () {
		return (
			<div className={style.dialogContainer}>
				<Button className={style.button} onClick={this.handleToggle} icon="info" floating accent/>
				<Dialog
					actions={this.actions}
					active={this.state.active}
					onEscKeyDown={this.handleToggle}
					onOverlayClick={this.handleToggle}
					title='About'
					>
					<p>Roadtrippin allows you to search for places along a route within a specified radius. You can add places to a roadtrip object and share it with your favorite allies!(yes, that was a chilli peppers reference)</p>
				</Dialog>
			</div>
		);
	}
}
export default DialogTest;
