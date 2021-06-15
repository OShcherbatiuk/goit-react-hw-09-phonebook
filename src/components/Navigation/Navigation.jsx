import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Main
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/phonebook"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}

// const Navigation = ({ isLoggedIn }) => (
//   <nav>
//     <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
//       Main
//     </NavLink>
//     {isLoggedIn && (
//       <NavLink
//         to="/phonebook"
//         exact
//         style={styles.link}
//         activeStyle={styles.activeLink}
//       >
//         Phonebook
//       </NavLink>
//     )}
//   </nav>
// );

// const mapStateToProps = state => ({
//   isLoggedIn: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
