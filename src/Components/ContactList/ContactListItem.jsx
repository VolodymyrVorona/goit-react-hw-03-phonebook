import PropTypes from 'prop-types';
import st from './ContactList.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={st.listItem}>
      <span className={st.name}>{contact.name}:</span>
      <span className={st.number}>{contact.number}</span>
      <button
        className={st.btn}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactListItem;
