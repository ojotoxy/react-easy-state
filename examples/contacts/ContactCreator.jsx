import React, { Component } from 'react'
import { easyComp } from 'react-easy-state'
import store from './store'

class ContactCreator extends Component {
  // save internal utility data in component state, instead of the global store
  // newContact is the skeleton for the next contact before it is added to the list
  state = {
    newContact: { name: '', email: '' }
  }

  // transfer finalized contact from the component state to the main store
  addContact () {
    store.addContact(this.state.newContact)
    this.state.newContact = { name: '', email: '' }
  }

  onChange (ev) {
    const { newContact } = this.state
    newContact[ev.target.name] = ev.target.value
  }

  // render is triggered whenever the relevant parts of the component state or global store change
  render () {
    const { addContact, onChange } = this
    const { newContact } = this.state

    return (
      <tr className="contact-creator">
        <td><input name="name" value={newContact.name} onChange={onChange} placeholder="Contact name..."/></td>
        <td><input name="email" value={newContact.email} onChange={onChange} placeholder="Contact email..."/></td>
        <td><button onClick={addContact}>Add Contact</button></td>
      </tr>
    )
  }
}

// wrap the component with easyComp before exporting it
export default easyComp(ContactCreator)
