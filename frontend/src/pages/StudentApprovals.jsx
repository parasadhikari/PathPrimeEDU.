import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

const StudentApprovals = () => {

    const [users, setUsers] =
        useState([]);

    useEffect(() => {

        fetchUsers();

    }, []);

    const fetchUsers = async () => {

        const res =
            await axios.get(
                "https://pathprimeedu-backend.onrender.com/api/admin/pending-users"
            );

        setUsers(res.data);
    };


    const approveUser = async (id) => {

        await axios.put(
            `https://pathprimeedu-backend.onrender.com/api/admin/approve/${id}`
        );

        fetchUsers();
    };

    const rejectUser = async (id) => {

        await axios.put(
            `https://pathprimeedu-backend.onrender.com/api/admin/reject/${id}`
        );

        fetchUsers();
    };
    return (

        <div className="p-10">


            <div className="p-10 max-w-7xl mx-auto">

                <h1 className="text-3xl font-bold mb-6">
                    Student Approvals
                </h1>

                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-3">Name</th>
                            <th className="border p-3">Email</th>
                            <th className="border p-3">Approved</th>
                            <th className="border p-3">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {users.map((user) => (

                            <tr key={user._id}>

                                <td className="border p-3">
                                    {user.name}
                                </td>

                                <td className="border p-3">
                                    {user.email}
                                </td>

                                <td className="border p-3 text-center">

                                    {user.approved
                                        ? "✅ Yes"
                                        : "❌ No"}

                                </td>

                                <td className="border p-3 flex gap-2 justify-center">

                                    <button
                                        onClick={() => approveUser(user._id)}
                                        className="bg-green-600 text-white px-3 py-1 rounded"
                                    >
                                        Approve
                                    </button>

                                    <button
                                        onClick={() => rejectUser(user._id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded"
                                    >
                                        Reject
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            );






        </div>

    );
};

export default StudentApprovals;