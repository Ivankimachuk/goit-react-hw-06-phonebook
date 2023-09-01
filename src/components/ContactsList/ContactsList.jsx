import React from "react";
import PropTypes from 'prop-types';
import { ContactLists, ContactItem, Btn } from "components/Emotion.styled";

export const ContactList = ({ filterContacts, handleDelete }) => {
    return(
   <ContactLists >
            {filterContacts.map(contact => 

            <ContactItem  key={contact.id}>{contact.name}: {contact.number}
            <Btn onClick={() => handleDelete(contact.id)}>Delete</Btn>
            </ContactItem>)}

</ContactLists>)
}


ContactList.propTypes = {
    filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleDelete:  PropTypes.func.isRequired,
}