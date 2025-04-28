import "../assets/css/login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        <h2 className="heading">Login</h2>
        <form action={() => {}} className="form">
          <input type="text" className="username" placeholder="Username" />
          <input type="text" className="email" placeholder="Email" />
          <input type="text" className="password" placeholder="Password" />
        </form>
      </div>
    </div>
  );
}
