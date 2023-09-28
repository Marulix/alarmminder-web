import { Stack, Typography } from "@mui/material";
import { urls } from "../urls";
import { useNavigate } from "react-router-dom";


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
  const navigate = useNavigate();
  return (
    <Stack
      flexDirection={"row"}
      height={"159px"}
      bgcolor={"#028090"}
      sx={stackStyle}
    >
      <Stack direction={"row"} mx={10}>
        <Typography variant="h4" fontWeight={300} onClick={() => {
          navigate(urls.home);
        }}>
          AlarmMinder
        </Typography>
      </Stack>
      <Stack direction={"row"} color={"white"} sx={stackStyle2} mx={30}>
        <Typography variant="h6">Mobile app</Typography>
        <Typography variant="h6" onClick={() => {
          navigate(urls.home);
        }}>Community</Typography>
        <Typography variant="h6">Company</Typography>
      </Stack>
    </Stack>
  );
}
