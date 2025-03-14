import '../style/Map.css'
import { useEffect } from 'react';

export default function WeekOne() {
    useEffect(() => {
        window.location.href = "https://drive.google.com/file/d/1XZ64Xli5J0ZdeXzrdsgbmRd8q25Q_0FQ";
    }, []);

    return (
        <div className="redirect-container">
            <p>Redirecting...</p>
            <div className="spinner"></div>
        </div>
    );
}