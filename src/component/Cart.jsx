import { useEffect, useState } from "react"
import style from "./css2/cart.module.css"
import axios from "axios"
import { useNavigate } from "react-router"

const Cart=()=>{

    let[content,setContent]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/cart")
        .then((r)=>{
            setContent(r.data)
        })
    })

    let[count,setCount]=useState(1)

    let navigate=useNavigate()

    let complete=(id)=>{
        navigate(`/quantity/${id}`)
    }
    let remove=(p)=>{

        axios.delete(`http://localhost:3000/cart/${p}`)
    }

    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
                <div>
                    {
                        content.map((x)=>{
                            return(
                                    <div>
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price per Piece</th>
                                <th>Quantity</th>
                                <th>Increment or Decrement</th>
                                <th>Total Price</th>
                                <th>Remove Product</th>
                            </tr>
                            <tr>
                                <td id={style.td1}><img src={x.image} alt="" /></td>
                                <td id={style.td2}>{x.name}</td>
                                <td id={style.td3}>₹ {x.price}</td>
                                <td id={style.td4}><input type="text" value={x.count}/></td>
                                <td id={style.td7}> <button onClick={()=>{
                                    complete(x.id)
                                }} id={style.comp}>Inc / Dec</button></td>
                                <td id={style.td5}>₹ {x.totalprice}</td>
                                <td id={style.td6}><button onClick={()=>{
                                    remove(x.id)
                                }}>Remove</button></td>
                            </tr>
                        </table>
                    </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart