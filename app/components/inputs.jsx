import React from 'react';
import Input from 'react-toolbox/lib/input';

class InputTest extends React.Component {
  state = { from: '', to: '', radius: '', hint: '' };

  handleChange(name, value){
    this.setState(
		{[name]: value}
	);
  };

  render () {
    return (
      <section>
        <Input id="from" type='text' label='Origin' hint="Enter a Location" placeholder='' name='from' value={this.state.from} onChange={this.handleChange.bind(this, 'from')} icon="add_location" />
		<Input id="to" type='text' label='Destination' hint="Enter a Location" placeholder='' name='to' value={this.state.to} onChange={this.handleChange.bind(this, 'to')} icon="add_location" />
		<Input id="radius" ref="radius" type='text' label='Radius' hint="Distance from Route" name='radius' value={this.state.radius} onChange={this.handleChange.bind(this, 'radius')} icon="all_out" />
		<Input id="search" ref="search" type='text' label='Search' hint="Concise Place Description " name='search' value={this.state.search} onChange={this.handleChange.bind(this, 'search')} icon="search" />
      </section>
    );
  }
}

export default InputTest;
