import react, {useState} from "react";
import Axios from "axios";
import {Navigate} from "react-router-dom";

function FirstLogin() {
  
  /****     states    ****/
 const [firstName,setFirstName] = useState("");
 const [lastName,setLastName] = useState("");
 const [email,setEmail] = useState("");
 const [phoneNumber,setPhoneNumber] = useState("");
 const [userExist, setUserExist] = useState(false);
 
 /*** onchange functions    ***/
 
 const changeFirstName = (event) => {
    setFirstName(event.target.value);
  }
 const changeLastName = (event) => {
    setLastName(event.target.value);
  }
 const changeEmail = (event) => {
    setEmail(event.target.value);
  }
 const changePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  }
  
  /*  Click Handler     */
  
  const clickHandler = async (event) => {
  
    const firstLoginDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phoneNumber
    }
    
  await Axios.post("http://localhost:4000/auth/firstLogin", firstLoginDetails).then((result) => {if(result.data.userExist){
     window.location.assign("/login");}
  });
  
    localStorage.firstName = firstName;
    localStorage.lastName = lastName;
    localStorage.email = email;
    localStorage.phone = phoneNumber;
    localStorage.signedIn = true;
    
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    
    event.preventDefault();
    

   window.location.assign("/home")
 }
   return(
    <div className="container">
    <h1 className="">Hey dude 👋, Looks like you are logging in for the first time 😁!</h1>
    <p className="">Fill in your info below. We won't ask next time you log in.</p>
    <input type="text" value={firstName} placeholder="First Name" onChange={changeFirstName} className="" />
    <input type="text" value={lastName} placeholder="Last Name" onChange={changeLastName} className="" />
    <input type="email" value={email} placeholder="Email" onChange={changeEmail} className="" />
    <input type="tel" value={phoneNumber} placeholder ="Mobile Phone Number" onChange={changePhoneNumber} className="" />
    <br />
   <input type="submit" value="Log me in" onClick={clickHandler} className="" />
    {firstName}
    {userExist}
    </div>
    );
  }

export default FirstLogin;