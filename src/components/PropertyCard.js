import { createElement as h, useState } from "react";
import moment from "moment";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Dialog,
  DialogTitle
} from "@material-ui/core";
import { Update, Room } from "@material-ui/icons";
import { LineChart, Line, LabelList } from "recharts";
import { getNicePrice, getPriceHistory } from "../helpers";

import { propertyCardStyles } from "../styles";
import "../App.css";

const PropertyCard = ({
  address,
  displayPictureUrl,
  city,
  state,
  dynamicDisplayPrice,
  dateTime,
  allProperties
}) => {
  const [historyModal, setHistoryModal] = useState(false);
  const [historyData, setHistoryData] = useState([]);

  const styles = propertyCardStyles();

  const toggleHistoryView = () => {
    setHistoryModal(true);
    const history = getPriceHistory(allProperties, address);
    setHistoryData(history);
    console.log(history, "history");
  };

  return h(
    Card,
    { className: `${styles.cardContainer} property-card` },
    h(
      Dialog,
      { onClose: () => setHistoryModal(false), open: historyModal },
      h(DialogTitle, {}, "Price Trend"),
      h(
        LineChart,
        {
          width: 600,
          height: 400,
          data: historyData,
          margin: {
            top: 20,
            right: 30,
            left: 30,
            bottom: 20
          }
        },
        h(
          Line,
          {
            type: "monotone",
            dataKey: "dynamicDisplayPrice",
            stroke: "#8884d8",
            strokeWidth: 2
          },
          h(LabelList, {
            className: styles.graphLabel,
            labelKey: "dynamicDisplayPrice",
            position: "bottom"
          })
        )
      )
    ),
    h(
      CardActionArea,
      {
        onClick: toggleHistoryView,
        classes: { root: styles.cardActionArea }
      },
      h(CardMedia, { className: styles.image, image: `${displayPictureUrl}` }),
      h(
        CardContent,
        { classes: { root: styles.cardContent } },
        h(
          "div",
          { className: styles.addressPrice },
          h(
            Typography,
            { className: styles.address, variant: "body1" },
            address
          ),
          h(
            Typography,
            { className: styles.priceText, variant: "h5" },
            `$${getNicePrice(dynamicDisplayPrice)} CAD per night`
          )
        ),
        h(
          "div",
          { className: styles.location },
          h(Room, { className: styles.locationIcon }),
          h(
            Typography,
            { className: styles.locationText, variant: "body2" },
            `${city}, ${state}`
          )
        ),
        h(
          "div",
          { className: styles.lastUpdated },
          h(Update, { className: styles.timeIcon }),
          h(
            Typography,
            { className: styles.locationText, variant: "body2" },
            `Last updated on ${moment(dateTime).format("L")} at ${moment(
              dateTime
            ).format("LTS")}`
          )
        )
      )
    )
  );
};

export default PropertyCard;
