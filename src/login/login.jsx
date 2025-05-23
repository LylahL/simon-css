import React from 'react';


export function Login() {
  return (
    <>
      <main className="container-fluid bg-secondary text-center">
        <div>
          <h1>Welcome to Simon</h1>
          <form method="get" action="play.html">
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input className="form-control" type="text" placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">🔒</span>
              <input className="form-control" type="password" placeholder="password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="submit" className="btn btn-secondary">Create</button>
          </form>
        </div>
      </main>

      <footer className="bg-dark text-white-50">
        <div className="container-fluid">
          <span className="text-reset">Author Name(s)</span>
          <a className="text-reset" href="https://github.com/webprogramming260/simon-css">Source</a>
        </div>
      </footer>
    </>
  );
}
