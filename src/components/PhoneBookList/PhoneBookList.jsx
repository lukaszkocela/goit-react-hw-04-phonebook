import css from './PhoneBookList.module.css';
import PropTypes from 'prop-types';

export const PhoneBookList = props => {
  const { contacts, onClick } = props;

  const handleDelete = id => onClick(id.target.value);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.list}>
            {contact.name}: {contact.number}
            <button
              type="submit"
              value={contact.id}
              onClick={handleDelete}
              className={css.delete}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

PhoneBookList.propTypes = {
  onClick: PropTypes.func.isRequired,
};