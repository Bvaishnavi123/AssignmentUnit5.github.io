export const Login = () => {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="formContainer">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                E-mail
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Your Email"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Your Password"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
