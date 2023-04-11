import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import footerlogo from "../../assets/Footerlogo.png";
import style from "./style";



const useStyles = makeStyles(style);
const FOOTER_CONTENT = [
  {
    Heading: "Company Information",
    options: [
      { link: "", text: "About Us" },
      { link: "", text: "Why Us" },
      { link: "", text: "How it works" },
      { link: "", text: "Testimonial" },
      { link: "", text: "Our Team" },
      { link: "", text: "FAQ" },
      { link: "", text: "Contact Us" },
      { link: "", text: "Careers" },
    ],
  },
  {
    Heading: "What you can do at HireCoder",
    options: [
      { link: "", text: "Post a project" },
      { link: "", text: "Startup Partnership" },
      { link: "", text: "Search Coders" },
      { link: "", text: "Blog" },
    ],
  },
  {
    Heading: "Browse HireCoder",
    options: [
      { link: "", text: "Hiring Process for Top 1%" },
      { link: "", text: "US based Coders" },
      { link: "", text: "Top 1% Java Coders" },
      { link: "", text: "Top 1% Java Coders" },
      { link: "", text: "Top 1% UI Coders" },
      { link: "", text: "Top 1% Mobile Coders" },
    ],
  },
];
function Footer() {
  const classes = useStyles();

  return (
    <>
      <Divider />
      <div className={classes.container}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={3}
            sm={3}
            order={{ xs: 2, sm: 1 }}
            alignItems="center"
          >
            <div className={classes.logo}>
              <img src={footerlogo} />
              <div
                style={{
                  display: "flex",
                }}
              >
                <FacebookRoundedIcon sx={{ color: "#43619C" }} />
                <TwitterIcon sx={{ color: "#24A9E6" }} />
                <LinkedInIcon sx={{ color: "#187FB8" }} />
                <GoogleIcon sx={{ color: "#ec5f55" }} />
                <YouTubeIcon sx={{ color: "#F24033" }} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={9} sm={9} order={{ xs: 1, sm: 2 }}>
            <Grid container spacing={2}>
              {FOOTER_CONTENT.map((item) => {
                return (
                  <Grid item xs={12} md={4} sm={4} key={item.Heading}>
                    <h4>{item.Heading}</h4>
                    {item.options.map((items) => {
                      return (
                        <div key={item.text} className={classes.anchor}>
                          <Link to={items.link}>{items.text}</Link>
                        </div>
                      );
                    })}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <Grid item xs={12} sm={12} container className={classes.copyRight}>
        <Grid item xs={12} md={6} sm={6}>
          <p>© Copyright 2017 Hirecoder, INC.</p>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          container
          className={classes.extraInfo}
        >
          <Grid item xs={12}>
            <span> Terms & Conditions | Privacy Policy </span>
          </Grid>
          <Grid item xs={12} container className={classes.smallFont}>
            <Grid item xs={12}>
              For 12+months contract
            </Grid>
            <Grid item xs={12}>
              Independent research team
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
