import {Link} from "react-router-dom"


export const Common = (props) => {
  return (
    <div id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
              <div className="row">
              <div style={{textAlign: 'left'}} className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 d-flex justify-content-center flex-column">
                  <h1>{props.name}</h1>
                  <h2>
                      We are team of developer 
                  </h2>
                  <div className="mt-3">
                      <Link  to={props.visit} class="btn btn-primary">
                          {props.btn_name}
                      </Link>
                  </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img mt-5">
                <img src="https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWF0ZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="home image" />
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
