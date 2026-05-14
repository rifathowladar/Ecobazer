import { useLocation } from 'react-router';
import breadcrmb from '../assets/image/breadcrmb.webp'
import Container from './layout/Container';
import { MdHome } from "react-icons/md";

const Breadcrumb = () => {
  const pageName = useLocation()
  const arr = pageName.pathname.split('/')
  
  return (
    <div style={{background: `url(${breadcrmb})`}}>
        <Container>
          <div className="flex items-center gap-3 py-12">
            <MdHome className="text-[#808080] text-2xl"/>
            {arr.map((item, index) =>(
              <span key={index} className="text-base text-[#999999]">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {index < arr.length - 1 && <span className="mx-2 text-[#808080]">{"/".replace("/",">")}</span>}
              </span>
            ))}
          </div>
        </Container>
    </div>
  )
}

export default Breadcrumb