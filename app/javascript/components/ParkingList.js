import React, { Component } from "react";

class ParkingList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.address}
        <br />
        {this.props.city}
        <br />
        {this.props.state}
        <br />
        {this.props.zip}
        <br />
      </div>
    );
  }
}

export default ParkingList;
