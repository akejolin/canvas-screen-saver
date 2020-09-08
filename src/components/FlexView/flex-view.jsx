import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const FlexView = (props) => {
  const styles = {
    default: props.row ? {flexDirection: 'row'} : {} // Default has been moved to scss
  }

  let outputStyles = {
    ...styles.default,
    ...props.style,
  }

  if (outputStyles.width === '100%') {
    outputStyles = {
      ...outputStyles,
      ...{
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0,
      },
    }
  }
  if (outputStyles.height === '100%') {
    outputStyles = {
      ...outputStyles,
      ...{
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
      },
    }
  };
  const TagName = props.tagName;
  let setProps = {...props}
  setProps.style = outputStyles

  setProps.className = `flex-view${props.className ? ' ' + props.className : ''}`
  delete setProps.row
  delete setProps.tagName

  return (

    <TagName {...setProps}>
      { props.children }
    </TagName>
  )

}
FlexView.defaultProps = {
  style: {},
  row: false,
  tagName: 'div',
}


export default FlexView;