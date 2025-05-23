import '../style/Map.css'
import { useEffect } from 'react';

export default function Map() {
    useEffect(() => {
        window.location.href = "https://drive.google.com/file/d/1hZItuHhdnucLYtWwmLkl08tayxqmlS9O";
    }, []);

    return (
        <div className="redirect-container">
            <p>Redirecting to Week Five...</p>
            <div className="spinner"></div>
        </div>
    );
}