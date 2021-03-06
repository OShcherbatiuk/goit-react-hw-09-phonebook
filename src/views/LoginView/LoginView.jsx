import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setUserLogin(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn(userLogin));

    setUserLogin({ email: '', password: '' });
  };

  return (
    <div className={s.section}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.title}>
          Mail
          <input
            className={s.input}
            type="email"
            name="email"
            value={userLogin.email}
            onChange={handleChange}
          />
        </label>

        <label className={s.title}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={userLogin.password}
            onChange={handleChange}
          />
        </label>

        <button className={s.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div className={s.section}>
//         <form onSubmit={this.handleSubmit} className={s.form}>
//           <label className={s.title}>
//             Mail
//             <input
//               className={s.input}
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className={s.title}>
//             Password
//             <input
//               className={s.input}
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button className={s.button} type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
