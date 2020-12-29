import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Button from '@material-ui/core/Button'
import CommuteIcon from '@material-ui/icons/Commute'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Menu from '@material-ui/core/Menu'

import EclipseInfo from './eclipse-info'

import { IconLoader, IconWeather } from '../../icons'
import Timer from '../timer'

import { getWeatherData } from '../../../utils/weather'
import { 
  latitudeToString,
  longitudeToString,
  loc_circ,
} from '../../../utils/eclipse'

import './index.styl'

const Popup = ({ getRef, openDirection, pos, elements }) => {

  const [info, setInfo] = useState(null)
  const [fetching, setFetching] = useState(false)
  const [ anchorEl, setAnchorEl] = useState(null)

  const setPopupInfo = data => {
    const {
      main,
      name,
      weather,
      sys,
    } = data

    const eclipseData = loc_circ(pos.lat, pos.lng, elements)

    const weatherId = weather[0].id
    const temperature = `${(main.temp - 273.15).toFixed(1)}°C`
    let code = '800'

    if(Math.floor(weatherId / 100) === 8 && weatherId % 100 > 0) {
      code = `80x`
    }else{
      code = `${Math.floor(weatherId / 100)}00`      
    }

    setInfo({
      city: name,
      country: sys.country,
      code,
      temperature,
      eclipseData,
    })
  }

  const handlMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    ;(async () => {
      setFetching(true)
      const weatherStatus = await getWeatherData(pos)
      setPopupInfo(weatherStatus)
      setFetching(false)
    })()
  },[pos])

  return (
    <div className='popup' ref={getRef}>
      {
        fetching ? (
          <IconLoader />
        ) : (
          <>
            {
              info && (
                <div>
                  <div className='popup__header'>
                    <div className='popup__title'>{`${info.city} | ${info.country}`}</div>
                  </div>
                  <div className='popup__main'>
                    <div className='popup__row'>
                      <div className='popup__pos'>
                        {`${latitudeToString(pos.lat.toFixed(2))}, ${longitudeToString(pos.lng.toFixed(2))}`}
                      </div>
                      <div className='popup__weather'>
                        <IconWeather code={info.code} />
                        <div className='popup__temperature'>{info.temperature}</div>
                      </div>
                      {
                        info.eclipseData.isEclipse && (
                          <>
                            <Button onClick={handlMenuClick}>
                              <AssignmentIcon />
                            </Button>
                            <Menu
                              anchorEl={anchorEl}
                              keepMounted
                              open={Boolean(anchorEl)}
                              onClose={handleMenuClose}
                            >
                              <EclipseInfo data={info.eclipseData} />
                            </Menu>
                          </>
                        )
                      }
                    </div>
                    {
                      info.eclipseData.isEclipse ? (
                        <>
                          時間：{info.eclipseData.duration.toFixed(2)}秒<br/>
                          覆蓋率：{info.eclipseData.coverage.toFixed(2)}<br/>
                          最大食分：{info.eclipseData.maxmag.toFixed(2)}
                          <Timer pos={pos} elements={elements} />
                        </>
                      ):( <>無日食資料</>)
                    }
                  </div>
                </div>
              )
            }
          </>
        )
      }
    </div>
  )
}

Popup.propTypes = {
}

export default Popup
