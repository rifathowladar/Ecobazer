import { useRef, useState } from "react";
import Container from "../components/layout/Container";
import useDropdown from "../hooks/useDropdown";

const Hw = () => {
  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const [tooltip, settooltip] = useState(false);
  const tooltipRef = useRef(null);

  useDropdown(modalRef, () => setModal(false), modal);
  useDropdown(sidebarRef, () => setSidebar(false), sidebar);
  useDropdown(tooltipRef, () => settooltip(false), tooltip);

  return (
    <Container>
      <div className="py-6">
        <button
          onClick={() => setModal(true)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Open Modal
        </button>

        {modal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 ">
            
            <div
              ref={modalRef}
              className="w-[90%] max-w-md bg-white rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                My Modal
              </h2>

              <p className="text-gray-600 mb-5">
                This is Tailwind CSS modal.
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Sidebar */}
      <div>
        <button
          onClick={() => setSidebar(true)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Open Sidebar
        </button>
        {sidebar && (
          <div className="fixed inset-0 bg-black/40">
            <div
              ref={sidebarRef}
              className="fixed top-0 left-0 h-full w-72 bg-white p-5 duration-500"
            >
              <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Dashboard</li>
                <li>This is Tailwind CSS Sidebar</li>
                <li>Settings</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* Tooltip */}
      <div className="pt-5">
      <div className="">
        <button
          onClick={() => settooltip(!tooltip)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Show Tooltip
        </button>
        {tooltip && (
          <div
            ref={tooltipRef}
            className="absolute mt-3 
                       bg-gray-900 text-white text-sm px-3 py-2 rounded-lg"
          >
            This is a Tailwind CSS tooltip .
          </div>
        )}

      </div>
    </div>
    </Container>
  );
};

export default Hw;

