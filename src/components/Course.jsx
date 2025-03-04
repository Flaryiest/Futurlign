import '../style/Course.css'

import { useEffect } from 'react';

export default function Course() {
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
        <div style={{ margin: 0, height: '1000%', overflow: 'hidden', width: '100%'}}>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vRliNYLOdtTSdRZLxKW2ihKDSp7j5uXn924giDk54czi_rrtI21XibRj-rTJkbEEsY6Wa3QJarcJ7R7/pub?embedded=true" width="100%" height="800px" frameborder="0" marginheight="0" marginwidth="0" display='flex' style='border:none;' title="Futurlign 2025 Spring UofC AI Course Registration"> </iframe>
        </div>
    );
}