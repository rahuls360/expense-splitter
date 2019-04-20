import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class PayDues extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const formData = {
      paidby: event.target.paidby.value,
      amount: event.target.amount.value,
      splitby: event.target.splitby.value,
      expenseperperson: (
        event.target.amount.value / event.target.splitby.value
      ).toFixed(2)
    };
    console.log(formData);
    this.props.addExpense(formData);
    this.props.closeAddExpense();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <TextField label="Paid by" margin="normal" name="paidby" />
          <TextField label="Amount" margin="normal" name="amount" />
          <TextField
            label="Split Expense by how many people?"
            margin="normal"
            name="splitby"
          />
          <Button type="submit" margin="normal">
            Add Expense
          </Button>
        </form>
      </>
    );
  }
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "40px 60px"
  }
};

export default PayDues;
