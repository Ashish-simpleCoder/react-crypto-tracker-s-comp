import "./styles/index.css"
import { memo} from "react"
import { HashRouter } from "react-router-dom"
import Header from "./components/Header"
import Links from "./components/Links"
import { CryptoCtx } from "./context/CryptoCtx"

const App = memo(()=>{
   return(
      <CryptoCtx>
         <HashRouter>
            <Header/>
            <Links/>
         </HashRouter>
      </CryptoCtx>
   )
})
export default App
