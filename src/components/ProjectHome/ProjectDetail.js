import React from 'react'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function ProjectDetail({ content, image, backgroundColor }) {
    return (
        <article className="project col-xs-12 col-md-9">
            <Img
                Tag="div"
                className="image__img_blog"
                fluid={image}
                style={{ marginBottom: 20 }}
                backgroundColor={backgroundColor}
            />
            <MDXRenderer>{content}</MDXRenderer>
        </article>
    )
}
