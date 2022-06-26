import React from "react"
import ContactsData from "../../content/contacts.json"

const Contacts = () => {
    const src = (name) => `https://faiyazbits-images.s3.us-east-2.amazonaws.com/${name.toLowerCase()}.svg`
    return(
        <div className="flex flex-row mt-3">
            {
                ContactsData.map((contact) => (
                    <a href={contact.href} key={contact.name} target="_blank" rel="noreferrer" className="dark:bg-white border-black  border-2 dark:border-white mr-2 p-2 rounded-full cursor-pointer">
                        <img className="object-contain w-6 h-6" src={src(contact.name)} alt={contact.name} />
                    </a>
                ))
            }
        </div>
    )
}

export default Contacts