import { useEffect } from 'react';

export default function Form() {
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
        <div style={{ margin: 0, height: '100%', overflow: 'hidden', width: '100%' }}>
            <iframe data-tally-src="https://tally.so/r/npJAaP?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="Futurlign 2025 Spring UofC AI Course Registration"></iframe>
        </div>
    );
}