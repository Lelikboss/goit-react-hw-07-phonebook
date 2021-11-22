import { ContactsList } from './components/List/fetchApi';
import { CreateContact } from './components/Form/createContact';
import { PageHeader, Divider, Row, Col } from 'antd';
import ContactFilter from './components/ContactFilter/ContactFilter';
export default function App() {
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <PageHeader
            className="site-page-header"
            title="Phonebook"
            subTitle="This is your phone book"
          />
          <Divider />
          <ContactFilter />
          <CreateContact />
          <ContactsList />
        </Col>
      </Row>
    </>
  );
}
