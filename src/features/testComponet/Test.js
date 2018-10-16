import React, { Component } from "react";
import { connect } from "react-redux";

export class Test extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1>Test</h1>
        {this.props.data}
      </div>
    );
  }
}

const mapState = state => ({
  data: state.test.data
});

export default connect(mapState)(Test);
