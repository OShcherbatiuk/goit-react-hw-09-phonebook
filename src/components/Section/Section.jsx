import s from './Section.module.css';
import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Section;
