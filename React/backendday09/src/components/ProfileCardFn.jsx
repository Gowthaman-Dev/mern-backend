import "./ProfileCard.css";
import avatar from "../assets/avatar.jpg";

const ProfileCardFn =()=> {
  return (
    <div className="profile-card">
      <img src={avatar} alt="Profile Avatar" className="avatar" />
      <h2>Rocky Alone</h2>
      <p>B.Sc Mathematics Graduate</p>
      <p>Aspiring Full Stack Java Developer</p>
    </div>
  );
}

export default ProfileCardFn;
