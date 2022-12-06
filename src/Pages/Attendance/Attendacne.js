import React, { useEffect, useState } from 'react';
import SingleAttendanceRow from './SingleAttendanceRow/SingleAttendanceRow';

const Attendacne = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch(`https://server-seven-kappa-72.vercel.app/test`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])

    return (
        <>
            <h1 className='w-[50%] md:w-[20%] mx-auto font-bold text-xl text-center my-4 bg-[#1678CB] text-white p-4'>Attendance Information</h1>
            <div className="overflow-x-auto rounded-lg border border-gray-200 w-[70%] mx-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Serial
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Date
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Employee Name
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            userData?.map((employee, idx) => <SingleAttendanceRow
                                key={employee._id}
                                serial={idx + 1}
                                employee={employee}
                            ></SingleAttendanceRow>)
                        }
                    </tbody>
                </table>
            </div>
        </>



    );
};

export default Attendacne;