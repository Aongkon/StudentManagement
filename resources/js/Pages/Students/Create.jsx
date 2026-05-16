import { useForm } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function CreateStudent() {
    const { data, setData, post } = useForm({
        name: "",
        email: "",
        age: "",
        birth_of_date: "",
        gender: "m",
        score: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("students.store"));
    };

    return (
        <DashboardLayout>
            <main>
                <div className="bg-gray-100 rounded-lg flex items-center justify-center min-h-screen">
                    <div className="bg-white shadow-md rounded-lg w-[600px] p-8">
                        <h2 className="text-2xl font-semibold text-center mb-6">
                            Create Student
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name */}
                            <div>
                                <label className="block text-sm mb-1">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    placeholder="Enter name"
                                    className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm mb-1">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    placeholder="Enter email"
                                    className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Age + Date of Birth */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">
                                        Age
                                    </label>
                                    <input
                                        name="age"
                                        type="number"
                                        value={data.age}
                                        onChange={(e) =>
                                            setData("age", e.target.value)
                                        }
                                        placeholder="Age"
                                        className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm mb-1">
                                        Date of Birth
                                    </label>

                                    <input
                                        type="date"
                                        name="birth_of_date"
                                        value={data.birth_of_date}
                                        onChange={(e) =>
                                            setData(
                                                "birth_of_date",
                                                e.target.value,
                                            )
                                        }
                                        className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Gender + Score */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-1">
                                        Gender
                                    </label>
                                    <select
                                        name="gender"
                                        value={data.gender}
                                        onChange={(e) =>
                                            setData("gender", e.target.value)
                                        }
                                        className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm mb-1">
                                        Score
                                    </label>
                                    <input
                                        type="number"
                                        name="score"
                                        value={data.score}
                                        onChange={(e) =>
                                            setData("score", e.target.value)
                                        }
                                        placeholder="Score"
                                        className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Save Student
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </DashboardLayout>
    );
}
