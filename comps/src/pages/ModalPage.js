import { useState } from "react";
import Modal from "../components/Modals";
import Button from "../components/Button";

function ModalPage(){
const [showModal, setShowModal]=useState(false);

const handleClick = ()=>{
    setShowModal(true);
};
const handleClose = () =>{
    setShowModal(false)
}
const actionBar = <div>
<Button onClick={handleClose} primary>I Accept</Button>
</div>
const modal =<Modal onClose={handleClose} actionBar={actionBar}>

<p>Here is an important agreement for yo to accept</p>

</Modal>

    return(
        <div className="relative">
            <Button onClick={handleClick} primary >
            open modal</Button>
           {showModal && modal }   
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel massa in sem ornare volutpat. Fusce vitae finibus ex, at mattis mauris. Suspendisse hendrerit scelerisque diam ac consectetur. Integer sit amet leo sit amet erat auctor euismod sit amet ac ligula. Pellentesque consequat est vel porta euismod. Donec id mattis est, vel condimentum nisi. Nunc iaculis elit at ornare lacinia.

Ut semper sed quam sed luctus. Morbi magna nulla, laoreet id enim ultrices, imperdiet commodo sapien. Nulla eget orci vel quam ultricies maximus et vel lectus. Morbi luctus, diam vel pretium convallis, ante erat malesuada tortor, et viverra est urna at enim. Etiam sit amet nisl libero. Donec porttitor tristique risus, vitae hendrerit neque blandit at. Pellentesque fringilla justo ut lectus molestie, sit amet dictum justo auctor. Sed at dictum lorem. Vivamus a porta sapien. Integer posuere, turpis sed maximus elementum, ex velit efficitur diam, a finibus augue justo eu magna. Vestibulum luctus lacus vulputate nulla mattis dictum. Quisque elit nisl, auctor eget scelerisque ac, egestas in enim. Donec nec finibus magna, a tristique ligula. Nulla tincidunt euismod dolor vel dapibus. Donec vitae nisi suscipit, sodales metus nec, maximus velit.

Sed tempor lorem at risus vestibulum dictum id id quam. Nulla ac iaculis enim. Nunc gravida, sem id scelerisque tristique, urna nulla sollicitudin orci, quis facilisis sapien nisl a massa. Aliquam vel metus eget mi pharetra interdum. Etiam pretium lacus turpis, vel elementum ex rutrum placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean diam nunc, suscipit vitae purus placerat, sodales elementum felis. Fusce non metus enim. Vivamus viverra turpis rutrum tellus accumsan, laoreet sagittis justo sagittis. Nunc euismod, dolor eu pulvinar aliquet, eros nisl laoreet odio, non accumsan odio lectus tristique leo. Proin vel tortor quis odio consequat tincidunt quis non magna. Proin sagittis lacus sit amet magna rutrum, eget sollicitudin dolor mattis. Aliquam commodo ex et iaculis mollis.

Praesent id ipsum metus. Aliquam erat volutpat. Quisque a felis et purus imperdiet malesuada at a augue. Ut interdum mauris eget dapibus pulvinar. Aenean in urna id magna faucibus pretium aliquam in ante. Aliquam vehicula sem sit amet ullamcorper pellentesque. In fringilla dui tempor urna sollicitudin, et finibus dolor pretium. Vivamus pulvinar orci vitae nulla semper semper. Sed ac malesuada diam, in egestas ex. Vivamus felis massa, tincidunt ac vestibulum eu, porta et leo. Praesent quis elit elit. Praesent suscipit dictum aliquam. Donec dictum, ipsum ornare eleifend mollis, lorem nunc pellentesque turpis, non rhoncus sapien orci eget ex.

Curabitur tincidunt fermentum eros, ac sagittis justo tincidunt vel. Nunc dapibus tellus at magna pellentesque faucibus. Pellentesque et nulla ipsum. Donec neque leo, laoreet eget ipsum quis, consectetur rhoncus magna. Phasellus tristique, sapien id tincidunt venenatis, arcu elit molestie sapien, non auctor purus diam ut nibh. Integer ut eros eu est facilisis egestas. Morbi vel arcu nisl. Nullam non sem ante. Phasellus malesuada ut ipsum at vehicula. Nulla pretium lobortis ex non tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.


            </p>    
            </div>
    )

}

export default ModalPage;