import React from "react";
import ReactDOM from "react-dom";
import Call from "./component/home";
function Export(){
  return(
    <div>
      <Call/>
    </div>
  )
}
ReactDOM.render(<Export/>,document.getElementById("root"));