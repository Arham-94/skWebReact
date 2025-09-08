import "../css/ProfileDetails.css";
import logo from "../assets/logo.jpg";
import controller from "../assets/karts.jpg";

const ProfileDetails = ({ profile }) => {
  if (!profile) return <h2>Loading...</h2>;

  return (
    <div className="profile-container">
      {/* Left side: details */}
      <div className="profile-info">
        <h1 className="title">{profile.skTitle}</h1>
        <h2 className="name">{profile.skName}</h2>

        <p>
          <strong>Main Team:</strong> {profile.mainTeam}
        </p>
        <p>
          <strong>Sub Team:</strong> {profile.subTeam}
        </p>
        <p>
          <strong>Region:</strong> {profile.region}
        </p>

        <div className="section">
          <h3>Roles</h3>
          {profile.roles.split(",").map((role, idx) => (
            <p key={idx} className="detail-text">
              <i class="fa-solid fa-circle"></i> {role.trim()}
            </p>
          ))}
        </div>

        <div className="section">
          <h3>🤝 Friends</h3>
          {/* {profile.friends.split(",").map((friend, idx) => (
            <p key={idx} className="detail-text">
              🤝 {friend.trim()}
            </p>
          ))} */}
          <p className="detail-text">{profile.friends}</p>
        </div>
      </div>

      {/* Right side: image */}
      <div className="profile-image">
        <img src={controller} alt="Profile Character" />
      </div>
    </div>
  );
};

export default ProfileDetails;
