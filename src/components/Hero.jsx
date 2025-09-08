import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import "../css/Hero.css";

const Hero = ({ profile }) => {
  const [skTitle, setSkTitle] = useState("");

  useEffect(() => {
    if (profile?.skTitle) {
      setSkTitle(profile.skTitle);
    }
  }, [profile]); // runs only when profile changes

  if (!profile) {
    return (
      <div className="wholeCover">
        <div className="banner">
          <div className="content">
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="wholeCover">
        <div className="banner">
          <div className="slider" style={{ "--quantity": skTitle.length + 1 }}>
            <div className="item" style={{ "--position": 1 }}>
              <img src={logo} alt="" />
            </div>

            {skTitle.split("").map((character, index) => (
              <div
                className="item"
                style={{ "--position": index + 2 }} // +2 because img takes pos 1
                key={index}
              >
                <h1 className="gaming-text-flicker">{character}</h1>
              </div>
            ))}
          </div>

          <div className="content">
            <h1 data-content={profile.skName}>{profile.skName}</h1>
            <div className="author">
              <h2 className="green-text">Play. Win. Repeat</h2>
              <p>I don't need a therapist, I have gaming</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
