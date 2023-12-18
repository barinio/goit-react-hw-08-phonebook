import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';
import { deleteContact } from 'redux/contacts/contactsSlice';

import { ItemRow, Table, TableBody, TabletHead } from './ContactsList.styled';
import ContactUpdate from 'components/ContactUpdate/ContactUpdate';
import { setItem } from 'redux/contacts/itemSlice';
import { setIsOpenModal } from 'redux/contacts/isOpenModalSlilce';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  const handleOpen = contact => {
    dispatch(setItem(contact));
    dispatch(setIsOpenModal(true));
  };

  return (
    <>
      <Table>
        <TabletHead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th></th>
            <th></th>
          </tr>
        </TabletHead>
        <TableBody>
          {contacts.map(({ id, name, number }) => {
            return (
              <ItemRow key={id}>
                <td onClick={() => handleOpen({ id, name, number })}>{name}</td>
                <td onClick={() => handleOpen({ id, name, number })}>
                  {number}
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() => {
                      toast(`❌ Contact «${name}» successfully deleted`, {
                        autoClose: 3000,
                      });
                      return dispatch(deleteContact(id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </ItemRow>
            );
          })}
        </TableBody>
      </Table>
      <ContactUpdate />
    </>
  );
};
