import PropTypes from 'prop-types';
import st from './ContactList.module.css';

const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <li className={st.listItem}>
      <span className={st.name}>{name}:</span>
      <span className={st.number}>{number}</span>
      <button className={st.btn} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactListItem;
