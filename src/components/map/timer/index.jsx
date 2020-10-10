import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import TimerIcon from '@material-ui/icons/Timer';

import { 
  loc_circ,
} from '../../../utils/eclipse'

import './index.styl'

const Timer = ({ className, pos, elements }) => {

  const [countString, setCountString] = useState('')
  const [dateString, setDateString] = useState('')

  const setTimePanel = () => {
    const eclipseData = loc_circ(pos.lat, pos.lng, elements)
    let countString = ''
    let dateString = ''

    if (eclipseData.c2.date) {
      const eclipseTime = new Date(eclipseData.c2.date)
      const currentTime = new Date()
      const left = eclipseData.c2.date/1000 - currentTime.getTime()/1000

      if (left >= 0) {
        const secs = Math.floor(left % 60)
        const mins = Math.floor(left/60) % 60
        const hours = Math.floor(left/60/60) % 24
        const days = Math.floor(left/60/60/24)

        dateString = `距離${eclipseTime.getFullYear()}年${eclipseTime.getMonth()+1}月${eclipseTime.getDate()}日的日食`
        countString = `倒數${days}天${hours}時${mins}分${secs}秒`        
      }

    }

    setCountString(countString)
    setDateString(dateString)
  }

  useEffect(() => {
    setTimePanel()
  }, [pos, elements])

  useEffect(() => {
    setInterval(setTimePanel, 1000)
  }, [])

  return (
    <div className={classNames('timer', className)} >
      {
        dateString && (
          <>
            <hr/>
            <div className="timer__date">{dateString}</div>
            <div className="timer__timer"><TimerIcon/> {countString}</div>
          </>
        )
      }
    </div>
  )
}

Timer.propTypes = {
}

export default Timer
