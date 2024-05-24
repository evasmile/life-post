import React from "react";

function Registration(){
    
return (
    <div>
    <h1>Register </h1>
<div className="reg">
<form method="post" action="/api/register">
<br/>
<input className="inpuReg" type="text" name="name" placeholder="Your Name" style={{borderRadius: "10px", height: "40px", marginBottom:"20px"}}/>
<br/>
<input className="inpuReg" type="text" name="surname" placeholder="Your Surname" style={{borderRadius: "10px", height: "40px", marginBottom:"20px"}} />
<br/>
<input className="inpuReg" type="number" name="cellphone" placeholder="Your Cell No" style={{borderRadius: "10px", height: "40px", marginBottom:"20px"}}/>
<br/>
<input className="inpuReg" type="email" name="email" placeholder="Your Email" style={{borderRadius: "10px", height: "40px", marginBottom:"20px"}}/>
<br/>
<input className="inpuReg" type="password" name="password" placeholder="Password"/>
<br/>
<input className="inpuReg" type={"password"} name={"repassword"} placeholder={"Confirm Password"} style={{borderRadius: "10px", height: "40px", marginBottom:"20px"}} / >
<br/>
<button type="submit">Register</button>
</form>
</div>
</div>

)

}

export default Registration;