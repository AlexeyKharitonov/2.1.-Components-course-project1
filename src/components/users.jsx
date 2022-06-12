import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";

const Users = ({ users, onDelete, onToggleBookMark }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        console.log("page: ", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Качества</th>
                            <th>Профессия</th>
                            <th>Встретился, раз</th>
                            <th>Оценка</th>
                            <th>Кнопка</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User
                                key={user._id}
                                onDelete={onDelete}
                                onToggleBookMark={onToggleBookMark}
                                user={user}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default Users;

// const renderPhrase = () => {
//     if(users.length === 2 || users.length === 3 || users.length === 4) {
//         return <span>человека тусанут</span>
//     } else {
//         return <span>человек тусанет</span>
//     }
// };

// const formatCount = () => {
//     if (users.length === 0) {
//         return <h3>Никто не тусанет с тобой</h3>
//     } else {
//         return <h3>{users.length} {renderPhrase()} с тобой сегодня</h3>
//     }
// };

// let getBadgeClasses = () => {
//     let colour = 'badge ';
//     colour += users.length === 0 ? 'bg-danger' : 'bg-primary';
//     return colour;
// };

//     const renderUsers =() => {
//         return(
//             users.map((user) => (
//                     <tr key={user._id}>
//                         <td>{user.name}</td>
//                         <td >
//                            {user.qualities.map((item) => {
//                                return <span
//                                className={`badge m-1 bg-${item.color}`}
//                                key={item._id}
//                                >{item.name}</span>
//                            })};
//                         </td>
//                          <td>{user.profession.name}</td>
//                          <td>{user.completedMeetings}</td>
//                          <td>{user.rate}/5</td>
//                          <td>
//                              <button className="badge bg-danger"
//                              onClick = {() => handleDelete(user._id)}>
//                                 delete
//                              </button>
//                          </td>
//                     </tr>
//         )))
//     };

//     const renderTable = () => {
//         return (
//             <table class="table">
//                 <thead>
//                     <tr>
//                         <th>Имя</th>
//                         <th>Качество</th>
//                         <th>Профессия</th>
//                         <th>Встретился, раз</th>
//                         <th>Оценка</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {renderUsers()}
//                 </tbody>
//             </table>
//         );
//     };

//     return (
//         <>
//          <span className={getBadgeClasses()}>{formatCount()}</span>
//             {renderTable()}
//         </>
//     );
// }
