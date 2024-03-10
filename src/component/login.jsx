import style from "../style/login.module.css";
function login() {
  return (
    <div className={style.container}>
      <div className={style.leftDiv}>
        <video
          src="/playback.mp4"
          autoPlay={true}
          loop
          muted
        ></video>
      </div>
      <div className={style.centralDiv}>
        <div className={style.centralDivContainer}>
          <h1>
            Make your connection <br />
            with us !
          </h1>
          <form>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <button>Login</button>
            <p>
              Already have an account? <a href="#">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default login;
