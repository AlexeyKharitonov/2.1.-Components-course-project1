import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
    const { user } = props;

    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((item) => (
                    <Qualitie
                        key={item._id}
                        name={item.name}
                        color={item.color}
                    />
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
                <BookMark
                    status={user.bookmark}
                    onToggleBookMark={props.onToggleBookMark}
                    id={user._id}
                />
            </td>
            <td>
                <button
                    className={"badge bg-danger"}
                    onClick={() => props.onDelete(user._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
