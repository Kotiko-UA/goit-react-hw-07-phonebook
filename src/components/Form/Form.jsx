import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Error, FormEl, Input, Label } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { addContacts } from 'components/redux/operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Must be min 7 numbers!')
    .max(15, 'Must be max 15 numbers!!')
    .required('Required'),
});

export const FormPhoneBook = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const onSubmit = ({ name, phone }) => {
    if (contacts.find(contact => contact.phone === phone)) {
      Notify.failure(`${phone} is alredy in contacts`);
      return;
    }
    const newContact = { name, phone };
    dispatch(addContacts(newContact));
  };
  return (
    <div>
      <Formik
        initialValues={{ name: '', phone: '' }}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
        validationSchema={SignupSchema}
      >
        <FormEl>
          <Label>
            Name
            <Input name="name" type="text" />
            <Error name="name" component="span" />
          </Label>
          <Label>
            Number
            <Input name="number" type="tel" />
            <Error name="number" component="span" />
          </Label>

          <Button type="submit">add contact</Button>
        </FormEl>
      </Formik>
    </div>
  );
};
