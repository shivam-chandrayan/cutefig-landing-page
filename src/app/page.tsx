import Image from "next/image";
import Link from "next/link";
import VideoShowcase from "@/components/video-showcase";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="p-6 fixed top-0 w-full z-100">
        <div className="flex items-start justify-between">
          <Image
            src={"/logo.svg"}
            alt="CuteFig Logo"
            width={100}
            height={100}
          />
          <nav className="flex items-center justify-center">
            {/* <Link
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
            </Link> */}
            <Link
              href="#placeOrderSection"
              className="text-sm bg-[#633F61] font-medium text-white rounded-full px-6 py-2 hover:bg-[#80517E] hover:border hover:border-[#633F61] focus:outline-2 focus:outline-offset-2 focus:outline-[#572F55] focus:bg-[#572F55] transition-colors"
            >
              Place Order
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex flex-col min-h-screen justify-end">
          <section className="container flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center justify-between gap-8">
              <div className="flex flex-col items-center font-museomoderno">
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight font-museomoderno">
                  We Make Unique
                </h1>
                <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                  <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
                    Completely
                  </h1>
                  <Image
                    src={"/tote-bags/tote (3).jpg"}
                    alt="hero img"
                    width={250}
                    height={50}
                    className="mx-4"
                  ></Image>
                  <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
                    Customisable
                  </h1>
                </div>
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
                  Fashion Accessories
                </h1>
              </div>
            </div>
          </section>

          {/* grid gallary display */}
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
        </section>

        <section className="container min-h-screen flex items-center justify-center pt-40">
          <div className="grid grid-cols-3 gap-4 max-w-6xl">
            <div className="row-span-2 flex flex-col justify-between gap-4">
              <div>
                <img src="https://placehold.co/500x500" alt="" />
              </div>
              <div>
                <img src="https://placehold.co/100x100" alt="" />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-4xl font-semibold">
                Only the best quality <br />
                Materials and Craftsmanship
              </h2>
            </div>
            <div>
              <img src="https://placehold.co/400x500" alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-outfit text-lg text-gray-600 font-extralight">
                Each piece is made after you order, with quality materials and
                attention to detail. It's made to last and every item a little
                different every time. No two are exactly the same.
              </p>
              <div>
                <img src="https://placehold.co/400x400" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="container min-h-screen">
          <div className="pt-40">
            <h2 className="text-6xl font-semibold mb-6 text-center">
              Our Best Tote Bags
            </h2>
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

        {/* Video Showcase Section */}
        <VideoShowcase />

        <section
          className="container pt-30 flex flex-col items-center justify-center"
          id="placeOrderSection"
        >
          <div className="flex flex-col items-center p-4">
            <h2 className="text-6xl font-semibold mb-2">
              Want a piece for yourself?
            </h2>
            <p className="text-3xl font-extralight">
              We only take custom orders.
            </p>

            <div className="text-lg text-gray-600 font-extralight my-8">
              <div className="flex items-center gap-2">
                <svg
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="#63E6BE"
                    d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"
                  />
                </svg>
                <span>Only handmade items</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="#63E6BE"
                    d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"
                  />
                </svg>
                <span>Customise as per your liking</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="#63E6BE"
                    d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7C411.4 265.5 408 250.7 396.8 243.6C385.6 236.5 370.8 240 363.7 251.2L302.3 349.5L275.3 313.5C267.3 302.9 252.3 300.7 241.7 308.7C231.1 316.7 228.9 331.7 236.9 342.3L284.9 406.3C289.6 412.6 297.2 416.2 305.1 415.9C313 415.6 320.2 411.4 324.4 404.6L404.4 276.6z"
                  />
                </svg>
                <span>No charges till you're happy with the design</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 grid-cols-auto">
            <div className="grid grid-cols-4 gap-1 col-span-2 col-start-2">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col items-center justify-center gap-2 bg-[#25D366] shadow-md p-2 transform transition-transform hover:scale-102">
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
                  <div className="text-white">Order on WhatsApp</div>
                </div>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col items-center justify-center gap-2 bg-[#FF0069] shadow-md p-2 transform transition-transform hover:scale-102">
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
                  <div className="text-white">Order on Instagram</div>
                </div>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col items-center justify-center gap-2 bg-[#4267B2] shadow-md p-2 transform transition-transform hover:scale-102">
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
                  <div className="text-white">Order on Facebook</div>
                </div>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col items-center justify-center gap-2 bg-[#000] shadow-md p-2 transform transition-transform hover:scale-102">
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
                  <div className="text-white">X (Twitter)</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* <section className="container pt-40 flex items-center justify-center">
          <div className="grid grid-cols-2">
            <div className="text-6xl relative">
              <div className="flex flex-col h-full justify-center items-end">
                <div className="w-2/3">
                  <h3 className="text-6xl">Hi, I'm Shivani</h3>
                  <p className="text-4xl">
                    I'll be making your orders with love
                  </p>
                </div>
              </div>
              <div className="absolute aspect-square top-0 left-0 w-40">
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
        </section> */}

        <section className="container">
          <div className="relative h-screen flex items-center justify-center">
            <div className="absolute z-1 w-2/3 aspect-2/1 bg-blue-200 flex items-center left-0 p-20 m-20">
              <div className="w-1/2">
                <h3 className="text-6xl font-semibold">Hi, I'm Shivani</h3>
                <p className="text-4xl font-extralight mt-4">
                  I'll be making your orders with love 💖
                </p>
              </div>
            </div>
            <div className="absolute z-10 w-1/2 grid grid-cols-2 right-0 m-20">
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
            </div>
          </div>
        </section>
      </main>

      {/* <footer className="bg-gray-900 text-[#0a2540] px-8 py-12">
        <div className="flex gap-8 max-w-7xl mx-auto">
          <div className="space-y-4 bg-white rounded-2xl flex-3">
            <h2 className="text-3xl font-bold leading-tight">CuteFig</h2>
            <p className="flex items-center gap-2 font-medium">
              <span>© 2023 All Rights Reserved, Givingli Inc.</span>
            </p>
          </div>

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

            <div className="border-t border-[#cbd5e0] mt-10 pt-4 flex justify-center gap-6 text-sm bg-white rounded-2xl">
              <Link href="#" className="underline">
                Terms of use
              </Link>
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
            </div>
          </div>

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
      </footer> */}

      <footer className="px-12 pb-20">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-2">
            <a href="">
              <img
                src="/logo-horizontal.svg"
                alt="CuteFig Logo"
                className="w-4/5 mx-auto"
              />
            </a>
          </div>
          <div className="">
            <div className="font-bold mb-2">Socials</div>
            <div className="flex flex-col gap-1 items-start">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                {/* <div> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="rounded-full hover:bg-[#25D366] p-1 w-8"
                >
                  <path
                    fill="#000"
                    d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"
                  />
                </svg>
                <div>Whatsapp</div>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                {/* <div> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="rounded-full hover:bg-[#FF0069] p-1 w-8"
                >
                  <path
                    fill="#000"
                    d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
                  />
                </svg>
                <div>Instagram</div>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="rounded-full hover:bg-[#4267B2] p-1 w-8"
                >
                  <path
                    fill="#000"
                    d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"
                  />
                </svg>
                <div>Facebook</div>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="rounded-full hover:bg-[#000000] p-1 w-8"
                >
                  <path
                    fill="#000"
                    d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
                  />
                </svg>
                <div>X</div>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="font-bold mb-2">Quick Links</div>
              <div className="flex flex-col gap-2">
                <a href="">Terms</a>
                <a href="">Privacy</a>
              </div>
            </div>
            <div className="">© 2025 All Rights Reserved, CuteFig.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
