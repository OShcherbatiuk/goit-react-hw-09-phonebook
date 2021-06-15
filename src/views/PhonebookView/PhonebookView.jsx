import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import contactOperations from '../../redux/phonebook/phonebook-operations';
import { getIsLoading } from '../../redux/phonebook/phonebook-selectors';

export default function PhonebookView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(contactOperations.fetchContact());
  }, [dispatch]);

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        {isLoading && <p>Loading...</p>}
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

// class App extends Component {
//   componentDidMount() {
//     this.props.fetchContact();
//   }

//   render() {
//     return (
//       <Container>
//         <Section title={'Phonebook'}>
//           <ContactForm />
//         </Section>
//         <Section title={'Contacts'}>
//           {this.props.isLoading && <p>Loading...</p>}
//           <Filter />
//           <ContactList />
//         </Section>
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoading: getIsLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContact: () => dispatch(contactOperations.fetchContact()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
