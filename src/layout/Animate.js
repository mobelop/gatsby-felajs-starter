// @flow
import { FelaComponent, FelaRenderer } from 'react-fela'
import React from 'react'

type Props = {
  keyframes: Object,
  keyframeProps?: Object,
  style?: Object,
  children: any,
}

const Animate = (props: Props) => (
  <FelaRenderer>
    {renderer => {
      const {
        keyframes,
        keyframeProps = {},
        style = {},
        children,
        ...rest
      } = props

      let animationName = ''

      if (keyframes) {
        animationName = renderer.renderKeyframe(keyframes, keyframeProps)
      }

      return (
        <FelaComponent
          style={{
            animationName,
            animationDuration: '1s',
            animationTimingFunction: 'ease-out',
            animationDirection: 'alternate',
            animationFillMode: 'both',
            ...style,
          }}
        >
          {({ className }) => (
            <div {...rest} className={className}>
              {children}
            </div>
          )}
        </FelaComponent>
      )
    }}
  </FelaRenderer>
)

export default Animate
