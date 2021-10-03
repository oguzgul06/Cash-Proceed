import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@material-ui/core/Link";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <h2>Cash Proceed</h2>
        <p>Copy Right 2021©</p>
      </div>

      <div className="footer__right">
        <Link href="https://www.facebook.com/gridotnet/">
          <FacebookIcon className="icons" />
        </Link>

        <Link href="https://twitter.com/gridotnet">
          <InstagramIcon className="icons" />
        </Link>

        <Link href="https://twitter.com/gridotnet">
          <TwitterIcon className="icons" />
        </Link>

        <Link href="https://www.linkedin.com/company/gri/">
          <LinkedInIcon className="icons" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
