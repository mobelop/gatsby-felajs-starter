import React from 'react'
import { RendererProvider, ThemeProvider } from 'react-fela'
import { createRenderer } from 'fela'
import config from './fela.config.js'
import theme from './fela.theme.js'
import globalStyle from './src/global.css.js'

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  const renderer = createRenderer(config)
  renderer.renderStatic(globalStyle)
  return (
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </RendererProvider>
  )
}
