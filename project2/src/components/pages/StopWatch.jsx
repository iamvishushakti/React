import {useState, useEffect, useCallback} from "react";

export default function StopWatch() {
    const [time, setTime] = useState(0);
    const [startStatus, setStartStatus] = useState(false);
    const [lap, setLap] = useState([]);

    console.log(startStatus);
    const lapAdd = useCallback(()=>{
        const lengthLap = (lap.length)+1;
        const laptime = String(Math.floor(time / 3600)).padStart(2, "0") + ' '+String(Math.floor((time % 3600) / 60)).padStart(2, "0")+' '+String(time % 60).padStart(2, "0");
        const data = [
            {
                name: `lap${lengthLap}`,
                laptime: laptime
            },
            ...lap
        ];

        setLap(data);

        console.log(data);
    }, [time]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => {
                if (startStatus === false) {
                    return 0;
                }
                return prev + 1;
            });
        }, 1000);

        return ()=>{ clearInterval(interval);}
    }, [startStatus]);

    return (
        <div
        className="min-vh-100 d-flex justify-content-center align-items-center"
        style={{
            background: "linear-gradient(135deg, #555bd1, #8185ed)",
        }}
        >
        <div
            className="bg-white rounded-4 shadow-lg p-5"
            style={{ width: "100%", maxWidth: "1000px" }}
        >
            {/* Timer Display */}
            <div
            className="bg-secondary text-white rounded-4 shadow-sm d-flex justify-content-center align-items-center mb-4"
            style={{ height: "135px" }}
            >
                <h1 className="fw-bold mb-0" style={{ fontSize: "50px" }}>
                    {String(Math.floor(time / 3600)).padStart(2, "0")} :{" "}
                    {String(Math.floor((time % 3600) / 60)).padStart(2, "0")} :{" "}
                    {String(time % 60).padStart(2, "0")}
                </h1>
            </div>

            {/* Buttons */}
            <div className="row g-3">
            <div className="col-md-4">
                <button className="btn btn-outline-primary w-100 py-2"
                    onClick={()=>{setStartStatus(true)}}
                    disabled={startStatus}
                >
                Start
                </button>
            </div>

            <div className="col-md-4">
                <button className="btn btn-outline-success w-100 py-2"
                onClick={()=>{lapAdd()}}
                disabled={!startStatus}
                >Lap</button>
            </div>

            <div className="col-md-4">
                <button className="btn btn-outline-danger w-100 py-2" 
                onClick={()=>{
                    setStartStatus(false);
                    setTime(0);
                }}
                disabled={!startStatus}>Reset</button>
            </div>
            </div>

            {/* Lap Section */}
            <div className="mt-4">
            <h5 className="fw-bold border-bottom pb-2">Lap Times</h5>

            <div className="list-group">
                {lap.length === 0 ? (
                    <div className="list-group-item text-center text-muted">
                        No laps recorded yet
                    </div>
                ) : (
                    lap.map((item, index) => (
                        <div
                            className="list-group-item d-flex justify-content-between"
                            key={index}
                        >
                            <label>{item.name}</label>
                            <span>{item.laptime}</span>
                        </div>
                    ))
                )}
            </div>
            </div>
        </div>
        </div>
    );
}
