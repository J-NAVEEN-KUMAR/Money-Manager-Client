import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
const Reports = () => {
  return (
    <Card>
      <CardHeader title="Income" />
      <CardContent>
        <Typography variant="h5">$20</Typography>
        {/* <Doughnut data=""/> */}
      </CardContent>
    </Card>
  );
};

export default Reports;
