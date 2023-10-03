import { useRef } from "react";


export default function Header(){
  const myRef = useRef(null);
    return(

        <header>
        <a href="" className="logo">MyBlog</a>
        <nav>
          < a href ="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

  );
}