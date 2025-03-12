import '../style/Map.css'
import { useEffect } from 'react';

export default function Colab() {
    useEffect(() => {
        window.location.href = "https://colab.research.google.com/drive/1pCZYcNoJ8MEEWew-P9DlO0UHTdkK2Vrn?usp=sharing";
    }, []);

    return (
        <div className="redirect-container">
            <p>Redirecting to Google Maps...</p>
            <div className="spinner"></div>
        </div>
    );
}