import React from "react";
import "./Error.css";

function NotFound() {
  return (
    <div class="bg">
      <div class="container-1">
        <div class="container-2">
          <div class="container-3">
            <div class="card-error card-maintenance">
              <div class="bg-img">
                <div class="text-area">
                  <h1 className="text-3xl">
                    The site is currently down for maintenance
                  </h1>{" "}
                  <br />
                  <p>
                    We apologize for any inconveniences caused. We're doing our
                    best and we'll back soon 🙏
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
