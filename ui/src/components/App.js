import React, { Component } from "react";

import Header from "./Header";
import DataTable from "./DataTable";

export class App extends Component {
  render() {
    return (
      <div className="main-app">
        <Header />
        <DataTable />
      </div>
    );
  }
}

export default App;
