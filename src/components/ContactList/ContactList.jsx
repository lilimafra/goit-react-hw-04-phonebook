import PropTypes from 'prop-types'; // ES6

import { BsFillPersonLinesFill } from 'react-icons/bs';

import { ContactsList, ContactItem, Button } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ContactsList>
      {items.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <BsFillPersonLinesFill style={{ color: '#050404 ' }} />
            {name} : {number}
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
