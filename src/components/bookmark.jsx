import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, onToggleBookMark, id }) => {
    return (
        <i
            onClick={() => onToggleBookMark(id)}
            className={`bi bi-bookmark${status ? "-fill" : ""}`}
        ></i>
    );
};
Bookmark.propTypes = {
    status: PropTypes.bool.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default Bookmark;
