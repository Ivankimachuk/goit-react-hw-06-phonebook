import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "redux/appReducer";
import { ContactLists, ContactItem, Btn } from "components/Emotion.styled";

const ContactList = () => {
  const filterContacts = useSelector((state) => {
    const filter = state.appState.filter.toLowerCase();
    return state.appState.contacts.filter(
      (contact) => contact.name.toLowerCase().includes(filter)
    );
  });

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContacts(id));
  };

  return (
    <ContactLists>
      {filterContacts.map((contact) => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <Btn onClick={() => handleDelete(contact.id)}>Delete</Btn>
        </ContactItem>
      ))}
    </ContactLists>
  );
};

export default ContactList;
