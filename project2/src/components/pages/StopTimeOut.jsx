import { useEffect, useState, useCallback } from "react";

export default function StopTimeOut() {

  const getRemainingTime = useCallback(() => {
    const endTime = Number(localStorage.getItem("stopWatch_endTime"));
    if (!endTime || endTime <= 0) {
      return 0;
    }
    return Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
  },[])

  const [count, setCount] = useState(getRemainingTime);
  
  const changetimer = useCallback((settimevalue)=>{
    const currentTime = Date.now();
    const newEndTime = currentTime + settimevalue * 1000;

    localStorage.setItem("stopWatch_endTime", newEndTime);
    setCount(settimevalue);
  },[]);

  // Timer ko har second actual endTime ke according update karo
  useEffect(() => {
    const interval = setInterval((predata)=>{
      const remaining = getRemainingTime();
      setCount(remaining);
      if (predata <= 0) {
        localStorage.removeItem("stopWatch_endTime");
        clearInterval(interval);
      }
    }, 1000);
  }, []);

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

          <div
            className="bg-secondary text-white py-4 rounded-4 mb-4 shadow-sm"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            {String(Math.floor(count / 60)).padStart(2, "0")} :{" "}
            {String(count % 60).padStart(2, "0")}
          </div>

          <div className="row g-3">

            <div className="col-3">
              <button
                className="btn btn-outline-primary w-100"
                onClick={() => changetimer(15)}
              >
                15 Sec
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-outline-success w-100"
                onClick={() => changetimer(30)}
              >
                30 Sec
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-outline-warning w-100"
                onClick={() => changetimer(60)}
              >
                1 Min
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-outline-danger w-100"
                onClick={() => changetimer(60 * 5)}
              >
                5 Min
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-outline-info w-100"
                onClick={() => changetimer(60 * 10)}
              >
                10 Min
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-outline-secondary w-100"
                onClick={() => changetimer(60 * 15)}
              >
                15 Min
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-primary w-100 fw-bold"
                onClick={() => changetimer(60 * 20)}
              >
                20 Min
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-primary w-100 fw-bold"
                onClick={() => changetimer(60 * 30)}
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