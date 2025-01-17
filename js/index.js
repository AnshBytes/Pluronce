import { homecontent } from "./home.js";
import {aboutcontent} from "./about.js";
import { contactcontent } from "./contact.js";
import { joinuscontent } from "./joinus.js";
import { researchcontent } from "./research.js";

window.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("mainContent"); // Use the correct ID

  const handleRoute = () => {
    const path = window.location.hash.slice(1);
    switch (path) {
      case "home":
        homecontent(); // Call homecontent
        break;
      case "about":
        aboutcontent();
        break;
      case "research":
        researchcontent();
        break;
      case "joinus":
        joinuscontent();
        break;
      case "contact":
        contactcontent();
        break;
      default:
        homecontent();
    }
  };

  window.addEventListener("hashchange", handleRoute);
  handleRoute(); // Trigger routing on load
});
