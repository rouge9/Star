/* eslint-disable react/prop-types */
import { Fragment } from "react";
import FloatingNavBar from "../componets/FloatingNavBar";
import SimpleFooter from "../componets/SimpleFooter";
import Banner from "../componets/Banner";
// import GlassBanner from "../componets/GlassBanner";

function Layout({ children }) {
  return (
    <Fragment>
      <Banner />
      {/* <GlassBanner /> */}
      <FloatingNavBar />
      {children}
      <SimpleFooter />
    </Fragment>
  );
}

export default Layout;
