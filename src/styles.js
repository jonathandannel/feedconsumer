import { makeStyles } from "@material-ui/core/styles";

export const propertyFeedStyles = makeStyles({
  main: {
    padding: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  appBar: {
    height: "4rem",
    background: "#1d1d1d",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem"
  },
  progressBar: {
    height: "0.25rem",
    width: "100%",
    color: "lightgreen",
    transform: "scale(0.7) translateX(-1rem) translateY(-0.5rem)",
    marginRight: "1rem",
    paddingBottom: "0.45rem"
  },
  loadingIndicator: {
    display: "flex",
    paddingTop: "0.3rem",
    transform: "translateX(-1rem)"
  },
  loadingText: {
    paddingTop: "0.5rem"
  },
  checkIcon: {
    color: "lightgreen",
    marginRight: "1rem",
    transform: "scale(1.01) translateY(0.25rem)"
  },
  snackBar: {
    right: "0 !important"
  }
});

export const propertyCardStyles = makeStyles({
  cardContainer: {
    width: "33vw",
    marginBottom: "2rem"
  },
  image: {
    height: "180px"
  },
  cardContent: {
    padding: "24px"
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column"
  },
  lastUpdated: {
    display: "flex"
  },
  location: {
    display: "flex",
    marginBottom: "0.25rem"
  },
  addressPrice: {
    paddingLeft: "0.4rem"
  },
  addressIcon: {},
  color: "#ec3b3b",
  cardText: {
    padding: "0.25rem"
  },
  timeText: {
    padding: "1rem"
  },
  priceText: {
    paddingTop: "0.25rem",
    paddingBottom: "0.5rem"
  },
  locationText: {
    padding: "0.15rem"
  },
  locationIcon: {
    marginRight: "0.25rem",
    color: "green"
  },
  timeIcon: {
    marginRight: "0.26rem",
    transform: "scale(0.96)",
    color: "purple"
  }
});
