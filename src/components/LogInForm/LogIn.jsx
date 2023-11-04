import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import {
  FormButton,
  FormContainer,
  Input,
  Label,
} from 'components/ContactsForm/ContactsForm.styled';
import { loginThunk } from 'redux/auth/thunk';

const emailReg = /^\w+@\w+\.\w+$/;

const schema = yup.object().shape({
  email: yup.string().matches(emailReg, 'Not valid').required('Required'),
  password: yup.string().min(8, 'Not valid').required('Required'),
});

const LogInForm = () => {
  const dispatch = useDispatch();
  const submitForm = (values, actions) => {
    actions.resetForm();
    dispatch(loginThunk(values));
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={submitForm}
    >
      <FormContainer>
        <Label>
          Email
          <Input type="email" name="email" placeholder="example@mail.com" />
          <ErrorMessage name="email" component={'p'} />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" placeholder="examplepwd123" />
          <ErrorMessage name="password" component={'p'} />
        </Label>
        <FormButton type="submit">Create User</FormButton>
      </FormContainer>
    </Formik>
  );
};

export default LogInForm;
