import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

interface AppProps {
  row?: boolean;
  style?: object;
  tagName: string;
  children?: any;
  className?: string,
}

const KeyWord = (props: AppProps) => {
  const styles: any = {
    default: {}
  }

  let outputStyles: any = {
    ...styles.default,
    ...props.style,
  }

  const TagName:string = props.tagName;
  let setProps:any = {...props}
  setProps.style = outputStyles

  setProps.className = `key-word${props.className ? ' ' + props.className : ''}`
  delete setProps.row
  delete setProps.tagName

  return (

    <TagName {...setProps}>
      { props.children }
    </TagName>
  )

}
KeyWord.defaultProps = {
  style: {},
  row: false,
  tagName: 'span',
}


export default KeyWord;