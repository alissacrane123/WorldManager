import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.isChecked };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    event.preventDefault();
    this.setState({ checked: !this.state.checked })
  }


  render() {

    return (
      <input type="checkbox" onChange={this.handleChange}/>
    )
  }
}

export default Checkbox;