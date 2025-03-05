import '../style/Access.css'

import { useEffect } from 'react';

export default function Access() {
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
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vR5l07UfPXNGF4YT2gDQ3S_xxAzG_NHpToH0uFtIKL2c4Tu87h_2g_noE2LR9Jwpr7PgIuiA872vnr4/pub?embedded=true"width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" display='flex' max-width='100%' title="Futurlign 2025 Access QR"> </iframe>
        </div>
    );
    
}