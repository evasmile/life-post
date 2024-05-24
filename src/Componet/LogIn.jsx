import React from "react";
import '../main.css'

function Login(){


return <div className="mainDiv">
  
  <div className="signindav">
      <h1>WELCOME TO MY BLOG</h1>

      <form method="post" action="/login">
      
          <input type="email" placeholder="email" name="email"/>
          <input type="password" placeholder="password" name="password"/>
          <button type="submit">LOG IN</button>
      </form>
      
      <p>Don`t have an account please click  <a href="./Registration.jsx">here</a></p>
  </div>
  <div className="picSignIn">
      <img src="pictures/blog1.png" style={{width: "100%", height: "60%"}} alt="pic"/>
  </div>
</div>


}

export default Login;