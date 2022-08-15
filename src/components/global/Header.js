import Link from "next/link"
import { useContext } from "react"
import { AppContext } from "../context/context"
const Header = ({data}) => {

    const [ cart, setCart ] = useContext(AppContext)

  return (
    <header>
        <img src={`${data.siteLogoUrl}`} />

        <nav>
            <ul>
                {
                    data.headerMenuItems?.map(menuItem=>(
                        <Link key={ menuItem?.ID } href={ menuItem?.url ?? '/' }>
										<a className=""
										   >{menuItem.title}</a>
									</Link>
                    ))
                }
            </ul>
        </nav>
        
        <div>
            {
                `Cart(${cart && cart.totalQty})`
            }
        </div>

    </header>
  )
}

export default Header