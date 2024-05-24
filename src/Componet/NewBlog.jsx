import React from "react";

function NewBlog(){
return (<div className="newBlogDiv">
<h1 class="titleBlog">ADD NEW BLOG</h1>
<hr />
<div className="formPicDiv">
<div className="formNewBlog" style={{boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", backgroundColor: "rgb(247, 207, 194)"}}>
  <form action="/newBlog" method="post">

    <label  for="title ">TITLE :</label>
    <br/>
    <input className="title inputNewBlog" type="text" name="title" required style={{borderRadius: "10px", height: "50px"}}/>
    <br/>
    <label for="Author inputNewBlog">AUTHOR :</label>
    <br/>
    <input className="author inputNewBlog" type="text" name="author" required style={{borderRadius: "10px", height: "50px"}}/>
    <br/>
    <label for="message inputNewBlog">MESSAGE :</label>
    <br/>
    <textarea className="message inputNewBlog" name="message" id="" cols="90" rows="9" required></textarea>
    <br/>
    <input className="submitBtn" type="submit" value="Submit"/>
  
  
  </form>
</div>
<div className="formNewBlog" >
<img className="picForm" src="pictures/pic1.jpg" alt="pictu"/>
</div>
</div>

</div>)

}

export default NewBlog;