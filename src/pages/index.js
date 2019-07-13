import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import { Box, Grid, GridItem } from 'fela-layout'
import Animate from 'layout/Animate'
import rhythm from 'layout/rhythm'

const reveal = () => ({
  from: { opacity: '0' },
  to: {
    opacity: '1',
  },
})

const headerStyle = {
  fontSize: rhythm(2),
  lineHeight: rhythm(4),
  marginTop: rhythm(4),
  marginBottom: rhythm(2),
}

const animatedTextStyle = {
  animationDuration: '5s',
  textAlign: 'center',
  margin: rhythm(4),
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site powered by Fela.js.</p>
    <p>Now go build something great.</p>

    <Box as="h2" extend={headerStyle}>
      Flexbox layout
    </Box>

    <Box
      flex
      justifyContent="space-around"
      alignItems="center"
      extend={{ background: '#f0f0ff' }}
    >
      <Box>Column 1</Box>
      <Box extend={{ background: '#f0f0f0' }}>Column 2</Box>
      <Box>Column 3</Box>
    </Box>

    <Box as="h2" extend={headerStyle}>
      CSS grid layout
    </Box>

    <Grid columns="1fr 1fr 1fr" placeItems="center">
      <GridItem>Column 1</GridItem>
      <GridItem>Column 2</GridItem>
      <GridItem>Column 3</GridItem>
    </Grid>

    <Animate keyframes={reveal} keyframeProps={{}} style={animatedTextStyle}>
      Some text appears here
    </Animate>
  </Layout>
)

export default IndexPage
