import React from 'react';

import { FlexView } from '@src/components/FlexView'

import Canvas from './fireflies/engine'

const _cls = () => (
  <FlexView
    row
    style={{
      backgroundSize: 'cover',
      overflow: 'hidden',
    }}
  >
    <div style={{position: 'absolute', zIndex: 10, bottom: 10, left: 10}}><a href="https://github.com/akejolin">Akejolin</a></div>
    <Canvas/>
  </FlexView>
)


export default _cls