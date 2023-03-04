import { useEffect, useRef } from "react";
import { GearSix, InstagramLogo, Lightbulb, LinkedinLogo, TreeStructure, TwitterLogo } from "phosphor-react";
import Typed from "typed.js";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import { useGetProjectsQuery } from "../graphql/generated";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

export function Home() {
    const el = useRef<any>(null);
    const { data } = useGetProjectsQuery()

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Motion Designer", "Videomaker", "3D Artist"],
            startDelay: 300,
            typeSpeed: 150,
            backSpeed: 50,
            backDelay: 150,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <main>
            <section className="banner-home h-screen w-full relative" id="inicio">
                <div className="w-full h-full bg-black bg-opacity-40">
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
                            Amaury Oliveira <br />
                            <span ref={el} />
                        </h1>
                        <div className="flex fixed -right-12 rotate-[270deg] tracking-widest z-10">
                            <a href="" className="hover:text-blue-600 transition-colors text-sm flex gap-3 items-center">
                                <div className="w-3 h-3 rounded-full border-2 border-blue-600" />
                                <span>
                                    +55 11 971514175
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full xl:h-screen h-auto relative flex lg:flex-row flex-col" id="servicos">
                <div className="flex lg:w-1/2 w-full">
                    <img src="/images/bg-servicos.jpg" className="w-full h-full max-w-full object-cover object-center" alt="" />
                </div>
                <div className="lg:w-1/2 w-full h-full flex flex-col justify-center gap-10 items-center lg:py-5 py-20 lg:pl-10 pl-16 pr-16">
                    <div className="w-full border md:h-52 border-zinc-600 flex flex-col gap-5 p-5 relative overflow-hidden hover:bg-blue-600 group transition-all">
                        <Lightbulb size={194} weight="fill" className="text-blue-600 opacity-10 absolute -right-12 -top-5 group-hover:text-zinc-50" />
                        <Lightbulb size={54} weight="fill" className="text-blue-600 group-hover:text-zinc-50" />
                        <div className="flex flex-col gap-2">
                            <strong>Conceptual Design</strong>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                            </p>
                        </div>
                    </div>
                    <div className="w-full border md:h-52 border-zinc-600 flex flex-col gap-5 p-5 relative overflow-hidden hover:bg-blue-600 group transition-all">
                        <TreeStructure size={194} weight="fill" className="text-blue-600 opacity-10 absolute -right-12 -top-5 group-hover:text-zinc-50" />
                        <TreeStructure size={54} weight="fill" className="text-blue-600 group-hover:text-zinc-50" />
                        <div className="flex flex-col gap-2">
                            <strong>Market Inteligence</strong>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                            </p>
                        </div>
                    </div>
                    <div className="w-full border md:h-52 border-zinc-600 flex flex-col gap-5 p-5 relative overflow-hidden hover:bg-blue-600 group transition-all">
                        <GearSix size={194} weight="fill" className="text-blue-600 opacity-10 absolute -right-12 -top-5 group-hover:text-zinc-50" />
                        <GearSix size={54} weight="fill" className="text-blue-600 group-hover:text-zinc-50" />
                        <div className="flex flex-col gap-2">
                            <strong>Mechanical Engineering</strong>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full xl:h-screen h-auto relative flex lg:flex-row flex-col" id="sobre">
                <div className="flex lg:w-1/2 w-full">
                    <img src="/images/profile.jpg" className="w-full h-full max-w-full object-cover object-center" alt="" />
                </div>
                <div className="lg:w-1/2 w-full h-full flex flex-col justify-center gap-10 items-center lg:py-5 py-20 lg:pl-10 pl-16 pr-16">
                    <p className="text-zinc-500">
                        I am a website designer from London, with a strong focus in UI/UX design. I love to get new experiences and always learn from my surroundings. I've done more than 285 projects. I looking forward to any opportunities and challenges.
                    </p>
                    <div className="border-b border-zinc-700 w-full">
                        <ul className="flex gap-8">
                            <li className="border-b-4 border-blue-600 px-3">
                                Works
                            </li>
                            <li>
                                Education
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4 items-start pb-5 border-b border-zinc-700">
                            <span className="px-2 py-1 bg-blue-600 text-sm font-bold rounded-sm">
                                2014 - now
                            </span>
                            <strong>
                                Product Designer Freelancer
                            </strong>
                            <p className="text-zinc-500">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 items-start pb-5 border-b border-zinc-700">
                            <span className="px-2 py-1 bg-blue-600 text-sm font-bold rounded-sm">
                                2010 - 2014
                            </span>
                            <strong>
                                Product Designer at Apple
                            </strong>
                            <p className="text-zinc-500">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 items-start pb-5 border-b border-zinc-700">
                            <span className="px-2 py-1 bg-blue-600 text-sm font-bold rounded-sm">
                                2006 - 2010
                            </span>
                            <strong>
                                Product Designer at Samsung
                            </strong>
                            <p className="text-zinc-500">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full relative h-screen z-20" id="portfolio">
                {data &&
                    <Carousel
                        showDots={false}
                        ssr
                        itemClass="image-item"
                        responsive={responsive}
                        infinite={true}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {data.projects.map(project => (
                            <div className="relative group h-full transition-all" key={project.id}>
                                <img src={project.cover.url} className="w-full h-full max-w-full object-cover object-top" alt="" />
                                <Link to={`/portfolio/${project.slug}`} className="absolute w-full h-full flex flex-col justify-end px-5 pb-28 inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500">
                                    <h2 className="text-2xl mb-2 font-bold">
                                        {project.title}
                                    </h2>
                                    <hr className="mb-4 w-1/6 border-1 border-blue-600 group-hover:w-full transition-all duration-500" />
                                    <p className="text-zinc-400 hidden group-hover:block transition-all duration-500">
                                        {project.description.substring(0, 120) + "..."}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </Carousel>
                }
            </section>

            <section className="w-full xl:h-screen h-auto relative flex lg:flex-row flex-col" id="contato">
                <div className="flex lg:w-1/2 w-full">
                    <img src="/images/contact.jpg" className="w-full h-full max-w-full object-cover object-center" alt="" />
                </div>
                <div className="lg:w-1/2 w-full h-full flex flex-col justify-center lg:gap-10 items-center lg:py-5 py-20 lg:pl-10 pl-16 pr-16">
                    <div className="w-full bg-zinc-800 rounded-sm md:p-10 p-5 flex mb-16">
                        <div className="flex flex-col w-2/5 gap-2">
                            <strong>E-mail</strong>
                            <strong>Phone</strong>
                            <strong>Website</strong>
                            <strong>Address</strong>
                        </div>
                        <div className="flex flex-col gap-2 text-zinc-500">
                            <p>contact@jonnasatria.com</p>
                            <p>(208) 333 9296</p>
                            <p>www.mywebsite.com</p>
                            <p>Collins Street West, London, UK</p>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mb-8">Send Message</h2>
                    <form action="" className="w-full flex flex-col gap-5">
                        <input type="text" name="name" id="name" placeholder="Your Name" className="bg-transparent border-zinc-600" />
                        <input type="email" name="email" id="email" placeholder="Your Email" className="bg-transparent border-zinc-600" />
                        <input type="text" name="phone" id="phone" placeholder="Your Phone" className="bg-transparent border-zinc-600" />
                        <textarea name="message" id="message" placeholder="Your Message" className="bg-transparent border-zinc-600 max-h-60 h-40" />
                        <input type="submit" value="SEND" className="bg-blue-600 w-40 h-10 rounded-sm text-sm font-bold hover:bg-blue-700 transition-colors cursor-pointer" />
                    </form>
                </div>
            </section>
        </main>
    );
}