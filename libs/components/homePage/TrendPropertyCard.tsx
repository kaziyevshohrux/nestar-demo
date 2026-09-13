import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard = () => {
  return (
    <Stack className={"trend-property-card"}>
      <Box className={"card-img"}>
        <img src="/img/banner/types/apartment.webp" alt="" />
        <Box className={"price"}>
          <span>$10</span>
        </Box>
      </Box>
      <Box className={"card-info"}>
        <strong>Kingston Buildings</strong>
        <p>no description</p>
        <div className={"card-specs"}>
          <div className={"spec"}>
            <img src="/img/icons/bed.svg" alt="" />
            <span>2 bed</span>
          </div>
          <div className={"spec"}>
            <img src="/img/icons/room.svg" alt="" />
            <span>5 rooms</span>
          </div>
          <div className={"spec"}>
            <img src="/img/icons/expand.svg" alt="" />
            <span>150 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className={"card-footer"}>
          <span className={"type"}>Rent</span>
          <div className={"stats"}>
            <div className={"stat"}>
              <IconButton color={"default"}>
                <RemoveRedEyeIcon />
              </IconButton>
              <Typography className={"view-cnt"}>100</Typography>
            </div>
            <div className={"stat"}>
              <IconButton color={"default"}>
                <FavoriteIcon style={{ color: "red" }} />
              </IconButton>
              <Typography className={"view-cnt"}>100</Typography>
            </div>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;
