import Button from "../components/Button";
import {GoBell, GoBug,} from "react-icons/go"



function ButtonPage(){
    const handleClick = () =>{
        console.log('click!!')
    };





    return(<div>hello


        <div>
            <Button   primary onClick={handleClick} > <GoBell/> touch me</Button>
        </div>
        <div>
            <Button secondary  ><GoBug/> buy now</Button>
        </div>
        <div>
            <Button warning >eat here</Button>
        </div>
        <div>
            <Button danger >run fast</Button>
        </div>


    </div>
    );
}

export default ButtonPage;