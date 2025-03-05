import '../style/Map.css'
import { useEffect } from 'react';

export default function Map() {
    useEffect(() => {
        window.location.href = "https://www.google.com/maps/d/u/3/viewer?mid=1SLn_8-Ft2zLxr4LbKuVVSOZh0ywCKL4";
    }, []);

    return (
        <div className="redirect-container">
            <p>Redirecting to Google Maps...</p>
            <div className="spinner"></div>
        </div>
    );
}