import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = filter => {
  const { onChange } = filter;

  const handleChange = evt => onChange(evt.target.value);

  return (
    <>
      <h3 className={css.filter}>Find contact by name</h3>
      <input onChange={handleChange} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};