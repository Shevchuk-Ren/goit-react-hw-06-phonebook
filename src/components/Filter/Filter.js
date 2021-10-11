import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/phoneBook/phonebook-actions';

const Filter = ({ filter, onChange }) => (
  <Label>
    Find contacts by name
    <Input
      type="text"
      value={filter}
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      onChange={onChange}
    />
  </Label>
);

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.phoneBook.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: evt => dispatch(filterContacts(evt.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
