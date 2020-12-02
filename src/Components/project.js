import React from 'react';

let Card =() => {

  let initialValue = 0;
  
return(
<div className = "myCard">

  <button>+</button>
  <button>-</button>
  <button>refresh</button>

     <div id = "yourCard">{initialValue}</div>

</div>


 )

}






 
export default Card;