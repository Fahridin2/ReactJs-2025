import './ProfileCard.css';

export default function ProfileCard({ name, email, avatar }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
