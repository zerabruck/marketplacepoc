import Navbar from "../../components/Navbar";

export default async function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      {/* <header
            class="lg:tw-px-4 tw-max-w-[100vw] tw-max-w-lg:tw-mr-auto max-lg:tw-top-0 tw-fixed tw-top-4 lg:tw-left-1/2 lg:tw--translate-x-1/2 tw-z-20 tw-flex tw-h-[60px] tw-w-full 
                    tw-text-gray-700 tw-bg-white dark:tw-text-gray-200 dark:tw-bg-[#17181b] tw-px-[3%] tw-rounded-md lg:tw-max-w-5xl tw-shadow-md dark:tw-shadow-gray-700
                    lg:tw-justify-around lg:!tw-backdrop-blur-lg lg:tw-opacity-[0.99]"
        >
            <a class="tw-flex tw-p-[4px] tw-gap-2 tw-place-items-center" href="#">
               

                <div class="tw-h-[50px] tw-max-w-[50px]">
                    <img
                        src="./assets/logo/logo.png"
                        alt="logo"
                        class="tw-object-contain tw-h-full tw-w-full dark:tw-invert"
                    />
                </div>
                <span class="tw-uppercase tw-text-base tw-font-medium">marketplace</span>
            </a>
            <div
                class="collapsible-header animated-collapse max-lg:tw-shadow-md"
                id="collapsed-header-items"
            >
                <nav
                    class="tw-relative tw-flex tw-h-full max-lg:tw-h-max tw-w-max tw-gap-5 tw-text-base max-lg:tw-mt-[30px] max-lg:tw-flex-col 
                                max-lg:tw-gap-5 lg:tw-mx-auto tw-place-items-center"
                >
                    <a class="header-links" href="#"> API </a>
                    <a class="header-links" href="#"> Blog </a>
                    <a class="header-links" href="#"> Solutions </a>
                   
                   
                    <a class="header-links" href="#pricing"> Pricing </a>
                    
                </nav>
                <div
                    class="lg:tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full 
                            max-md:tw-flex-col max-md:tw-place-content-center"
                >
                
                    <a
                        href="#"
                        aria-label="Try marketplace Playground"
                        class="btn tw-flex tw-gap-3 tw-px-3 tw-py-2 tw-transition-transform 
                                    tw-duration-[0.3s] hover:tw-translate-x-2"
                    >
                        <span>Sign In</span>
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <button
                class="bi bi-list tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-gray-500 lg:tw-hidden"
                onclick="toggleHeader()"
                aria-label="menu"
                id="collapse-btn"
            ></button>
        </header> */}
      {children}
    </>
  );
}
