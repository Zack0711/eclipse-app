const fetch = require('node-fetch')
const cheerio = require('cheerio')
const vm = require('vm')

const mkdirp = require('mkdirp')
const fs = require('fs')

const TEXT_ANCHOR = 'Insert Eclipse Besselian Elements below'

const ELEMENTS_START_ANCHOR = '//*** #0U - Input Besselian Elements here'
const ELEMENTS_END_ANCHOR = '/* End Besselian Elements */'

const FIRST_BLUE_ANCHOR = '// First BLUE'
const SECOND_BLUE_ANCHOR = '// Second BLUE'
const FIRST_RED_ANCHOR = '// First RED'
const POLY_END_ANCHOR = 'map.addOverlay'
const POLY_CONTENT_ANCHOR = 'new GLatLng('

const BASE_URL = 'https://eclipse.gsfc.nasa.gov/'

const parseEclipseInfo = async (string) => {
  const data = {
    firstBlue: [],
    secondBlue: [],
    firstRed: [],
    elements: [],
  }

  const lineCount = {
    firstBlue: 0,
    secondBlue: 0,
    firstRed: 0,    
  }

  let lineKey = null

  const setLineKey = key =>{
    lineKey = key
    if (!isNaN(lineCount[key])) lineCount[key] += 1
  }

  string.split(/[\n\r|\n|\r\n]/).forEach( d => {

    if (d.includes(ELEMENTS_START_ANCHOR)) setLineKey('elements')
    if (d.includes(FIRST_BLUE_ANCHOR)) setLineKey('firstBlue')
    if (d.includes(SECOND_BLUE_ANCHOR)) setLineKey('secondBlue')
    if (d.includes(FIRST_RED_ANCHOR)) setLineKey('firstRed')

    if (d.includes(POLY_END_ANCHOR) || d.includes(ELEMENTS_END_ANCHOR)) lineKey = null

    if(!/^\//.test(d)) {
      if (lineKey) {
        if (d.includes(POLY_CONTENT_ANCHOR)) {
          const parse = d.replace(POLY_CONTENT_ANCHOR, '').replace('),','').replace(')],','')
                          .split(',').map( s => Number(s))
          const count = lineCount[lineKey] - 1
          if (!data[lineKey][count]) data[lineKey][count] = []
          data[lineKey][count].push({ lat: parse[0], lng: parse[1]})
        }

        if (lineKey === 'elements' && !/\);/.test(d) && d.length > 0) {
          const parse = d.trim().replace(/,$/, '').split(',').map( s => Number(s))
          data.elements = data.elements.concat(parse)
        }
      }

    }
  })
  return data
}

const parseHtmlPage = async url => {
  const htmlText = await fetch(url).then(res => res.text())
  const setting = {
      normalizeWhitespace: true,
      recognizeCDATA: true,
  }
  return cheerio.load(htmlText, setting)
}

const parseSingleSolarHtml =  url => new Promise( async (resolve, reject) => {
  const $ = await parseHtmlPage(url)

  $('script:not([src$=".js"])').each( async (i, elem) => {
    const htmlString = $(elem).html()
    if(htmlString.includes(TEXT_ANCHOR)) {
      const data = await parseEclipseInfo(htmlString)
      resolve(data)
    }
  })
})

const parseSolarListHtml = async () => {
  await mkdirp.sync(__dirname + '/data/2021')

  const url = 'https://eclipse.gsfc.nasa.gov/SEgoogle/SEgoogle2021.html'
  const $ = await parseHtmlPage(url)

  const solarList = []
  const solarElementsList = $('table.datatab .theading td').parent().parent().next('tbody').find('tr')

  for (let i = 0; i < solarElementsList.length; i += 1) {
    const elem = $(solarElementsList[i])

    const googlePageUrl = elem.find('td a[target="GOOGLE"]').attr('href').replace(/\.\.\//, '')

    const date = elem.find('td a[target="GLOBE"]').text().trim()
    const fileName = date.split(' ').join('-')
    const type = elem.find('td a[target="GOOGLE"]').text().trim()
    const url = `${BASE_URL}${googlePageUrl}`

    console.log(`start to parse: ${googlePageUrl}`)
    const data = await parseSingleSolarHtml(url)
    console.log(`finish parse`)

    const solar = {
      date,
      type,
      url,
      fileName,
      data,
    }

    fs.writeFile(
      `${__dirname}/data/2021/${fileName}.js`,
      `
        const solarData = ${JSON.stringify(solar)};
        export default solarData;
      `,
      (err, file) => {
        if (err) console.log(err)
      }
    )

    solarList.push(solar)
  }

  fs.writeFile(
    `${__dirname}/data/2021/index.js`,
    `
      ${
        solarList.map( (d,i) => `
          import solar_${i} from './${d.fileName}';
        `).join('')
      }
      export default [
        ${solarList.map( (d,i) => `solar_${i},`).join('')}
      ];
    `,
    (err, file) => err && console.log(err)
  )
}

//parseSingleSolarHtml('https://eclipse.gsfc.nasa.gov/SEgoogle/SEgoogle2001/SE2021Jun10Agoogle.html')
parseSolarListHtml()