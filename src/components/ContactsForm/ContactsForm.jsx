import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { addContact } from 'redux/contacts/contactsSlice';
import { selectContacts } from 'redux/contacts/contacts.selectors';

import { FormButton, FormContainer, Input, Label } from './ContactsForm.styled';

const nameReg = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const numReg =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const schema = yup.object().shape({
  name: yup.string().matches(nameReg, 'Not valid').required('Required'),
  number: yup.string().matches(numReg, 'Not valid').required('Required'),
});

export const FormContacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const submitForm = (values, actions) => {
    actions.resetForm();

    if (isDuplicate(values)) return;
    toast.success(`${values.name} add to contacts.`);
    dispatch(addContact(values));
  };

  const isDuplicate = values => {
    const duplicateContactName = contacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicateContactName) {
      toast.error(`${duplicateContactName.name} is already in contacts`);
      return true;
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={submitForm}
    >
      <FormContainer>
        <Label>
          Name
          <Input type="text" name="name" placeholder="John" />
          <ErrorMessage name="name" component={'p'} />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" placeholder="123-45-67" />
          <ErrorMessage name="number" component={'p'} />
        </Label>
        <FormButton type="submit">Add contact</FormButton>
      </FormContainer>
    </Formik>
  );
};
