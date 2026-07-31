import { useEffect, useState } from "react";

export default function StopTimeOut() {

  const [count, setCount] = useState(0); // total seconds
  const [stop, setStop] = useState(false); // total seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 0 || stop) {
          clearInterval(interval);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [count, stop]);

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg,#4e54c8,#8f94fb)",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "800px",
          borderRadius: "20px",
        }}
      >
        <div className="card-body text-center p-5">
          <h1 className="fw-bold text-primary mb-4">
            Countdown Timer
          </h1>

          <div
            className="bg-warning text-white py-4 rounded-4 mb-4 shadow-sm"
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          >
            {String(Math.floor(count / 60)).padStart(2, "0")} : {String(count % 60).padStart(2, "0")}
          </div>

          <div className="row g-3">
            <div className="col-6">
              <button
                className="btn btn-outline-primary w-100"
                onClick={() => setStop(false)}
              >
                Start
              </button>
            </div>

            <div className="col-6">
              <button
                className="btn btn-outline-primary w-100"
                onClick={() => setStop(true)}
              >
                Stop
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-outline-primary w-100"
                onClick={() => {
                  setStop(false);
                  setCount(15);
                }}
              >
                15 Sec
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-outline-success w-100"
                onClick={() => {
                  setStop(false);
                  setCount(30);
                }}
              >
                30 Sec
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-outline-warning w-100"
                onClick={() => {
                  setStop(false);
                  setCount(60);
                }}
              >
                1 Min
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-outline-danger w-100"
                onClick={() => {
                  setStop(false);
                  setCount(60 * 5);
                }}
              >
                5 Min
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-outline-info w-100"
                onClick={() => {
                  setStop(false);
                  setCount(60 * 10);
                }}
              >
                10 Min
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-outline-secondary w-100"
                onClick={() => {
                  setStop(false);
                  setCount(60 * 15);
                }}
              >
                15 Min
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-primary w-100 fw-bold"
                onClick={() => {
                  setStop(false);
                  setCount(60 * 20);
                }}
              >
                20 Min
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-primary w-100 fw-bold"
                onClick={() => {
                  setStop(false);
                  setCount(60 * 30);
                }}
              >
                30 Min
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}