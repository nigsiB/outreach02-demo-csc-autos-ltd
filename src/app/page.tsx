import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ServiceCard } from "@/components/ServiceCard";

const heroImg = "https://images.unsplash.com/photo-1602193230480-7840a38eb0c3?auto=format&fit=crop&w=1600&q=80";
const aboutImg = "https://images.unsplash.com/photo-1588723071875-2c8c39b51c94?auto=format&fit=crop&w=1600&q=80";
const galleryImg = "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80";

const services = [
  { image: "https://images.unsplash.com/photo-1602193230480-7840a38eb0c3?auto=format&fit=crop&w=600&q=80", alt: "MOT testing bay", title: "MOT testing", desc: "Class 4 & 7 MOTs — pricing from site, 20 years on The Common." },
  { image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80", alt: "Tyre fitting and balancing", title: "Tyres", desc: "Budget to premium brands, balancing, and puncture repairs." },
  { image: "https://images.unsplash.com/photo-1588723071875-2c8c39b51c94?auto=format&fit=crop&w=600&q=80", alt: "Car servicing in workshop", title: "Servicing", desc: "Interim and full services for cars and light commercials." },
  { image: "https://images.unsplash.com/photo-1643701079732-3b1c7a797e3d?auto=format&fit=crop&w=600&q=80", alt: "Vehicle repairs", title: "Repairs", desc: "Exhausts, brakes, suspension — straight advice." },
  { image: "https://images.unsplash.com/photo-1631720040176-0d789a643a78?auto=format&fit=crop&w=600&q=80", alt: "Engine diagnostics", title: "Diagnostics", desc: "Engine management and electrical fault finding." },
];

const reviews = [
  { quote: "20 years using CSC — MOT always fair, tyres fitted while I wait.", name: "Peter G.", detail: "The Common" },
  { quote: "MOT passed, showed me the advisory items honestly.", name: "Karen T.", detail: "MOT" },
  { quote: "Best garage in Cranleigh for tyres — quick turnaround.", name: "Steve L.", detail: "Tyres" },
];

export default function Page() {
  return (
    <main>
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2">
          <div className="p-10 flex flex-col justify-center">
            <p className="text-red-500 font-head text-sm tracking-widest uppercase">Macleod Garage · The Common GU6 8RZ</p>
            <h1 className="font-head text-5xl sm:text-6xl mt-2 leading-none">TYRES.<br />MOT.<br />DONE.</h1>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Demo for CSC AUTOS LTD — 20 years on The Common, 01483 277352, bold trustworthy garage presence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-block bg-[var(--red)] px-8 py-4 font-head font-bold uppercase text-sm">
                Book service
              </Link>
              <a href="tel:01483277352" className="inline-block border border-white/30 px-8 py-4 font-head font-bold uppercase text-sm">
                01483 277352
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px]">
            <Image src={heroImg} alt="Tyre fitting" fill className="object-cover" priority sizes="50vw" />
          </div>
        </div>
      </section>

      <section className="section-trust border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-6 py-6 text-center text-sm">
          <p><span className="font-head font-bold">4.9★</span> concept</p>
          <p>The Common GU6 8RZ</p>
          <p>Mon–Sat workshop hours</p>
        </div>
      </section>

      <section className="section-services max-w-6xl mx-auto px-6 py-14">
        <h2 className="font-head text-3xl uppercase">Services</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} image={s.image} alt={s.alt} title={s.title} desc={s.desc} />
          ))}
        </ul>
      </section>

      <section className="section-about">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={aboutImg} alt="Garage workshop" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <h2 className="font-head text-3xl uppercase">20 years on The Common</h2>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              CSC AUTOS combines MOT testing, tyre supply, and servicing under one roof — with the no-nonsense
              service Cranleigh drivers expect.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        image={galleryImg}
        imageAlt="Tyre stack"
        title="Same-day MOT slots"
        body="Book MOT and tyre fitting together — demo pricing, confirm live rates with the workshop."
        primaryHref="/contact"
        primaryLabel="Book MOT"
        secondaryHref="tel:01483277352"
        secondaryLabel="01483 277352"
      />

      <section className="section-reviews max-w-6xl mx-auto px-6 py-14">
        <h2 className="font-head text-3xl uppercase">Reviews</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="bg-white p-6 border-t-4 border-[var(--red)]">
              <p className="text-sm italic text-[var(--muted)]">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-4 font-head font-bold">{r.name}</p>
              <p className="text-xs text-[var(--muted)]">{r.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-gallery max-w-6xl mx-auto px-6 pb-14">
        <h2 className="font-head text-3xl uppercase">Workshop</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="relative aspect-video overflow-hidden">
            <Image src={galleryImg} alt="Tyres on rack" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative aspect-video overflow-hidden">
            <Image src={heroImg} alt="MOT bay" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      <CtaBand
        reverse
        image={aboutImg}
        imageAlt="CSC Autos Ltd"
        title="Drive in today"
        body="Macleod Garage, The Common GU6 8RZ — tyres, MOT, and servicing."
        primaryHref="tel:01483277352"
        primaryLabel="Call CSC"
        secondaryHref="/contact"
        secondaryLabel="Book online"
      />
    </main>
  );
}
