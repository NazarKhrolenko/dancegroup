import { index } from "mathjs";
import React from "react";
import { IoLogoSnapchat } from "react-icons/io";
import { StaggeredMenu } from "../font/StaggeredMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navItems = [
    { name: "Cennik", id: "cennik" },
    { name: "Pytania", id: "pytania" },
    { name: "Kontakt", id: "kontakt" },
    { name: "Galeria", id: "galeria" },
  ];
  const menuItems = [
    { label: "Cennik", ariaLabel: "Go to home page", link: "#cennik" },
    { label: "Pytania", ariaLabel: "Learn about us", link: "#pytania" },
    { label: "Kontakt", ariaLabel: "View our services", link: "#kontakt" },
    { label: "Galeria", ariaLabel: "Get in touch", link: "#galeria" },
  ];

  const socialItems = [
    {
      label: "Instagram",
      link: "https://www.instagram.com/khrrsttnaaa__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Facebook",
      link: "https://www.facebook.com/share/1CwUrLZxgD/?mibextid=wwXIfr",
    },
    { label: "Telegram", link: "https://t.me/+6ev-hABDMB0zZTg6" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-30">
      <div className="bg-white/10 backdrop-blur-md fixed justify-around items-center py-2 text-white w-full z-10 hidden md:flex">
        <div>
          <a href="#">
            <IoLogoSnapchat size={28} />
          </a>
        </div>
        <div>
          <ul className="flex gap-10 uppercase font-bold">
            {navItems.map((navEl) => {
              return (
                <li key={navEl.id} className="relative group">
                  <a
                    href={`#${navEl.id}`}
                    className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
                  >
                    {navEl.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button
            onClick={() => window.open("https://www.instagram.com")}
            className="bg-white/80 text-black py-1 px-9 rounded-full font-medium cursor-pointer"
          >
            Zapisy
          </button>
        </div>
      </div>
      <div className="md:hidden bg-black/70 backdrop-blur-md flex justify-between items-center px-5 py-6 text-white">
        <IoLogoSnapchat size={28} />
        <div
          className={`z-40 transition-all duration-300 ${
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <StaggeredMenu
            position="right"
            items={menuItems}
            isFixed={true}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={["#B19EEF", "#5227FF"]}
            accentColor="#ff6b6b"
            onMenuOpen={() => setIsMenuOpen(true)}
            onMenuClose={() => {
              setIsMenuOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
