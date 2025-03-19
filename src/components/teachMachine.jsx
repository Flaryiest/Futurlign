import '../style/Map.css'
import { useEffect } from 'react';

export default function TeachMachine() {
    useEffect(() => {
        window.location.href = "https://teachablemachine.withgoogle.com/train/image";
    }, []);

    return (
        <div className="redirect-container">
            <p>Redirecting to Teachable Machine...</p>
            <div className="spinner"></div>
        </div>
    );
}