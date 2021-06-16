import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import { phonebookOperations } from '../../redux/phonebook';
import { getAllContacts } from '../../redux/phonebook/phonebook-selectors';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ name: '', number: '' });
  const contacts = useSelector(getAllContacts);

  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const isNoUnique = contacts.find(contact => contact.name === user.name);
      const onSubmit = data => dispatch(phonebookOperations.addContact(data));
      isNoUnique ? alert(`${user.name} is alredy in contacts`) : onSubmit(user);
      setUser({ name: '', number: '' });
    },
    [contacts, user, dispatch],
  );

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={nameInputId}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            id={nameInputId}
            value={user.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor={numberInputId}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            id={numberInputId}
            value={user.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// class ContactForm extends Component {
//   state = {
//     ...INITIAL_STATE,
//   };
// nameInputId = shortid.generate();
// numberInputId = shortid.generate();

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { name } = this.state;
//     const isNoUnique = this.props.contacts.find(
//       contact => contact.name === name,
//     );
//     isNoUnique
//       ? alert(`${name} is alredy in contacts`)
//       : this.props.onSubmit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     return (
//       <div>
//         <form className={s.form} onSubmit={this.handleSubmit}>
//           <label className={s.label} htmlFor={this.nameInputId}>
//             Name
//             <input
//               className={s.input}
//               type="text"
//               name="name"
//               id={this.nameInputId}
//               value={this.state.name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <label htmlFor={this.numberInputId}>
//             Number
//             <input
//               className={s.input}
//               type="tel"
//               name="number"
//               id={this.numberInputId}
//               value={this.state.number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//               onChange={this.handleChange}
//             />
//           </label>
//           <button className={s.btn} type="submit">
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onSubmit: data => dispatch(phonebookOperations.addContact(data)),
// });

// const mapStateToProps = state => ({
//   contacts: getAllContacts(state),
// });

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
