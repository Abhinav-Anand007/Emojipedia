import React from "react";
import emojipedia from "./emojipedia";
import Card from "./Card";

function App() {
  function createCard(emojiOb) {
    return (
      <Card
        key={emojiOb.id}
        emoji={emojiOb.emoji}
        emojiName={emojiOb.name}
        meaning={emojiOb.meaning}
      />
    );
  }
  return (
    <div>
      <h1 className="heading">Emojipedia</h1>
      <div className="container">{emojipedia.map(createCard)}</div>
    </div>
  );
}

export default App;
