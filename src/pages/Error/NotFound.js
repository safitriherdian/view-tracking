import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function NotFound() {
  return (
    <div class="bg">
      <div class="container-1">
        <div class="container-2">
          <div class="container-3">
            <div class="card-error">
              <div class="content-error">
                <img src="./images/delivery-2.png" class="img-404" alt="" />
                <h1 className="mt-3">No Result Found</h1>
                <div>
                  <p>
                    Sorry, the page you are looking for doesn't exist or has
                    been moved
                  </p>
                  <p>We suggest you back to home</p>
                </div>

                <Link to="/">
                  <button class="btn">
                    <div>Back to Home</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
