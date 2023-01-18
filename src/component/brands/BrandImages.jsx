import google from "../../images/google.png";
import slack from "../../images/slack.png";
import shopify from "../../images/shopify.png";
import dropbox from "../../images/dropbox.png";
import atlassian from "../../images/atlassian.png";

let id = 0;
function BrandImages() {
  return [
    {
      src: google,
      alt: "google",
      id: id++,
      pixel: "50px",
    },
    {
      src: slack,
      alt: "slack",
      id: id++,
      pixel: "50px",
    },
    {
      src: shopify,
      alt: "shopify",
      id: id++,
      pixel: "50px",
    },
    {
      src: dropbox,
      alt: "dropbox",
      id: id++,
      pixel: "50px",
    },
    {
      src: atlassian,
      alt: "atlassian",
      id: id++,
      pixel: "50px",
    },
  ];
}

export default BrandImages;
