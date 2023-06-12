import React from "react";

function Card(props) {
  return (
    <div className="card">
      <dl>
        <dt>
          <img className="emoji" src={props.emoji} alt={props.emojiName} />
          <span className="emojiName"> {props.emojiName}</span>
        </dt>

        <dd className="meaning">{props.meaning}</dd>
      </dl>
    </div>
  );
}

export default Card;
