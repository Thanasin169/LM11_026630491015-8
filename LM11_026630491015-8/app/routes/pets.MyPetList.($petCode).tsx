import { useParams, useNavigate } from "@remix-run/react";
import { dogs } from "./pets.MyPetFrom";

export default function GetPet() {
    const { petCode } = useParams();
    const navigate = useNavigate();

    // แปลง petCode เป็น string
    const code = petCode ? petCode : "";

    // ค้นหาสัตว์เลี้ยงโดยใช้ find
    const pet = dogs.find(
        item => item.Code === code
    );

    // ตรวจสอบว่า pet มีค่าหรือไม่
    if (pet) {
        console.log(pet);
    } else {
        console.log('Wrong Pet Code, please try again!');
    }

    return (
        <div className="bg-purple-100 p-4">
            <h1 className="text-purple-800"></h1>
            <hr />
            {pet ? (
                <div>
                    <table className="border-collapse border border-purple-300 w-full mt-4">
                        <thead>
                            <tr>
                                <th className="border border-purple-300 p-2 text-purple-600">Field</th>
                                <th className="border border-purple-300 p-2 text-purple-600">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-purple-300 p-2">Photo</td>
                                <td className="border border-purple-300 p-2">
                                    <img className="w-64" src={pet.Photo} alt={pet.Name} />
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-purple-300 p-2">Name</td>
                                <td className="border border-purple-300 p-2">{pet.Name}</td>
                            </tr>
                            <tr>
                                <td className="border border-purple-300 p-2">Birthday</td>
                                <td className="border border-purple-300 p-2">{pet.Birthdate}</td>
                            </tr>
                            <tr>
                                <td className="border border-purple-300 p-2">Category</td>
                                <td className="border border-purple-300 p-2">{pet.Category}</td>
                            </tr>
                            <tr>
                                <td className="border border-purple-300 p-2">Sex</td>
                                <td className="border border-purple-300 p-2">{pet.Sex}</td>
                            </tr>
                            <tr>
                                <td className="border border-purple-300 p-2">Description</td>
                                <td className="border border-purple-300 p-2">{pet.Description}</td>
                            </tr>
                            <tr>
                                <td className="border border-purple-300 p-2">Owner</td>
                                <td className="border border-purple-300 p-2">{pet.Owner_Name}</td>
                            </tr>
                            <tr>
                                <td className="border border-purple-300 p-2">E-mail</td>
                                <td className="border border-purple-300 p-2">{pet.Owner_Email}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button 
                        onClick={() => navigate(-1)}
                        className="mt-4 border bg-blue-300 px-4 py-2 text-white rounded"
                    >
                        Back
                    </button>
                </div>
            ) : (
                <p className="text-red-600">Wrong Pet Code, please try again!</p>
            )}
        </div>
    );
}
