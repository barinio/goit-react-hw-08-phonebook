import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';
import { deleteContact } from 'redux/contacts/contactsSlice';

import { ItemRow, Table, TableBody, TabletHead } from './ContactsList.styled';
import { toast } from 'react-toastify';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <Table>
        <TabletHead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </TabletHead>
        <TableBody>
          {contacts.map(({ id, name, number }) => {
            return (
              <ItemRow key={id}>
                <td>{name}</td>
                <td>{number}</td>
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
    </>
  );
};
// import { useDispatch, useSelector } from 'react-redux';
// import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';
// import { deleteContact } from 'redux/contacts/contactsSlice';

// import { ItemRow, Table, TableBody, TabletHead } from './ContactsList.styled';

// export const ContactsList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectVisibleContacts);
//   const onDeleteContact = id => dispatch(deleteContact(id));
//   return (
//     <>
//       <Table>
//         <TabletHead>
//           <tr>
//             <th>Name</th>
//             <th>Phone</th>
//             <th></th>
//           </tr>
//         </TabletHead>
//         <TableBody>
//           {contacts.map(({ id, name, number }) => {
//             return (
//               <ItemRow key={id}>
//                 <td>{name}</td>
//                 <td>{number}</td>
//                 <td>
//                   <button type="button" onClick={() => onDeleteContact(id)}>
//                     Delete
//                   </button>
//                 </td>
//               </ItemRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </>
//   );
// };
