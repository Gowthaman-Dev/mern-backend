const UserStatus = ({ user }) => {
  // 🔹 If user is null
  if (user === null) {
    return <p>Loading user…</p>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "15px" }}>
      <p>Name: {user?.name ?? "Guest User"}</p>
      <p>Email: {user?.email ?? "No email provided"}</p>

      {/* Conditional rendering */}
      {user?.isActive && <p style={{ color: "green" }}>Active User</p>}
    </div>
  );
};

export default UserStatus;
