import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './RegisterView.module.css';

export default function RegisterView() {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = useCallback(({ target: { name, value } }) => {
    setNewUser(prev => ({ ...prev, [name]: value }));
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(authOperations.register(newUser));
      setNewUser({ name: '', email: '', password: '' });
    },
    [newUser, dispatch],
  );

  return (
    <div className={s.section}>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.title}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
        </label>

        <label className={s.title}>
          Mail
          <input
            className={s.input}
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </label>

        <label className={s.title}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
        </label>

        <button className={s.button} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div className={s.section}>
//         <form
//           onSubmit={this.handleSubmit}
//           className={s.form}
//           autoComplete="off"
//         >
//           <label className={s.title}>
//             Name
//             <input
//               className={s.input}
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>

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
//             Sign up
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
