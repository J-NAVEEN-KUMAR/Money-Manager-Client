import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const useStyles = makeStyles({
  form: {
    width: "90%",
    height: "100%",
    padding: "20px",
    
  },
  item: {
    marginBottom: "20px",
    width: "100%",
  },
  textField: {
    width: "100%",
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BudgetForm = ({budgetType}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(new Date());
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
      <form className={classes.form} autoComplete="off">
        <div className={classes.item}>
          <InputLabel htmlFor="standard-adornment-amount">{budgetType}</InputLabel>
          <Input
            type="number"
            id="standard-adornment-amount"
            startAdornment={
              <InputAdornment position="start" >₹​</InputAdornment>
            }
            style={{"color":"white !important"}}
            className={classes.textField}
          />
        </div>
        <div className={classes.item}>
          <TextField
            id="standard-multiline-flexible"
            label="Description"
            multiline
            maxRows={2}
            variant="standard"
            className={classes.textField}
          />
        </div>
        <div className={classes.item}>
          <TextField
            select
            label="Office/Personal"
            helperText="Please select the category"
            variant="standard"
            className={classes.textField}
            value="Personal"
          >
            <MenuItem value="Personal">Personal</MenuItem>
            <MenuItem value="Office">Office</MenuItem>
          </TextField>
        </div>
        <div className={classes.item}>
          <TextField
            select
            label="Categories"
            helperText="Please select the category"
            variant="standard"
            className={classes.textField}
            value="Salary"
          >
            <MenuItem value="Salary">Salary</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Freelance">Freelance</MenuItem>
            <MenuItem value="Fuel">Fuel</MenuItem>
            <MenuItem value="Movie">Movie</MenuItem>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Loan">Loan</MenuItem>
            <MenuItem value="Medical">Medical</MenuItem>
          </TextField>
        </div>
        <div className={classes.item}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DateTimePicker
                renderInput={(params) => <TextField {...params} />}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <div className={classes.item}>
          <Button
            variant="outlined"
            color="success"
            style={{ marginRight: "20px" }}
            onClick={handleClick}
          >
            Create
          </Button>
        </div>
      </form>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default BudgetForm;
