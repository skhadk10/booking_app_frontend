const RegisterForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group mb-3">
        <label className="form-label">Your name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label className="form-label">Enter your Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label className="form-label">Password</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button disabled={!name ||!email || !password}className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default RegisterForm;
