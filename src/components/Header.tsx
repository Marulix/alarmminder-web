import { Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
  return (
    <Box display={"flex"} flexDirection={"row"} sx={boxStyle}>
      <Typography variant="h4" fontWeight={300}>
        AlarmMinder
      </Typography>
      <Box display={"flex"} flexDirection={"row"} sx={boxStyle2}>
        <Typography variant="h6">Home</Typography>
        <Typography variant="h6">Mis Alarmas</Typography>
        <Typography variant="h6">Comunidad</Typography>
      </Box>
      <SearchBar />
    </Box>
  );
}
