import React from "react";
import Hero from "../../components/Hero";
import PlacesIndex from "../Places/PlacesIndex";

import { motion } from "framer-motion";

const rstImg =
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";

const title = "Rest / Яant";

const Home = () => {
    return (
        <div className="">
            <Hero rstImg={rstImg} title={title} />
            {/* <PlacesIndex /> */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: 100, opacity: 0, transition: { duration: 0.1 } }}
                className="mx-auto mt-10 flex max-w-7xl flex-col px-5"
            >
                {/* <h1 className="text-3xl font-thin">About Rest-Rant</h1> */}
                <p className="text-2xl font-thin leading-relaxed text-gray-500">
                    Expedita aliquid illum ab suscipit voluptatibus magnam
                    tempore, laboriosam amet dolores.
                    <span className="font-medium text-orange-500">
                        {" "}
                        Vel ipsum tempore ab.{" "}
                    </span>
                    Amet repellendus neque minima placeat tempore corporis,
                    possimus beatae porro eius unde libero earum veritatis
                    accusamus dolor ab quod ducimus perspiciatis dolore a,
                    tempora enim.
                </p>
                <br className="my-5" />
                <p className="text-2xl font-thin leading-relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, rem quos. Laboriosam saepe, harum porro neque a modi,
                    delectus hic laborum voluptates magnam est?
                    <span className="font-medium text-orange-500">
                        {" "}
                        Doloribus ipsa esse,{" "}
                    </span>
                    assumenda repellendus velit labore quaerat nesciunt. Ratione
                    voluptate sit pariatur commodi illo sed, adipisci, ex quae,
                    recusandae omnis facilis. At officiis perferendis quidem?
                </p>
                <br className="my-5" />
                <p className="text-2xl font-thin leading-relaxed text-gray-500">
                    Facere enim iste pariatur atque minus quas laboriosam
                    voluptatum reprehenderit eos. Eum optio, hic adipisci
                    expedita perspiciatis minus nemo. Odio doloremque modi nam
                    tenetur, nihil quae dolores sapiente placeat minima vel!
                    <span className="font-medium text-orange-500">
                        {" "}
                        Omnis fuga veniam porro,{" "}
                    </span>
                    sit odit praesentium quia quasi harum? Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Nesciunt maiores labore
                    aperiam enim explicabo alias sapiente consequuntur odio nam
                    accusantium.
                </p>
                <br className="my-5" />
                <p className="text-2xl font-thin leading-relaxed text-gray-500">
                    Amet consectetur adipisicing elit. Tempore quam consequuntur
                    sunt quas maxime accusantium est dolorem nostrum mollitia,
                    et quisquam alias voluptas eveniet magni voluptatum culpa
                    quidem iure cum asperiores amet necessitatibus obcaecati.
                    Facere enim iste pariatur atque minus quas laboriosam
                    voluptatum reprehenderit eos. Eum optio, hic adipisci
                    expedita perspiciatis minus nemo.
                    <span className="font-medium text-orange-500">
                        {" "}
                        Odio doloremque modi nam{" "}
                    </span>
                    tenetur, nihil quae dolores sapiente placeat minima vel!
                    Omnis fuga veniam porro, sit odit praesentium quia quasi
                    harum?
                </p>
                {/* <br className="my-5" /> */}
            </motion.div>
        </div>
    );
};

export default Home;
