import cm2 from "../assets/images/1b.png";
const Player = function () {
  return (
    <div className="player">
      <div className="d-flex align-items-center justify-content-between">
        <img src={ cm2 } alt=""  className="w-25 h-25"/>
       
        <div className="d-flex align-items-center">
          <button className="btn  me-2">
            <i className="bi bi-play-fill "></i>
          </button>
          <button className="btn ">
            <i className="bi bi-skip-forward-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
