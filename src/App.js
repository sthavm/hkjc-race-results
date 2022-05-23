import DividendTable from "./components/DividendTable";
import BetResultsTable from "./components/BetResultsTable";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import axios from "axios";
import { useState } from "react";
function App() {
  const [result, setResult] = useState(null);
  const [date, setDate] = useState(null);
  const [raceNo, setRaceNo] = useState("");

  const RESULTS_URL = "https://hkjc-race-scraper.herokuapp.com/race-results";

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  const handleRaceNoChange = (event) => {
    const stringAsNumber = Number(event.target.value);

    Number.isInteger(stringAsNumber)
      ? setRaceNo(stringAsNumber)
      : window.alert("Please enter a whole number");
  };

  const getResults = () => {
    const dateString = `${date.getFullYear()}/${
      date.getMonth() + 1
    }/${date.getDate()}`;
    const queryURL = `${RESULTS_URL}?race-date=${dateString}&race-no=${raceNo}`;
    axios.get(queryURL).then((response) => {
      if (typeof response.data === "string") {
        window.alert(response.data);
      } else {
        setResult(response.data);
      }
    });
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          spacing={2}
        >
          <Grid item container justifyContent="center">
            <Typography variant="h1">HKJC Bet Results</Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            spacing={4}
          >
            <Grid item>
              <Paper>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography variant="h5">Race Date</Typography>
                  </Grid>
                  <Grid item>
                    <DesktopDatePicker
                      inputFormat="yyyy/MM/dd"
                      value={date}
                      onChange={handleDateChange}
                      mask="____/__/__"
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <Grid item container direction="column">
                  <Grid item>
                    <Typography variant="h5">Race number</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      value={raceNo}
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      onChange={handleRaceNoChange}
                      placeholder="Enter a number"
                    ></TextField>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container justifyContent="center">
              <Paper>
                <Button
                  onClick={() => {
                    setResult(null);
                    getResults();
                  }}
                >
                  Check Results
                </Button>
              </Paper>
            </Grid>
          </Grid>
          <Grid item container direction="row" justifyContent="space-evenly">
            <Grid item>
              {result !== null && result !== undefined && (
                <DividendTable dividendTable={result.dividend_table} />
              )}
            </Grid>
            <Grid item>
              {result !== null && result !== undefined && (
                <BetResultsTable betResults={result.profit} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
}

export default App;
