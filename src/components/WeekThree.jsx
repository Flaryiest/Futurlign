import '../style/Map.css'
import { useEffect } from 'react';

export default function Map() {
    useEffect(() => {
        window.location.href = "https://drive.google.com/file/d/1COOfUEyPVwenLZ2OiBy-3Mg9Lu4C8SSK";
    }, []);

    return (
        <div className="redirect-container">
            <p>Redirecting to Week Three...</p>
            <div className="spinner"></div>
        </div>
    );
}