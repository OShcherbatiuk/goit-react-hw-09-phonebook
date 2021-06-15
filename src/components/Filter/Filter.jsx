import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import shortid from 'shortid';
import s from './Filter.module.css';
import {
  getFilter,
  getAllContacts,
} from '../../redux/phonebook/phonebook-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const isShowContact = useSelector(getAllContacts).length;
  const inputId = shortid.generate();

  const onChange = useCallback(e => dispatch(changeFilter(e.target.value)), [
    dispatch,
  ]);

  return isShowContact ? (
    <label className={s.label} htmlFor={inputId}>
      Find contacts by name
      <input
        className={s.input}
        id={inputId}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  ) : (
    <p>You haven't any contacts</p>
  );
}

// const Filter = ({ contacts, value, onChange }) => {
//   const isShowContact = contacts.length;
//   return isShowContact ? (
//     <label className={s.label} htmlFor={inputId}>
//       Find contacts by name
//       <input
//         className={s.input}
//         id={inputId}
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </label>
//   ) : (
//     <p>You haven't any contacts</p>
//   );
// };

// const mapStateToProps = state => ({
//   value: getFilter(state),
//   contacts: getAllContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
