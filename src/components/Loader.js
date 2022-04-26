
import PacmanLoader from "react-spinners/PacmanLoader";
import { useState } from "react";



const Loader = () => {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#000");

    return (
        <>
            <div className="sweet-loading">
                <PacmanLoader color={color} loading={loading} size={150} />
            </div>
        </>
    )
}

export default Loader;