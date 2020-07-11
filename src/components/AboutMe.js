import React from 'react'

const AboutMe = () => {
    return (
        <main
            className="main pt-xs-40 pt-md-60 pb-xs-40 pb-md-60 mt-xs-20 mt-md-20 "
            style={{
                backgroundColor: 'white',
                borderRadius: 20,
                // boxShadow:
                //     '  0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)',
                boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
            }}
        >
            <article
                className="home-container container "
                style={{ display: 'flex' }}
            >
                <div className="aboutme">
                    <div className="wrap">
                        <p
                            style={{
                                fontSize: '2em',
                                color: 'black',
                            }}
                        >
                            About Me
                        </p>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'black' }}>
                            I build, automate &amp; sometimes rescue
                            applications.
                        </p>
                        <p style={{ color: 'black' }}>
                            If you have a project that you want to get started,
                            think you need my help with something or just fancy
                            saying hey, then get in touch.
                        </p>
                        <br />
                        <a
                            className="link--underline"
                            href="mailto:viral.sangani2011@gmail.com"
                        >
                            viral.sangani2011@gmail.com
                        </a>
                    </div>
                </div>
                <div className="aboutme">
                    <div className="wrap">
                        <p
                            style={{
                                fontSize: '2em',
                                color: 'black',
                            }}
                        >
                            This is my system
                        </p>
                    </div>
                    <ul>
                        <li>
                            <p style={{ color: 'black' }}>
                                Pursue Passions, Not Paychecks
                            </p>
                        </li>
                        <li>
                            <p style={{ color: 'black' }}>Learn Every Day</p>
                        </li>
                        <li>
                            <p style={{ color: 'black' }}>Believe in Change</p>
                        </li>
                        <li>
                            <p style={{ color: 'black' }}>
                                Invest in Ideas That Matter
                            </p>
                        </li>
                        <li>
                            <p style={{ color: 'black' }}>Be Lazy and Dumb</p>
                        </li>
                    </ul>
                </div>
            </article>
        </main>
    )
}

export default AboutMe
