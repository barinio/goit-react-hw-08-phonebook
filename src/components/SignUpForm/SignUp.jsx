import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormButton,
  FormContainer,
  Input,
  Label,
} from 'components/ContactsForm/ContactsForm.styled';
import { signupThunk } from 'redux/auth/thunk';

const nameReg = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const emailReg = /^\w+@\w+\.\w+$/;

const schema = yup.object().shape({
  name: yup.string().matches(nameReg, 'Not valid').required('Required'),
  email: yup.string().matches(emailReg, 'Not valid').required('Required'),
  password: yup.string().min(8, 'Not valid').required('Required'),
});
const SignUpForm = () => {
  const dispatch = useDispatch();
  const submitForm = (values, actions) => {
    actions.resetForm();
    dispatch(signupThunk(values));
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
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
          Email
          <Input type="email" name="email" placeholder="examplemail@mail.com" />
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
export default SignUpForm;
