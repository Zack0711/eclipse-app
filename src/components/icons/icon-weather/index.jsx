import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.styl'

const WEATHER_STATUS = {
  '200': 'icon-weather--status-200',
  '300': 'icon-weather--status-300',
  '500': 'icon-weather--status-500',
  '600': 'icon-weather--status-600',
  '700': 'icon-weather--status-700',
  '800': 'icon-weather--status-800',
  '80x': 'icon-weather--status-80x',
}

const IconWeather = ({ className, code = '800' }) => (
  <div className={classNames(
    'icon-weather',
    className,
    WEATHER_STATUS[code],
  )}/>
)

IconWeather.propTypes = {}

export default IconWeather
