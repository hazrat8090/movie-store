import React, { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

RatingStars.propTypes = {
  messages: PropTypes.array,
  maxRating: PropTypes.number,
  defaulRating: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  onSetRating: PropTypes.func,
};

function RatingStars({
  maxRating,
  color = "cyan",
  size = 40,
  messages = [],
  defaulRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaulRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRate(rating) {
    setRating(rating);
    if (onSetRating) {
      onSetRating(rating);
    }
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
    whiteSpace: "nowrap",
  };

  const starStyle = {
    // width: `${size}px`,
    // height: `${size}px`,
    display: "flex",
    alignItems: "center",
    gap: "2px",
  };

  return (
    <div style={containerStyle}>
      <div style={starStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRate(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

export default RatingStars;
