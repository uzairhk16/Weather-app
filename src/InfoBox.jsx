import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import "./InfoBox.css";

export default function Infobox({ info }) {
  let HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let COLD_URL =
    "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?q=80&w=1647&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D";

  const INIT_URL =
    "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL
          }
          title="green iguana"
        />
        <CardContent className="infoBox">
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 20 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min temp = {info.tempMin}&deg;C</p>
            <p>Max temp = {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels
              like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
