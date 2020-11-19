function ContactCard(props){
    return(
        <div>
            <img width="200px" src={props.contact.img} />
            <p>{props.contact.name}</p>
            <p>{props.contact.email}</p>
            <p>{props.contact.phn}</p>
    <p>{}</p>
        </div>
    )
}

export default ContactCard