import React from "react";
import SideNavbar from "../../components/SideNavbar/sideNavbar";

const BrowseEventsPage = () => {
  return (
    <SideNavbar activePath="/browse">
      <a href="https://www.figma.com/proto/vVq24MxjlQs6JxF3hM3bPs/GivingBackSg?node-id=8%3A5&scaling=scale-down&page-id=0%3A1&starting-point-node-id=21%3A2489">
        <img
          src={require("../../assets/images/browse_mockup.png")}
          alt="mockup"
        />
      </a>
    </SideNavbar>
  );
};

export default BrowseEventsPage;
