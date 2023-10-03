import { useRef } from "react";
export default function Post(){
  const myRef = useRef(null);
    return(
<div className="post">
        <div className="image">

        <img src="https://plus.unsplash.com/premium_photo-1694473360706-c0a0c608e49d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80 " alt=""></img>
        </div>
        <div className="texts">
        <h2>Hello ji</h2>
        <p className="info">
          <a className="author">David Paesco</a>
          <time>2023-09-30 16:45</time>
        </p>
        <p className="summary">lorem</p>
           
        </div>

      </div>
    );
}