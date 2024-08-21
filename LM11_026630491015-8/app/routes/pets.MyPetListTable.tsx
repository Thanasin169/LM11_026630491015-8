import React from 'react';
import { Link } from "@remix-run/react";
import { dogs } from './pets.MyPetFrom';
import Header from './header';

interface Dog {
  Code: string;
  Name: string;
  Photo: string;
  Birthdate: string;
  Category: string;
  Sex: string;
  Owner_Name: string;
  Owner_Email: string;
}

const MyPetList: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-purple-800 mb-6">Dog Information</h1>
          <table className="w-full border-collapse border border-purple-300">
            <thead>
              <tr className="bg-purple-100">
                <th className="border border-purple-300 p-2 text-purple-600">Photo</th>
                <th className="border border-purple-300 p-2 text-purple-600">Name</th>
                <th className="border border-purple-300 p-2 text-purple-600">Birthdate</th>
                <th className="border border-purple-300 p-2 text-purple-600">Category</th>
                <th className="border border-purple-300 p-2 text-purple-600">Sex</th>
                <th className="border border-purple-300 p-2 text-purple-600">Owner Name</th>
              </tr>
            </thead>
            <tbody>
              {dogs.map((dogs: Dog) => (
                <tr key={dogs.Code} className="hover:bg-purple-50 transition duration-300">
                  <td className="border border-purple-300 p-2 text-center">
                    <img className="w-24 h-24 object-cover rounded-full" src={dogs.Photo} alt={dogs.Name} />
                  </td>
                  <td className="border border-purple-300 p-2 text-center">
                    <Link to={`/pets/MyPetList/${dogs.Code}`} className="text-blue-500 underline">
                      {dogs.Name}
                    </Link>
                  </td>
                  <td className="border border-purple-300 p-2 text-center">{dogs.Birthdate}</td>
                  <td className="border border-purple-300 p-2 text-center">{dogs.Category}</td>
                  <td className="border border-purple-300 p-2 text-center">{dogs.Sex}</td>
                  <td className="border border-purple-300 p-2 text-center">{dogs.Owner_Name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default MyPetList;