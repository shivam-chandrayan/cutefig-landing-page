import Image from "next/image";
import Link from "next/link";
import { LinkIcon as Thread } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoShowcase from "@/components/video-showcase";
import InfiniteScrollGallery from "@/components/infinite-scroll-gallery";

// Sample image data for the infinite scroll gallery
const galleryImages1 = [
  {
    src: "./placeholder600x400.svg",
    alt: "Handcrafted floral tote bag",
    width: 280,
    height: 400,
  },
  {
    src: "/hero-images/present-box.png",
    alt: "Canvas tote with leather handles",
    width: 280,
    height: 500,
  },
  {
    src: "./placeholder600x400.svg",
    alt: "Canvas tote with leather handles",
    width: 280,
    height: 500,
  },
  {
    src: "/hero-images/sun.png",
    alt: "Embroidered custom tote",
    width: 280,
    height: 450,
  },
  {
    src: "./placeholder600x400.svg",
    alt: "Minimalist tote design",
    width: 280,
    height: 380,
  },
];

const galleryImages2 = [
  {
    src: "/hero-images/cherry.png",
    alt: "Patterned tote bag",
    width: 280,
    height: 420,
  },
  {
    src: "./placeholder600x400.svg",
    alt: "Patterned tote bag",
    width: 280,
    height: 420,
  },
  {
    src: "./placeholder600x400.svg",
    alt: "Eco-friendly tote",
    width: 280,
    height: 480,
  },
  {
    src: "/hero-images/strawberry.png",
    alt: "Artisan crafted tote",
    width: 280,
    height: 400,
  },
  {
    src: "./placeholder600x400.svg",
    alt: "Limited edition tote design",
    width: 280,
    height: 350,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="p-6">
        <div className="flex items-start justify-between">
          <Image
            src={"/logo.svg"}
            alt="CuteFig Logo"
            width={100}
            height={100}
          />
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-medium hover:text-rose-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-rose-500 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-rose-500 transition-colors"
            >
              Customize
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-rose-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-rose-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm font-medium border border-gray-300 rounded-full px-6 py-2 hover:text-rose-500 hover:border-rose-500 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-2">
          <div className="flex flex-col items-center justify-between gap-8 py-10">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                We Make Unique
              </h1>
              <div className="flex items-center justify-between gap-2">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                  Completely
                </h1>
                <Image
                  src={"/tote-bags/tote (3).jpg"}
                  alt="hero img"
                  width={250}
                  height={50}
                ></Image>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                  Customisable
                </h1>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Fashion Accessories
              </h1>
            </div>
          </div>
        </section>

        {/* <section>
          <GridWithBorders />
        </section> */}

        <section>
          <div className="grid grid-cols-20 gap-2 p-4">
            <div className="bg-[#50d71e] rounded-xl col-span-2 bg-[url(https://placehold.co/150x100)] bg-center"></div>
            <div className="bg-[#50d71e] aspect-square rounded-xl col-span-2 row-span-2 bg-[url(https://placehold.co/150x100)] bg-center"></div>
            <div className="bg-[#50d71e] aspect-square rounded-full col-span-2 row-span-2"></div>
            <div className="bg-[#50d71e] rounded-xl bg-[url(https://placehold.co/100x100)] bg-center"></div>
            <div className="bg-[#50d71e] rounded-xl bg-[url(https://placehold.co/100x100)] bg-center"></div>
            <div className="bg-[#50d71e] rounded-xl col-span-4 row-span-2 bg-[url(https://placehold.co/300x150)] bg-center">
              6
            </div>
            <div className="bg-[#50d71e] rounded-xl col-span-2 bg-[url(https://placehold.co/150x100)] bg-center">
              7
            </div>
            <div className="bg-[#50d71e] rounded-xl bg-[url(https://placehold.co/100x100)] bg-center"></div>
            <div className="bg-[#50d71e] rounded-full"></div>
            <div className="bg-[#50d71e] rounded-full col-span-2 bg-[url(https://placehold.co/150x100)] bg-center">
              10
            </div>
            <div className="bg-[#50d71e] rounded-full col-span-2 bg-[url(https://placehold.co/150x100)] bg-center">
              11
            </div>
            <div className="bg-[#50d71e] rounded-full row-span-2 bg-[url(https://placehold.co/100x150)] bg-center">
              12
            </div>
            <div className="bg-[#50d71e] rounded-full">13 - 1</div>
            <div className="bg-[#E94F37] aspect-square rounded-xl col-span-2 row-span-2">
              13
            </div>
            <div className="bg-[#E94F37] aspect-square rounded-full col-span-2 row-span-2">
              14
            </div>
            <div className="bg-[#E94F37] aspect-square rounded-xl col-span-2 row-span-2">
              15
            </div>
            <div className="bg-[#50d71e] rounded-xl bg-[url(https://placehold.co/100x100)] bg-center"></div>
            <div className="bg-[#50d71e] rounded-xl row-span-2 bg-[url(https://placehold.co/100x150)] bg-center">
              17
            </div>
            <div className="bg-[#50d71e] rounded-xl bg-[url(https://placehold.co/100x100)] bg-center"></div>
            <div className="bg-[#50d71e] rounded-xl bg-[url(https://placehold.co/100x100)] bg-center"></div>
            <div className="bg-[#50d71e] rounded-xl bg-[url(https://placehold.co/100x100)] bg-center"></div>
            <div className="bg-[#50d71e] rounded-xl col-span-2 bg-[url(https://placehold.co/150x100)] bg-center">
              21
            </div>
            <div className="bg-[#50d71e] rounded-xl col-span-2 bg-[url(https://placehold.co/150x100)] bg-center">
              22
            </div>
            <div className="bg-[#50d71e] rounded-xl bg-[url(https://placehold.co/100x100)] bg-center"></div>
            <div className="bg-[#50d71e] rounded-xl col-span-2 bg-[url(https://placehold.co/150x100)] bg-center">
              24
            </div>
            <div className="bg-[#50d71e] rounded-xl bg-[url(https://placehold.co/100x100)] bg-center"></div>
            <div className="bg-[#50d71e] rounded-xl bg-[url(https://placehold.co/100x100)] bg-center"></div>
            <div className="bg-[#50d71e] rounded-full">27</div>
            <div className="bg-[#50d71e] rounded-xl bg-[url(https://placehold.co/100x100)] bg-center"></div>
          </div>
        </section>

        <section className="container mx-auto pt-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Handcrafted Goodness to make you stand out!
              </h1>
              {/* <p className="text-lg text-gray-600">
                All designs are unique, fully costomisable and made with premium
                materials. Our artisans take pride in their work, ensuring that
                each bag is not just a product, but a piece of art.
              </p> */}
              <div>
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 rounded-full px-8"
                >
                  See all products
                </Button>
              </div>
              <div className="pt-12 flex items-center gap-6">
                <div>
                  <Image
                    src="./placeholder600x400.svg"
                    alt="Craftsmanship award"
                    width={80}
                    height={80}
                    className="opacity-80"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  200+ happy customers around the world
                </p>
              </div>
            </div>

            {/* Infinite scroll gallery */}
            <InfiniteScrollGallery
              imagesColumn1={galleryImages1}
              imagesColumn2={galleryImages2}
              column1Speed={30}
              column2Speed={40}
            />
          </div>
        </section>

        {/* tote bags section */}
        <section className="h-screen flex items-center justify-center bg-[#01735C]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-24">
            <div className="relative aspect-square shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
              <Image
                src={`/tote-bags/tote (1).jpg`}
                alt={`Custom tote design`}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex justify-between flex-col aspect-square">
              <div>
                <p className="text-gray-600 text-sm text-red-500 mb-2 text-bold">
                  Best Seller
                </p>
                <p className="text-gray-600 text-sm">
                  Hand Embroidered <br />
                  High Density Canvas <br />
                  Fully Customizable <br />
                </p>
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold mt-2 text-center">
                TOTE BAGS
              </h3>
              <div className="flex justify-center">
                <a
                  href="/tote-bags"
                  className="bg-rose-500 hover:bg-rose-600 rounded-full px-6 py-2 text-white text-center inline-block"
                >
                  See all Tote Bags
                </a>
              </div>
            </div>

            <div className="relative aspect-square shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
              <Image
                src={`/tote-bags/tote (3).jpg`}
                alt={`Custom tote design`}
                fill
                className="object-cover"
              />
              {/* <div className="absolute top-6 right-10 bg-purple-100 px-4 py-2 rounded-full text-sm font-medium text-purple-700 animate-bounce">
                Best Seller
              </div> */}
            </div>
          </div>
          {/* <div>
              <h3 className="text-2xl md:text-4xl font-extrabold mt-2 text-center">
                TOTE BAGS
              </h3>
              <p className="text-gray-600 text-center">
                Hand Embroidered Tote Bags for Every Occasion
              </p>
              <div className="mt-4 flex justify-center">
                <a
                  href="/tote-bags"
                  className="bg-rose-500 hover:bg-rose-600 rounded-full px-6 py-2 text-white text-center inline-block"
                >
                  Shop Tote Bags
                </a>
              </div>
            </div> */}
        </section>

        <section className="h-screen flex items-center justify-center">
          <div>
            <div className="flex gap-2">
              <div className="relative h-[30vw] w-[50vh] rounded-l-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
                <Image
                  src={`/tote-bags/tote (1).jpg`}
                  alt={`Custom tote design`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 right-10 bg-purple-100 px-4 py-2 rounded-full text-sm font-medium text-purple-700 animate-bounce">
                  from ₹999
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="font-semibold text-lg text-white">
                    Premium Tote
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Hand-stitched with premium materials
                  </p>
                </div>
              </div>

              <div className="relative h-[30vw] w-[50vh] rounded-r-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
                <Image
                  src={`/tote-bags/tote (2).jpg`}
                  alt={`Custom tote design`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 right-10 bg-purple-100 px-4 py-2 rounded-full text-sm font-medium text-purple-700 animate-bounce">
                  from ₹399
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="font-semibold text-lg text-white">
                    Lite Tote
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Hand-stitched with premium materials
                  </p>
                </div>
              </div>
            </div>
            {/* <div>
              <h3 className="font-bold mt-2">Hand Embroidered Tote Bags</h3>
              <p className="text-gray-600">
                Heavy weight canvas • Fully customizable • Comes with zipper.
              </p>
              <p className="text-gray-600">From ₹999</p>
            </div> */}
          </div>
        </section>

        {/* <section className="bg-rose-50 py-20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why choose handmade?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Each stitch tells a story of craftsmanship and attention to
                detail that mass-produced items simply can't match.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-rose-500"
                  >
                    <path d="M6 3h12l4 6-10 13L2 9Z"></path>
                    <path d="M11 3 8 9l4 13 4-13-3-6"></path>
                    <path d="M2 9h20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Premium Materials
                </h3>
                <p className="text-gray-600">
                  We source only the highest quality fabrics and materials to
                  ensure your tote is both beautiful and durable.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-rose-500"
                  >
                    <path d="m2 22 1-1h3l9-9"></path>
                    <path d="M3 21v-3l9-9"></path>
                    <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l-3 3"></path>
                    <path d="M10.5 10.5 8 13"></path>
                    <path d="M12 15H9l-7 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Full Customization
                </h3>
                <p className="text-gray-600">
                  Choose your fabric, colors, patterns, and even add
                  personalized embroidery to make it truly yours.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-rose-500"
                  >
                    <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"></path>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Artisan Crafted</h3>
                <p className="text-gray-600">
                  Each bag is lovingly made by skilled artisans who put their
                  heart into every stitch and detail.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="py-20 container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How does it work?
              </h2>
              <p className="text-gray-600 mb-8">
                Our intuitive design tool makes it easy to bring your vision to
                life. Choose from hundreds of fabrics, add your artwork, or
                select from our curated designs.
              </p>
              <ul className="space-y-4">
                {[
                  "Select your base tote style - lite or premium",
                  "Choose your artwork and add customization",
                  "Pay and get free delivery",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 bg-rose-500 hover:bg-rose-600">
                Start Designing
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-6 left-10 bg-purple-100 px-4 py-2 rounded-full text-sm font-medium text-purple-700 animate-bounce">
                @sarah
              </div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="./placeholder600x400.svg"
                  alt="Tote bag customization interface"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Video Showcase Section */}
        <VideoShowcase />

        {/* <section className="bg-gray-900 text-white py-16">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join our creative community
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Showcase your custom tote designs, get inspired by others, and be
              part of a community that values handmade craftsmanship.
            </p>
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
              Join for $9.99/month
            </Button>
            <p className="mt-4 text-gray-400">or</p>
            <Link
              href="#"
              className="text-rose-300 hover:text-rose-200 inline-block mt-2"
            >
              Learn more about membership benefits
            </Link>
          </div>
        </section> */}
      </main>
      <footer className="bg-gray-900 text-[#0a2540] px-8 py-12">
        <div className="flex gap-8 max-w-7xl mx-auto">
          {/* Left */}
          <div className="space-y-4 bg-white rounded-2xl flex-3">
            <h2 className="text-3xl font-bold leading-tight">CuteFig</h2>
            <p className="flex items-center gap-2 font-medium">
              <span>© 2023 All Rights Reserved, Givingli Inc.</span>
            </p>
          </div>

          {/* Center */}
          <div className="space-y-4 flex-3">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-xl font-semibold">Support</h3>
              <p>
                Having questions?{" "}
                <Link href="#" className="underline">
                  Get in touch
                </Link>{" "}
                or check out our{" "}
                <Link href="#" className="underline">
                  Help Center
                </Link>
                .
              </p>
              <p>
                Text us at{" "}
                <a href="tel:3107735384" className="underline">
                  (310) 773-5384
                </a>{" "}
                or email{" "}
                <a href="mailto:help@givingli.com" className="underline">
                  help@givingli.com
                </a>
              </p>
            </div>

            {/* Bottom Links */}
            <div className="border-t border-[#cbd5e0] mt-10 pt-4 flex justify-center gap-6 text-sm bg-white rounded-2xl">
              <Link href="#" className="underline">
                Terms of use
              </Link>
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4 bg-white rounded-2xl row-span-2 flex-1 text-center">
            <h3 className="text-xl font-semibold">Social</h3>
            <div className="flex flex-col gap-4 justify-center items-center">
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="X (Twitter)">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
