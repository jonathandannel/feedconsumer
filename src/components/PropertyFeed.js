import { createElement as h, Fragment } from "react";
import { AppBar, CircularProgress, Typography } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import { propertyFeedStyles } from "../styles";

import PropertyCard from "./PropertyCard";

const PropertyFeed = ({
  allProperties,
  loading,
  additionalProperties,
  getAdditionalProperties
}) => {
  const styles = propertyFeedStyles();

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      getAdditionalProperties();
    }
  };

  const newest = allProperties.slice(-10);

  return h(
    "div",
    {},
    h(
      AppBar,
      { className: styles.appBar },
      h(
        "div",
        { className: styles.loadingIndicator },
        !loading
          ? h(
              Fragment,
              null,
              h(CircularProgress, {
                className: styles.progressBar,
                variant: "indeterminate"
              }),
              h(
                Typography,
                { variant: "caption", className: styles.loadingText },
                "Searching..."
              )
            )
          : h(
              Fragment,
              null,
              h(Check, { className: styles.checkIcon }),
              h(
                Typography,
                { variant: "caption", className: styles.loadingText },
                "Found 10 updated listings"
              )
            )
      )
    ),
    h(
      "div",
      { className: styles.main },
      newest.map(
        ({
          address,
          city,
          bathrooms,
          displayPictureUrl,
          state,
          dynamicDisplayPrice,
          dateTime
        }) =>
          h(PropertyCard, {
            address,
            city,
            state,
            bathrooms,
            displayPictureUrl,
            dynamicDisplayPrice,
            dateTime,
            loading,
            allProperties
          })
      ),
      additionalProperties &&
        additionalProperties.map(
          ({
            address,
            city,
            bathrooms,
            displayPictureUrl,
            state,
            dynamicDisplayPrice,
            dateTime
          }) =>
            h(PropertyCard, {
              address,
              city,
              state,
              bathrooms,
              displayPictureUrl,
              dynamicDisplayPrice,
              dateTime,
              loading,
              allProperties
            })
        )
    )
  );
};

export default PropertyFeed;
