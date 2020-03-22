import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'

import './index.styl'

const Panel = ({ getRef, className, closePanel }) => {

  return (
    <div className={classNames('panel', className)} >
      <Button onClick={closePanel}><CloseIcon /></Button>
      <div className='panel__content' ref={getRef}>
      </div>
    </div>
  )
}

Panel.propTypes = {
}

export default Panel
