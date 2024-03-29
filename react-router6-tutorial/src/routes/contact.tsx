import { ActionFunctionArgs, Form, LoaderFunctionArgs, useFetcher, useLoaderData } from "react-router-dom";
import { getContact, updateContact } from "../contacts";

export type Contact = {
  id?: string,
  createdAt?: number,
  first?: string,
  last?: string,
  avatar?: string,
  twitter?: string,
  notes?: string,
  favorite?: boolean,
}

export default () => {

  const { contact } = useLoaderData() as { contact: Contact }

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || undefined}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite(value: { contact: Contact }) {
  const fetcher = useFetcher()
  const { contact } = value

  // yes, this is a `let` for later
  let favorite = contact.favorite;
  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true'
  }
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  )
}

export const loader = async (args: LoaderFunctionArgs) => {
  const contact = await getContact(args.params.contactId)
  if (!contact) {
    throw new Response(undefined, {
      status: 404,
      statusText: 'Not Found',
    })
  }
  return { contact }
}

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData()
  return updateContact(params.contactId, { favorite: formData.get('favorite') === 'true' })
}
