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
    
  await Axios.post("http://localhost:4001/auth/firstLogin", firstLoginDetails).then((result) => {
    setUserExist(result.data.userExist);
  });
   if(userExist){
  window.location.assign("/login")
   }
  if(!userExist){
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
    window.location.assign("/home");
   }
  }
   return(
    <div className="bg">
    <div className="glass p-3 mt-5">
    <h1>Login</h1>
    <p className="text-center">Hey dude 👋, looks like you are logging in for the first time 😁!</p>
    <input type="text" value={firstName} placeholder="First Name" onChange={changeFirstName} className="form-control mt-3" />
    <input type="text" value={lastName} placeholder="Last Name" onChange={changeLastName} className="form-control mt-3" />
    <input type="email" value={email} placeholder="Email" onChange={changeEmail} className="form-control mt-3" />
    <input type="tel" value={phoneNumber} placeholder ="Mobile Phone Number" onChange={changePhoneNumber} className="form-control mt-3" />
    <br />
    <input type="submit" value="Log me in" onClick={clickHandler} className="form-control btn bg-red" />
      {userExist.toString()}
    </div>
    </div>
    );
  }

export default FirstLogin;