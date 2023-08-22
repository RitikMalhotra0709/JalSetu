import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Chip, Avatar } from "@mui/material";
import React from "react";
import SensorReadings from "../SensorReadings/SensorReadings"
const BasicInfo = () => {
  // const theme = createTheme({
  //   typography: {
  //     fontFamily: ["Inter"],
  //   },
  // });
  return (
    <>
      <Grid container>
        <Grid item md={6} xs={12} sx={{ p: { md: 7, xs: 3 } }}>
          <Typography variant="h4" fontWeight={700} sx={{textAlign : {xs : "center", md:"left"}}} gutterBottom>
            Welcome Again, Ritik Malhotra
          </Typography>
          <Typography variant="subtitle1" sx={{textAlign : {xs : "center", md:"left"}}}>
            B-22 Janak Puri 110017
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: { md: "end", xs: "center" },
            alignItems: "center",
          }}
        >
          <Chip
            avatar={<Avatar src="https://shantidentals.com/wp-content/uploads/2022/01/djb.png" />}
            label="DJB Revenue Portal"
            variant="outlined"
            // size="medium"
            sx={{
              mr: {md : 3},
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              px: 1,
              py: 3,
              borderRadius: "10000px",
              bgcolor: "#383838",
              color: "#FFFFFF",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#383838",
              },
              fontWeight : 600,
            }}
            onClick ={()=> window.open("https://djb.gov.in/DJBRMSPortal/")}
          />
          <Chip
            label="Add Grievance"
            variant="outlined"
            
            sx={{
              mr: {md : 7},
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              px: 1,
              py: 3,
              borderRadius: "10000px",
              bgcolor: "#383838",
              color: "#FFFFFF",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#383838",
              },
              fontWeight : 600,
            }}
            // component="a"
            onClick ={()=> window.open("https://djb.gov.in/DJBRMSPortal/portal/grievenceRegister.html")}
          />
        </Grid>
      </Grid>
      <SensorReadings/>
    </>
  );
};

export default BasicInfo;
