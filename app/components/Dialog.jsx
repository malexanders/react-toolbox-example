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
				<Button className={style.button} onClick={this.handleToggle} icon="add" floating accent/>
				<Dialog
					actions={this.actions}
					active={this.state.active}
					onEscKeyDown={this.handleToggle}
					onOverlayClick={this.handleToggle}
					title='My awesome dialog'
					>
					<p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
				</Dialog>
			</div>
		);
	}
}
export default DialogTest;
