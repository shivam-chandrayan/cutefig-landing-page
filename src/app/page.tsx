import Image from "next/image";
import Link from "next/link";
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
            <div className="flex flex-col items-center gap-4 font-museoModerno">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight font-museoModerno">
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

        <section className="container mx-auto px-2 max-w-6xl pt-40">
          <div className="grid grid-cols-3 gap-4">
            <div className="row-span-2 flex flex-col justify-between gap-4">
              <div>
                <img src="https://placehold.co/500x500" alt="" />
              </div>
              <div>
                <img src="https://placehold.co/100x100" alt="" />
              </div>
            </div>
            <div className="col-span-2 text-4xl">
              <h2 className="">
                Only the best quality <br />
                Materials and Craftsmanship
              </h2>
            </div>
            <div>
              <img src="https://placehold.co/400x500" alt="" />
            </div>
            <div className="flex">
              <div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  nostrum placeat, sequi recusandae laudantium dolor eaque
                  perferendis sint a ut libero soluta vitae quam totam
                </div>
                <div>
                  <img src="https://placehold.co/400x400" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="py-10">
            <h2 className="text-6xl mb-6 text-center">Our Best Tote Bags</h2>
            <div id="product-list" className="grid grid-cols-4 gap-2 px-4">
              {/* <div className="">
                <h2 className="text-2xl font-bold mb-4">Tote Bags</h2>
                <p className="text-gray-600 mb-6">
                  Handcrafted tote bags for every occasion
                </p>
              </div> */}
              {[
                {
                  id: 1,
                  name: "Premium Tote",
                  price: "₹999",
                  image: "https://placehold.co/400x400",
                },
                {
                  id: 2,
                  name: "Lite Tote",
                  price: "₹399",
                  image: "https://placehold.co/400x400",
                },
                {
                  id: 3,
                  name: "Custom Tote",
                  price: "₹1299",
                  image: "https://placehold.co/400x400",
                },
                {
                  id: 4,
                  name: "Premium Tote",
                  price: "₹999",
                  image: "https://placehold.co/400x400",
                },
                {
                  id: 5,
                  name: "Lite Tote",
                  price: "₹399",
                  image: "https://placehold.co/400x400",
                },
                {
                  id: 6,
                  name: "Custom Tote",
                  price: "₹1299",
                  image: "https://placehold.co/400x400",
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="transform transition-transform hover:scale-102"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover"
                  />
                  {/* <div className="py-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500">{product.price}</p>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want a piece for yourself?
              </h2>
              <p className="text-gray-600 mb-8">We only take custom orders.</p>

              <ul className="">
                <li>Only make handmade items</li>
                <li>We'll customise as per your liking</li>
                <li>No charge till you're happy with the design</li>
              </ul>
            </div>
            <div>
              <h3>Connect on our socials to place the order</h3>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 bg-white rounded-full shadow-md p-2 hover:shadow-lg transition-shadow">
                    {/* <div> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="rounded-full bg-[#25D366] p-1 w-12"
                    >
                      <path
                        fill="#ffffff"
                        d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"
                      />
                    </svg>
                    {/* </div> */}
                    <div>WhatsApp</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 bg-white rounded-full shadow-md p-2 hover:shadow-lg transition-shadow">
                    {/* <div> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="rounded-full bg-[#FF0069] p-1 w-12"
                    >
                      <path
                        fill="#ffffff"
                        d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
                      />
                    </svg>
                    {/* </div> */}
                    <div>Instagram</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 bg-white rounded-full shadow-md p-2 hover:shadow-lg transition-shadow">
                    {/* <div> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="rounded-full bg-[#4267B2] p-1 w-12"
                    >
                      <path
                        fill="#ffffff"
                        d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"
                      />
                    </svg>
                    {/* </div> */}
                    <div>Facebook</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 bg-white rounded-full shadow-md p-2 hover:shadow-lg transition-shadow">
                    {/* <div> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="rounded-full bg-[#000000] p-1 w-12"
                    >
                      <path
                        fill="#ffffff"
                        d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
                      />
                    </svg>
                    {/* </div> */}
                    <div>X (Twitter)</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <VideoShowcase />

        <section className="contaier pt-40">
          <div className="grid grid-cols-2">
            <div className="text-6xl relative">
              <div className="flex flex-col h-full justify-center">
                <div className="text-6xl">Hi, I'm Shivani</div>
                <div className="text-4xl">I'll make your orders with love</div>
              </div>
              <div className="absolute aspect-square bottom-0 right-0 w-40">
                <img
                  src="https://placehold.co/300x300"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
            <div className="relative grid grid-cols-2">
              <div>
                <img
                  src="https://placehold.co/400x400"
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <img
                  src="https://placehold.co/400x400"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="absolute aspect-square bottom-0 left-0 w-40 bg-blue-500">
                View All
              </div>
            </div>
          </div>
        </section>

        {/* <section className="container mx-auto pt-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Handcrafted Goodness to make you stand out!
              </h1>
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

            <InfiniteScrollGallery
              imagesColumn1={galleryImages1}
              imagesColumn2={galleryImages2}
              column1Speed={30}
              column2Speed={40}
            />
          </div>
        </section> */}

        {/* tote bags section */}
        {/* <section className="h-screen flex items-center justify-center bg-[#01735C]">
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
              <div className="absolute top-6 right-10 bg-purple-100 px-4 py-2 rounded-full text-sm font-medium text-purple-700 animate-bounce">
                Best Seller
              </div>
            </div>
          </div>
          <div>
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
            </div>
        </section> */}

        {/* <section className="h-screen flex items-center justify-center">
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
             <div>
              <h3 className="font-bold mt-2">Hand Embroidered Tote Bags</h3>
              <p className="text-gray-600">
                Heavy weight canvas • Fully customizable • Comes with zipper.
              </p>
              <p className="text-gray-600">From ₹999</p>
            </div>
          </div>
        </section> */}

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
