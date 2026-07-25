import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

import { certificates } from "../../data/certificates";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certificates"
      className="py-24 px-6 bg-white dark:bg-slate-950 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-widest text-cyan-400">
            Achievements
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-extrabold
            mt-4
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            Certificates
          </h2>
        </motion.div>

        {/* Grid */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          mt-20
          "
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              whileHover={{ y: -8 }}
              className="
              rounded-3xl
              overflow-hidden
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              "
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="h-52 w-full object-cover cursor-pointer"
                onClick={() => setSelectedCertificate(certificate)}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{certificate.title}</h3>

                <p className="text-cyan-400 mt-2">{certificate.issuer}</p>

                <p className="text-gray-400 mt-2">{certificate.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}

        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              className="
              fixed
              inset-0
              bg-black/80
              z-50
              flex
              items-center
              justify-center
              p-6
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full"
              >
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="
                  absolute
                  top-4
                  right-4
                  bg-white
                  text-black
                  rounded-full
                  p-2
                  "
                >
                  <FaTimes />
                </button>

                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="
                  rounded-2xl
                  w-full
                  max-h-[85vh]
                  object-contain
                  "
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Certificates;
