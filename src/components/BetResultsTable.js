import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const BetResultsTable = ({ betResults }) => {
  const renderBetString = (bet) => {
    switch (bet) {
      case "quinella":
        return "Quinella";
      case "quinella-place":
        return "Quinella Place";
      default:
        return "";
    }
  };
  const totalProfit = () => {
    return betResults.reduce(
      (prevValue, currentValue) => prevValue + currentValue.profit,
      0
    );
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Bet Type</TableCell>
            <TableCell>Combination</TableCell>
            <TableCell>Bet Amount</TableCell>
            <TableCell>Dividend</TableCell>
            <TableCell>Profit/Loss</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {betResults.map((result, index) => (
            <TableRow key={index}>
              <TableCell>{renderBetString(result.bet_type)}</TableCell>
              <TableCell>{result.combination}</TableCell>
              <TableCell>{result.amount}</TableCell>
              <TableCell>{result.dividend}</TableCell>
              <TableCell>{result.profit}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3}></TableCell>

            <TableCell>Total Profit/Loss</TableCell>
            <TableCell>{totalProfit()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BetResultsTable;
