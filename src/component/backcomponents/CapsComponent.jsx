import { useEffect, useState } from "react"
import style from "../css2/productcomponent.module.css"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const Capscomponent=()=>{

    let {index}=useParams()

    let[name,setName]=useState("")
    let[price,setPrice]=useState("")
    let[image,setImage]=useState("")
    let[count,setCount]=useState(1)
    let[totalprice,setTotalprice]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3000/caps/${index}`)
        .then((r)=>{
            setImage(r.data.image)
            setName(r.data.name)
            setPrice(r.data.price)
            setTotalprice(r.data.price)
        })
    })

    let navigate=useNavigate()

    let[productid,setProductid]=useState("")
    let[sec,setSec]=useState("")

    let[content,setContent]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/cart")
        .then((r)=>{
            // setProductid(r.data.index)
            // setSec(r.data.sectionname)
            setContent(r.data)
        })
    })

    useEffect(()=>{
        content.map((y)=>{
            setProductid(y.index)
            setSec(y.sectionname)
        })
    })
    

    let [sectionname,setSectionname]=useState("caps")
    let addtocart=()=>{
        if(index==productid && sectionname==sec){
            alert("Product Already Addedd To Cart!!!")
        }
        else{
            let values={name,price,image,count,totalprice,index,sectionname}
            axios.post("http://localhost:3000/cart",values)
            alert("Product Successfully Addedd To Cart")
        }
    }

    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv1}>
                    <div id={style.s2}>
                        <div id={style.s21} ><img src={image} alt="" /></div>
                        <div id={style.s22}>
                            <button onClick={addtocart}><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</button>
                            <button>BUY</button>
                        </div>
                        
                    </div>
                    <div id={style.s3}>
                        <img src="https://img.freepik.com/free-photo/fun-3d-illustration-cartoon-teenage-girl-with-rain-gear_183364-80088.jpg?w=360&t=st=1693902538~exp=1693903138~hmac=83119ebc83c83045a0782e3adce7dcefe8cc0b737f4508e7760360bff2e89a7a" alt="" />
                        <h3>MEN'S FASHION</h3>
                    <br />
                    <h4 id={style.name}>{name}</h4>
            <br />
            <div id={style.pricediv}>
                    <p id={style.price}>{price}   offer!!!</p> <p id={style.oldprice}>₹600</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Capscomponent