import { useEffect, useState } from "react"
import style from "./css/login.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Login=()=>{

    let[id1,setId1]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")


let id1Data=(e)=>{
    setId1(e.target.value)
}

    useEffect(()=>{
    axios.get(`http://localhost:3000/users/${id1}`)
    .then((r)=>{
        setEmail(r.data.email)
        setPassword(r.data.password)
    })

    },[id1])

    let[email2,setEmail2]=useState("")
    let[password2,setPassword2]=useState("")

    let email2Data=(e)=>{
        setEmail2(e.target.value)
    }
    let password2Data=(e)=>{
        setPassword2(e.target.value)
    }

    let navigate=useNavigate()

    let login=()=>{
        if(email==email2 && password==password2){
            // navigate(`/ecomm/${id1}`)
            navigate(`/home/${id1}`)
        }
        else{
            alert("INVALID EMAIL AND PASSWORD")
        }
    }
    return(
<div>
<div id={style.maindiv3}>
            
            <div id={style.m1}>
            <Link to="/home"><i class="fa-sharp fa-solid fa-circle-xmark" id={style.x}></i></Link>
            <div id={style.d1}>
                <div>
                <i class="fa-regular fa-id-badge" id={style.ii3}></i><input type="text" placeholder="Id Number" value={id1} onChange={id1Data}/>
                <br /><br />
                <br /><i class="fa-solid fa-user" id={style.ii1}></i><input type="text" placeholder="Email Id" value={email2} onChange={email2Data}/>
                <br /><br />
                <br /><i class="fa-solid fa-key" id={style.ii2}></i><input type="text" placeholder="Password" value={password2} onChange={password2Data}/><br /><br />
                {/* <br /><button><Link to="/accountholderpage">Login</Link></button> */}
                <br /><button onClick={login}>Login</button>
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
export default Login
