import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"


export default function Index({ data }) {
  const {doggo} = data;
  return (
    <div className="blog-posts">
      <h1>{doggo.dogs.name}</h1>
    </div>
  )
}

export const pageQuery = graphql`
  query dogQuery($slug: String!) {
  doggo {
    dogs(where: {
      slug: $slug
    }) {
      name
     slug
    }
  }
}`