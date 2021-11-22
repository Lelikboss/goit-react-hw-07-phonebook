import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from './List.module.css';

const ContactTable = ({ contacts, onDelete, deleting }) => {
  const filter = useSelector(getFilter);
  const idFromContacts = contacts.map(contact => ({
    ...contact,
    key: contact.id,
  }));
  const getVisibleItems = () => {
    const normalizedFilter = filter.toLowerCase();
    return idFromContacts.filter(e =>
      e.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const allContacts = getVisibleItems();
  return (
    <>
      <ul className={s.list}>
        <li>
          <ul className={s.listFlex}>
            <li className={s.listHeadItem}>Name</li>
            <li className={s.listHeadItem}>Phone</li>
            <li className={s.listHeadItem}>Delete</li>
          </ul>
        </li>
        <li>
          <ul className={s.list}>
            {allContacts.map(({ name, phone, id }) => (
              <li key={id} className={s.itemFlex}>
                <p className={s.flexBasis}>{name}</p>{' '}
                <p className={s.flexBasis}>{phone}</p>
                <button
                  className={s.btn}
                  type="button"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};
export default ContactTable;
