import '../style/Map.css'
import { useEffect } from 'react';

export default function Map() {
    useEffect(() => {
        window.location.href = "https://drive.google.com/file/d/1LV3liK6_UmLbCfHAsXcNfcYeLSsy-vLd";
    }, []);

    return (
        <div className="redirect-container">
            <p>Redirecting to Week Two...</p>
            <div className="spinner"></div>
        </div>
    );
}