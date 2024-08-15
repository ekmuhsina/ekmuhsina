import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate()
    return (
        <div className="d-flex flex-column justify-content-center text-center" style={{ minHeight: "500px" }}>
            <h1 className="fw-bolder mb-4">Oops... the page your looking not found!!!</h1>
            <div>
                <button className="btn btn-primary" onClick={()=>{
                    navigate("/")
                }} >Go back to Home</button>
            </div>
        </div>
    );
}

export default NotFound;