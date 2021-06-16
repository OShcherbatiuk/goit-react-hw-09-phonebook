import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/phonebook">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/phonebook">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/phonebook" redirectTo="/login">
            <PhonebookView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurretnUser();
//   }

//   render() {
//     return (
//       <Container>
//         <AppBar />
//         <Suspense fallback={<p>Loading...</p>}>
//           <Switch>
//             <PublicRoute exact path="/" component={HomeView} />
//             <PublicRoute
//               path="/register"
//               restricted
//               redirectTo="/phonebook"
//               component={RegisterView}
//             />
//             <PublicRoute
//               path="/login"
//               restricted
//               redirectTo="/phonebook"
//               component={LoginView}
//             />
//             <PrivateRoute
//               path="/phonebook"
//               redirectTo="/login"
//               component={PhonebookView}
//             />
//           </Switch>
//         </Suspense>
//       </Container>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurretnUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
