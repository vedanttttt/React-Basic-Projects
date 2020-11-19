import ContactCard from './ContactCard'

function Props(){
    return(
        <div>
            <ContactCard
                contact={{name:"Vedant", phn:"12345", email:"hello@gmail.com" ,img:"https://static.toiimg.com/photo/72975551.cms"}}
            />

            <ContactCard
                contact={{name:"Ayush", phn:"12345", email:"hello@gmail.com" ,img:"https://static.toiimg.com/photo/72975551.cms"}}
            />
        </div>
    )
}

export default Props