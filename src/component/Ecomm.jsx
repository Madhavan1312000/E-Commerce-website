import style from "./css/ecomm.module.css"
import { Link, useParams } from "react-router-dom"

const Ecomm=()=>{

    let {index1}=useParams()
    
    return(
        <div>
            <div id={style.maindiv}>
                <article>
                <div id={style.d1}>
                    <div id={style.logo}>
                        <img src={require('./img/Beige_Modern_Men_s_Style_Branding_Logo-removebg-preview.png')} alt="" />
                    <Link to="/home"><i class="fa-solid fa-house"></i></Link>
                    </div>
                    <div id={style.d11}>
                        <div id={style.d11a}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Type Here....."/>

                        </div>
                        <div id={style.d11nav}>
                            <div><Link to="/datas"><button className={style.b1}><i class="fa-solid fa-phone"></i>Contact Us</button></Link></div>
                            <div><Link to="/login"><button className={style.b1}><i class="fa-solid fa-key"></i>Login</button></Link>  </div>                          
                            <div><Link to="/signup"><button className={style.b1}><i class="fa-solid fa-right-to-bracket"></i>Sign Up</button></Link></div>
                            <div><Link to="/cart/:itemname/:index"><button className={style.b1}><i class="fa-solid fa-cart-shopping"></i>Cart</button></Link></div>

                        </div>

                    </div>

                </div>
                <div id={style.imgdiv}>
                <div id={style.nav}>
                    <div>
                    <Link to="/tshirts"><img src={require('./img/tshirt-removebg-preview.png')} alt="" /><p>Shirts</p></Link> 
                    </div>
                    <div>
                    <Link to="/pants"><img src={require('./img/pant1-removebg-preview.png')} alt="" /><p>Pants </p></Link>
                    </div>
                    <div>
                    <Link to="/shoes"><img src={require('./img/shoe1-removebg-preview.png')} alt="" /> <p>Shoes</p></Link>
                    </div>
                    <div>
                    <Link to="/inners"><img src={require('./img/images-removebg-preview.png')} alt="" /> <p>Inners</p></Link>
                        
                    </div>
                    <div>
                    <Link to="/chains"><img src={require('./img/chain-removebg-preview.png')} alt="" /> <p>Chains</p></Link>
                        
                    </div>
                    <div>
                   <Link to="/caps"> <img src={require('./img/cap-removebg-preview.png')} alt="" /> <p>Caps</p></Link>
                        
                    </div>
                    <div>
                    <Link to="/hoodies"><img src={require('./img/81al2rRUN5L._SL1500_-removebg-preview.png')} alt="" /><p>Hoodies</p></Link> 
                        
                    </div>
                    <div>
                    <Link to="/watches"><img src={require('./img/watch-removebg-preview.png')} alt="" /> <p>Watches</p></Link>
                        
                    </div>

                </div>
                </div>
                </article>
            </div>
        </div>
    )
}
export default Ecomm