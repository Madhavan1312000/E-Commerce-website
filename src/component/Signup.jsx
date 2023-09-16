import { useEffect, useState } from "react"
import style from "./css/signup.module.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Signup=()=>{

    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[phone,setPhone]=useState("")
    let[password,setPassword]=useState("")
    let[address,setAddress]=useState("")

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let emailData=(e)=>{
        setEmail(e.target.value)
    }
    let phoneData=(e)=>{
        setPhone(e.target.value)
    }
    let passData=(e)=>{
        setPassword(e.target.value)
    }
    let addrData=(e)=>{
        setAddress(e.target.value)
    }

    let formHandle=(e)=>{
        let payload={name,phone,email,password,address}
        axios.post("http://localhost:3000/users",payload)
        alert("Successfully Registered!!!")
    }

    return(
        <div>
           <div id={style.maindiv3}>
            
            <div id={style.m1}>
            <Link to="/home"><i class="fa-sharp fa-solid fa-circle-xmark" id={style.x}></i></Link>
            <div id={style.d1}>
                <div>
                <i class="fa-solid fa-user" id={style.ii1}></i><input type="text" placeholder="Name" value={name} onChange={nameData}/>
                <br /><br />
                <i class="fa-solid fa-key" id={style.ii2}></i><input type="text" placeholder="Password" value={password} onChange={passData}/>
                <br /><br />
                <i class="fa-solid fa-phone" id={style.ii3}></i><input type="text" placeholder="Phone Number" value={phone} onChange={phoneData}/>
                <br /><br />
                <i class="fa-solid fa-envelope" id={style.ii4} ></i><input type="text" placeholder="Email Id" value={email} onChange={emailData}/>
                <br /><br />
                <i class="fa-solid fa-location-dot" id={style.ii5}></i><input type="text" placeholder="Address" value={address} onChange={addrData}/><br /><br />
                <br /><br />
                <button onClick={formHandle}>Sign Up</button>
                <br /><br />
                </div>
            </div>
            <div id={style.d2}>
                <img src="https://img.freepik.com/free-vector/handsome-young-man-showing-hand-signal_1308-41562.jpg?size=626&ext=jpg&ga=GA1.1.1158682593.1687979719&semt=ais" alt="" />
            </div>
        </div>
        </div>
            </div>
    )
}
export default Signup