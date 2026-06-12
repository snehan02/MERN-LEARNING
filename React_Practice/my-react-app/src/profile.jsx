import "./profile.css";

function Profile(props) {
  return (
    <div className = "profile-card">
      <h2>Name: {props.name}</h2>
      <p>Department: {props.department}</p>
    </div>
  );
}

export default Profile;