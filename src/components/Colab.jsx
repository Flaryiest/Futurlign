import '../style/Map.css'
import { useEffect } from 'react';

export default function Colab() {
    useEffect(() => {
        window.location.href = "https://colab.research.google.com/drive/12-poPwEsVxFL9UIk4mm_117ciykAuTZz";
    }, []);

    return (
        <div className="redirect-container">
            <p>Redirecting to Colab...</p>
            <div className="spinner"></div>
        </div>
    );
}