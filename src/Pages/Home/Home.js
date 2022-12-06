import React from 'react';

const Home = () => {
    return (
        <section className="bg-gray-50">
            <div
                className="mx-auto max-w-screen-xl px-4 py-8 lg:flex lg:h-screen lg:items-center"
            >
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Welcome To Ultimate,
                        <strong className="font-bold text-red-700 text-2xl sm:block">
                            Human Resource Management System.
                        </strong>
                    </h1>
                </div>
            </div>
        </section>

    );
};

export default Home;