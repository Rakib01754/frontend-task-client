import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SingleAttendanceRow = ({ employee, serial }) => {
    const { user } = useContext(AuthContext)
    const { firstName, lastName, date } = employee
    const userName = `${firstName} ${lastName}`
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {serial}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{date}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{userName}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user ? 'Present' : 'Absent'}</td>
        </tr>
    );
};

export default SingleAttendanceRow;