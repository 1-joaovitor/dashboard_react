import { Box, Button, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import logo from "../../../src/img/tecnologia.png";
import { useState } from "react";
import './style.css'
export const SideBar = () => {
   

  const icons = [
    { name: "Users", icon: <GroupIcon /> },
    { name: "Calendário", icon: <CalendarMonthIcon /> },
    { name: "Dashbord", icon: <DashboardIcon /> },
  ];

  return (
   <>
   
   <nav id='sidebar' className='sidebar'>
    <Box className="title">
        <img src={logo} width={30} height={30}/>
      <h2>Poseidon</h2>  
    </Box>

    <ul>
        {icons.map((item, index) => 
        <li key={index}>
            <Button>
                <span>{item.icon}</span>
                <p>{item.name}</p>
            </Button>
        </li>)}
    </ul>

   </nav>
  
   </>
  );
};
