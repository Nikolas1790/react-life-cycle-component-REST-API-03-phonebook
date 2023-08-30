import { Component } from "react"
import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter"


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''    
  }
  
  formSubmitHendle = data => {
    const returnContact = this.state.contacts.find(contact => contact.name.toLowerCase().includes(data.name.toLowerCase()) );

    if(returnContact){
      return alert(`${data.name} is already in contacts`)
    }
    this.setState(prev => ({contacts: [...prev.contacts, data]}))
      }

  deleteItem = (itemId) => {
    this.setState(prevState =>({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }))
  }

  handleImputFilter = e => {
    const {name, value} = e.target;
    
    this.setState({[name]: value})        
  }

  getVisibleItems = () => {
    const {contacts, filter} = this.state;
    return  contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())      
      )
  } 

  componentDidMount(){
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if(parseContacts !== null){
      this.setState({contacts: parseContacts})
    } 
  }
  componentDidUpdate(_, prevState) { 
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
        
  } 
   
  render() {
    const getVisibleItems =this.getVisibleItems()
    const {filter} = this.state

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHendle}/> 
        <h2>Contacts</h2>
        <Filter handleImputFilter={this.handleImputFilter} value={filter}/>  
        <ContactList options={getVisibleItems} onDeleteContact={this.deleteItem}/>
      </div>
    )
  };
};


