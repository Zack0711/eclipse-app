import React, { useState, useRef, useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from "prop-types"
import classNames from "classnames"

import Button from '@material-ui/core/Button'
import ListIcon from '@material-ui/icons/List'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import Popup from './popup'
import Panel from './panel'
import Timer from './timer'

import GMap from '../../utils/google-map';
import {
  pathCoordsB1,
  pathCoordsB2,
  pathCoordsR1,
} from '../../utils/settings'

import eclipseSettings from '../../data'

import { cities } from '../../utils/cities'

import { 
  latitudeToString,
  longitudeToString,
  loc_circ,
} from '../../utils/eclipse'

import './index.styl'

let map = null
const DEFAULT_ZOOM = 6
const locationList = [
  {
    title: '嘉義鐵道藝術村',
    position: {lat: 23.4811899, lng: 120.4419393},
    index: '467480',
  }
]

const Map = props => {
  const mapEl = useRef(null)
  const panelEl = useRef(null)
  const popupEl = useRef(null)

  const [ panelShown, setPanelShown] = useState(false)
  const [ activePos, setActivePos] = useState(locationList[0].position)
  const [ cityData, setCityData] = useState([])
  const [ settings, setSettings] = useState(eclipseSettings[0])
  const [ isMapReady, setIsMapReady] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const toggleDirectionPanel = async open => {
    if(open) {
      await map.showDirection(activePos)
    } else{
      map.clearMarker()
      map.setDirections({routes: []})
      map.moveMap(activePos)
    }
    setPanelShown(open)
  }

  const changeActivePos = pos => {
    setActivePos(pos)
    map.movePopup(pos.lat, pos.lng)
    map.moveMap(pos)    
  }

  const mapInitialize = () => {
    if(process.browser) window.IS_MAP_READY = true
    map.initMap()
    map.moveMap(activePos)
    map.setMapClick( pos => { changeActivePos(pos) })

    drawMapPath()
    countCityData()
  }

  const drawMapPath = () => {
    if(map) {
      map.clearPath()
      map.drawPath({
        path: settings.pathCoordsB1,
        geodesic: true,
        strokeColor: '#3300FF',
        strokeOpacity: 0.65,
        strokeWeight: 2    
      })

      map.drawPath({
        path: settings.pathCoordsB2,
        geodesic: true,
        strokeColor: '#3300FF',
        strokeOpacity: 0.65,
        strokeWeight: 2
      })

      map.drawPath({
        path: settings.pathCoordsR1,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 0.65,
        strokeWeight: 2
      })      
    }
  }

  const pickUpSettings = data => {
    setAnchorEl(null)
    setSettings(data)
  }

  const countCityData = () => {
    const newCityData = cities.map( city => ({
      ...city,
      lat: parseFloat(city.lat),
      lng: parseFloat(city.lng),
      eclipseData: loc_circ(parseFloat(city.lat), parseFloat(city.lng), settings.elements),
    })).sort( function(a,b){
      return (a.eclipseData.duration !== b.eclipseData.duration)
        ? b.eclipseData.duration - a.eclipseData.duration
        : b.eclipseData.coverage - a.eclipseData.coverage
    })

    setCityData(newCityData)
  }

  const handlMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  useEffect( () => {
    ;(async () => {

      let dT = Infinity
      let selectedSettings = null
      const current = new Date().getTime()

      eclipseSettings.forEach(settings => {
        const dTime = settings.date.getTime() - current
        if (dTime >= 0 && dTime < dT) {
          dT = dTime
          selectedSettings = settings
        }
      })

      pickUpSettings(selectedSettings)

      if(!map){
        map = new GMap({
          map: mapEl.current,
          panel: panelEl.current,
          popup: popupEl.current,        
        })
      }

      if(process.browser){
        if(window.IS_MAP_READY){
          setIsMapReady(true)
        }else{
          window.initMap = () => setIsMapReady(true)
        }
      }
    })()
  }, [])

  useEffect( () => {
    if(cityData.length > 0){

      //console.log(settings.pathCoordsR1[Math.floor(settings.pathCoordsR1.length/2)])

      const newActivePos = cityData[0].eclipseData.isEclipse && cityData[0].eclipseData.duration
        ? cityData[0] : settings.pathCoordsR1[Math.floor(settings.pathCoordsR1.length/2)]

      changeActivePos(newActivePos)
      cityData.forEach( d => {
        map.addMarker({
          position: { lat: d.lat, lng: d.lng},
          title: d.name
        })
      })
    }
  }, [cityData])

  useEffect( () => {
    if(process.browser && window.IS_MAP_READY){
      drawMapPath()
      countCityData()
    }
  }, [settings])

  useEffect( () => {
    if(isMapReady) mapInitialize()
  }, [isMapReady])

  return (
    <div className='map'>
      <div className='map__wrap'>
        <Panel 
          className={classNames('map__panel', {'map__panel--opened': panelShown})}
          closePanel={() => toggleDirectionPanel(false)}
          getRef={panelEl}
        />
        <div className="map__container">
          <div className="map__instance" ref={mapEl}>
          </div>
          <div className="map__data-switch">
            <div className="map__data-switch__title">
              <Button aria-haspopup="true" onClick={handlMenuClick}>
                已選取的日食資料：{ settings.name } <ListIcon />
              </Button>
            </div>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {
                eclipseSettings.map( d => (
                  <MenuItem 
                    onClick={() => pickUpSettings(d)}
                    className={
                      classNames('map__data-switch__item', { 'map__data-switch__item--active': d.name === settings.name })
                    }
                  >
                    { d.name }
                  </MenuItem>
                ))
              }
            </Menu>
         </div>
        </div>
        <div className="map__cities">
          <div className="map__city-item" >
            <div className="map__city-item-name">城市</div>
            <div className="map__city-item-duration">持續時間</div>
            <div className="map__city-item-coverage">覆蓋率</div>              
            <div className="map__city-item-maxmag">最大食分</div>              
          </div>
          {
            cityData.filter(city => city.eclipseData.isEclipse).map( city => (
              <div 
                className="map__city-item" 
                key={city.name}
                onClick={ () => changeActivePos(city) }
              >
                <div className="map__city-item-name">{city.name}</div>
                <div className="map__city-item-duration">{city.eclipseData.duration.toFixed(2)}</div>
                <div className="map__city-item-coverage">{city.eclipseData.coverage.toFixed(2)}</div>              
                <div className="map__city-item-maxmag">{city.eclipseData.maxmag.toFixed(2)}</div>              
              </div>
            ))
          }
        </div>
      </div>
      <Popup 
        pos={activePos}
        getRef={popupEl}
        elements = {settings.elements}
        openDirection={() => toggleDirectionPanel(true)}
      />
    </div>
  )
}

Map.propTypes = {
}

export default Map
