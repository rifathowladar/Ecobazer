// import React from 'react'
// import Container from '../../components/layout/Container'
// import bestdeals1 from '../../assets/image/bestdeals1.webp'
// import bestdeals2 from '../../assets/image/bestdeals2.webp'
// import bestdeals3 from '../../assets/image/bestdeals3.webp'
// const BestDeals = () => {
//   return (
//     <Container>
//         <div className="grid grid-cols-3">
//             <div className=""></div>
//             <div className=""></div>
//             <div className=""></div>
//         </div>
//     </Container>
//   )
// }

// export default BestDeals

import React, { useEffect, useState } from 'react'
import Container from '../../components/layout/Container'
import bestdeals1 from '../../assets/image/bestdeals1.webp'
import bestdeals2 from '../../assets/image/bestdeals2.webp'
import bestdeals3 from '../../assets/image/bestdeals3.webp'

const BestDeals = () => {
      const targetDate = new Date("2026-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (timeLeft % (1000 * 60)) / 1000
  );
  return (
    <Container>
      <div className="grid grid-cols-3 gap-6 py-16">
        
        {/* First Card */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={bestdeals1}
            alt="Best Deal 1"
            className="w-full h-full object-cover"
          />

          {/* Timer */}
          <div className="absolute text-white top-30 left-1/2 -translate-x-1/2 px-4 py-2">
            <div className="flex gap-4 text-center">
                <div>
                    <h4 className="font-bold">{days}</h4>
                    <p className="text-xs">Days</p>
                </div>

                <div>
                    <h4 className="font-bold">{hours}</h4>
                    <p className="text-xs">Hours</p>
                </div>

                <div>
                    <h4 className="font-bold">{minutes}</h4>
                    <p className="text-xs">Min</p>
                </div>

                <div>
                    <h4 className="font-bold">{seconds}</h4>
                    <p className="text-xs">Sec</p>
                </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={bestdeals2}
            alt="Best Deal 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Third Card */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={bestdeals3}
            alt="Best Deal 3"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </Container>
  )
}

export default BestDeals