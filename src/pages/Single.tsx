import { useEffect } from "react";
import { InstagramLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";
import { useGetPostBySlugQuery } from "../graphql/generated";
import { useParams } from "react-router-dom";
import moment from "moment";

export function Single() {
    const { slug } = useParams<string>()

    const { data } = useGetPostBySlugQuery({
        variables: {
            slug: slug!,
        }
    })

    useEffect(() => {
        document.title = `${data?.project?.title} - Amaury Motion`;
    }, [data]);

    return (
        <main>
            {data &&
                <>
                    <section className="banner-single bg-no-repeat bg-cover bg-center h-screen w-full relative" id="single" style={{ backgroundImage: `url('${data.project?.image?.url}')` }}>
                        {data.project?.video &&
                            <div className="vimeo-wrapper absolute inset-0 h-full w-full pointer-events-none overflow-hidden">
                                <iframe
                                    className="w-screen min-h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    src={`https://player.vimeo.com/video/${data.project.video}?background=1&autoplay=1&loop=1&byline=0&title=0`}
                                    allowFullScreen
                                />
                            </div>
                        }
                        <div className="w-full h-full relative">
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
                                    {data.project?.title}
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
                                    {moment(data.project?.date).format('LL')}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <strong>
                                    Client
                                </strong>
                                <span className="text-zinc-500">
                                    {data.project?.client?.name}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <strong>
                                    Role
                                </strong>
                                <span className="text-zinc-500">
                                    {data.project?.role?.title}
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
                                        {data.project?.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col md:gap-0 gap-6 items-center">
                                <div className="md:w-4/12 w-full">
                                    <strong className="text-xl">Color Identity</strong>
                                </div>
                                <div className="md:w-8/12 w-full flex">
                                    {data.project?.colors.map((color, key) => (
                                        <div className="block w-24 h-2" key={key} style={{ backgroundColor: color }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }
        </main>
    );
}