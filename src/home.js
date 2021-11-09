import react, {useState, useEffect} from "react";
import Axios from "axios";


function Home(){
  
  /*   states    */
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  
  useEffect(() => {
    const user = {
      firstName: localStorage.firstName
    };
    Axios.post("http://localhost:4000/auth/fetch", user).then((result) => {
      result.data.map((e) => {
        setFirstName(e.firstName);
        setLastName(e.lastName);
        setEmail(e.email);
        setPhone(e.phone);
        setDate(e.date);
      });
    });
  });
  
  
  return(
    <div className="container">
    <h1>Hey {firstName} we have got a few details about you. See them below</h1>
    <p className=""><b>Your First Name :</b> {firstName} </p>
     <br/>
    <p className=""><b>Your Last Name :</b> {lastName} </p>
     <br/>
    <p className=""><b>Your Email :</b> {email} </p>
     <br/>
    <p className=""><b>Your Phone Number :</b> {phone} </p>
     <br/>
    <p className=""><b>Last log in:</b> {date} </p>
     <br/>
    </div>
    );
}

export default Home;