import '../style/Map.css'
import { useEffect } from 'react';

export default function Map() {
    useEffect(() => {
        window.location.href = "https://drive.google.com/file/d/1eE6xRpeP8sIu_qvQ1woyLlQ7wU4BWxpX";
    }, []);

    return (
        <div className="redirect-container">
            <p>Redirecting to Week Four...</p>
            <div className="spinner"></div>
        </div>
    );
}