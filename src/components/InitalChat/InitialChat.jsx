import { Box, Grid, Stack, Typography } from "@mui/material";
import icon from "../../assets/bot.png";
import Card from "./Card";

function InitialChat({ generateResponse }) {
  const chatOptions = [
    {
      heading: "Hi, what is the weather",
      subtext: "Receive an instant AI-generated response",
    },
    {
      heading: "Hi, what is my location",
      subtext: "Receive an instant AI-generated response",
    },
    {
      heading: "Hi, what is the temperature",
      subtext: "Receive an instant AI-generated response",
    },
    {
      heading: "Hi, how are you",
      subtext: "Receive an instant AI-generated response",
    },
  ];

  const renderCards = chatOptions.map((option, index) => (
    <Grid item xs={12} md={6} key={index}>
      <Card
        heading={option.heading}
        subtext={option.subtext}
        generateResponse={generateResponse}
      />
    </Grid>
  ));

  return (
    <Stack alignItems="center" justifyContent="flex-end" spacing={2}>
      <Typography variant="h2" component="h2">
        How Can I Assist You Today?
      </Typography>
      <Box
        component="img"
        src={icon}
        borderRadius="50%"
        height={70}
        width={70}
      />

      <Grid container spacing={2} padding={2}>
        {renderCards}
      </Grid>
    </Stack>
  );
}

export default InitialChat;
