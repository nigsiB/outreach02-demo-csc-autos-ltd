import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
            CSC AUTOS
          </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">MOT, tyres & servicing on The Common.</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--red)]">Quick links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/75 transition-colors hover:text-[var(--red)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/75 transition-colors hover:text-[var(--red)]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/75 transition-colors hover:text-[var(--red)]">
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--red)]">Contact</p>
            <div className="mt-4 space-y-2 text-sm opacity-85">
              <p>Macleod Garage, The Common GU6 8RZ</p>
              <p>
                <a href="tel:01483277352" className="text-white/75 transition-colors hover:text-[var(--red)]">
                  01483 277 352
                </a>
              </p>
              <p>20 years on The Common (demo)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-current/15 pt-8 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} CSC AUTOS LTD</p>
          <p>Demo concept site for outreach — not affiliated with the live business.</p>
        </div>
      </div>
    </footer>
  );
}
