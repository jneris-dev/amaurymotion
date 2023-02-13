import { useEffect } from "react";
import { InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export function Single() {
    useEffect(() => {
        document.title = 'Single - Amaury Motion';
    }, []);

    return (
        <main>
            <section className="banner-single bg-no-repeat bg-cover bg-center h-screen w-full relative" id="single" style={{ backgroundImage: `url('/images/single.jpg')` }}>
                <div className="w-full h-full">
                    <div className="w-full max-w-screen-5xl px-5 h-full flex items-center justify-center mx-auto">
                        <div className="flex flex-col gap-5 fixed left-5 z-10">
                            <a href="" className="hover:text-blue-600 transition-colors">
                                <InstagramLogo size={22} weight="fill" />
                            </a>
                            <a href="" className="hover:text-blue-600 transition-colors">
                                <LinkedinLogo size={22} weight="fill" />
                            </a>
                            <a href="" className="hover:text-blue-600 transition-colors">
                                <TwitterLogo size={22} weight="fill" />
                            </a>
                        </div>
                        <h1 className="md:text-5xl text-3xl font-bold leading-tight text-center">
                            The Light Bulb
                        </h1>
                        <div className="flex fixed -right-12 rotate-[270deg] tracking-widest z-10">
                            <a href="" className="hover:text-blue-600 transition-colors text-sm flex gap-3 items-center">
                                <div className="w-3 h-3 rounded-full border-2 border-blue-600" />
                                <span>
                                    +55 11 971514175
                                </span>
                            </a>
                        </div>
                        <div className="absolute bottom-8 left-auto right-auto">
                            <div className="w-6 h-11 border rounded-full">
                                <div className="w-1 h-1 rounded-full bg-white mx-auto mt-3 scroll" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-zinc-900 py-14 px-16 w-full relative">
                <div className="grid md:grid-cols-4 grid-cols-2 w-full text-sm md:gap-0 gap-y-6">
                    <div className="flex flex-col">
                        <strong>
                            Date
                        </strong>
                        <span className="text-zinc-500">
                            August 2019
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <strong>
                            Client
                        </strong>
                        <span className="text-zinc-500">
                            Levis, UK
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <strong>
                            Role
                        </strong>
                        <span className="text-zinc-500">
                            Campaign
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <strong>
                            URL
                        </strong>
                        <span className="text-zinc-500">
                            www.themeforest.net
                        </span>
                    </div>
                </div>
            </section>

            <section className="bg-black bg-opacity-30 py-14 px-16 w-full relative">
                <div className="flex flex-col gap-6">
                    <div className="flex md:flex-row flex-col md:gap-0 gap-6">
                        <div className="md:w-4/12 w-full">
                            <strong className="text-xl">Objective</strong>
                        </div>
                        <div className="md:w-8/12 w-full">
                            <p className="text-zinc-600">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                            </p>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col md:gap-0 gap-6 items-center">
                        <div className="md:w-4/12 w-full">
                            <strong className="text-xl">Color Identity</strong>
                        </div>
                        <div className="md:w-8/12 w-full flex">
                            <div className="block w-24 h-2" style={{ backgroundColor: `#c0773b` }} />
                            <div className="block w-24 h-2" style={{ backgroundColor: `#40413c` }} />
                            <div className="block w-24 h-2" style={{ backgroundColor: `#222222` }} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}