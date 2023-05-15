import { ActionFunctionArgs, redirect } from "react-router-dom"
import { deleteContact } from "../contacts"

export const action = async (args: ActionFunctionArgs) => {
  await deleteContact(args.params.contactId)
  return redirect('/')
}
