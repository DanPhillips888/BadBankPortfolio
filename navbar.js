function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" title="Home Page" href="#">Bad Bank</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" title="Click to Create a New Account." aria-current="page" href="#/CreateAccount/">
                Create Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" title="Click to Log in to an Account" href="#/login/">
                Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" title="Click to Deposit a cash ammount into an Account" href="#/deposit/">Deposit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" title="Click to Withdraw a cash ammount from an Account" href="#/withdraw/">Withdraw</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" title="Click to view a summary of each accounts' data" href="#/alldata/">All Data</a>
              </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}