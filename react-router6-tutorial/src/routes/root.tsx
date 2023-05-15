import { useEffect } from "react"
import { Form, LoaderFunctionArgs, NavLink, Outlet, redirect, useLoaderData, useNavigation, useSubmit } from "react-router-dom"
import { createContact, getContacts } from '../contacts'
import { Contact } from "./contact"

export default () => {
  const { contacts, q = '' } = useLoaderData() as { contacts: Array<Contact>, q: string }

  // useNavigation returns the current navigation state: it can be one of "idle" | "submitting" | "loading".
  const navigation = useNavigation()
  const submit = useSubmit()

  // The navigation.location will show up when the app is navigating to a new URL and loading the data for it. It then goes away when there is no pending navigation anymore.
  const searching = navigation.location && new URLSearchParams(navigation.location.search).has('q')

  useEffect(() => {
    (document.getElementById('q') as HTMLInputElement).value = q
  }, [q])

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? 'loading' : ''}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q === ''
                submit(event.currentTarget.form, { replace: !isFirstSearch })
              }}
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map(contact => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) => isActive ? 'active' : isPending ? 'pending' : ''}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Contacts</p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === 'loading' ? 'loading' : ''}
      >
        <Outlet />
      </div>
    </>
  )
}

export const loader = async (args: LoaderFunctionArgs) => {
  const url = new URL(args.request.url)
  const query = url.searchParams.get('q') ?? undefined
  const contacts = await getContacts(query)
  return { contacts, q: query }
}

export const action = async () => {
  const contact = await createContact()
  return redirect(`/contacts/${contact.id}/edit`)
}
