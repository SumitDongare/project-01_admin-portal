import { Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import React from "react";
import OrderReport from "./OrderReport";
import { Dashboard } from "@mui/icons-material";





export default function DashboardComponent() {
     
    const  cards= [
        {
            title: 'Daily Earning',
            value: "0.0",
            icon: <Dashboard style={{color:"white"}}></Dashboard>
        },
        {
            title: 'Daily Orders',
            value: "0.0",
            icon: <Dashboard style={{color:"white"}}></Dashboard>
        },
        {
            title: 'Signup Users',
            value: "0.0",
            icon: <Dashboard style={{color:"white"}}></Dashboard>
        },
        {
            title: 'Total Product',
            value: "0.0",
            icon: <Dashboard style={{color:"white"}}></Dashboard>
        },
       
    ]


  return (
    <div>
        <div className="row gx-2">
            {cards.map(card => <div className="col">
                <Paper className="d-flex justify-content-between p-3"> 
                    <div className="d-flex flex-column">
                        <div>{card.title}</div>
                        <div style={{fontSize:20}}><b>{card.value}</b></div>
                    
                    
                    </div>
                    <div className="d-flex align-items-center">
                        <div style={{width:40, height:40, background:"red"}} className="d-flex justify-content-center align-items-center">
                        {card.icon}
                        </div>
                    </div>
                
                </Paper>
                </div>  
            )}

        </div>
        <br></br>
        <br></br>
         <div className="row gx-2" >
        <div className="col">
        <Paper >
        <h4 className="mx-3 pt-3">Sales Report</h4>
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["Jan", "Feb", "Mar", "Apr", "May"],
              categoryGapRatio: 0.9,
            },
          ]}
          series={[{ data: [35, 40, 24, 34] }]}
          width={500}
          height={300}
          borderRadius={15} 
        />
        </Paper>

        </div>
     
      <div className="col">
        <OrderReport></OrderReport>
      

      </div>
      
    </div>

    </div>
   
  );
}
