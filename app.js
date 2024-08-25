import React from "react";
import ReactDOM from "react-dom/client"




const Head=()=>(
  <h1 id="heading">hello Nigga </h1>
)
const Heading=()=>(
  <div>
    <Head/>
    <h1>
      hello nigga from functional component
    </h1>
  </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
