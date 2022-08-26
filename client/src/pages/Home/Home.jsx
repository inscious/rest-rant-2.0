import React from "react";
import Hero from "../../components/Hero";
import PlacesIndex from "../Places/PlacesIndex";

const rstImg =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const title = "Welcome";

const Home = () => {
    return (
        <div className="h-full">
            <Hero rstImg={rstImg} title={title} />
            {/* <PlacesIndex /> */}
            <div className="mx-auto mt-10 flex max-w-7xl flex-col px-5">
                {/* <h1 className="text-3xl font-thin">About Rest-Rant</h1> */}
                <p className="text-2xl font-thin text-gray-500">
                    Expedita aliquid illum ab suscipit voluptatibus magnam
                    tempore, laboriosam amet dolores. Vel ipsum tempore ab. Amet
                    repellendus neque minima placeat tempore corporis, possimus
                    beatae porro eius unde libero earum veritatis accusamus
                    dolor ab quod ducimus perspiciatis dolore a, tempora enim.
                </p>
                <br className="my-5" />
                <p className="text-2xl font-thin text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, rem quos. Laboriosam saepe, harum porro neque a modi,
                    delectus hic laborum voluptates magnam est? Doloribus ipsa
                    esse, assumenda repellendus velit labore quaerat nesciunt.
                    Ratione voluptate sit pariatur commodi illo sed, adipisci,
                    ex quae, recusandae omnis facilis. At officiis perferendis
                    quidem?
                </p>
                <br className="my-5" />
                <p className="text-2xl font-thin text-gray-500">
                    Facere enim iste pariatur atque minus quas laboriosam
                    voluptatum reprehenderit eos. Eum optio, hic adipisci
                    expedita perspiciatis minus nemo. Odio doloremque modi nam
                    tenetur, nihil quae dolores sapiente placeat minima vel!
                    Omnis fuga veniam porro, sit odit praesentium quia quasi
                    harum? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Nesciunt maiores labore aperiam enim explicabo alias
                    sapiente consequuntur odio nam accusantium.
                </p>
                <br className="my-5" />
                <p className="text-2xl font-thin text-gray-500">
                    Amet consectetur adipisicing elit. Tempore quam consequuntur
                    sunt quas maxime accusantium est dolorem nostrum mollitia,
                    et quisquam alias voluptas eveniet magni voluptatum culpa
                    quidem iure cum asperiores amet necessitatibus obcaecati.
                    Facere enim iste pariatur atque minus quas laboriosam
                    voluptatum reprehenderit eos. Eum optio, hic adipisci
                    expedita perspiciatis minus nemo. Odio doloremque modi nam
                    tenetur, nihil quae dolores sapiente placeat minima vel!
                    Omnis fuga veniam porro, sit odit praesentium quia quasi
                    harum?
                </p>
                <br className="my-5" />
            </div>
        </div>
    );
};

export default Home;
