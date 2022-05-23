import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DividendTable = ({ dividendTable }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Dividends
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pool</TableCell>
            <TableCell>Winning Combination</TableCell>
            <TableCell>Dividend</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>WIN</TableCell>
            <TableCell>{dividendTable.win[0]}</TableCell>
            <TableCell>{dividendTable.win[1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={3}>PLACE</TableCell>
            <TableCell>{dividendTable.place[0][0]}</TableCell>
            <TableCell>{dividendTable.place[0][1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{dividendTable.place[1][0]}</TableCell>
            <TableCell>{dividendTable.place[1][1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{dividendTable.place[2][0]}</TableCell>
            <TableCell>{dividendTable.place[2][1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>QUINELLA</TableCell>
            <TableCell>{dividendTable.quinella[0]}</TableCell>
            <TableCell>{dividendTable.quinella[1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={3}>QUINELLA PLACE</TableCell>
            <TableCell>{dividendTable["quinella-place"][0][0]}</TableCell>
            <TableCell>{dividendTable["quinella-place"][0][1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{dividendTable["quinella-place"][1][0]}</TableCell>
            <TableCell>{dividendTable["quinella-place"][1][1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{dividendTable["quinella-place"][2][0]}</TableCell>
            <TableCell>{dividendTable["quinella-place"][2][1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={3}>3 PICK 1 (COMPOSITE WIN)</TableCell>
            <TableCell>{dividendTable.composite[0][0]}</TableCell>
            <TableCell>{dividendTable.composite[0][1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{dividendTable.composite[1][0]}</TableCell>
            <TableCell>{dividendTable.composite[1][1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{dividendTable.composite[2][0]}</TableCell>
            <TableCell>{dividendTable.composite[2][1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>FORECAST</TableCell>
            <TableCell>{dividendTable.forecast[0]}</TableCell>
            <TableCell>{dividendTable.forecast[1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>TIERCE</TableCell>
            <TableCell>{dividendTable.tierce[0]}</TableCell>
            <TableCell>{dividendTable.tierce[1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>TRIO</TableCell>
            <TableCell>{dividendTable.trio[0]}</TableCell>
            <TableCell>{dividendTable.trio[1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>FIRST 4</TableCell>
            <TableCell>{dividendTable["first-4"][0]}</TableCell>
            <TableCell>{dividendTable["first-4"][1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>QUARTET</TableCell>
            <TableCell>{dividendTable.quartet[0]}</TableCell>
            <TableCell>{dividendTable.quartet[1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2}>1ST DOUBLE</TableCell>
            <TableCell>{dividendTable["1st-double"][0][0]}</TableCell>
            <TableCell>{dividendTable["1st-double"][0][1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{dividendTable["1st-double"][1][0]}</TableCell>
            <TableCell>{dividendTable["1st-double"][1][1]}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DividendTable;
