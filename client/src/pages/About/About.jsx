import React from "react";
import headerIMG from "../../assets/images/img2.jpg";
const rstImg =
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const About = () => {
    return (
        <div className="flex h-screen flex-col">
            <div className="flex">
                <div
                    className="relative h-60 w-screen bg-black bg-cover bg-center lg:h-[30rem]"
                    // style={{ backgroundImage: `url(${headerIMG})` }}
                >
                    <img
                        src={rstImg}
                        alt="restaurant image"
                        className="absolute h-full w-full object-cover opacity-70"
                    />
                    <div className="relative top-1/2 flex justify-center">
                        <h1 className="text-2xl font-bold text-white drop-shadow-xl lg:text-3xl">
                            About Rest \ Rant
                        </h1>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-7xl px-5">
                {/* <h1 className="text-3xl font-thin">About Rest-Rant</h1> */}
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dicta, a soluta? Veniam ipsa pariatur cumque minus possimus
                    nobis, doloremque consequuntur. Earum quidem adipisci eaque
                    cum?
                </p>
                <br className="my-10" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, nobis, expedita aliquid illum ab suscipit
                    voluptatibus magnam tempore, laboriosam amet dolores. Vel
                    ipsum tempore ab. Amet repellendus neque minima placeat
                    tempore corporis, possimus beatae porro eius unde libero
                    earum veritatis accusamus dolor ab quod ducimus perspiciatis
                    dolore a, tempora enim.
                </p>
            </div>
        </div>
    );
};

export default About;
