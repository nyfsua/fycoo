import heroLockup from "../assets/hero-lockup.svg";
import barcode from "../assets/barcode.svg";
import sprntLockup from "../assets/sprnt-lockup.svg";
import heroLockupMobile from "../assets/heroLockupMobile.svg";
import orangeDot from "../assets/orange-dot.png";
import copyright from "../assets/90642.svg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="relative min-h-dvh bg-black text-neutral-300 overflow-hidden font-sans">
      {/* ===== MOBILE (your screenshot layout) ===== */}
      <div className="md:hidden min-h-dvh flex flex-col">
        {/* headline */}
        <div className="px-6 pt-8">
          <img
    src={heroLockupMobile}
    alt='“Fire your COO. Let data make the calls.”'
    className="block md:hidden w-[92vw] h-auto select-none pointer-events-none"
    draggable={false}
  />
        </div>

        {/* centered nav links */}
        <div className="mt-8 flex justify-center gap-8 text-2xl">
          <a
            href="https://sprnt.one"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Sprnt.One
          </a>
          <Link to="/mission" className="hover:text-white transition-colors">
            Our Mission
          </Link>
        </div>

        {/* orange square middle */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={orangeDot}
            alt=""
            aria-hidden="true"
            className="w-6 h-6"
            draggable={false}
          />
        </div>

        {/* sprnt lockup */}
        <div className="pb-28 flex items-center justify-center">
          <img
            src={sprntLockup}
            alt="sprnt — built by rockstars in Lagos, Nigeria"
            className="w-28 h-auto select-none"
            draggable={false}
          />
        </div>

        {/* barcode full width bottom */}
        <img
          src={barcode}
          alt="Barcode"
          className="absolute left-0 bottom-0 w-[100vw] h-auto select-none"
          draggable={false}
        />
      </div>

      {/* ===== DESKTOP+ ===== */}
      <div className="hidden md:block">
        {/* top-right nav */}
        <nav className="absolute top-8 right-8 flex items-center gap-8 text-xl md:text-2xl">
          <a
            href="https://sprnt.one"
            target="_blank"
            rel="noreferrer"
            className="transition-colors font-sans text-lg text-neutral-300 hover:text-[#B74735]"
          >
            Sprnt.One
          </a>
          <Link
            to="/mission"
            className="transition-colors font-sans text-lg text-neutral-300 hover:text-[#B74735]"
          >
            Our Mission
          </Link>
        </nav>

        {/* big headline */}
        <div className="absolute left-12 top-12 w-[80vw]">
          <img
            src={heroLockup}
            alt='“Fire your COO. Let data make the calls.”'
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* orange square center */}
        <img
          src={orangeDot}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5"
          draggable={false}
        />

        {/* barcode bottom-left */}
        <img
          src={barcode}
          alt="Barcode"
          className="absolute left-0 bottom-0 w-[30vw] h-auto select-none"
          draggable={false}
        />

        {/* sprnt lockup bottom-center */}
        <img
          src={sprntLockup}
          alt="sprnt — built by rockstars in Lagos, Nigeria"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-28 md:w-32 h-auto select-none"
          draggable={false}
        />

        {/* copyright / ndc svg bottom-right */}
        <img
          src={copyright}
          alt="90642 INC"
          className="absolute right-10 bottom-6 w-[8vw] h-auto select-none"
          draggable={false}
        />
      </div>
    </main>
  );
}
