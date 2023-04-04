import React from "react";
import "./videoFooter.css";
import MusicNoteTwoToneIcon from "@mui/icons-material/MusicNoteTwoTone";

function Videofooter({ name, description, music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter_music">
          <MusicNoteTwoToneIcon className="videoFooter_icon" />
          <div className="videoFooterMusic_text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter_record"
        alt="imagem de um vinil"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default Videofooter;
