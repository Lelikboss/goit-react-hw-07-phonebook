import { useState } from 'react';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts/contactsSlice';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Form, Input, Button, message } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
export const CreateContact = () => {
  const [form] = Form.useForm();
  const [contactName, setContactName] = useState('');
  const [createContact] = useCreateContactMutation();
  const { data, isFetching } = useFetchContactsQuery();
  console.log(isFetching);
  const handlerSubmit = values => {
    createContact({
      name: values.content,
      phone: values.number,
    });
    form.resetFields();
    setContactName('');
  };
  const handlerChange = e => {
    console.log(e.currentTarget.value);
    setContactName(e.currentTarget.value);
    qwe();
    asd();
  };
  const qwe = () => {
    if (data !== undefined) {
      return data.map(contact => contact.name).includes(contactName);
    } else {
      return;
    }
  };
  const asd = () =>
    contactName && qwe() === true ? message.warning('warning') : null;
  return (
    <Form
      autoComplete="off"
      form={form}
      {...formItemLayout}
      onFinish={handlerSubmit}
    >
      <Form.Item
        type="text"
        name="content"
        label=""
        hasFeedback
        validateStatus={contactName && qwe() === true ? 'warning' : null}
        // help={qwe() === true ? 'Это имя уже занято' : 'Введите имя контакта'}
      >
        <Input
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handlerChange}
          placeholder="Name"
        />
      </Form.Item>
      <Form.Item
        type="tel"
        // help={'Введите номер телефона'}
        name="number"
        label=""
      >
        <Input
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="xxx-xxx-xxx"
        />
      </Form.Item>
      <Form.Item label="">
        <Button
          type="primary"
          htmlType="submit"
          disabled={contactName && qwe() === false ? false : true}
        >
          Create contact
        </Button>
      </Form.Item>
    </Form>
  );
};
