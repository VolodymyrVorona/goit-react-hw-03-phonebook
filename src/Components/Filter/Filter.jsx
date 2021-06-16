import PropTypes from 'prop-types';
import st from './Filter.module.css';

const Filter = ({ onContactsFilter, value }) => {
  return (
    <div className={st.wrapper}>
      <label className={st.label}>
        Find contacts by name
        <input
          className={st.input}
          type="text"
          name="name"
          value={value}
          onChange={onContactsFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onContactsFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
