import React, { useEffect, useRef } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
} from "reactstrap";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import MainNavbar from "components/Navbars/MainNavbar";
import Hero from "views/IndexSections/Hero";
import StoryPage from "views/IndexSections/StoryPage";

function Profile() {
  const mainRef = useRef(null);



  return (
    <>
      <MainNavbar />
      <Hero />
      <StoryPage/>
      <SimpleFooter />
    </>
  );
}

export default Profile;
