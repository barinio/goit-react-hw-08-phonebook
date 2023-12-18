import * as yup from 'yup';

import { toast } from 'react-toastify';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { ErrorMessage, Formik } from 'formik';

import {
  FormButton,
  FormContainer,
  Input,
  Label,
} from '../ContactsForm/ContactsForm.styled';
import { updateContact } from 'redux/contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsOpenModal,
  selectUpdateContact,
} from 'redux/contacts/contacts.selectors';

import { setIsOpenModal } from 'redux/contacts/isOpenModalSlilce';
import { setItem } from 'redux/contacts/itemSlice';
import { Caption } from './ContactUpdate.styled';

const nameReg = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const numReg =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().matches(nameReg, 'Not valid').required('Required'),
  number: yup.string().matches(numReg, 'Not valid').required('Required'),
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: ' lightblue ',
  border: '0px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const ContactUpdate = () => {
  const dispatch = useDispatch();

  const updContact = useSelector(selectUpdateContact);

  const open = useSelector(selectIsOpenModal);
  const handleClose = () => dispatch(setIsOpenModal(false));

  const submitForm = (values, actions) => {
    actions.resetForm();
    const { id } = updContact;
    // if (condition) {
    // }
    dispatch(setItem(values));
    toast(
      `✅Contact «${updContact.name}» successfully changed to «${values.name}»`,
      {
        autoClose: 3000,
      }
    );

    dispatch(updateContact({ id, values }));
    handleClose();
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Caption>Update contact</Caption>
          <Formik
            initialValues={{
              name: updContact.name,
              number: updContact.number,
            }}
            validationSchema={schema}
            onSubmit={submitForm}
          >
            <FormContainer>
              <Label>
                {updContact.name}
                <Input type="text" name="name" placeholder="John" />
                <ErrorMessage name="name" component={'p'} />
              </Label>
              <Label>
                {updContact.number}
                <Input type="tel" name="number" placeholder="123-45-67" />
                <ErrorMessage name="number" component={'p'} />
              </Label>
              <FormButton type="submit">Update contact</FormButton>
            </FormContainer>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default ContactUpdate;
