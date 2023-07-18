import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitch, IoLogoTwitter } from "react-icons/io5";

function Footer() {
  return (
    <footer className="flex justify-between items-center
                     bg-stone-950
                       pl-20 pt-10 pb-10 pr-20"
    >
      <div className="flex flex-col">
        <a className="link-btn mb-1" href="#">Suporte</a>
        <a className="link-btn mb-1" href="#">Política de reembolso</a>
        <a className="link-btn mb-1" href="#">Cookies</a>
        <a className="link-btn mb-1" href="#">Gamers Club</a>
        <a className="link-btn mb-1" href="#">Contate-nos</a>
      </div>
      <div className="">
        <img className="mb-5" src="/images/fulllogo.svg" alt="fulllogo" />
        <p className="text-xs">&copy;Copyright 2023 GameStore.com all rights reserved</p>
      </div>
      <div className="w-10">
        <p className="text-5xl font-bold">Ready for Game</p>
      </div>
      <div>
        <p>Siga nossas redes</p>
        <div className="flex mt-2">
          <a href="#"><IoLogoInstagram className="mr-2 w-5 h-5 cursor-pointer"></IoLogoInstagram></a>
          <a href="#"><IoLogoFacebook className="mr-2 w-5 h-5 cursor-pointer"></IoLogoFacebook></a>
          <a href="#"><IoLogoTwitter className="w-5 h-5 cursor-pointer"></IoLogoTwitter></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;