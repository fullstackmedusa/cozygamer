import React from "react";

function Pin({ game }) {
    useEffect(() => {
        console.log('COZYGAME', game)
      })
  return (
    <div className={`pin ${pinSize}`}>
      <img src={game.photoUrl} alt="" className="mainPic" />

      <div className="content">
        <h3>{game.title}</h3>
        <div className="search">
          <a href={`/game/${game._id}`}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/icons8-forward-arrow-100.png?alt=media&token=3f56e775-43c1-41d3-a0c4-90217b31b5be"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pin;