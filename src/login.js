import react, {useState} from "react";
import Axios from "axios";

function Login(){
  // use of states
  
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  
  // onChange functions 
  
   const changeFirstName = (event) => {
    setFirstName(event.target.value);
  }
    const changeEmail = (event) => {
    setEmail(event.target.value);
  }
  
  return(
   <div className="bg">
    <div className="glass p-3 mt-5">
    <h1>Login</h1>
    <p className="text-center">Hey dude 👋, Welcome to Pelrio</p>
    <input type="text" value={firstName} placeholder="First Name" onChange={changeFirstName} className="form-control mt-3" />
    <input type="email" value={email} placeholder="Last Name" onChange={changeEmail} className="form-control mt-3" />
    </div>
    </div>
  )}
export default Login;