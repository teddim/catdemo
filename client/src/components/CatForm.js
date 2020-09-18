import React from 'react';

class CatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Enter a new cat name</h2>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={() => this.props.addCat(this.state.name)}>Submit</button>
      </div>
    );
  }
}

export default CatForm;