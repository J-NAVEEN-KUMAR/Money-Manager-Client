import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Slide,
} from "@mui/material";
import { Delete, MoneyOff } from "@mui/icons-material";

const useStyles = makeStyles({
  avatarIncome: {
    color: "#fff",
    backgroundColor: "yellowgreen !important",
  },
  avatarExpense: {
    color: "red",
    backgroundColor: "orangered !important",
  },
  list: {
    maxHeight: "150px",
    overflow: "auto",
  },
});

const ListData = () => {
  const classes = useStyles();
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: "Thu Feb 17",
    },
    {
      id: 2,
      type: "Income",
      category: "Salary",
      amount: 5550,
      date: "Thu Feb 17",
    },
    {
      id: 3,
      type: "Income",
      category: "Salary",
      amount: 150,
      date: "Thu Feb 17",
    },
    {
      id: 4,
      type: "Expense",
      category: "Book",
      amount: 150,
      date: "Thu Feb 17",
    },
    {
      id: 5,
      type: "Expense",
      category: "GIft",
      amount: 550,
      date: "Thu Feb 17",
    },
    {
      id: 6,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: "Thu Feb 17",
    },
  ];
  return (
    <List dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </List>
  );
};

export default ListData;
