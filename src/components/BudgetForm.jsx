import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const useStyles = makeStyles({
  button: {
    textAlign: "center",
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BudgetForm = ({ budgetType }) => {
  const classes = useStyles();
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleClick = () => {
    setOpenAlert(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>{budgetType}</InputLabel>
            <Input
              type="number"
              startAdornment={
                <InputAdornment position="start">₹​</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select>
              <MenuItem value="Office">Office</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Categories</InputLabel>
            <Select>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Salary">Salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField type="datetime-local" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Description</InputLabel>
          <TextField type="text" fullWidth />
        </Grid>
        <Grid item xs={12} className={classes.button}>
          <Button
            variant="outlined"
            fullWidth
            style={{ color: "green", backgroundColor: "lightgreen" }}
            onClick={handleClick}
          >
            Create
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Data added
        </Alert>
      </Snackbar>
    </>
  );
};

export default BudgetForm;
