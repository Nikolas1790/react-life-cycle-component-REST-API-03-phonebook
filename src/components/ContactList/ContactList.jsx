import { ButtonDel, ItemContact, ItemsContracts } from "components/App.styled"

export const ContactList =({options, onDeleteContact}) => {
    return(
    <div>
        <ItemsContracts>          
          {options.map(({id, name, number}) =>(
            <ItemContact key={id}>{name}: {number}
            <ButtonDel onClick={() => onDeleteContact(id)}>
              Delete</ButtonDel>
            </ItemContact>
         ) )}
        </ItemsContracts>
    </div>
)}