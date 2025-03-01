"use client";
import Image from "next/image";
import { data } from "./data";

export default function Home() {
  return (
    <div className="px-10 not-only-of-type:p-6 item-center justify-center text-center text-white min-h-screen bg-gradient-to-b from-black to-orange-900">
      <section className="" id="titles">
        <div id="title" className=" border-b border-orange-900 ">
          Person.title
        </div>
        <div
          id="encabezado"
          className="mt-10 border-b border-orange-900 inline-block text-center mx-auto"
        >
          Person.encabezado
        </div>
      </section>
      <section className="" id="description">
        <div id="description" className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          exercitationem neque deleniti, possimus minus odio similique obcaecati
          cumque quas ad modi totam fuga corporis hic dolore odit ipsa? Sit,
          consectetur.
        </div>
      </section>
      <section className="px-10" id="images">
        {data.map((person) => (
          <div
            key={person.id}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 items-start justify-center"
          >
            {Object.values(person.img).map((src, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <Image
                  src={src}
                  width={240}
                  height={240}
                  objectFit="cover"
                  objectPosition="center"
                  alt={person.title}
                  
                />
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}
