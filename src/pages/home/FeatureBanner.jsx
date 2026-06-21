// FeatureBanner.jsx
import { FiTruck } from "react-icons/fi";
import { BiHeadphone } from "react-icons/bi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbRotateClockwise2 } from "react-icons/tb";
import Container from "../../components/layout/Container";

export default function FeatureBanner() {
  return (
    <Container>
      <section className="w-full mt-6 mb-15 bg-white shadow-md py-6 px-4 rounded-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Free Shipping */}
          <div className="flex items-center gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
              <FiTruck className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold text-gray-900">
                Free Shipping
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Free shipping on all your order
              </p>
            </div>
          </div>
          {/* 2. Customer Support */}
          <div className="flex items-center gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
              <BiHeadphone className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold text-gray-900">
                Customer Support 24/7
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Instant access to support
              </p>
            </div>
          </div>
          {/* 3. Secure Payment */}
          <div className="flex items-center gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
              <MdOutlineVerifiedUser className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold text-gray-900">
                100% Secure Payment
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                We ensure your money is safe
              </p>
            </div>
          </div>
          {/* 4. Money-Back Guarantee */}
          <div className="flex items-center gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
              <TbRotateClockwise2 className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold text-gray-900">
                Money-Back Guarantee
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                30 Days Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}