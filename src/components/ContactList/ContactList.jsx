import { useSelector, useDispatch } from 'react-redux';
import { phonebookOperations } from '../../redux/phonebook';

import { getVisibleContact } from '../../redux/phonebook/phonebook-selectors';

import s from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContact);
  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          {name}: {number}
          <button
            className={s.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul className={s.list}>
//       {contacts.map(({ id, name, number }) => (
//         <li className={s.item} key={id}>
//           {name}: {number}
//           <button
//             className={s.btn}
//             type="button"
//             onClick={() => onDeleteContact(id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const mapStateToProps = state => ({
//   contacts: getVisibleContact(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
// });

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape),
//   onDeleteContact: PropTypes.func,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
