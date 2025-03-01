"use client";
import { useState } from "react";
import { data } from "./data";
import Image from "next/image";

interface Person {
  id: number;
  title: string;
  encabezado: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
  enlace: string;
}

export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handleSelectPerson = (person: Person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="grid item-center min-h-screen bg-gradient-to-b from-black to-orange-900">
      <div className="p-6">
        {!selectedPerson ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 w-full px-4">
            {data.map((person) => (
              <button
                key={person.id}
                onClick={() => handleSelectPerson(person)}
                className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded"
              >
                {person.title}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center text-white p-6">
            <h1 className="text-3xl font-bold mb-4 border-b">
              {selectedPerson.title}
            </h1>
            <h5 className="p-6 mb-4">{selectedPerson.encabezado}</h5>
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
              <p className="text-lg mb-2">{selectedPerson.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 p-6 items-center justify-center lg:grid-cols-3">
              <Image
                className="mx-auto"
                src={selectedPerson.img1}
                width={240}
                height={240}
                objectFit="cover"
                objectPosition="center"
                alt={selectedPerson.title}
              />
              <Image
                className="mx-auto"
                src={selectedPerson.img2}
                width={240}
                height={240}
                objectFit="cover"
                objectPosition="center"
                alt={selectedPerson.title}
              />
              <Image
                className="mx-auto"
                src={selectedPerson.img3}
                width={240}
                height={240}
                objectFit="cover"
                objectPosition="center"
                alt={selectedPerson.title}
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Enlaces</h2>
              <ul className="list-disc list-inside">
                <li className="mb-1">
                  <a
                    href={selectedPerson.enlace}
                    className="text-blue-600 hover:text-blue-200"
                  >
                    {selectedPerson.enlace}
                  </a>
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                setSelectedPerson(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-20 bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Volver a la selección
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
