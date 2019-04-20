import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";

import Header from "./Header";
import DataTable from "./DataTable";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false
    };
  }

  handleAddExpense = () => {
    this.setState({ openDialog: true });
  };

  render() {
    return (
      <div className="main-app">
        <Header handleAddExpense={this.handleAddExpense} />
        <DataTable />
        <Dialog open={this.state.openDialog}>
          <h1>Heloo</h1>
        </Dialog>
      </div>
    );
  }
}

export default App;
