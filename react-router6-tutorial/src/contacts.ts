import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import { Contact } from "./routes/contact";

export async function getContacts(query?: string) {
  console.log("Getting contacts");
  await fakeNetwork(`getContacts:${query}`);
  let contacts = (await localforage.getItem<Array<Contact>>("contacts")) ?? [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact(): Promise<Contact> {
  console.log("creating contact");
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact: Contact = { id, createdAt: Date.now() };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: string | undefined) {
  if (!id) return;

  await fakeNetwork(`contact:${id}`);
  let contacts = (await localforage.getItem<Array<Contact>>("contacts")) ?? [];
  let contact = contacts.find((contact) => contact.id === id);
  return contact ?? null;
}

export async function updateContact(id: string | undefined, updates: Contact) {
  if (!id) return;

  await fakeNetwork();
  let contacts = (await localforage.getItem<Array<Contact>>("contacts")) ?? [];
  let contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error(`No contact found for ${id}`);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id: string | undefined) {
  if (!id) return;

  let contacts = (await localforage.getItem<Array<Contact>>("contacts")) ?? [];
  let index = contacts.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts: Array<Contact>) {
  console.log("setting contacts", contacts.length);
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: { [key: string]: any } = {};

async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {};
    return;
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;

  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
