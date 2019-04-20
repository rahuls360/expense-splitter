import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";

import Header from "./Header";
import DataTable from "./DataTable";
import AddExpense from "./AddExpense";
import PayDues from "./PayDues";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      duesDialog: false,
      expensesList: [
        {
          paidby: "Rahul",
          amount: "2323",
          splitby: "3",
          expenseperperson: "774.33",
          status: false
        },
        {
          paidby: "Rohan",
          amount: "1777",
          splitby: "5",
          expenseperperson: "355.40",
          status: true
        }
      ]
    };
  }

  handleAddExpense = () => {
    this.setState({ openDialog: true });
  };

  closeAddExpense = () => {
    this.setState({ openDialog: false });
  };

  handlePaymentDialog = () => {
    console.log("Im here");
    this.setState({ duesDialog: true });
  };

  closePaymentDialog = () => {
    this.setState({ duesDialog: false });
  };

  addExpense = formData => {
    const expensesList = this.state.expensesList;
    expensesList.push(formData);
    this.setState({ expensesList });
  };

  render() {
    return (
      <div className="main-app">
        <Header
          handleAddExpense={this.handleAddExpense}
          handlePaymentDialog={this.handlePaymentDialog}
        />
        <DataTable expensesList={this.state.expensesList} />
        <Dialog
          open={this.state.openDialog}
          fullWidth="lg"
          onClose={this.closeAddExpense}
        >
          <AddExpense
            addExpense={this.addExpense}
            closeAddExpense={this.closeAddExpense}
          />
        </Dialog>
        <Dialog
          open={this.state.duesDialog}
          fullWidth="lg"
          onClose={this.closePaymentDialog}
        >
          <PayDues
            addExpense={this.payDues}
            closeAddExpense={this.closePaymentDialog}
          />
        </Dialog>
      </div>
    );
  }
}

export default App;
