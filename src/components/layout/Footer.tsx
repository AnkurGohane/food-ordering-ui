import { Camera, Globe2, Send } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-5 px-4 py-7 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between">

          <div>
  <img
    src="/images/platform-logo.png"
    alt="FoodHive"
    className="h-10 w-auto object-contain"
  />
  <p className="mt-1 text-xs">Good Food, Better Mood</p>
</div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#about" className="transition hover:text-emerald-600">About</a>
          <a href="#contact" className="transition hover:text-emerald-600">Contact</a>
          <a href="#careers" className="transition hover:text-emerald-600">Careers</a>
          <a href="#terms" className="transition hover:text-emerald-600">Terms</a>
          <a href="#privacy" className="transition hover:text-emerald-600">Privacy</a>
          <a href="#help" className="transition hover:text-emerald-600">Help</a>
        </nav>
        <div className="flex items-center gap-3">
          <span className="mr-1 text-xs">Follow us</span>
          <Globe2 size={18} className="cursor-pointer text-blue-600" />
          <Camera size={18} className="cursor-pointer text-rose-500" />
          <Send size={18} className="cursor-pointer text-blue-700" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
