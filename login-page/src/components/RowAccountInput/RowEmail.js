function RowEmail(prop) {
  const { username, setUsername } = prop;

  return (
    <div className="row-email">
      <span className="title">Email</span>
      <i className="fal fa-envelope"></i>
      <input
        type="email"
        placeholder="Email"
        value={username}
        onChange={(e) => {
          setUsername(e.currentTarget.value);
        }}
      />
    </div>
  );
}

export default RowEmail;
