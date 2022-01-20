import { Suspense } from "react"
import Loader from "../components/Loader"

const SuspenseWrapper = ({children, w , h}) => <Suspense fallback={<Loader w={w} h={h}/>}>{children}</Suspense>

 export default SuspenseWrapper