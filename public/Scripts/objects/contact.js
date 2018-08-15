let contact;
(function(){
    class Contact {
        // your class definition goes here
        constructor(FirstName, LastName, ContactNumber, EmailAddress) {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.ContactNumber = ContactNumber;
            this.EmailAddress = EmailAddress;
        }
    }

    objects.Contact = Contact;

})(objects || (objects = {}));