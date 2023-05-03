import Button from "./Button";
import {GoBell, GoBug,} from "react-icons/go"



function App(){
    const handleClick = () =>{
        console.log('click!!')
    };





    return(<div>hello


        <div>
            <Button   primary onClick={handleClick} > <GoBell/> touch me</Button>
        </div>
        <div>
            <Button secondary rounded><GoBug/> buy now</Button>
        </div>
        <div>
            <Button warning >eat here</Button>
        </div>
        <div>
            <Button danger rounded>run fast</Button>
        </div>


    </div>
    );
}

export default App;