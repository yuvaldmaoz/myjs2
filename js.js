const contacts = [
    { name: 'Yuval Maoz', phone: '0507518599', email: 'yuval@gmail.com' },
    { name: 'John Doe', phone: '0501234567', email: 'john@gmail.com' },
    { name: 'Jane Doe', phone: '0509876543', email: 'jane@gmail.com' }
];
let editingContactIndex = null;

function renderContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = contacts.map((contact, index) => `
        <li>
            <div class="contact-info">
                <div class="name">${contact.name}</div>
                <div class="phone">${contact.phone}</div>
                <div class="email">${contact.email}</div>
            </div>
            <div class="buttons">
                <button onclick="editContact(${index})">Edit</button>
                <button onclick="deleteContact(${index})">Delete</button>
            </div>
        </li>
    `).join('');
}

function openModal() {
    document.getElementById('contactModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
    document.getElementById('contactName').value = '';
    document.getElementById('contactPhone').value = '';
    document.getElementById('contactEmail').value = '';
    editingContactIndex = null;
}

function saveContact() {
    const name = document.getElementById('contactName').value;
    const phone = document.getElementById('contactPhone').value;
    const email = document.getElementById('contactEmail').value;

    if (editingContactIndex !== null) {
        contacts[editingContactIndex] = { name, phone, email };
    } else {
        contacts.push({ name, phone, email });
    }

    closeModal();
    renderContacts();
}

function editContact(index) {
    const contact = contacts[index];
    document.getElementById('contactName').value = contact.name;
    document.getElementById('contactPhone').value = contact.phone;
    document.getElementById('contactEmail').value = contact.email;
    editingContactIndex = index;
    openModal();
}

function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}

document.addEventListener('DOMContentLoaded', renderContacts);
