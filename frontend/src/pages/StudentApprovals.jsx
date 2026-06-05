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

    const approveUser =
    async (id) => {

        await axios.put(
            `https://pathprimeedu-backend.onrender.com/api/admin/approve/${id}`
        );

        fetchUsers();
    };

    return (

        <div className="p-10">

            <h1 className="text-3xl font-bold mb-6">

                Student Approvals

            </h1>

            {users.map((user) => (

                <div
                    key={user._id}
                    className="border p-4 mb-4 rounded"
                >

                    <h3>{user.name}</h3>

                    <p>{user.email}</p>

                    <button
                        onClick={() =>
                            approveUser(
                                user._id
                            )
                        }
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        Approve
                    </button>

                </div>

            ))}

        </div>

    );
};

export default StudentApprovals;