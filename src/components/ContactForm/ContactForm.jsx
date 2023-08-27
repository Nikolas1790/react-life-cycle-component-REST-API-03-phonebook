import { Component } from "react";
import { nanoid } from 'nanoid'
import { ButtonAddContact, FormTable, InputInfToAdd, Label } from "components/App.styled";

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''        
    }
    handleImputChange = e => {
        const {name, value} = e.target;
        
        this.setState({[name]: value})
      }

      handleAddContact = e => {
        e.preventDefault();
        const id = nanoid();
        this.props.onSubmit({...this.state, id});
        this.reset();
      }

      reset = () => {
        this.setState({name: '', number: ''})
      }

    render (){
        return(
            <div>              
                <FormTable onSubmit={this.handleAddContact}>        
        <Label htmlFor="">
        Name
        <InputInfToAdd
           type="text"
           name="name"
           value={this.state.name}
           onChange={this.handleImputChange}
           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
          />
          </Label>
                
         
         <Label htmlFor="">Number
         <InputInfToAdd
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleImputChange}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            </Label>
            
         <ButtonAddContact type="submit" >Add contact</ButtonAddContact>
        </FormTable>
            </div>
        )
    }
}