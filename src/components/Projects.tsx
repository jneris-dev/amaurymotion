import Carousel from 'react-multi-carousel';
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

export function Projects() {
    const { data } = useGetProjectsQuery();

    return (
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
    );
}