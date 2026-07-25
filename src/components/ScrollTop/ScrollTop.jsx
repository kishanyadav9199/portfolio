import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {show && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            fixed bottom-6 right-6 z-50
            flex items-center justify-center
            h-14 w-14
            rounded-full
            bg-cyan-500 text-white
            shadow-xl
            hover:scale-110
            transition-all duration-300
          "
        >
          <FaArrowUp size={22} />
        </button>
      )}
    </>
  );
}

export default ScrollTop;
