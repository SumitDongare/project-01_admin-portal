import React from 'react'
import { Paper, styled } from "@mui/material";
import { pieArcLabelClasses, PieChart, useDrawingArea } from "@mui/x-charts";



const data = [
    { value: 70, label: "Pending" },
    { value: 11, label: "On the Way" },
    { value: 17, label: "Delivered" },
    { value: 2, label: "Returned" },
    { value: 2, label: "Canceled" },
  ];


const size = {
    width: 400,
    height: 200,
  };
  
  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));
  
  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }
  
  
  
  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
  const getArcLabel = (params) => {
      const percent = params.value / TOTAL;
      return `${(percent * 100).toFixed(0)}%`;
    };




export default function OrderReport() {



  return (
    <div>
        <Paper >
      <h4 className="mx-3 pt-3">Order Report</h4>
        <PieChart
         sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontSize: 14,
            },
          }}
          series={[{ data, innerRadius: 60, arcLabel: getArcLabel }]}
          {...size}
        >
          <PieCenterLabel>Total 144</PieCenterLabel>
        </PieChart>
      </Paper>
      
    </div>
  )
}
