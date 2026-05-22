import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

const contactHeroImg =
  "https://images.unsplash.com/photo-1602193230480-7840a38eb0c3?auto=format&fit=crop&w=1200&q=80";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="grid min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-2">
        <div className="relative min-h-[min(50vw,28rem)] lg:min-h-0 lg:h-full">
          <Image
            src={contactHeroImg}
            alt="MOT testing bay in a vehicle garage"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center bg-[var(--bg-card)] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="mx-auto flex w-full max-w-md flex-col">
            <div className="mb-8 flex flex-col items-center text-center">
              <Link href="/" className="font-head text-3xl font-bold uppercase text-[var(--black)] sm:text-4xl">
                CSC AUTOS
              </Link>
              <p className="mt-2 font-head text-xs uppercase tracking-widest text-[var(--red)]">
                LTD · Cranleigh
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">Macleod Garage · The Common GU6 8RZ</p>
            </div>
            <h1 className="font-head text-center text-3xl font-bold uppercase text-[var(--black)]">Contact</h1>
            <p className="mt-2 text-center text-sm text-[var(--muted)]">Demo enquiry form.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
