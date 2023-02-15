import { Box } from "@mui/material";
import Chart from "react-apexcharts";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import "./style.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckIcon from "@mui/icons-material/Check";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import CircularProgress from "@mui/material/CircularProgress";

export const ChartBar = () => {

const [classProgress, setClassProgress] = React.useState('testeModi')
  const icons = [
    {
      icon: <AccountCircleIcon fontSize='large'/>,
      name: "User",
      number: '1500',
      progress:  `${20}%`

      
    },
    {
      icon: <AccountBalanceIcon fontSize='large'/>,
      name: "Balanço",
      progress: <CircularProgress value={30}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      variant="determinate"
      
    />,
    number:'R$ 21000,00' 
    },
    {
      icon: <AttachMoneyIcon fontSize='large'/>,
      name: "Entradas",
      number:'R$ 7000,00',
      progress:  `${5}%`
    },
    {
      icon: <CheckIcon fontSize='large' />,
      name: "Reservas",
      progress:<CircularProgress
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      value={40}
      variant="determinate"
      
    />,
    number:'1300' 
    },
    {
      icon: <DeleteForeverIcon fontSize='large'/>,
      name: "Descartados",
      number:'70' ,
      progress: `${30}%`
    },
    {
      icon: <DownhillSkiingIcon fontSize='large'/>,
      name: "Atrações",
      number:' 450' ,
      progress:  `${15}%`
    },
  ];

  const state = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <ul className="ListChart">
        {icons.map((item, index) => (
          <li className="ListItem" key={index}>
            <Box
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
                borderRadius: 3,
                width: 300,
                height: 150,
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 2,
                }}
              >
                <h3>{item.name}</h3>
                {item.icon}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 2,
                }}
              >
              
                <h5 id={'testeModi'}>{item.progress}</h5>
                <h3>{item.number}</h3>
              </Box>
            </Box>
          </li>
        ))}
      </ul>
      <Box className="teste2">
        <Chart
          options={state.options}
          series={state.series}
          type="area"
          width="100%"
          height="80%"
        />
      </Box>
    </Box>
  );
};
