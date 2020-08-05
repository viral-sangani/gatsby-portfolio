import React, { useContext } from 'react'
import { Spring } from 'react-spring/renderprops'
import Resume from '../../static/Viral_Sangani_Resume.pdf'
import { ThemeContext } from './Context'
import GithubIcon from '../../static/images/github.svg'
import TwitterIcon from '../../static/images/twitter.svg'
import LinkedinIcon from '../../static/images/linkedin.svg'
import InstagramIcon from '../../static/images/instagram.svg'

function renderMain() {
    const { colorMode } = useContext(ThemeContext)
    console.log(GithubIcon)
    return (
        <section
            className="hero main-name__title"
            data-component="hero"
            style={{
                marginTop: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
            }}
        >
            <h1 className="hero__title ">Hola, I'm Viral Sangani.</h1>
            <p className="hero__subtitle ">
                Your Friendly Neighborhood CSE Student
            </p>

            <div className="hero__text main-text">
                <h1 className="large ">
                    I can solve
                    <Spring
                        from={{
                            opacity: 1,
                            textDecoration: 'none',
                            display: 'inline-block',
                        }}
                        to={{
                            opacity: 0.45,
                            textDecoration: 'line-through',
                        }}
                        config={{ delay: 7500 }}
                    >
                        {(props) => (
                            <div style={props}>
                                <span className="none">
                                    <Spring
                                        from={{
                                            opacity: 1,
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                        }}
                                        to={{
                                            opacity: 0.5,
                                            textDecoration: 'line-through',
                                            display: 'inline-block',
                                        }}
                                        config={{
                                            delay: 2500,
                                        }}
                                    >
                                        {(props) => (
                                            <div style={props}>
                                                <span className="all">
                                                    &nbsp;all&nbsp;
                                                </span>
                                            </div>
                                        )}
                                    </Spring>
                                    <Spring
                                        from={{
                                            opacity: 1,
                                            display: 'none',
                                        }}
                                        to={{
                                            opacity: 1,
                                            display: 'inline-block',
                                        }}
                                        config={{
                                            delay: 2500,
                                        }}
                                    >
                                        {(props) => (
                                            <div style={props}>
                                                <Spring
                                                    from={{
                                                        opacity: 1,
                                                        textDecoration: 'none',
                                                        display: 'inline-block',
                                                    }}
                                                    to={{
                                                        opacity: 0.5,
                                                        textDecoration:
                                                            'line-through',
                                                        display: 'inline-block',
                                                    }}
                                                    config={{
                                                        delay: 5000,
                                                    }}
                                                >
                                                    {(props) => (
                                                        <div style={props}>
                                                            <span className="all">
                                                                &nbsp;some&nbsp;
                                                            </span>
                                                        </div>
                                                    )}
                                                </Spring>
                                            </div>
                                        )}
                                    </Spring>
                                    <Spring
                                        from={{
                                            opacity: 1,
                                            display: 'none',
                                        }}
                                        to={{
                                            opacity: 1,
                                            display: 'inline-block',
                                        }}
                                        config={{
                                            delay: 5000,
                                        }}
                                    >
                                        {(props) => (
                                            <div style={props}>
                                                <Spring
                                                    from={{
                                                        opacity: 1,
                                                        textDecoration: 'none',
                                                        display: 'inline-block',
                                                    }}
                                                    to={{
                                                        opacity: 0.5,
                                                        textDecoration:
                                                            'line-through',
                                                        display: 'inline-block',
                                                    }}
                                                    config={{
                                                        delay: 7500,
                                                    }}
                                                >
                                                    {(props) => (
                                                        <div style={props}>
                                                            <span className="all">
                                                                &nbsp;one&nbsp;
                                                            </span>
                                                        </div>
                                                    )}
                                                </Spring>
                                            </div>
                                        )}
                                    </Spring>
                                    <Spring
                                        from={{
                                            opacity: 1,
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                        }}
                                        to={{
                                            opacity: 0.5,
                                            textDecoration: 'line-through',
                                            display: 'inline-block',
                                        }}
                                        config={{
                                            delay: 7500,
                                        }}
                                    >
                                        {(props) => (
                                            <div style={props}>
                                                <span className="all">
                                                    of your
                                                </span>
                                            </div>
                                        )}
                                    </Spring>
                                </span>
                            </div>
                        )}
                    </Spring>
                    &nbsp;problems
                    <Spring
                        from={{
                            opacity: 1,
                            display: 'none',
                        }}
                        to={{
                            opacity: 1,
                            display: 'inline-block',
                        }}
                        config={{
                            delay: 7700,
                        }}
                    >
                        {(props) => (
                            <div style={props}>
                                <span>&nbsp;, ok?&nbsp;</span>
                            </div>
                        )}
                    </Spring>
                </h1>
            </div>
            <div className="btn-wrapper">
                <div className="btn">
                    <a href={Resume} download>
                        <button id="button" type="button">
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
            <div className="btn-wrapper" style={{ marginTop: 20 }}>
                <div
                    className="btn"
                    style={{ display: 'flex', flexWrap: 'nowrap' }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <a
                            href="https://github.com/viral-sangani"
                            rel="noopener noreferrer"
                            target="_blank"
                            style={{ margin: 12, cursor: 'pointer' }}
                        >
                            <GithubIcon style={{ width: 35, height: 35 }} />
                        </a>
                        <a
                            href="https://twitter.com/viral_sangani_"
                            rel="noopener noreferrer"
                            target="_blank"
                            style={{ margin: 12, cursor: 'pointer' }}
                        >
                            <TwitterIcon style={{ width: 35, height: 35 }} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/viral-sangani/"
                            rel="noopener noreferrer"
                            target="_blank"
                            style={{ margin: 12, cursor: 'pointer' }}
                        >
                            <LinkedinIcon style={{ width: 35, height: 35 }} />
                        </a>
                        <a
                            href="https://www.instagram.com/__viral_/"
                            rel="noopener noreferrer"
                            target="_blank"
                            style={{ margin: 12, cursor: 'pointer' }}
                        >
                            <InstagramIcon style={{ width: 35, height: 35 }} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Main = () => {
    return renderMain()
}

export default Main
