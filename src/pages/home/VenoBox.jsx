import React, { useRef, useState } from 'react'
import Container from '../../components/layout/Container'
import useDropdown from '../../hooks/useDropdown'
import venobox1 from '../../assets/image/venobox1.webp'
import venobox2 from '../../assets/image/venobox2.webp'
import venobox3 from '../../assets/image/venobox3.webp'
import venobox4 from '../../assets/image/venobox4.webp'
import venobox5 from '../../assets/image/venobox5.webp'
import venobox6 from '../../assets/image/venobox6.webp'

const images = [venobox1, venobox2, venobox3, venobox4, venobox5, venobox6]

const VenoBox = () => {
  const [dropdown, setDropdown] = useState(null)
  const venoRef = useRef(null)

  useDropdown(venoRef, () => setDropdown(null), dropdown !== null)

  return (
    <Container>
      <div className="">
        <div className="text-center my-8">
          <h4 className="text-hsize font-semibold">Follow us on Instagram</h4>
        </div>
        <div className="grid grid-cols-6 gap-6 pb-15" ref={venoRef}>
          {images.map((img, index) => (
            <div key={index} onClick={() => setDropdown(index)}>
              <img src={img} alt="venobox" className="hover:scale-110 duration-300" />
            </div>
          ))}
        </div>
      </div>

      {dropdown !== null && (
        <div
          onClick={() => setDropdown(null)}
          className="w-full h-screen bg-[#00000072] top-0 left-0 fixed z-20 flex justify-center items-center"
        >
          <img className="w-100" src={images[dropdown]} alt="venobox" />
        </div>
      )}
    </Container>
  )
}

export default VenoBox