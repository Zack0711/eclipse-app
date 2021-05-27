import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import classNames from 'classnames'

import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'

import { withStyles } from '@material-ui/core/styles'

import { loc_circ } from '../../../utils/eclipse'
import { eclipseType } from '../../../utils/i18n'

import './index.styl'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    width: '100%',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    color: '#666',
    backgroundColor: '#eee',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    position: 'sticky',
    top: 0,
    zIndex: 100,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: '0',
  },
}))(MuiAccordionDetails)

const SolarListMenu = ({ data = [], pickUpSettings, selectedSettings, closeMenu }) => {

  const [expanded, setExpanded] = useState(false)

  const handleChange = (solarList) => (event, newExpanded) => {
    setExpanded(newExpanded ? solarList : false)
  }

  useEffect(() => {
    if (data.length > 0) {
      let dT = Infinity
      let selectedList = null
      let selectedSettings = null

      const current = new Date().getTime()

      for(let i = 0; i < data.length; i += 1) {
        const { year } = data[i]
        if (new Date(`${year + 20}`).getTime() > current) {
          data[i].data.forEach(settings => {
            if (!selectedSettings) {
              const { lat, lng} = settings.data.firstRed[0] ? settings.data.firstRed[0][0] : settings.data.firstBlue[0]
              const { mid, c3, c4 } = loc_circ(parseFloat(lat), parseFloat(lng), settings.data.elements)

              if (c3.date) {
                const c3DateTime = c3.date ? new Date(c3.date).getTime() : 0
                const dTime = c3DateTime - current
                if (dTime >= 0 && dTime < dT) {
                  dT = dTime
                  selectedSettings = settings
                }
              }              
            }
          })

          if (selectedSettings) {
            selectedList = data[i]
            break
          }
        }
      }

      setExpanded(selectedList.year)
      pickUpSettings(selectedSettings)
    }

  }, [data])

  return (
    <div className='solar-list-menu'>
      <div className='solar-list-menu__title'>
        <h3>選擇想要觀看的日食資料</h3>
        <IconButton onClick={closeMenu}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className='solar-list-menu__wrap'>
        {
          data.map(solarList => (
            <Accordion 
              square 
              expanded={expanded === solarList.year}
              onChange={handleChange(solarList.year)}
              key={solarList.year}
            >
              <AccordionSummary>
                {solarList.year} - {solarList.year + 19}
                {` ( 全食：${solarList.statistics['Total']}, 環食：${solarList.statistics['Annular']}, 全環食：${solarList.statistics['Hybrid']})`}
              </AccordionSummary>
              <AccordionDetails>
                <div className="solar-list-menu__detail-wrap">
                  <div className="solar-list-menu__thumb">
                    {
                      solarList.data.map((d, i) => (
                        <div 
                          onClick={() => {
                            pickUpSettings(d)
                            closeMenu()
                          }}
                          className={classNames(
                            'solar-list-menu__list-item',
                            {
                              'solar-list-menu__list-item--selected': selectedSettings && selectedSettings.date === d.date
                            }
                          )}
                          key={d.date}
                        >
                          <div className="solar-list-menu__list-item__title">{d.date}, {eclipseType[d.type]}</div>
                          <div className="solar-list-menu__list-item__status"><CheckIcon /></div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </div>
    </div>
  )
}

SolarListMenu.propTypes = {
}

export default SolarListMenu
