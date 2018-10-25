import React, { Component } from "react";
import { connect } from "react-redux";
import { openModal } from "../modals/ModalActions";

export class Test extends Component {
  render() {
    const { openModal } = this.props;
    console.log(openModal);
    return (
      <div>
        <button onClick={() => openModal("TestModal", { data: 42 })}>
          Click
        </button>
      </div>
    );
  }
}

const mapState = state => ({
  data: state.test.data
});

const actions = {
  openModal
};

export default connect(
  mapState,
  actions
)(Test);
