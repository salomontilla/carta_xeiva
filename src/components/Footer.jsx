import {Icon} from "@iconify/react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-red-800 to-red-900 text-red-50 py-12 overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-700/30 blur-2xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-red-600/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo + Text */}
          <div className="text-center md:text-left">
            <img
              src="/xeiva_favicon.svg"
              className="w-24 mx-auto md:mx-0 drop-shadow-md"
              alt="Logo Xeiva"
            />
            <p className="mt-2 text-sm text-red-100/80 tracking-wide">
              Xeiva Restaurante
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/p/Xeiva-Campestre-Restaurante-100066988352418/"
              className="text-red-100/80 hover:text-white transition"
              target="_blank"
            >
              <Icon icon="mdi:facebook" width="40" height="40" />
            </a>
            <a
              href="https://www.instagram.com/xeiva_campestre/"
              className="text-red-100/80 hover:text-white transition"
              target="_blank"
            >
              <Icon icon="mdi:instagram" width="40" height="40" />
            </a>
            
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-[1px] w-full bg-red-100/20"></div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-red-100/70">
          &copy; {new Date().getFullYear()} Xeiva Restaurante. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
