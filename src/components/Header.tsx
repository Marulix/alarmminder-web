import { Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { urls } from "../urls";

const boxStyle = {
  justifyContent: "space-around",
  alignItems: "center",
  padding: "10px",
  color: "white",
  backgroundColor: "#028090",
};

const boxStyle2 = {
  justifyItems: "center",
  alignSelf: "center",
  gap: "30px",
  color: "white",
  backgroundColor: "#028090",
};

const SearchBar = () => (
  <Box bgcolor={"white"} borderRadius={8} height={"24px"}>
    <SearchIcon
      style={{
        color: "#1B1D1F",
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    />
    <TextField
      id="input-with-icon-textfield"
      placeholder="Buscar"
      variant="standard"
      InputProps={{
        disableUnderline: true,
        style: {
          color: "#1B1D1F",
          backgroundColor: "white",
          height: "24px",
          width: "445px",
          borderRadius: "8px",
        },
      }}
    />
  </Box>
);

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box display={"flex"} flexDirection={"row"} sx={boxStyle} >
      <Typography variant="h4" fontWeight={300} onClick={() => {
        navigate(urls.home);
      }}>
        AlarmMinder
      </Typography>
      <Box display={"flex"} flexDirection={"row"} sx={boxStyle2}>
        <Typography variant="h6" onClick={() => {
          navigate(urls.home);
        }}>Home</Typography>
        <Typography variant="h6" onClick={() => {
          navigate(urls.misAlarmas);
        }}>Mis Alarmas</Typography>
        <Typography variant="h6" onClick={() => {
          navigate(urls.home);
        }}>Comunidad</Typography>
      </Box>
      <SearchBar />
    </Box>
  );
}
