import { getFilter } from '../../redux/contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { filterValue } from '../../redux/contacts/contacts-actions';
import { Form, Input } from 'antd';

const ContactFilter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
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
  return (
    <>
      <Form.Item
        {...formItemLayout}
        type="text"
        // help={'Поиск по имени'}
      >
        <Input
          value={value}
          onChange={e => dispatch(filterValue(e.target.value))}
          type="text"
          placeholder="Find contact by name"
        />
      </Form.Item>
    </>
  );
};
export default ContactFilter;
