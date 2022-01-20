import { lazy, memo } from "react"
import { Route, Switch } from "react-router-dom"
import SuspenseWrapper from "../utils/SuspenseWrapper.util"

const CoinPage = lazy(()=>import("../pages/Coin/Coin.page"))
const HomePage = lazy(()=>import("../pages/Home/Home.page"))


const Links = memo(()=>{
   return(
      <Switch>
         <Route path='/' exact>
            <SuspenseWrapper w={'8rem'} h={'8rem'}><HomePage/></SuspenseWrapper>
         </Route>
         <Route path='/coins/:id' exact>
            <SuspenseWrapper w={'8rem'} h={'8rem'}><CoinPage/></SuspenseWrapper>
         </Route>
      </Switch>
   )
})
export default Links