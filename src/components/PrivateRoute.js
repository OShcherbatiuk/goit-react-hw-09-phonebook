import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */

export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isLoggedOn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedOn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

// const PrivateRoute = ({
//   component: Component,
//   isAuthenticated,
//   redirectTo,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={props =>
//       isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
//     }
//   />
// );

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
