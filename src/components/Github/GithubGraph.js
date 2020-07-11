import React from 'react'
import Octicon, { LogoGithub } from '@primer/octicons-react'
import Section from './Section'

export default function GithubGraph() {
    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <h5>My contribtion graph (2019 - 20)</h5>
            <img
                style={{ width: '100%' }}
                src="http://ghchart.rshah.org/viral-sangani"
                alt="2016rshah's Github chart"
            />
        </div>
    )
}
