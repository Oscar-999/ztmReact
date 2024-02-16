import { Component } from "react";

import './searchbox.css'
class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
