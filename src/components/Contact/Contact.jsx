import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      toast.error("Failed to send message.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-widest text-cyan-500 dark:text-cyan-400">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Have a project, internship opportunity, or just want to say hello?
            Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Email */}

              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-xl bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-cyan-500 dark:text-cyan-400 text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    kishan763@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-xl bg-green-100 dark:bg-green-500/20 flex items-center justify-center">
                  <FaPhoneAlt className="text-green-500 dark:text-green-400 text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    +91 9199970983
                  </p>
                </div>
              </div>

              {/* Location */}

              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-purple-500 dark:text-purple-400 text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Location
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    Bhopal, Madhya Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}

            <div className="flex gap-5 mt-12">
              {[
                {
                  icon: <FaGithub size={24} />,
                  link: "https://github.com/kishanyadav9199",
                  hover: "hover:bg-gray-900",
                },
                {
                  icon: <FaLinkedin size={24} />,
                  link: "https://www.linkedin.com/in/kishan-kumar9199/",
                  hover: "hover:bg-blue-600",
                },
                {
                  icon: <SiLeetcode size={24} />,
                  link: "https://leetcode.com/u/kishan___yadav/",
                  hover: "hover:bg-yellow-500",
                },
                {
                  icon: <SiCodechef size={24} />,
                  link: "https://www.codechef.com/users/kishan91999",
                  hover: "hover:bg-orange-500",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-14 h-14 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-white flex items-center justify-center transition-all duration-300 hover:text-white ${item.hover}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-gray-200 dark:border-slate-700 shadow-xl"
          >
            <div className="space-y-6">
              <input
                name="from_name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none focus:border-cyan-500 transition-all"
              />

              <input
                name="from_email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none focus:border-cyan-500 transition-all"
              />

              <input
                name="subject"
                type="text"
                required
                placeholder="Subject"
                className="w-full p-4 rounded-xl bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none focus:border-cyan-500 transition-all"
              />

              <textarea
                name="message"
                rows="6"
                required
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none resize-none focus:border-cyan-500 transition-all"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
