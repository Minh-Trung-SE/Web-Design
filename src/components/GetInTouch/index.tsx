import React from 'react';
import Container from "components/Container";

const Team = () => {

    return (
        <Container className="py-20 space-y-5">
            <h2 className="text-2xl font-semibold">Get in touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
                <div>
                    <p className="text-gray-500">
                        We are always ready to listen and support you.
                        Contact us right away for consultation and to have all your questions answered.
                        Whether you are looking for products, services, or simply want to chat, we are happy to serve
                        you.
                        With our professional and dedicated team, we are committed to providing you with the best
                        customer service experience.
                        Get in touch so we can serve you effectively and promptly.
                    </p>
                    <div className="flex items-center space-x-5 mt-5">
                        <div
                            className="bg-deep-carrot-orange text-white w-10 h-10 flex items-center justify-center rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold">Address</h3>
                            <p className="text-gray-500">
                                1234 Street Name, City Name, United States
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 mt-5">
                        <div
                            className="bg-deep-carrot-orange text-white w-10 h-10 flex items-center justify-center rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>


                        </div>
                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-gray-500">+123 456 7890</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 mt-5">
                        <div
                            className="bg-deep-carrot-orange text-white w-10 h-10 flex items-center justify-center rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                />
                            </svg>


                        </div>
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-gray-500">webdesign@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div>
                    <form className="space-y-5 p-5 bg-rose-white rounded border">
                        <div className="space-y-2">
                        <label className="text-gray-500 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border rounded py-2 px-3 outline-none focus:border-deep-carrot-orange"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-500 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border rounded py-2 px-3 outline-none focus:border-deep-carrot-orange"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-500 font-medium">Message</label>
                            <textarea
                                name="message"
                                className="w-full border rounded py-2 px-3 outline-none focus:border-deep-carrot-orange"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-deep-carrot-orange text-white py-2 px-5 rounded"
                        >
                            Submit
                        </button>
                    </form>

                </div>

            </div>
        </Container>
    );
};

export default Team;