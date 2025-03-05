import '../style/Class.css'

import { useEffect } from 'react';

export default function Class() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{ margin: 0, height: '100%', overflow: 'hidden', width: '100%'}}>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQXIbz3Ae8pXhpcj9eaF62bsn1K9-nZ2-S--rUGfjLyCYcvQSSrTqVsvwnoZHT_kWTCVERxDxD9Adv5/pub?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" display='flex' max-width='100%' title="Futurlign 2025 Spring UofC AI Course Registration"> </iframe>
        </div>
    );
    
}