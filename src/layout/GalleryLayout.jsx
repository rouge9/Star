/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Banner from "../componets/Banner";
import SimpleFooter from "../componets/SimpleFooter";
import NotStickyNavBar from "../componets/NotStickyNavBar";

function GalleryLayout({ children }) {
  return (
    <Fragment>
      <Banner />
      {/* <GlassBanner /> */}
      <NotStickyNavBar />
      {children}
      <SimpleFooter />
    </Fragment>
  );
}

export default GalleryLayout;
