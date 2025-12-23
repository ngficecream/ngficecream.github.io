import React, { useEffect } from 'react';

/**
 * InstagramEmbed Component
 * Renders a live Instagram post using the official embed script.
 */
const InstagramEmbed = ({ url }) => {
    useEffect(() => {
        // If the Instagram embed script is already on the page, trigger processing
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        } else {
            // Otherwise, load the script
            const script = document.createElement('script');
            script.src = '//www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                if (window.instgrm) {
                    window.instgrm.Embeds.process();
                }
            };
        }
    }, [url]);

    return (
        <div className="insta-embed-container" style={{ display: 'flex', justifyContent: 'center' }}>
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '326px',
                    minWidth: '326px',
                    padding: '0',
                    width: '99.375%',
                }}
            >
                <div style={{ padding: '16px' }}>
                    <a
                        href={url}
                        style={{
                            background: '#FFFFFF',
                            lineHeight: '0',
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Loading Instagram post...
                    </a>
                </div>
            </blockquote>
        </div>
    );
};

export default InstagramEmbed;
