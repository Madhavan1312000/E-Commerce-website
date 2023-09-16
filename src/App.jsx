import Ecomm from "./component/Ecomm"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Tshirts from "./component/Tshirts"
import Pants from "./component/Pants"
import Caps from "./component/Caps"
import Chains from "./component/Chains"
import Shoes from "./component/Shoes"
import Watches from "./component/Watches"
import Inners from "./component/Inners"
import Hoodies from "./component/Hoodies"
import Home from "./component/Home"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Contacts from "./component/Contacts"
import Section1 from "./component/Section1"
import Productcomponent from "./component/backcomponents/ProductComponent"
import Hoodiescomponent from "./component/backcomponents/HoodiesComponent"
import Shoescomponent from "./component/backcomponents/ShoesComponent"
import Pantscomponent from "./component/backcomponents/PantsComponent"
import Innerscomponent from "./component/backcomponents/InnersComponent"
import Capscomponent from "./component/backcomponents/CapsComponent"
import Chainscomponent from "./component/backcomponents/ChainsComponent"
import Watchescomponent from "./component/backcomponents/WatchesComponent"
import Cart from "./component/Cart"
import Quantity from "./component/Quantity"

const App=()=>{
    return(
        <div>
            
            <BrowserRouter>
            <Ecomm/>
            <Routes>
                <Route path="/tshirts" element={<Tshirts/>}></Route>
                <Route path="/pants" element={<Pants/>}></Route>
                <Route path="/shoes" element={<Shoes/>}></Route> 
                <Route path="/chains" element={<Chains/>}></Route>
                <Route path="/caps" element={<Caps/>}></Route>
                <Route path="/hoodies" element={<Hoodies/>}></Route> 
                <Route path="/inners" element={<Inners/>}></Route>
                <Route path="/watches" element={<Watches/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/datas" element={<Contacts/>}></Route>
                <Route path="/home/:index1" element={<Home/>}></Route>
                <Route path="/ecomm/:index1" element={<Ecomm/>}></Route>
                {/* <Route path="/contacts" element={<Contacts/>}></Route> */}
                <Route path='/productcomponent/:index' element={<Productcomponent/>}></Route>
                <Route path='/hoodiescomponent/:index' element={<Hoodiescomponent/>}></Route>
                <Route path='/shoescomponent/:index' element={<Shoescomponent/>}></Route>
                <Route path='/pantscomponent/:index' element={<Pantscomponent/>}></Route>
                <Route path='/innerscomponent/:index' element={<Innerscomponent/>}></Route>
                <Route path='/capscomponent/:index' element={<Capscomponent/>}></Route>
                <Route path='/chainscomponent/:index' element={<Chainscomponent/>}></Route>
                <Route path='/watchescomponent/:index' element={<Watchescomponent/>}></Route>

                <Route path='/cart/:itemname/:index' element={<Cart/>}></Route>
                <Route path='/quantity/:index1' element={<Quantity/>}></Route>
            </Routes>
            <Home></Home>
            <Section1></Section1>
            </BrowserRouter>
        </div>
    )
}
export default App