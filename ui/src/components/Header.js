import React from "react";
import { IconButton } from "@material-ui/core";
import { unstable_Box as Box } from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import { Add, ArrowUpward, AttachMoney } from "@material-ui/icons";

class Header extends React.Component {
  render() {
    return (
      <>
        <section id="logo">
          <h1>
            <img
              src="https://lh3.googleusercontent.com/obOAez-UFR7JGDiOSIpJchJBEX_yYKO26-S4N4DNhii2iWH1FfhQUnIbN9Jbos-R5NiT"
              alt="expense-splitter"
              style={styles.logo}
            />
          </h1>
        </section>
        <Box display="flex" justifyContent="flex-end">
          <Tooltip title="Add Expense">
            <IconButton onClick={this.props.handleAddExpense}>
              <Add />
            </IconButton>
          </Tooltip>
          <Tooltip title="Clear Dues" onClick={this.props.handlePaymentDialog}>
            <IconButton>
              <AttachMoney />
            </IconButton>
          </Tooltip>
          <Tooltip title="Import Expenses">
            <IconButton>
              <ArrowUpward />
            </IconButton>
          </Tooltip>
        </Box>
      </>
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

export default Header;
