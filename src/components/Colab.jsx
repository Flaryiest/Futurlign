import '../style/Map.css'
import { useEffect } from 'react';

export default function Colab() {
    useEffect(() => {
        window.location.href = "https://colab.research.google.com/drive/13-bwUPV1x80mgaoa6evE7yWn1up6xtXJ";
    }, []);

    return (
        <div className="redirect-container">
            <p>Redirecting to Colab...</p>
            <div className="spinner"></div>
        </div>
    );
}