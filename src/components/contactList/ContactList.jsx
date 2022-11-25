import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContacts } from '../../redux/operations';
import { Item, List } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // console.log('contacts', contacts)
  // const contactList = contacts.items.filter(contact =>
  //   contact.name.toLowerCase()
  //   // .includes(filter)
  // );
  
  return (
    <List>
      {/* {contactList.map(contact => (
        <Item key={contact.id}>
          <p>
            {contact.name} : {contact.number}
          </p>
          <button 
          // onClick={() => (dispatch(deleteContacts(contact.id)))}
          >
            Delete
          </button>
        </Item>
      ))} */}
    </List>
  );
};

export default ContactList;
