import { Stack, Typography } from "@mui/material";

const stackStyle = {
  alignItems: "center",
  padding: "10px",
  color: "white",
  backgroundColor: "#028090",
};

const stackStyle2 = {
  justifyItems: "center",
  alignSelf: "center",
  gap: "30px",
  color: "white",
  backgroundColor: "#028090",
};

export default function Footer() {
  return (
    <Stack
      flexDirection={"row"}
      height={"159px"}
      bgcolor={"#028090"}
      sx={stackStyle}
    >
      <Stack direction={"row"} mx={10}>
        <Typography variant="h4" fontWeight={300}>
          AlarmMinder
        </Typography>
      </Stack>
      <Stack direction={"row"} color={"white"} sx={stackStyle2} mx={30}>
        <Typography variant="h6">Mobile app</Typography>
        <Typography variant="h6">Community</Typography>
        <Typography variant="h6">Company</Typography>
      </Stack>
    </Stack>
  );
}
