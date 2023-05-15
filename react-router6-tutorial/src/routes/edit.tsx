
import { ActionFunctionArgs, Form, redirect, useLoaderData } from 'react-router-dom'
import { updateContact } from '../contacts'
import { Contact } from './contact'

export default () => {
  const { contact } = useLoaderData() as ({ contact: Contact })

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  )
}

export const action = async (args: ActionFunctionArgs) => {
  const formData = await args.request.formData()
  const updates = Object.fromEntries(formData)
  await updateContact(args.params.contactId, updates)
  return redirect(`/contacts/${args.params.contactId}`)
}
