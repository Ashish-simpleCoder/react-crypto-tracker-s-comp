import { lazy, memo, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

const CoinPage = lazy(()=>import("../pages/Coin/Coin.page"))
const HomePage = lazy(()=>import("../pages/Home/Home.page"))


const Links = memo(()=>{

   return(
      <Switch>
         <Route path='/' exact>
            <Suspense fallback={<CustomCircularBar/>}><HomePage/></Suspense>
         </Route>
         <Route path='/coins/:id' exact>
            <Suspense fallback={<CustomCircularBar/>}><CoinPage/></Suspense>
         </Route>
      </Switch>
   )
})
export function CustomCircularBar(){
   return <div style={{color:'blue',alignItems:'center',justifyContent:'center',display:'flex'}} size={300} thickness={1}/>
}

export default Links