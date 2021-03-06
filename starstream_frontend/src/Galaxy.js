import React, { Component } from 'react'

import StarfieldAnimation from 'react-starfield-animation'

import background from './stars.jpg'

const Galaxy = () => {
  // render () {
    return (
      <div
        style={{
          background: `url(${background})`,
          backgroundSize: 'stretch',
          zIndex: 0,
          minHeight: '90vh',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <StarfieldAnimation
          numParticles={400}
          style={{
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
      </div>
    )
  // }
}

export default Galaxy
