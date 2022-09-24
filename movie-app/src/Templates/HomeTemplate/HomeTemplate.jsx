import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => {
  // path, exact, Component
  const { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        // props.location, props.history, props.match
        return (
          <Fragment>
            <Header></Header>

            <Component {...propsRoute} />

            <Footer></Footer>
          </Fragment>
        );
      }}
    ></Route>
  );
};
