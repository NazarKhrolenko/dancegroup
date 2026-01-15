import React from "react";

import { FaFacebookSquare, FaTelegram, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="kontakt"
      className="pt-5 pb-15 md:flex-row flex-col flex justify-around w-[80%] mx-auto text-center"
    >
      <div className="w-full md:w-[600px] h-[350px] mg:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.72700992306!2d20.96704829162548!3d52.23017734320171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb6248712f8b%3A0xdadc7be3961ea5e!2sSkierniewicka%2014%2C%2001-230%20Warszawa!5e0!3m2!1sen!2spl!4v1768512806572!5m2!1sen!2spl"
          className="h-full w-full rounded-2xl"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full lg:w-1/3 space-y-8 pt-10">
        <div>
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">Kontakt</h2>
          <div className="grid gap-6">
            <div>
              <h3 className="uppercase text-sm tracking-wide text-gray-400">
                Adres
              </h3>
              <p className="text-lg">Skierniewicka 14</p>
            </div>

            <div>
              <h3 className="uppercase text-sm tracking-wide text-gray-400">
                Dane Kontaktowe
              </h3>
              <p>
                {" "}
                <span className="font-semibold">Khrystyna </span>
              </p>
              <p>
                tel.{" "}
                <a
                  href="tel:+48532281406"
                  className="text-indigo-400 hover:underline"
                >
                  +48 532 281 406
                </a>
              </p>
              <p>
                e-mail{" "}
                <a
                  href="mailto:khrystynab4@gmail.com"
                  className="text-indigo-400 hover:underline"
                >
                  khrystynab4@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 text-2xl ">
          <a
            href="https://www.instagram.com/khrrsttnaaa__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1CwUrLZxgD/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://t.me/+6ev-hABDMB0zZTg6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
