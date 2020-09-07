import React from 'react';

import { FlexView } from '@src/components/FlexView'

import Canvas from './fireflies/app'

class _cls extends React.Component{
  render() {
    return (
      <FlexView
        row
        style={{
					backgroundSize: 'cover',
    			overflow: 'hidden',
        }}
      >
        <Canvas/>
      </FlexView>
    );
  }
}

export default _cls