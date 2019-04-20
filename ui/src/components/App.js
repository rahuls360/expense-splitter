import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="main-app">
        <h1>
          <img
            src="https://lh3.googleusercontent.com/obOAez-UFR7JGDiOSIpJchJBEX_yYKO26-S4N4DNhii2iWH1FfhQUnIbN9Jbos-R5NiT"
            alt="expense-splitter"
            style={styles.logo}
          />
        </h1>
      </div>
    );
  }
}

const styles = {
  logo: {
    maxHeight: "70px",
    margin: "0 auto",
    display: "block"
  }
};

export default App;
