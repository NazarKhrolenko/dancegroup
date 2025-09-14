import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-20 bg-gray-700 flex justify-around">
      <div className=" h-[800px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d610.7881105506846!2d20.957084328632227!3d52.24061469824199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb71166a4c13%3A0x7bdb5392e68411c4!2sal.%20Prymasa%20Tysi%C4%85clecia%2076%2C%2001-424%20Warszawa!5e0!3m2!1sru!2spl!4v1757873214136!5m2!1sru!2sp&zoom=20&hl=en"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full lg:w-1/3 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">Kontakt</h2>
          <div className="grid gap-6">
            <div>
              <h3 className="uppercase text-sm tracking-wide text-gray-400">
                Adres
              </h3>
              <p className="text-lg">al. Prymasa Tysiąclecia 76</p>
            </div>

            <div>
              <h3 className="uppercase text-sm tracking-wide text-gray-400">
                Dane Kontaktowe
              </h3>
              <p>
                Trenerka:{" "}
                <span className="font-semibold">Khrystyna Bardylo</span>
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
                email{" "}
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
        <div className="flex gap-6 text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
