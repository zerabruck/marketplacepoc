import React from "react";
// import ""; // Adjust path based on where the CSS is stored.
import "./css/index.css";
import "./css/tailwind-build.css";
import "./css/tailwind.css";

const MyNewPage = () => {
    return (
        <div class="tw-dark">

<head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>All your AI models in one place - Try marketplace Playground</title>
        <meta name="description" content="Get all your AI models and tools in one place" />
        <link
            rel="shortcut icon"
            href="./assets/logo/logo.png"
            type="image/x-icon"
        />

        
        <meta property="og:title" content="All your AI models in one place - Try marketplace Playground" />
        <meta property="og:description" content="Get all your AI models and tools in one place" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/PaulleDemon" />
        <meta property="og:image" content="" />

        <link rel="stylesheet" href="css/tailwind-build.css"/>
        <link rel="stylesheet" href="css/index.css" />

        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css"
            integrity="sha512-dPXYcDub/aeb08c63jRq/k6GaKccl256JQy/AnOq7CAnEZ9FzSL9wSbcZkMp4R26vBsMLFYH4kQ67/bbV8XaCQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-"></script>
        {/* <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-');
        </script> */}

    </head>
    <body
        class="tw-flex tw-min-h-[100vh] tw-flex-col tw-bg-[#fcfcfc] 
            tw-text-black dark:tw-bg-black  dark:tw-text-white"
    >

        <header
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
                   
                    {/* <div class="tw-relative tw-flex tw-flex-col tw-place-items-center">
                        <div id="nav-dropdown-toggle-0" class="max-lg:tw-max-w-fit tw-flex header-links tw-gap-1  tw-place-items-center">
                            <span class=""> Features </span>
                            <i class="tw-text-sm bi bi-chevron-down"></i>
                        </div>
                        <nav id="nav-dropdown-list-0" 
                            data-open="false"
                            class="tw-scale-0 tw-opacity-0  lg:tw-fixed tw-flex lg:tw-top-[80px] lg:tw-left-1/2 lg:tw--translate-x-1/2 
                                    tw-w-[90%] tw-rounded-lg max-lg:tw-h-0 max-lg:tw-w-0
                                    lg:tw-h-[450px] tw-overflow-hidden
                                     tw-bg-white dark:tw-bg-[#17181B] tw-duration-300 
                                     tw-transition-opacity tw-transition-height tw-shadow-lg tw-p-4">
                            <div class="tw-grid max-xl:tw-flex max-xl:tw-flex-col tw-justify-around tw-grid-cols-2 tw-w-full">
                                <a class="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div class="tw-font-semibold tw-text-3xl">
                                        <i class="bi bi-list-columns-reverse"></i>
                                    </div>
                                    <div class="tw-flex tw-flex-col tw-gap-2">
                                        <div class="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Prompt library </div>
                                        <p>Comes packed with pre-made prompt templates</p>
                                    </div> 
                                </a>

                                <a class="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div class="tw-font-semibold tw-text-3xl">
                                        <i class="bi bi-grid-1x2-fill"></i>
                                    </div>
                                    <div class="tw-flex tw-flex-col tw-gap-2">
                                        <div class="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Unified Interface </div>
                                        <p class="">Test multiple AI models in one interface</p>
                                    </div> 
                                </a>

                                <a class="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div class="tw-font-semibold tw-text-3xl">
                                        <i class="bi bi-globe"></i>
                                    </div>
                                    <div class="tw-flex tw-flex-col tw-gap-2">
                                        <div class="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Realtime web search </div>
                                        <p class="">Search the internet in realtime</p>
                                    </div> 
                                </a>

                                <a class="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div class="tw-font-semibold tw-text-3xl">
                                        <i class="bi bi-image-fill"></i>
                                    </div>
                                    <div class="tw-flex tw-flex-col tw-gap-2">
                                        <div class="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">
                                            Image generation
                                        </div>
                                        <p class="">Generate images from prompts</p>
                                    </div> 
                                </a>

                                <a class="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div class="tw-font-semibold tw-text-3xl">
                                        <i class="bi bi-calendar-range"></i>
                                    </div>
                                    <div class="tw-flex tw-flex-col tw-gap-2">
                                        <div class="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">
                                            History
                                        </div>
                                        <p class="">Continue from where you left off</p>
                                    </div> 
                                </a>

                                <a class="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                                    <div class="tw-font-semibold tw-text-3xl">
                                        <i class="bi bi-translate"></i>
                                    </div>
                                    <div class="tw-flex tw-flex-col tw-gap-2">
                                        <div class="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">
                                            Multilingual
                                        </div>
                                        <p class="">Converse in multiple languages</p>
                                    </div> 
                                </a>
                            </div>           
                        </nav>
                    </div> */}
                    <a class="header-links" href="#pricing"> Pricing </a>
                    
                </nav>
                <div
                    class="lg:tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full 
                            max-md:tw-flex-col max-md:tw-place-content-center"
                >
                    {/* <button type="button" onclick="toggleMode()" class="header-links tw-text-gray-600 dark:tw-text-gray-300" title="toggle-theme" 
                            id="theme-toggle"> 
                        <i class="bi bi-sun" id="toggle-mode-icon"></i>
                    </button> */}
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
        </header>
        <section
            class="hero-section tw-relative tw-mt-20 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-overflow-hidden max-lg:tw-mt-[100px]"
            id="hero-section"
        >
            

            <div    
                class="hero-bg-gradient tw-relative tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-gap-6 tw-p-[5%] max-xl:tw-place-items-center max-lg:tw-p-4"
            >

                <div class="purple-bg-grad  reveal-up tw-absolute tw-left-1/2 tw--translate-1/2 tw-top-[10%] tw-h-[120px] tw-w-[120px]"
                ></div> 

                <div
                    class="tw-flex tw-flex-col tw-min-h-[60vh] tw-place-content-center tw-items-center"
                >
                    <h2
                        class="reveal-up tw-text-center tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[90px] max-lg:tw-text-4xl max-md:tw-leading-snug"
                    >
                        <span class="text-blue-600"> All your AI models </span>
                        <br />
                        <span class="tw-font-thin tw-font-serif text-blue-600"> in one place </span>
                    </h2>
                    <div
                        class="reveal-up tw-mt-8 tw-max-w-[450px] tw-text-lg max-lg:tw-text-base tw-p-2 tw-text-center
                         tw-text-gray-800 dark:tw-text-white max-lg:tw-max-w-full"
                    >
                        Your all in one AI companion. generate Images, videos, codes, docs, debug your web apps all with marketplace's interface.
                    </div>

                    <div
                        class="reveal-up tw-mt-10 max-md:tw-flex-col tw-flex tw-place-items-center tw-gap-4"
                    >

                        <button onclick="openVideo()"
                            class="btn !tw-w-[170px] max-lg:!tw-w-[160px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-flex tw-gap-2 tw-group !tw-bg-transparent !tw-text-black dark:!tw-text-white tw-transition-colors 
                                        tw-duration-[0.3s] tw-border-[1px] tw-border-black dark:tw-border-white"
                        >
                            
                            <div class="tw-relative tw-flex tw-place-items-center tw-place-content-center tw-w-6 tw-h-6">
                                <div class="tw-absolute tw-inset-0 tw-top-0 tw-left-0 tw-scale-0 tw-duration-300 group-hover:tw-scale-100 tw-border-2
                                             tw-border-gray-600 dark:tw-border-gray-200 tw-rounded-full tw-w-full tw-h-full"></div>
                                <span class="bi bi-play-circle-fill"></span>
                            </div>
                            <span>Watch video</span>
                        </button>

                        <a
                            class="btn tw-group max-lg:!tw-w-[160px] tw-flex tw-gap-2 tw-shadow-lg !tw-w-[170px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]"
                            href="#"
                        >
                            <span>Get started</span>
                            <i class="bi bi-arrow-right group-hover:tw-translate-x-1 tw-duration-300"></i>
                        </a>
                        
                    </div>
                </div>
                
                <div
                    class="reveal-up -mt-[19rem] tw-relative tw-mt-8 tw-flex tw-w-full tw-place-content-center tw-place-items-center"
                    id="dashboard-container"
                >
                    <div class="purple-bg-grad  reveal-up tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-top-[5%] tw-h-[200px] tw-w-[200px]"
                    ></div>    

                    <div
                        class="tw-relative tw-max-w-[80%] tw-bg-white dark:tw-bg-black tw-border-[1px] dark:tw-border-[#36393c] lg:tw-w-[1024px]
                                lg:tw-h-[650px]  tw-flex tw-shadow-xl max-lg:tw-h-[450px] max-lg:tw-w-full
                                tw-overflow-hidden
                                tw-min-w-[320px] md:tw-w-full tw-min-h-[450px] tw-rounded-xl tw-bg-transparent max-md:tw-max-w-full"
                        id="dashboard"
                    >  

                        <div class="purple-bg-grad tw-max-w-[80%] reveal-up tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-top-[0%] lg:tw-max-w-[1000px] tw-h-full tw-w-full"
                        ></div> 
                        <div class="animated-border tw-w-full tw-h-full tw-p-[2px]">
                            <div class="tw-w-full tw-h-full tw-rounded-xl tw-overflow-hidden tw-flex">
                                <div class="tw-flex tw-w-full tw-p-4 tw-h-full tw-flex-col" id="marketplace-playground">
                                    <div class="tw-relative tw-w-full tw-flex tw-place-content-center tw-h-full">
                                        <div class="tw-absolute tw-top-[20%] max-lg:tw-top-[30%] tw-left-1/2 tw--translate-x-1/2  tw-w-[300px] tw-h-[300px]">
                                            
                                        </div>
                                        <div class="prompt-container tw-overflow-y-auto tw-px-[5%] max-lg:tw-px-2 scrollbar max-lg:tw-max-h-[80%] tw-max-h-[550px] 
                                                    max-lg:tw-mt-12 tw-w-full tw-h-full tw-z-10 tw-flex tw-flex-col" id="prompt-container">
                                            {/* <div class="tw-w-full tw-flex tw-text-center tw-flex-col tw-place-content-center">
                                                <h2 class="tw-text-4xl max-md:tw-text-2xl max-md:tw-mt-3 tw-opacity-80">
                                                    Mereb 
                                                </h2>
                                                <div class="tw-inline tw-mt-6 max-md:tw-mt-3">
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
            class="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8"
        >
            <h2 class="reveal-up tw-text-3xl max-md:tw-text-xl">
                Trusted by brands you love
            </h2>

            <div class="reveal-up carousel-container">
                <div
                    class="carousel lg:w-place-content-center tw-mt-10 tw-flex tw-w-full tw-gap-5 max-md:tw-gap-2"
                >
                    <div class="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="images/brand-logos/google.svg"
                            alt="Google"
                            class="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div class="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/microsoft.svg"
                            alt="Microsoft"
                            class="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div class="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/adobe.svg"
                            alt="Adobe"
                            class="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div class="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/airbnb.svg"
                            alt="Airbnb"
                            class="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div class="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/stripe.svg"
                            alt="Stripe"
                            class="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                    <div class="carousel-img tw-h-[30px] tw-w-[150px]">
                        <img
                            src="./assets/images/brand-logos/reddit.svg"
                            alt="Reddit"
                            class="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0"
                            srcset=""
                        />
                    </div>
                </div>
            </div>
        </section>
        {/* build your own ai apps section */}
        <section
            class="tw-relative tw-flex  tw-w-full tw-min-h-[100vh] max-lg:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden"
        >   
             <div class="tw-w-full  tw-place-content-center tw-items-center 
                        tw-flex tw-flex-col tw-max-w-[900px] tw-gap-4 tw-p-4">
               <div class="purple-bg-grad  reveal-up tw-absolute tw-right-[20%] tw-top-[20%] tw-h-[200px] tw-w-[200px]"
                ></div>
                <h2 class="reveal-up tw-text-6xl max-lg:tw-text-4xl tw-text-center tw-leading-normal tw-uppercase">
                    
                    <span class="tw-font-semibold">Build your own AI Apps </span>
                    <br/>
                    <span class="tw-font-serif">on top of marketplace APIs</span>
                </h2>
                <p class="reveal-up tw-mt-8 tw-max-w-[650px] tw-text-gray-900 dark:tw-text-gray-200 tw-text-center max-md:tw-text-sm">   
                    marketplace's Playground is powered by marketplace's cutting-edge LLM API endpoints. Our powerful models simplify task automation, offering 
                    advanced capabilities in summarization, text generation, and Q&A handling. 
                </p>
                <div class="reveal-up tw-flex tw-mt-8">
                    <a href="#" 
                        target="_blank"
                        rel="noopener"
                        class="tw-shadow-md hover:tw-shadow-xl dark:tw-shadow-gray-800 tw-transition-all tw-duration-300 
                                        tw-border-[1px] tw-p-3 tw-px-4 tw-border-black dark:tw-border-white tw-rounded-md">
                        Check marketplace APIs
                    </a>
                </div>
            </div>
        </section>
        {/* experince all the benefits section */}
        <section
            class="tw-relative tw-flex tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden"
        >   


            <div
                class="tw-mt-8 tw-flex tw-flex-col tw-w-full tw-h-full tw-place-items-center tw-gap-5"
            >
                <div
                    class="reveal-up tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center"
                >
                    <h2
                        class="tw-text-6xl tw-font-medium max-md:tw-text-3xl tw-p-2"
                    >
                        Experience all the benefits of AI
                    </h2>
                </div>
                <div
                    class="tw-mt-6 tw-flex tw-flex-col tw-max-w-[1150px] max-lg:tw-max-w-full tw-h-full 
                            tw-p-4 max-lg:tw-place-content-center tw-gap-8 "
                >   

                    <div class="max-xl:tw-flex max-xl:tw-flex-col tw-place-items-center tw-grid tw-grid-cols-3 tw-gap-8 
                                tw-place-content-center tw-auto-rows-auto">
                        <div class="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                            <a href="#" class=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex 
                                tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl 
                                hover:tw-scale-[1.02]">
                                <div class="tw-overflow-hidden tw-w-full tw-min-h-[180px] tw-h-[180px]">
                                    <img src="./assets/images/home/api.png" class="tw-w-full tw-object-contain tw-h-auto" 
                                        alt="unified interface"/>
                                </div>
                                <h2 class="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Unified interface</h2>
                                <p class="tw-text-base tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                                    Our's is the only unified AI Interface tool brings together all your favorite chat models into one seamless platform. No more juggling between different AI systems—easily manage and interact with multiple chatbots from a single interface.
                                </p>
                                <div class="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                                    <span>Learn more</span>
                                    <i class="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                                </div>
                            </a>
                        </div>

                        
                        <div class="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                            <a href="#" class=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex 
                                tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl 
                                hover:tw-scale-[1.02]">
                                <div class="tw-w-full tw-min-h-[180px] tw-h-[180px] tw-overflow-hidden">
                                    <img src="./assets/images/home/api.png" 
                                        alt="API" class="tw-w-full tw-h-auto tw-object-contain"/>
                                    
                                </div>
                                <h2 class="tw-text-3xl max-md:tw-text-2xl tw-font-medium">API Access</h2>
                                <p class="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                                    marketplace's LLM API offers advanced summarization, text generation, and question-answering. Easily integrate with support for JSON, HTML, Markdown, and plain text, enhancing your applications with powerful language tools.
                                </p>
                                <div class="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                                    <span>Learn more</span>
                                    <i class="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                                </div>
                            </a>
                        </div>

                        
                        <div class="reveal-up tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                            <a href="#" class=" tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card  tw-gap-5 tw-flex 
                                tw-flex-col tw-w-full tw-h-full  tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl 
                                hover:tw-scale-[1.02]">
                                <div class="tw-w-full tw-flex tw-place-contet-center tw-min-h-[180px] tw-h-[180px] tw-rounded-xl tw-overflow-hidden">
                                    <img src="./assets/images/home/integrations1.png" class="tw-w-full tw-h-auto tw-object-contain" 
                                            alt="Prebuilt integrations"/>
                                </div>
                                <h2 class="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Pre-built Tools</h2>
                                <p class="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                                    marketplace offers pre-built AI integrations for diverse creative tasks including image, video, music, and PDF generation, simplifying advanced feature integration into your apps.
                                </p>
                                <div class="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                                    <span>Learn more</span>
                                    <i class="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    

                </div>
            </div>
        </section>
        <section
            class="tw-relative tw-mt-10 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-center lg:tw-p-6"
        >

            <div
                class="reveal-up tw-mt-[5%] tw-flex tw-h-full tw-w-full tw-place-content-center 
                        tw-gap-2 tw-p-4 max-lg:tw-max-w-full max-lg:tw-flex-col"
            >

                <div
                    class="tw-relative tw-flex tw-max-w-[30%] max-lg:tw-max-w-full tw-flex-col 
                            tw-place-items-start tw-gap-4  tw-p-2 max-lg:tw-place-items-center 
                            max-lg:tw-place-content-center max-lg:tw-w-full"
                >
                    <div
                        class="tw-top-40 tw-flex tw-flex-col lg:tw-sticky tw-place-items-center tw-max-h-fit tw-max-w-[850px] max-lg:tw-max-h-fit max-lg:tw-max-w-[320px] tw-overflow-hidden"
                    >
                        <h2 class="tw-text-5xl tw-font-serif tw-text-center tw-font-medium  max-md:tw-text-3xl"
                            >
                            Pre-built AI Tools
                        </h2>
                        
                        <a href="http://" class="btn !tw-mt-8 !tw-bg-transparent !tw-text-black 
                                                !tw-border-[1px] !tw-border-black 
                                                dark:!tw-border-white dark:!tw-text-white">
                            Start Chat
                        </a>

                    </div>
                   
                </div>

                <div
                    class="tw-flex tw-flex-col tw-gap-10 tw-h-full tw-max-w-1/2 max-lg:tw-max-w-full tw-px-[10%]
                             max-lg:tw-px-4 max-lg:tw-gap-3 max-lg:tw-w-full lg:tw-top-[20%]
                             tw-place-items-center
                             "
                >   
                    <div class="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            class="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl 
                                    hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all
                                  tw-p-8 tw-group/card"
                        >
                            <div class="tw-text-4xl max-md:tw-text-2xl">
                                <i class="bi bi-code-square"></i>
                            </div>

                            <div class="tw-flex tw-flex-col tw-gap-4">
                                <h3 class="tw-text-2xl max-md:tw-text-xl">
                                    AI code generator
                                </h3>
                                <p class="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                    AI code generation tools to create code from natural language or patterns, streamlining development and improving efficiency.
                                </p>

                                <div class="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i class="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            class="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl
                                 hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card"
                        >
                            <div class="tw-text-4xl max-md:tw-text-2xl">
                                <i class="bi bi-file-pdf-fill"></i>
                            </div>

                            <div class="tw-flex tw-flex-col tw-gap-4">
                                <h3 class="tw-text-2xl max-md:tw-text-xl">
                                    PDF generator
                                </h3>
                                <p class="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                    Use AI tools to automate PDF creation and content extraction, improving document management and data processing.
                                </p>

                                <div class="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i class="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            class="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg tw-duration-300 
                                tw-transition-all dark:tw-shadow-[#171717] tw-p-8 tw-group/card"
                        >
                            <div class="tw-text-4xl max-md:tw-text-2xl">
                                <i class="bi bi-image-fill"></i>
                            </div>

                            <div class="tw-flex tw-flex-col tw-gap-4">
                                <h3 class="tw-text-2xl max-md:tw-text-xl">
                                    Image generation
                                </h3>
                                <p class="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                    Prebuilt AI tools for image generation create visuals from text or patterns, enhancing design and creative projects.
                                </p>

                                <div class="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i class="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            class="tw-flex tw-w-full dark:tw-shadow-[#171717] tw-h-full tw-gap-8 tw-rounded-xl  hover:tw-shadow-lg tw-duration-300 
                            tw-transition-all tw-p-8 tw-group/card"
                        >
                            <div class="tw-text-4xl max-md:tw-text-2xl">
                                <i class="bi bi-bar-chart-line-fill"></i>
                            </div>

                            <div class="tw-flex tw-flex-col tw-gap-4">
                                <h3 class="tw-text-2xl max-md:tw-text-xl">
                                    AI Analytics
                                </h3>
                                <p class="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                    Our AI analytics tools analyze data patterns and trends, providing actionable insights and enhancing decision-making.
                                </p>

                                <div class="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i class="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            class="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl dark:tw-shadow-[#171717] hover:tw-shadow-lg tw-duration-300 
                                tw-transition-all tw-p-8 tw-group/card"
                        >
                            <div class="tw-text-4xl max-md:tw-text-2xl">
                                <i class="bi bi-music-note-beamed"></i>
                            </div>

                            <div class="tw-flex tw-flex-col tw-gap-4">
                                <h3 class="tw-text-2xl max-md:tw-text-xl">
                                    Music generator
                                </h3>
                                <p class="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                    Access our AI music generation tools create original compositions 
                                    from input parameters, enabling effortless music creation for various needs.
                                </p>

                                <div class="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i class="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="reveal-up tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
                        <a href="#"
                            class="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl 
                                    hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card"
                        >
                            <div class="tw-text-4xl max-md:tw-text-2xl">
                                <i class="bi bi-camera-video-fill"></i>
                            </div>

                            <div class="tw-flex tw-flex-col tw-gap-4">
                                <h3 class="tw-text-2xl max-md:tw-text-xl">
                                    Video generator
                                </h3>
                                <p class="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">
                                    Use our AI video generation tools create videos from text or templates, streamlining content creation and production.
                                </p>

                                <div class="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                                    <span>Learn more</span>
                                    <i class="bi bi-arrow-up-right group-hover/card:tw--translate-y-1
                                                group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>

                
            </div>
        </section>

        <section
            class="tw-flex tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%]"
        >
            <h3
                class="reveal-up tw-text-4xl tw-font-medium tw-text-center max-md:tw-text-2xl"
            >
                Join the professionals using marketplace
            </h3>
            <div
                class="tw-mt-20 tw-gap-10 tw-space-y-8  max-md:tw-columns-1 lg:tw-columns-2 xl:tw-columns-3"
            >
                <div
                    class="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            class="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/man2.jpg"
                                class="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div class="tw-flex tw-flex-col tw-gap-1">
                            <div class="tw-font-semibold">Mante</div>
                            <div class="tw-text-gray-700 dark:tw-text-gray-300">Glu, cto</div>
                        </div>
                    </div>

                    <p class="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore deleniti iusto Numquam!
                    </p>
                </div>

                 <div
                    class="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            class="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/women.jpg"
                                class="tw-h-full tw-w-full tw-object-cover"
                                alt="women"
                            />
                        </div>
                        <div class="tw-flex tw-flex-col tw-gap-1">
                            <div class="tw-font-semibold">Trich B</div>
                            <div class="tw-text-gray-700 dark:tw-text-gray-300">AMI, ceo</div>
                        </div>
                    </div>

                    <p class="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae, vero. Lorem ipsum dolor sit amet.
                    </p>
                </div>

                 <div
                    class="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            class="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/man.jpg"
                                class="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div class="tw-flex tw-flex-col tw-gap-1">
                            <div class="tw-font-semibold">John B</div>
                            <div class="tw-text-gray-700 dark:tw-text-gray-300">Benz, ceo</div>
                        </div>
                    </div>

                    <p class="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, expedita nihil repellendus accusamus itaque facere labore, suscipit tempore in harum repellat. Doloribus, dolor facere dolorem impedit facilis rerum beatae exercitationem aliquid porro ea architecto similique illo omnis odio consequatur modi.
                    </p>
                </div>

                 <div
                    class="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            class="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/man2.jpg"
                                class="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div class="tw-flex tw-flex-col tw-gap-1">
                            <div class="tw-font-semibold">Ben Alfert B</div>
                            <div class="tw-text-gray-700 dark:tw-text-gray-300">XZ tech, cto</div>
                        </div>
                    </div>

                    <p class="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae, vero.
                    </p>
                </div>

                 <div
                    class="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            class="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/women.jpg"
                                class="tw-h-full tw-w-full tw-object-cover"
                                alt="women"
                            />
                        </div>
                        <div class="tw-flex tw-flex-col tw-gap-1">
                            <div class="tw-font-semibold">Rachel</div>
                            <div class="tw-text-gray-700 dark:tw-text-gray-300">Gem, cto</div>
                        </div>
                    </div>

                    <p class="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae, vero. Lorem, ipsum dolor.
                    </p>
                </div>

                 <div
                    class="reveal-up tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid 
                        tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] 
                        tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]"
                >   

                    <div class="tw-flex tw-place-items-center tw-gap-3">
                        <div
                            class="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full"
                        >
                            <img
                                src="./assets/images/people/man.jpg"
                                class="tw-h-full tw-w-full tw-object-cover"
                                alt="man"
                            />
                        </div>
                        <div class="tw-flex tw-flex-col tw-gap-1">
                            <div class="tw-font-semibold">Jamie</div>
                            <div class="tw-text-gray-700 dark:tw-text-gray-300">SnapFist.ai, ceo</div>
                        </div>
                    </div>

                    <p class="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, nihil vitae fuga ab reiciendis optio et corporis dolorem alias deserunt, molestias in iusto! Ratione, quisquam incidunt. Reprehenderit ipsam officiis enim.
                    </p>
                </div>
               
            </div>
        </section>    

        <footer
            class="tw-mt-auto tw-flex tw-flex-col tw-w-full tw-gap-4 tw-text-sm tw-pt-[5%] tw-pb-10 tw-px-[10%] 
                    tw-text-black dark:tw-text-white max-md:tw-flex-col"
        >
            <div class="tw-flex max-md:tw-flex-col max-md:tw-gap-6 tw-gap-3 tw-w-full tw-place-content-around">
                <div
                    class="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full"
                >   
                    <a href="#" class="tw-w-full tw-place-items-center tw-flex tw-flex-col tw-gap-6">
                        <img
                            src="./assets/logo/logo.png"
                            alt="logo"
                            srcset=""
                            class="tw-max-w-[120px] dark:tw-invert"
                        />
                        <div class="tw-max-w-[120px] tw-text-center tw-text-3xl tw-h-fit">
                            marketplace
                        </div>
                    </a>
                    <div class="tw-flex tw-gap-4 tw-text-lg">
                        <a
                            href="https://github.com/PaulleDemon/"
                            aria-label="Github"
                        >
                            <i class="bi bi-github"></i>
                        </a>
                        <a
                            href="https://twitter.com/pauls_freeman"
                            aria-label="Twitter"
                        >
                            <i class="bi bi-twitter"></i>
                        </a>
                      
                        <a
                            href="https://www.linkedin.com/"
                            aria-label="Linkedin"
                        >
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>

                </div>

                <div class="tw-flex max-md:tw-flex-col tw-flex-wrap tw-gap-6 tw-h-full tw-w-full tw-justify-around">
                    <div class="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
                        <h2 class="tw-text-xl">Resources</h2>
                        <div class="tw-flex tw-flex-col tw-gap-3">
                            <a href="#" class="footer-link">Getting started</a>
                            <a href="#" class="footer-link">API Docs</a>
                            <a href="#" class="footer-link">API Endpoints</a>
                            <a href="#" class="footer-link">Health status</a>
                            <a href="#" class="footer-link">Pricing</a>
                        </div>
                    </div>


                    <div class="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
                        <h2 class="tw-text-xl">Company</h2>
                        <div class="tw-flex tw-flex-col tw-gap-3">
                            <a href="#" class="footer-link">Support channels</a>
                            <a href="#" class="footer-link">Systems</a>
                            <a href="#" class="footer-link">Blog</a>
                            <a href="https://twitter.com/pauls_freeman" class="footer-link">Twitter</a>
                            <a href="https://github.com/PaulleDemon" class="footer-link">Github</a>
                        </div>
                    </div>

                    <div class="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
                        <h2 class="tw-text-xl">Legal</h2>
                        <div class="tw-flex tw-flex-col tw-gap-3">
                            <a href="#" class="footer-link">Terms of service</a>
                            <a href="#" class="footer-link">Privacy Policy</a>
                            <a href="#" class="footer-link">DCMA - Content Takedown</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="tw-mt-8"/>
            <div class="tw-mt-2 tw-flex tw-gap-2 tw-flex-col tw-text-gray-700 dark:tw-text-gray-300 tw-place-items-center 
                    tw-text-[12px] tw-w-full tw-text-center tw-place-content-around">
                <span>Copyright &#169; 2023-2025</span>
                <span>All trademarks and copyrights belong to their respective owners.</span>
            </div>

        </footer>

    </body>
            
        </div>
    );
};

export default MyNewPage;
