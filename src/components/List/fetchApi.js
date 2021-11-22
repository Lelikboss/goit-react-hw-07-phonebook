import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contacts/contactsSlice';
import List from './List';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './fetchApi.module.css';
export const ContactsList = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <div>
      {isFetching && <Loader className={s.loader} timeout={13000} />}
      {data && (
        <List
          className={s.table}
          contacts={data}
          onDelete={deleteContact}
          deleting={isDeleting}
        />
      )}
    </div>
  );
};
