"use client";
import React, { useEffect } from "react";
// import ""; // Adjust path based on where the CSS is stored.
import "./css/index.css";
import "./css/tailwind-build.css";
import "./css/tailwind.css";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const MyNewPage = () => {
    const { theme, setTheme } = useTheme("light");
 
  useEffect(() => {
    setTheme("light");
  }, [setTheme]); 
  const router = useRouter();
  const goToSignin = () => {
    router.push("/signin");
    };

    return (
        <div className="">

<head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MarketPlace</title>
        <meta name="description" content="Market Place" />
        <link
            rel="shortcut icon"
            href="./assets/logo/logo.png"
            type="image/x-icon"
        />

{/*         
        <meta property="og:title" content="All your AI models in one place - Try marketplace Playground" />
        <meta property="og:description" content="Get all your AI models and tools in one place" /> */}

        <link rel="stylesheet" href="css/tailwind-build.css"/>
        <link rel="stylesheet" href="css/index.css" />

        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"
            integrity="sha512-dPXYcDub/aeb08c63jRq/k6GaKccl256JQy/AnOq7CAnEZ9FzSL9wSbcZkMp4R26vBsMLFYH4kQ67/bbV8XaCQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        />

    </head>
    <div
        className="tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] 
            tw-text-black dark:tw-bg-black  dark:tw-text-white"
    >

        <header
            className="lg:tw-px-4 tw-max-w-[100vw] tw-max-w-lg:tw-mr-auto max-lg:tw-top-0 tw-fixed tw-top-4 lg:tw-left-1/2 lg:tw--translate-x-1/2 tw-z-20 tw-flex tw-h-[60px] tw-w-full 
                    tw-text-gray-700 tw-bg-white dark:tw-text-gray-200 dark:tw-bg-[#17181b] tw-px-[3%] tw-rounded-md lg:tw-max-w-5xl tw-shadow-md dark:tw-shadow-gray-700
                    lg:tw-justify-around lg:!tw-backdrop-blur-lg lg:tw-opacity-[0.99]"
        >
            <a className="tw-flex tw-p-[4px] tw-gap-2 tw-place-items-center" href="#">
               

                <div className="tw-h-[50px] tw-max-w-[50px]">
                    <img
                        src="./assets/logo/logo.png"
                        alt="logo"
                        className="tw-object-contain tw-h-full tw-w-full dark:tw-invert"
                    />
                </div>
                <span className="tw-uppercase tw-text-base tw-font-medium">marketplace</span>
            </a>
            <div
                className="collapsible-header animated-collapse max-lg:tw-shadow-md"
                id="collapsed-header-items"
            >
                <nav
                    className="tw-relative tw-flex tw-h-full max-lg:tw-h-max tw-w-max tw-gap-5 tw-text-base max-lg:tw-mt-[30px] max-lg:tw-flex-col 
                                max-lg:tw-gap-5 lg:tw-mx-auto tw-place-items-center"
                >
                    <a className="header-links" href="#partners"> Partners </a>
                    <a className="header-links" href="#benefits"> Benefits </a>
                    <a className="header-links" href="#service"> Service </a>
                   
                    {/* <div className="tw-relative tw-flex tw-flex-col tw-place-items-center">
                        <div id="nav-dropdown-toggle-0" className="max-lg:tw-max-w-fit tw-flex header-links tw-gap-1  tw-place-items-center">
                            <span className=""> Features </span>
                            <i className="tw-text-sm bi bi-chevron-down"></i>
                        </div>
                        <nav id="nav-dropdown-list-0" 
                            data-open="false"
                            className="tw-scale-0 tw-opacity-0  lg:tw-fixed tw-flex lg:tw-top-[80px] lg:tw-left-1/2 lg:tw--translate-x-1/2 
                                    tw-w-[90%] tw-rounded-lg max-lg:tw-h-0 max-lg:tw-w-0
                                    lg:tw-h-[450px] tw-overflow-hidden
                                     tw-bg-white dark:tw-bg-[#17181B] tw-duration-300 
                                     tw-transition-opacity tw-transition-height tw-shadow-lg tw-p-4">
                            <div className="tw-grid max-xl:tw-flex max-xl:tw-flex-col tw-justify-around tw-grid-cols-2 tw-w-full">
                                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div className="tw-font-semibold tw-text-3xl">
                                        <i className="bi bi-list-columns-reverse"></i>
                                    </div>
                                    <div className="tw-flex tw-flex-col tw-gap-2">
                                        <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Prompt library </div>
                                        <p>Comes packed with pre-made prompt templates</p>
                                    </div> 
                                </a>

                                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div className="tw-font-semibold tw-text-3xl">
                                        <i className="bi bi-grid-1x2-fill"></i>
                                    </div>
                                    <div className="tw-flex tw-flex-col tw-gap-2">
                                        <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Unified Interface </div>
                                        <p className="">Test multiple AI models in one interface</p>
                                    </div> 
                                </a>

                                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div className="tw-font-semibold tw-text-3xl">
                                        <i className="bi bi-globe"></i>
                                    </div>
                                    <div className="tw-flex tw-flex-col tw-gap-2">
                                        <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Realtime web search </div>
                                        <p className="">Search the internet in realtime</p>
                                    </div> 
                                </a>

                                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div className="tw-font-semibold tw-text-3xl">
                                        <i className="bi bi-image-fill"></i>
                                    </div>
                                    <div className="tw-flex tw-flex-col tw-gap-2">
                                        <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">
                                            Image generation
                                        </div>
                                        <p className="">Generate images from prompts</p>
                                    </div> 
                                </a>

                                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div className="tw-font-semibold tw-text-3xl">
                                        <i className="bi bi-calendar-range"></i>
                                    </div>
                                    <div className="tw-flex tw-flex-col tw-gap-2">
                                        <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">
                                            History
                                        </div>
                                        <p className="">Continue from where you left off</p>
                                    </div> 
                                </a>

                                <a className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div className="tw-font-semibold tw-text-3xl">
                                        <i className="bi bi-translate"></i>
                                    </div>
                                    <div className="tw-flex tw-flex-col tw-gap-2">
                                        <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">
                                            Multilingual
                                        </div>
                                        <p className="">Converse in multiple languages</p>
                                    </div> 
                                </a>
                            </div>           
                        </nav>
                    </div> */}
                    <a className="header-links" href="#testimonial"> Testimonial </a>
                    
                </nav>
                <div
                 onClick={()=>{goToSignin()}}
                    className="lg:tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full 
                            max-md:tw-flex-col max-md:tw-place-content-center"
                >
                    {/* <button type="button" onclick="toggleMode()" className="header-links tw-text-gray-600 dark:tw-text-gray-300" title="toggle-theme" 
                            id="theme-toggle"> 
                        <i className="bi bi-sun" id="toggle-mode-icon"></i>
                    </button> */}
                    <div
                        // href="#"
                        
                        aria-label="Try marketplace Playground"
                        className="btn tw-flex tw-gap-3 tw-px-3 tw-py-2 tw-transition-transform 
                                    tw-duration-[0.3s] hover:tw-translate-x-2"
                    >
                        <span>Sign In</span>
                        <i className="bi bi-arrow-right"></i>
                    </div>
                </div>
            </div>
            <button
                className="bi bi-list tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-gray-500 lg:tw-hidden"
                onclick="toggleHeader()"
                aria-label="menu"
                id="collapse-btn"
            ></button>
        </header>
        <section
            className="hero-section tw-relative tw-mt-20 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-overflow-hidden max-lg:tw-mt-[100px]"
            id="hero-section"
        >
            

            <div    
                className="hero-bg-gradient tw-relative tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-gap-6 tw-p-[5%] max-xl:tw-place-items-center max-lg:tw-p-4"
            >

                <div className="purple-bg-grad  reveal-up tw-absolute tw-left-1/2 tw--translate-1/2 tw-top-[10%] tw-h-[120px] tw-w-[120px]"
                ></div> 

                <div
                    className="tw-flex tw-flex-col tw-min-h-[60vh] tw-place-content-center tw-items-center"
                >
                    <h2
                        className="reveal-up tw-text-center tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[90px] max-lg:tw-text-4xl max-md:tw-leading-snug"
                    >
                        <span className="text-blue-600"> Smart Solutions</span>
                        <br />
                        <span className="tw-font-thin tw-font-serif text-blue-600"> for Your Talent Needs</span>
                    </h2>
                    <div
                        className="reveal-up tw-mt-8 tw-max-w-[450px] tw-text-lg max-lg:tw-text-base tw-p-2 tw-text-center
                         tw-text-gray-800 dark:tw-text-white max-lg:tw-max-w-full"
                    >
                        Browse top outsourcing companies, connect with skilled employees, and get personalized proposals to fit your needs.
                    </div>

                    <div
                        className="reveal-up tw-mt-10 max-md:tw-flex-col tw-flex tw-place-items-center tw-gap-4"
                    >

                        <div
                            className="btn !tw-w-[170px] max-lg:!tw-w-[160px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-flex tw-gap-2 tw-group !tw-bg-transparent !tw-text-black dark:!tw-text-white tw-transition-colors 
                                        tw-duration-[0.3s] tw-border-[1px] tw-border-black dark:tw-border-white"
                        >
{/*                             
                            <div className="tw-relative tw-flex tw-place-items-center tw-place-content-center tw-w-6 tw-h-6">
                                <div className="tw-absolute tw-inset-0 tw-top-0 tw-left-0 tw-scale-0 tw-duration-300 group-hover:tw-scale-100 tw-border-2
                                             tw-border-gray-600 dark:tw-border-gray-200 tw-rounded-full tw-w-full tw-h-full"></div>
                                <span className="bi bi-play-circle-fill"></span>
                            </div> */}
                            <span>Testimonials</span>
                        </div>

                        <button
                            className="btn cursor-pointer  tw-group max-lg:!tw-w-[160px] tw-flex tw-gap-2 tw-shadow-lg !tw-w-[170px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]"
                            onClick={()=>{console.log("clicked")}}
                        >
                            <span onClick={()=>{goToSignin()}}>Get started</span>
                            <i className="bi bi-arrow-right group-hover:tw-translate-x-1 tw-duration-300"></i>
                        </button>
                        
                    </div>
                </div>
                
                <div
                    className="reveal-up -mt-[19rem] tw-relative tw-mt-8 tw-flex tw-w-full tw-place-content-center tw-place-items-center"
                    id="dashboard-container"
                >
                    <div className="purple-bg-grad  reveal-up tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-top-[5%] tw-h-[200px] tw-w-[200px]"
                    ></div>    

                    <div
                        className="tw-relative tw-max-w-[80%] tw-bg-white dark:tw-bg-black tw-border-[1px] dark:tw-border-[#36393c] lg:tw-w-[1024px]
                                lg:tw-h-[650px]  tw-flex tw-shadow-xl max-lg:tw-h-[450px] max-lg:tw-w-full
                                tw-overflow-hidden
                                tw-min-w-[320px] md:tw-w-full tw-min-h-[450px] tw-rounded-xl tw-bg-transparent max-md:tw-max-w-full"
                        id="dashboard"
                    >  

                        <div className="purple-bg-grad tw-max-w-[80%] reveal-up tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-top-[0%] lg:tw-max-w-[1000px] tw-h-full tw-w-full"
                        ></div> 
                        <div className="animated-border tw-w-full tw-h-full tw-p-[2px]">
                            <div className="tw-w-full tw-h-full tw-rounded-xl tw-overflow-hidden tw-flex">
                                <div className="tw-flex tw-w-full tw-p-4 tw-h-full tw-flex-col" id="marketplace-playground">
                                    <div className="tw-relative tw-w-full tw-flex tw-place-content-center tw-h-full">
                                        <div className="tw-absolute tw-top-[20%] max-lg:tw-top-[30%] tw-left-1/2 tw--translate-x-1/2  tw-w-[300px] tw-h-[300px]">
                                            
                                        </div>
                                        <div className="prompt-container tw-overflow-y-auto tw-px-[5%] max-lg:tw-px-2 scrollbar max-lg:tw-max-h-[80%] tw-max-h-[550px] 
                                                    max-lg:tw-mt-12 tw-w-full tw-h-full tw-z-10 tw-flex tw-flex-col" id="prompt-container">
                                            {/* <div className="tw-w-full tw-flex tw-text-center tw-flex-col tw-place-content-center">
                                                <h2 className="tw-text-4xl max-md:tw-text-2xl max-md:tw-mt-3 tw-opacity-80">
                                                    Mereb 
                                                </h2>
                                                <div className="tw-inline tw-mt-6 max-md:tw-mt-3">
                                                    <span id="prompts-sample" ></span>
                                                </div>
                                            </div> */}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* trusted brand section */}
        <section
            className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8"
            id="partners"
        >
            <h2 className="reveal-up tw-text-3xl max-md:tw-text-xl">
                Trusted by brands you love
            </h2>

            <div className="reveal-up carousel-container">
                <div
                    className="carousel lg:w-place-content-center tw-mt-10 tw-flex tw-w-full tw-gap-5 max-md:tw-gap-2"
                >
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="images/brand-logos/google.svg"
                            alt="Google"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/microsoft.svg"
                            alt="Microsoft"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/adobe.svg"
                            alt="Adobe"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/airbnb.svg"
                            alt="Airbnb"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/stripe.svg"
                            alt="Stripe"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div className="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/reddit.svg"
                            alt="Reddit"
                            className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                </div>
            </div>
        </section>
        {/* build your own ai apps section */}
        <section
            className="tw-relative tw-flex  tw-w-full tw-min-h-[100vh] max-lg:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden"
        >   
             <div className="tw-w-full  tw-place-content-center tw-items-center 
                        tw-flex tw-flex-col tw-max-w-[900px] tw-gap-4 tw-p-4">
               <div className="purple-bg-grad  reveal-up tw-absolute tw-right-[20%] tw-top-[20%] tw-h-[200px] tw-w-[200px]"
                ></div>
                <h2 className="reveal-up tw-text-6xl max-lg:tw-text-4xl tw-text-center tw-leading-normal tw-uppercase">
                    
                    <span className="tw-font-semibold">Build your own  Team </span>
                    <br/>
                    <span className="tw-font-serif">on top of marketplace Resource</span>
                </h2>
                <p className="reveal-up tw-mt-8 tw-max-w-[650px] tw-text-gray-900 dark:tw-text-gray-200 tw-text-center max-md:tw-text-sm">   
                Our platform's Marketplace is powered by advanced outsourcing solutions. Connecting clients with trusted companies, our seamless interface simplifies talent sourcing, enabling efficient collaboration, proposal management, and employee outsourcing.
                </p>
                <div className="reveal-up tw-flex tw-mt-8">
                    <div onClick={()=>{router.push('/signin')}}
                        className="tw-shadow-md hover:tw-shadow-xl dark:tw-shadow-gray-800 tw-transition-all tw-duration-300 
                                        tw-border-[1px] tw-p-3 tw-px-4 tw-border-black dark:tw-border-white tw-rounded-md">
                        Check out marketplace
                    </div>
                </div>
            </div>
        </section>
        {/* experince all the benefits section */}
        <section
        id="benefits"
            className="tw-relative tw-flex tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden"
        >   


            <div
                className="tw-mt-8 tw-flex tw-flex-col tw-w-full tw-h-full tw-place-items-center tw-gap-5"
            >
                <div
                    className="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center"
                >
                    <h2
                        className="tw-text-6xl tw-font-medium max-md:tw-text-3xl tw-p-2"
                    >
                        Experience all the benefits of Outsourcing
                    </h2>
                </div>
                <div
                    className="tw-mt-6 tw-flex tw-flex-col tw-max-w-[1150px] max-lg:tw-max-w-full tw-h-full 
                            tw-p-4 max-lg:tw-place-content-center tw-gap-8 "
                >   

                    <div className="max-xl:tw-flex max-xl:tw-flex-col tw-place-items-center tw-grid tw-grid-cols-3 tw-gap-8 
                                tw-place-content-center tw-auto-rows-auto">
                        <div className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                            <a href="#" className=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex 
                                tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl 
                                hover:tw-scale-[1.02]">
                                <div className="tw-overflow-hidden tw-w-full tw-min-h-[180px] tw-h-[180px]">
                                    <img src="./assets/images/home/api.png" className="tw-w-full tw-object-contain tw-h-auto" 
                                        alt="unified interface"/>
                                </div>
                                <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Your Unified Talent Hub</h2>
                                <p className="tw-text-base tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                                Connect with top outsourcing companies effortlessly. Discover, message, and collaborate—all from one seamless platform.                                </p>
                                {/* <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                                </div> */}
                            </a>
                        </div>

                        
                        <div className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                            <a href="#" className=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex 
                                tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl 
                                hover:tw-scale-[1.02]">
                                <div className="tw-w-full tw-min-h-[180px] tw-h-[180px] tw-overflow-hidden">
                                    <img src="./assets/images/home/api.png" 
                                        alt="API" className="tw-w-full tw-h-auto tw-object-contain"/>
                                    
                                </div>
                                <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">One Platform, Endless Talent</h2>
                                <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                                Streamline your outsourcing process by managing all your talent needs in a single place. Simplify discovery, proposals, and collaboration.                                </p>
                                {/* <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                                </div> */}
                            </a>
                        </div>

                        
                        <div className="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                            <a href="#" className=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex 
                                tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl 
                                hover:tw-scale-[1.02]">
                                <div className="tw-w-full tw-flex tw-place-contet-center tw-min-h-[180px] tw-h-[180px] tw-rounded-xl tw-overflow-hidden">
                                    <img src="./assets/images/home/integrations1.png" className="tw-w-full tw-h-auto tw-object-contain" 
                                            alt="Prebuilt integrations"/>
                                </div>
                                <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Effortless Outsourcing, Unified Experience</h2>
                                <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                                Stop switching between providers. Our platform unifies talent discovery and collaboration, making outsourcing seamless and efficient.                                </p>
                                {/* <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                                </div> */}
                            </a>
                        </div>
                    </div>
                    
                    

                </div>
            </div>
        </section>
        <section
        id="service"
            className="tw-relative tw-mt-10 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-center lg:tw-p-6"
        >

            <div
                className="reveal-up tw-mt-[5%] tw-flex tw-h-full tw-w-full tw-place-content-center 
                        tw-gap-2 tw-p-4 max-lg:tw-max-w-full max-lg:tw-flex-col"
            >

                <div
                    className="tw-relative tw-flex tw-max-w-[30%] max-lg:tw-max-w-full tw-flex-col 
                            tw-place-items-start tw-gap-4  tw-p-2 max-lg:tw-place-items-center 
                            max-lg:tw-place-content-center max-lg:tw-w-full"
                >
                    <div
                        className="tw-top-40 tw-flex tw-flex-col lg:tw-sticky tw-place-items-center tw-max-h-fit tw-max-w-[850px] max-lg:tw-max-h-fit max-lg:tw-max-w-[320px] tw-overflow-hidden"
                    >
                        <h2 className="tw-text-5xl tw-font-serif tw-text-center tw-font-medium  max-md:tw-text-3xl"
                            >
                            Outsourcing Made Easy
                        </h2>
                        
                        <div onClick={()=>router.push("/signin")}  className="btn !tw-mt-8 !tw-bg-transparent !tw-text-black 
                                                !tw-border-[1px] !tw-border-black 
                                                dark:!tw-border-white dark:!tw-text-white">
                            Register Now
                        </div>

                    </div>
                   
                </div>

                <div
                    className="tw-flex tw-flex-col tw-gap-10 tw-h-full tw-max-w-1/2 max-lg:tw-max-w-full tw-px-[10%]
                             max-lg:tw-px-4 max-lg:tw-gap-3 max-lg:tw-w-full lg:tw-top-[20%]
                             tw-place-items-center
                             "
                >   
                    <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl 
                                    hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all
                                  tw-p-8 tw-group/card"
                        >
                            <div className="tw-text-4xl max-md:tw-text-2xl">
                                <i className="bi bi-code-square"></i>
                            </div>

                            <div className="tw-flex tw-flex-col tw-gap-4">
                                <h3 className="tw-text-2xl max-md:tw-text-xl">
                                Talent Discovery Platform
                                </h3>
                                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                A streamlined tool to connect clients with companies offering top-tier outsourced talent, making it easy to find the right fit quickly.                                </p>

                                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl
                                 hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card"
                        >
                            <div className="tw-text-4xl max-md:tw-text-2xl">
                                <i className="bi bi-file-pdf-fill"></i>
                            </div>

                            <div className="tw-flex tw-flex-col tw-gap-4">
                                <h3 className="tw-text-2xl max-md:tw-text-xl">
                                Proposal Management System
                                </h3>
                                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                Simplifies creating, sending, and tracking proposals, ensuring efficient communication between clients and outsourcing companies.                                </p>

                                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg tw-duration-300 
                                tw-transition-all dark:tw-shadow-[#171717] tw-p-8 tw-group/card"
                        >
                            <div className="tw-text-4xl max-md:tw-text-2xl">
                                <i className="bi bi-image-fill"></i>
                            </div>

                            <div className="tw-flex tw-flex-col tw-gap-4">
                                <h3 className="tw-text-2xl max-md:tw-text-xl">
                                Integrated Messaging System
                                </h3>
                                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                A built-in chat feature to facilitate real-time communication, enhancing collaboration and project transparency.                                </p>

                                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            className="tw-flex tw-w-full dark:tw-shadow-[#171717] tw-h-full tw-gap-8 tw-rounded-xl  hover:tw-shadow-lg tw-duration-300 
                            tw-transition-all tw-p-8 tw-group/card"
                        >
                            <div className="tw-text-4xl max-md:tw-text-2xl">
                                <i className="bi bi-bar-chart-line-fill"></i>
                            </div>

                            <div className="tw-flex tw-flex-col tw-gap-4">
                                <h3 className="tw-text-2xl max-md:tw-text-xl">
                                Verified Company Profiles
                                </h3>
                                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                Browse detailed and verified profiles of outsourcing companies to ensure you’re working with trusted partners.                                </p>

                                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl dark:tw-shadow-[#171717] hover:tw-shadow-lg tw-duration-300 
                                tw-transition-all tw-p-8 tw-group/card"
                        >
                            <div className="tw-text-4xl max-md:tw-text-2xl">
                                <i className="bi bi-bar-chart-line-fill"></i>
                            </div>

                            <div className="tw-flex tw-flex-col tw-gap-4">
                                <h3 className="tw-text-2xl max-md:tw-text-xl">
                                Skill-Based Filtering
                                </h3>
                                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                Find the right talent by filtering companies based on employee skills, experience levels, and specializations.
                                </p>

                                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* <div className="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl 
                                    hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card"
                        >
                            <div className="tw-text-4xl max-md:tw-text-2xl">
                                <i className="bi bi-camera-video-fill"></i>
                            </div>

                            <div className="tw-flex tw-flex-col tw-gap-4">
                                <h3 className="tw-text-2xl max-md:tw-text-xl">
                                    Video generator
                                </h3>
                                <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                    Use our AI video generation tools create videos from text or templates, streamlining content creation and production.
                                </p>

                                <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div> */}

                </div>

                
            </div>
        </section>

        <section
        id="testimonial"

            className="tw-flex tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%]"
        >
            <h3
                className="reveal-up tw-text-4xl tw-font-medium tw-text-center max-md:tw-text-2xl"
            >
                Join the professionals using marketplace
            </h3>
            <div
                className="tw-mt-20 tw-gap-10 tw-space-y-8  max-md:tw-columns-1 lg:tw-columns-2 xl:tw-columns-3"
            >
                <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/man2.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Mante</div>
                            <div className="tw-text-gray-700 dark:tw-text-gray-300">Glu, cto</div>
                        </div>
                    </div>

                    <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore deleniti iusto Numquam!
                    </p>
                </div>

                 <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/women.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="women"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Trich B</div>
                            <div className="tw-text-gray-700 dark:tw-text-gray-300">AMI, ceo</div>
                        </div>
                    </div>

                    <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae, vero. Lorem ipsum dolor sit amet.
                    </p>
                </div>

                 <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/man.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">John B</div>
                            <div className="tw-text-gray-700 dark:tw-text-gray-300">Benz, ceo</div>
                        </div>
                    </div>

                    <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, expedita nihil repellendus accusamus itaque facere labore, suscipit tempore in harum repellat. Doloribus, dolor facere dolorem impedit facilis rerum beatae exercitationem aliquid porro ea architecto similique illo omnis odio consequatur modi.
                    </p>
                </div>

                 <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/man2.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Ben Alfert B</div>
                            <div className="tw-text-gray-700 dark:tw-text-gray-300">XZ tech, cto</div>
                        </div>
                    </div>

                    <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae, vero.
                    </p>
                </div>

                 <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/women.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="women"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Rachel</div>
                            <div className="tw-text-gray-700 dark:tw-text-gray-300">Gem, cto</div>
                        </div>
                    </div>

                    <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae, vero. Lorem, ipsum dolor.
                    </p>
                </div>

                 <div
                    className="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div className="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/man.jpg"
                                className="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                            <div className="tw-font-semibold">Jamie</div>
                            <div className="tw-text-gray-700 dark:tw-text-gray-300">SnapFist.ai, ceo</div>
                        </div>
                    </div>

                    <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, nihil vitae fuga ab reiciendis optio et corporis dolorem alias deserunt, molestias in iusto! Ratione, quisquam incidunt. Reprehenderit ipsam officiis enim.
                    </p>
                </div>
               
            </div>
        </section>    

        <footer
            className="tw-mt-auto tw-flex tw-flex-col tw-w-full tw-gap-4 tw-text-sm tw-pt-[5%] tw-pb-10 tw-px-[10%] 
                    tw-text-black dark:tw-text-white max-md:tw-flex-col"
        >
            <div className="tw-flex max-md:tw-flex-col max-md:tw-gap-6 tw-gap-3 tw-w-full tw-place-content-around">
                <div
                    className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full"
                >   
                    <a href="#" className="tw-w-full tw-place-items-center tw-flex tw-flex-col tw-gap-6">
                        <img
                            src="./assets/logo/logo.png"
                            alt="logo"
                            srcset=""
                            className="tw-max-w-[120px] dark:tw-invert"
                        />
                        <div className="tw-max-w-[120px] tw-text-center tw-text-3xl tw-h-fit">
                            marketplace
                        </div>
                    </a>
                    <div className="tw-flex tw-gap-4 tw-text-lg">
                        <a
                            href="https://github.com/PaulleDemon/"
                            aria-label="Github"
                        >
                            <i className="bi bi-github"></i>
                        </a>
                        <a
                            href="https://twitter.com/pauls_freeman"
                            aria-label="Twitter"
                        >
                            <i className="bi bi-twitter"></i>
                        </a>
                      
                        <a
                            href="https://www.linkedin.com/"
                            aria-label="Linkedin"
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>

                </div>

                <div className="tw-flex max-md:tw-flex-col tw-flex-wrap tw-gap-6 tw-h-full tw-w-full tw-justify-around">
                    <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
                        <h2 className="tw-text-xl">Resources</h2>
                        <div className="tw-flex tw-flex-col tw-gap-3">
                            <a href="#" className="footer-link">Getting started</a>
                            <a href="#" className="footer-link">API Docs</a>
                            <a href="#" className="footer-link">API Endpoints</a>
                            <a href="#" className="footer-link">Health status</a>
                            <a href="#" className="footer-link">Pricing</a>
                        </div>
                    </div>


                    <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
                        <h2 className="tw-text-xl">Company</h2>
                        <div className="tw-flex tw-flex-col tw-gap-3">
                            <a href="#" className="footer-link">Support channels</a>
                            <a href="#" className="footer-link">Systems</a>
                            <a href="#" className="footer-link">Blog</a>
                            <a href="https://twitter.com/pauls_freeman" className="footer-link">Twitter</a>
                            <a href="https://github.com/PaulleDemon" className="footer-link">Github</a>
                        </div>
                    </div>

                    <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
                        <h2 className="tw-text-xl">Legal</h2>
                        <div className="tw-flex tw-flex-col tw-gap-3">
                            <a href="#" className="footer-link">Terms of service</a>
                            <a href="#" className="footer-link">Privacy Policy</a>
                            <a href="#" className="footer-link">DCMA - Content Takedown</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="tw-mt-8"/>
            <div className="tw-mt-2 tw-flex tw-gap-2 tw-flex-col tw-text-gray-700 dark:tw-text-gray-300 tw-place-items-center 
                    tw-text-[12px] tw-w-full tw-text-center tw-place-content-around">
                <span>Copyright &#169; 2023-2025</span>
                <span>All trademarks and copyrights belong to their respective owners.</span>
            </div>

        </footer>

    </div>
            
        </div>
    );
};

export default MyNewPage;
