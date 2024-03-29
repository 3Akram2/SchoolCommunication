import React from "react";
import { Typography, Paper, Grid, Avatar } from "@mui/material";

function Announcement() {
  return (
    <Grid container justifyContent={"center"}>
      <Paper
        sx={{
          width: "80%",
          backgroundColor: "secondary.main",
          padding: "20px",
        }}
      >
        <Grid container>
          <Grid item>
            <Avatar alt="Remy Sharp" src={`data:image/jpeg;base64,`} />
          </Grid>
          <Grid item ml={1}>
            <Typography style={{ paddingTop: 7 }}> Name Name </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography variant="h5" mb={2}>
              What is Lorem Ipsum
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Announcement;
