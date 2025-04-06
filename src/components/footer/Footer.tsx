import DesktopMode from "./DesktopMode";
import MobileMode from "./MobileMode";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      {/* ===mobile mode === */}
      <section className="xl:hidden">
        <MobileMode />
      </section>
      {/* ===desktop mode === */}
      <section className="hidden xl:block">
        <DesktopMode />
      </section>
    </footer>
  );
}

export default Footer;
