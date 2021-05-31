const Login = () => {
  return (
    <form className = "text-center" style={{backgroundColor:'gray', width:'500px'}}>
      <img
        src="./lolIcon.png"
        alt=""
        width="72"
        height="72"
      />
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label className="sr-only">
        Username
      </label>
      <input
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Username"
        required
        autoFocus
      />
      <label className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required
      />

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
