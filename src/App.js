import "./App.css";
import BudgetModal from "./components/BudgetModal";
import Reports from "./components/Reports";
import Topbar from "./components/Topbar";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  grid: {
    "& > *": {
      margin: "25px",
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Topbar />
      <BudgetModal />
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "calc(100vh - 150px)" }}
        className={classes.grid}
      >
        <Grid item xs={12} sm={4}>
          <Reports />
        </Grid>
        <Grid item xs={12} sm={4}>
          Main
        </Grid>
        <Grid item xs={12} sm={4}>
          <Reports />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
