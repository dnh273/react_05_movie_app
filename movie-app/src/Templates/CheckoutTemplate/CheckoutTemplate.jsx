import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "../../util/setting/config";

const CheckoutTemplate = (props) => {
  // path, exact, Component
  const { Component, ...restRoute } = props;

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        // props.location, props.history, props.match
        return (
          <Fragment>
            <Component {...propsRoute}></Component>
          </Fragment>
        );
      }}
    />
  );
};

export default CheckoutTemplate;
