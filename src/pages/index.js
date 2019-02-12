import React from 'react'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Box from 'layout/Box'
import Animate from 'layout/Animate'
import { createComponent } from 'react-fela'

const SimpleComp = createComponent(
  () => ({
    color: 'blue',
    textAlign: 'center',
  }),
  'div'
)

const keyframe = () => ({
  from: { color: 'blue', transform: 'rotate(0deg)' },
  to: {
    color: 'yellow',
    transform: 'rotate(360deg)',
  },
})

const reveal = () => ({
  from: { opacity: '0' },
  to: {
    opacity: '1',
  },
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site powered by Fela.js.</p>
    <p>Now go build something great.</p>
    <Animate keyframes={keyframe} keyframeProps={{}}>
      <SimpleComp>TURN</SimpleComp>
    </Animate>
    <Animate
      keyframes={reveal}
      keyframeProps={{}}
      style={{ animationDuration: '1s' }}
    >
      <SimpleComp extend={{ background: '#f0f0f0' }}>Reveal</SimpleComp>
    </Animate>

    <Box
      justifyContent="space-around"
      alignItems="center"
      extend={{ background: '#f0f0ff' }}
    >
      <Box>Col 1</Box>
      <Box extend={{ background: '#f0f0f0' }}>Col 2</Box>
      <Box>Col 3</Box>
    </Box>
  </Layout>
)

export default IndexPage
