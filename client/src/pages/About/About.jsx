import React from "react";
import Hero from "../../components/Hero";
const rstImg =
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const title = `About Rest / Rant`;

const About = () => {
    return (
        <div className="flex h-full flex-col">
            <Hero rstImg={rstImg} title={title} />
            <div className="mx-auto mt-10 max-w-7xl px-5">
                {/* <h1 className="text-3xl font-thin">About Rest-Rant</h1> */}
                <p className="text-2xl font-thin text-gray-500">
                    Rest-Rant is an SPA which users could rant or rave about
                    restaurants. Users are able to add restaurants, comments and
                    ratings. This app uses MongoDB as a database with Node &
                    Express for connecting to the front end.
                </p>
                <br className="my-5" />
                <p className="text-2xl font-thin text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, nobis, expedita aliquid illum ab suscipit
                    voluptatibus magnam tempore, laboriosam amet dolores. Vel
                    ipsum tempore ab. Amet repellendus neque minima placeat
                    tempore corporis, possimus beatae porro eius unde libero
                    earum veritatis accusamus dolor ab quod ducimus perspiciatis
                    dolore a, tempora enim.
                </p>
                <br className="my-5" />
                <p className="text-2xl font-thin text-gray-500">
                    Officiis harum ipsa omnis cupiditate minima ullam, earum,
                    libero dolorem ab necessitatibus neque architecto deserunt
                    obcaecati mollitia quasi tempore eveniet ipsam nisi
                    exercitationem animi similique, perspiciatis impedit? Facere
                    accusantium rem officiis praesentium corporis. Dolore magni
                    dolores eum ut nisi sunt assumenda iure non possimus
                    suscipit minima, veniam quas nesciunt sint adipisci iusto,
                    vitae tempora dolorum nulla aspernatur dolorem? Est totam
                    magnam earum ipsa officia illum cumque hic eius quos culpa,
                    blanditiis magni ut quidem ea aliquid facere a unde
                    aspernatur voluptatibus vel alias omnis? Adipisci delectus
                    corrupti enim quibusdam.
                </p>
            </div>
        </div>
    );
};

export default About;
