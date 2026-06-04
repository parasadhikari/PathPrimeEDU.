import axios from "axios";
import Navbar from "../components/Navbar";
import React, { useEffect, useState, useRef } from "react";
import { formatDistanceToNow } from "date-fns";

const NoticeBoard = () => {

    const [notices, setNotices] = useState([]);
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState({});
    const [openComments, setOpenComments] = useState({});
    const [replyTo, setReplyTo] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const commentInputRef = useRef(null);
    useEffect(() => {

        fetchNotices();

        localStorage.setItem(
            "lastCommunityVisit",
            new Date().toISOString()
        );

    }, []);

    const fetchNotices = async () => {

        try {

            const res = await axios.get(
                "https://pathprimeedu-backend.onrender.com/api/notices"
            );

            setNotices(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleLike = async (id) => {

        try {

            const user = JSON.parse(
                localStorage.getItem("user")
            );

            await axios.put(

                `https://pathprimeedu-backend.onrender.com/api/notices/like/${id}`,

                {
                    email: user.email
                }

            );

            fetchNotices();

        } catch (error) {

            console.log(error);

        }

    };

    const fetchComments = async (noticeId) => {

        try {

            const res = await axios.get(
                `https://pathprimeedu-backend.onrender.com/api/comments/${noticeId}`
            );

            setComments(prev => ({
                ...prev,
                [noticeId]: res.data
            }));

        } catch (error) {

            console.log(error);

        }

    };

    const toggleComments = (noticeId) => {

        const isOpen = openComments[noticeId];

        setOpenComments(prev => ({
            ...prev,
            [noticeId]: !isOpen
        }));

        if (!isOpen) {

            fetchComments(noticeId);

        }

    };

    const postComment = async (noticeId) => {
        if (!newComment[noticeId]?.trim()) return;
        try {

            const user =
                JSON.parse(
                    localStorage.getItem("user")
                );

            await axios.post(
                "https://pathprimeedu-backend.onrender.com/api/comments",
                {
                    noticeId,
                    userName: user.name,
                    role: user.role,
                    message: newComment[noticeId],
                    parentComment: replyTo[noticeId]?._id || null
                }

            );

            setNewComment(prev => ({
                ...prev,
                [noticeId]: ""
            }));

            setReplyTo(prev => ({
                ...prev,
                [noticeId]: null
            }));

            fetchComments(noticeId);


        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="bg-gray-100 min-h-screen">

            <Navbar />

            <div className="max-w-5xl mx-auto py-10 px-4">

                <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">

                    📢 PathPrime Community

                </h1>

                <p className="text-center text-gray-500 mb-10">

                    Latest announcements, updates and discussions

                </p>
                <div className="max-w-xl mx-auto mb-8">

                    <input
                        type="text"
                        placeholder="🔍 Search announcements..."
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                        className="w-full border rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-8">

                    {[
                        "All",
                        "Exam",
                        "Assignment",
                        "Holiday",
                        "Important",
                        "Notes",
                        "General"
                    ].map((category) => (

                        <button
                            key={category}
                            onClick={() =>
                                setSelectedCategory(category)
                            }
                            className={`px-4 py-2 rounded-full text-sm font-medium transition

                ${selectedCategory === category

                                    ? "bg-indigo-600 text-white"

                                    : "bg-white border text-gray-700 hover:bg-gray-100"

                                }`}
                        >

                            {category}

                        </button>

                    ))}

                </div>

                <div className="space-y-8">

                    {notices
                        .filter((notice) => {

                            const matchesSearch =

                                notice.title
                                    .toLowerCase()
                                    .includes(
                                        searchTerm.toLowerCase()
                                    )

                                ||

                                notice.message
                                    .toLowerCase()
                                    .includes(
                                        searchTerm.toLowerCase()
                                    );

                            const matchesCategory =

                                selectedCategory === "All"

                                ||

                                notice.category === selectedCategory;

                            return matchesSearch && matchesCategory;

                        })
                        .map((notice) => (

                            <div

                                key={notice._id}

                                className={`bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl

                            ${notice.pinned
                                        ? "border-l-8 border-yellow-400"
                                        : ""
                                    }`}

                            >

                                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">

                                    <h2 className="text-xl font-bold text-blue-600 flex items-center gap-2">

                                        {notice.pinned && "📌"}

                                        {notice.title}

                                        {
                                            (Date.now() -
                                                new Date(notice.createdAt).getTime())
                                            <
                                            24 * 60 * 60 * 1000
                                            &&

                                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">

                                                NEW

                                            </span>
                                        }

                                    </h2>

                                    <div className="text-right">


                                        <span className="text-sm text-gray-400 block">

                                            👨‍🏫 PathPrimeEdu

                                        </span>

                                        <span className="text-xs text-gray-500">

                                            {formatDistanceToNow(
                                                new Date(notice.createdAt),
                                                { addSuffix: true }
                                            )}

                                        </span>


                                    </div>


                                </div>
                                <div className="mb-3">

                                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">

                                        🏷️ {notice.category || "General"}

                                    </span>

                                </div>
                                <p className="text-gray-700 leading-relaxed">

                                    {notice.message}

                                </p>

                                <div className="mt-6 flex flex-wrap items-center gap-3">

                                    <button

                                        onClick={() =>
                                            handleLike(notice._id)
                                        }

                                        className={`px-4 py-2 rounded-full hover:scale-110 transition ${notice.likes.includes(
                                            JSON.parse(
                                                localStorage.getItem("user")
                                            )?.email
                                        )

                                            ? "bg-red-500 text-white"

                                            : "bg-red-100 text-red-600"
                                            }`}

                                    >

                                        ❤️ {notice.likes.length}

                                    </button>

                                    <button


                                        onClick={() =>
                                            toggleComments(
                                                notice._id
                                            )
                                        }

                                        className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:scale-105 transition"


                                    >


                                        💬 {(comments[notice._id] || []).length} Comments


                                    </button>


                                </div>
                                {openComments[notice._id] && (

                                    <div className="mt-6 border-t pt-4">

                                        <h3 className="font-semibold mb-3">

                                            💬 Discussion

                                        </h3>

                                        <div className="space-y-3 mb-4">

                                            {(comments[notice._id] || [])
                                                .map((comment) => (

                                                    <div

                                                        key={comment._id}

                                                        className="bg-gray-100 p-3 rounded-xl"

                                                    >

                                                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">

                                                            <div className="flex items-center gap-2">

                                                                <p className="font-semibold text-blue-600">

                                                                    {comment.role === "admin"
                                                                        ? "👨‍🏫 " + comment.userName
                                                                        : "👤 " + comment.userName}

                                                                </p>

                                                                {comment.role === "admin" && (

                                                                    <span className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full">

                                                                        ADMIN

                                                                    </span>

                                                                )}

                                                            </div>

                                                            <p className="text-xs text-gray-500">

                                                                {new Date(comment.createdAt)
                                                                    .toLocaleString()}

                                                            </p>

                                                        </div>

                                                        {comment.parentComment && (


                                                            <div className="bg-blue-50 border-l-4 border-blue-500 p-2 rounded mb-2">

                                                                <p className="text-xs font-semibold text-blue-700">
                                                                    Replying to {comment.parentComment.userName}
                                                                </p>

                                                                <p className="text-xs text-gray-600">
                                                                    {comment.parentComment.message}
                                                                </p>

                                                            </div>


                                                        )}

                                                        <p>
                                                            {comment.message}
                                                        </p>





                                                        <button
                                                            onClick={() => {

                                                                setReplyTo(prev => ({
                                                                    ...prev,
                                                                    [notice._id]: comment
                                                                }));

                                                                setTimeout(() => {

                                                                    commentInputRef.current?.scrollIntoView({
                                                                        behavior: "smooth"
                                                                    });

                                                                    commentInputRef.current?.focus();

                                                                }, 100);

                                                            }}
                                                            className="text-gray-500 text-xs mt-2 hover:text-blue-600 transition"
                                                        >
                                                            Reply
                                                        </button>


                                                    </div>

                                                ))}

                                        </div>

                                        {
                                            replyTo[notice._id] && (

                                                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mb-3 rounded">

                                                    <p className="text-sm font-semibold text-blue-700">

                                                        Replying to {replyTo[notice._id].userName}

                                                    </p>

                                                    <p className="text-sm text-gray-600">

                                                        {replyTo[notice._id].message}

                                                    </p>

                                                    <button
                                                        onClick={() =>
                                                            setReplyTo(prev => ({
                                                                ...prev,
                                                                [notice._id]: null
                                                            }))
                                                        }
                                                        className="text-red-500 text-xs mt-1"
                                                    >
                                                        Cancel
                                                    </button>

                                                </div>

                                            )
                                        }

                                        <div className="flex flex-col sm:flex-row gap-3">

                                            <input

                                                ref={commentInputRef}

                                                type="text"

                                                placeholder="Write a comment..."

                                                value={
                                                    newComment[
                                                    notice._id
                                                    ] || ""
                                                }

                                                onChange={(e) =>
                                                    setNewComment(prev => ({

                                                        ...prev,

                                                        [notice._id]:
                                                            e.target.value

                                                    }))
                                                }

                                                className="flex-1 border rounded-lg px-4 py-2"

                                            />









                                            <button

                                                onClick={() =>
                                                    postComment(
                                                        notice._id
                                                    )
                                                }

                                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 sm:w-auto w-full"

                                            >

                                                🚀 Post

                                            </button>

                                        </div>

                                    </div>

                                )}

                            </div>

                        ))}

                </div>

            </div>

        </div>

    );

};

export default NoticeBoard;