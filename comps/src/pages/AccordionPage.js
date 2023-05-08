import Accordion from "../components/Accordion";



function AccordionPage(){
    const items = [
{
    id:'jlasjdf',
    label: 'can i use react',
    content:'you can use react and other stuff in this project'

},
{
    id:'jalfdjsa',
    label: 'can i use javascript',
    content:'you can use mongo and other stuff in this project'

},
{
    id:'llsdkf',
    label: 'can i use something',
    content:'you can use javascript and other stuff in this project'

},
    ];





    return <Accordion  items={items} />

}

export default AccordionPage;