import { useEffect } from 'react';

export default function Form() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);

        window.TallyConfig = {
            "formId": "mVoRea",
            "popup": {
                "width": 518,
                "overlay": true,
                "autoClose": 1000
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
}