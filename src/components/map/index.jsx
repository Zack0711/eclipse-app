import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

import GMap from '../../utils/google-map';

let map = null
const DEFAULT_ZOOM = 8
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

  useEffect( () => {
    if(!map){
      map = new GMap({
        map: mapEl.current,
        panel: panelEl.current,
        popup: panelEl.current,        
      })

    }

    if(window.IS_MAP_READY){
      map.initMap()
    }else{
      window.initMap = () => {
        console.log('initMap')
        window.IS_MAP_READY = true
        map.initMap()
        map.moveMap(locationList[0].position);
        //map.zoomMap(DEFAULT_ZOOM);
      }
    }
    console.log('XD', window, window.IS_MAP_READY)
  }, [])

  return (
    <div>
      <div className="map-container" ref={mapEl} style={{width: '100vw', height: '100vh'}}></div>
      <div className="panel" ref={panelEl}></div>
      <div className="popup" ref={panelEl}></div>
    </div>
  )
}

Map.propTypes = {
}

export default Map
