"use client"

import React from "react";
import ButtonCustom from "@/components/ui/ButtonCustom";
import { useFormik } from "formik";
import { LuAsterisk } from "react-icons/lu";
import * as Yup from "yup";
import { FaInstagram } from "react-icons/fa6";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export const navSocials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/dec0r.inn/",
    icon: <FaInstagram />,
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@dec0r.inn",
    icon: <FaTiktok />,
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+2349110169337",
    icon: <FaWhatsapp />,
  },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string(),
  message: Yup.string().required("Message is required"),
});

export default function Cta() {

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", message: "" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted", values);
      toast("Form submitted successfully!", {
        description: (
          <span className="text-gray-400">
        {new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
          </span>
        )
      });
      resetForm();
    },
  });
  
  return (
    <motion.section
      id="contact-us"
      className="px-4 md:px-4 w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
    >
      <div className="w-full py-16 bg-gradient-to-r from-primary to-[#391b19] flex flex-col justify-center items-center md:px-6 px-4 rounded-2xl">
        <div className="max-w-3xl w-full flex flex-col items-center text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow">
            Ready to transform your space?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let Decorinn help you create a space that reflects your style and
            personality. Contact us today for a free consultation!
          </p>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=decorinn.info@gmail.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            title="Email Decorinn"
          >
            <ButtonCustom className="bg-primary text-primary font-semibold pl-4 pr-2 py-2 rounded-full shadow-lg hover:bg-primary hover:text-primary transition-all duration-300">
              Book a call
            </ButtonCustom>
          </a>
        </div>

        {/* border line */}
        <div className="border border-[#d0d1db1a] w-full my-6 px-4" />

        <main className="w-full">
          <div className="flex justify-start items-start flex-col w-full">
            <h2 className="text-lg font-medium text-white px-2">Follow us</h2>
            <div className="z-20 flex items-start justify-start gap-6">
              {navSocials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-2 text-white hover:text-primary hover:bg-white hover:rounded-full p-2 transition-all duration-300 text-2xl my-2"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white w-full rounded-lg">
            <form
              onSubmit={formik.handleSubmit}
              className="w-full mt-10 space-y-4 p-4 text-primary"
            >
              <div>
                <label className="flex mb-1">
                  Name <LuAsterisk className="text-red-500 text-sm" />
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-full p-2.5 rounded-md bg-gray-50 placeholder:text-gray-300 placeholder:font-light border border-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-500"
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-xs mt-1">
                    !! {formik.errors.name}
                  </div>
                )}
              </div>

              <div>
                <label className="flex mb-1">
                  Email <LuAsterisk className="text-red-500 text-sm" />
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full p-2.5 rounded-md bg-gray-50 placeholder:text-gray-300 placeholder:font-light border border-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-500"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    !! {formik.errors.email}
                  </div>
                )}
              </div>

              <div>
                <label className="block mb-1">Phone</label>
                <input
                  name="phone"
                  type="text"
                  placeholder="+234-456-7890"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="w-full p-2.5 rounded-md bg-gray-50 placeholder:text-gray-300 placeholder:font-light border border-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-500"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-red-500 text-sm mt-1">
                    !! {formik.errors.phone}
                  </div>
                )}
              </div>

              <div>
                <label className="flex mb-1">
                  Message <LuAsterisk className="text-red-500 text-sm" />
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Hello, I'd like to enquire about..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="w-full p-2.5 rounded-md bg-gray-50 placeholder:text-gray-300 placeholder:font-light border border-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-500"
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-sm mt-1">
                    !! {formik.errors.message}
                  </div>
                )}
              </div>

              <ButtonCustom
                type="submit"
                className="bg-primary text-primary font-semibold px-6 py-2 rounded-full shadow-lg hover:!bg-secondary hover:text-white transition-all duration-300"
              >
                Submit
              </ButtonCustom>
            </form>
          </div>
        </main>
      </div>
    </motion.section>
  );
}