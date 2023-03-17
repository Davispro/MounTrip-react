import { createContext, useEffect, useState, useRef } from 'react'
import { useLocation } from "react-router-dom"
import * as d3 from 'd3'
import NavbarIndex from '../layouts/NavbarIndex'
import IndexStyles from '../styles/kexinIndex.module.css'
import useRWD from '../contexts/useRWD'
import KexinIndexProducts from '../components/KexinIndexProducts'
import KexinIndexProductsDetail from '../components/KexinIndexProductsDetail'

// context
export const StatusContext = createContext({})

function KexinIndex() {
  // map basic setting
  const ZOOM_THRESHOLD = [1, 7]
  const OVERLAY_MULTIPLIER = 10
  const OVERLAY_OFFSET = OVERLAY_MULTIPLIER / 2 - 0.5
  const ZOOM_IN_STEP = 2
  const ZOOM_OUT_STEP = 1 / ZOOM_IN_STEP
  const HOVER_COLOR = 'rgba(10, 140, 45, 0.4)'
  const CLICK_COLOR = 'rgba(10, 140, 45, 0.6)'

  var data = require('../mapdata/tw_new.json')
  var transformData = require('../mapdata/MapTransform.json')

  const mapRef = useRef(null)
  // const { mapInteraction, setMapInteraction } = useContext(KexinIndexStatus)
  const [mapInteraction, setMapInteraction] = useState(0)
  const [selectCounty, setSelectCounty] = useState('')

  // const location = useLocation()
  // console.log("1--", location.search)
  // const usp = new URLSearchParams(location.search)

  // // search county method
  // const getCountyData = async (county) => {
  //   const response = await axios.get(SELECT_COUNTY, {
  //     params: {
  //       county,
  //     },
  //   });
  //   // response.data 會依據回應的檔頭作解析, JSON
  //   console.log('123',response.data)
  //   // setData(response.data);
  // }

  // RWD
  const device = useRWD()

  useEffect(() => {
    const WIDTH = window.innerWidth
    const HEIGHT = window.innerHeight
    console.log(window.innerWidth, window.innerHeight)
    d3.select('#map').remove()

    if (data) {
      const zoom = d3.zoom().scaleExtent(ZOOM_THRESHOLD).on('zoom', zoomHandler)

      function zoomHandler() {
        g.attr('transform', d3.zoomTransform(this))
        console.log(d3.zoomTransform(this))
      }

      const svg = d3
        .select(mapRef.current)
        .append('svg')
        .attr('id', 'map')
        .attr('width', '100%')
        .attr('height', '100%')

      const g = svg.call(zoom).append('g').attr('id', 'mapZoom')

      g.append('rect')
        .attr('width', WIDTH * OVERLAY_MULTIPLIER)
        .attr('height', HEIGHT * OVERLAY_MULTIPLIER)
        .attr(
          'transform',
          `translate(-${WIDTH * OVERLAY_OFFSET},-${HEIGHT * OVERLAY_OFFSET})`
        )
        .style('fill', 'none')
        .style('pointer-events', 'all')

      if (device === 'mobile') {
        // Create a new projection
        const projection = d3
          .geoMercator()
          .center([121, 23.7])
          .scale(8500)
          .translate([WIDTH / 2, HEIGHT / 2])

        // Create a path generator
        const path = d3.geoPath(projection)

        // Draw the map
        g.selectAll('path')
          .data(data.features)
          .enter()
          .append('path')
          .attr('d', path)
          .style('fill', 'rgba(10, 140, 45, 0.2)')
          // .style('fill', function (d) {
          //   return d.properties.fill // replace with your own data value accessor
          // })
          .style('stroke', '#FFFFF2')
          .style('stroke-width', 0.5)
          .style('cursor', 'pointer')
          .on('mouseover', mouseOverHandler)
          .on('mouseout', mouseOutHandler)
          .on('click', clickHandler)
      } else {
        // Create a new projection
        const projection = d3
          .geoMercator()
          .center([121, 23.58])
          .scale(10000)
          .translate([WIDTH / 2, HEIGHT / 2])

        // Create a path generator
        const path = d3.geoPath(projection)

        // Draw the map
        g.selectAll('path')
          .data(data.features)
          .enter()
          .append('path')
          .attr('d', path)
          .style('fill', 'rgba(10, 140, 45, 0.2)')
          // .style('fill', function (d) {
          //   return d.properties.fill // replace with your own data value accessor
          // })
          .style('stroke', '#FFFFF2')
          .style('stroke-width', 0.5)
          .style('cursor', 'pointer')
          .on('mouseover', mouseOverHandler)
          .on('mouseout', mouseOutHandler)
          .on('click', clickHandler)
      }
    }
  }, [device])

  const mouseOverHandler = function (d, i) {
    if (d3.select(this).style('fill') != CLICK_COLOR) {
      d3.select(this).style('fill', HOVER_COLOR)
    }
  }

  const mouseOutHandler = function (d, i) {
    if (d3.select(this).style('fill') != CLICK_COLOR) {
      d3.select(this).style('fill', 'rgba(10, 140, 45, 0.2)')
    }
  }

  const clickHandler = function (d, i, e) {
    d3.select(mapRef.current)
      .selectAll('path')
      .style('fill', 'rgba(10, 140, 45, 0.2)')
    // console.log(i.properties.COUNTYNAME)
    d3.select(this).style('fill', CLICK_COLOR)

    const county = i.properties.COUNTYNAME

    const svg = document.querySelector('#mapZoom')
    d3.select('#mapZoom')
      .transition()
      .duration(750)
      .attr('transform', transformData[county].transform1)
    setMapInteraction(1)

    setSelectCounty(county)
    // getCountyData(county)

  }

  // console.log(selectCounty);
  // console.log('outside', mapInteraction)
  if (mapInteraction === 2) {
    d3.select('#mapZoom')
      .transition()
      .duration(750)
      .attr('transform', transformData[selectCounty].transform2)
  }

  const clickReset = function (e) {
    console.log(window.innerWidth, window.innerHeight)
    if (e.target.style.fill === 'none' && mapInteraction === 1) {
      console.log('hiclick')
      console.log(d3.select('#mapZoom'))
      d3.select('#mapZoom')
        .transition()
        .duration(750)
        .attr('transform', 'translate(0,0) scale(1)')

      d3.select(mapRef.current)
        .selectAll('path')
        .transition()
        .duration(750)
        .style('fill', 'rgba(10, 140, 45, 0.2)')

      setMapInteraction(0)
    } else if (e.target.style.fill === 'none' && mapInteraction === 2) {
      d3.select('#mapZoom')
        .transition()
        .duration(750)
        .attr(
          'transform',
          transformData[selectCounty].transform1
        )
      setMapInteraction(1)
    }
  }

  return (
    <>
      <StatusContext.Provider value={{ mapInteraction, setMapInteraction }}>
        <NavbarIndex />
        <div
          ref={mapRef}
          id={`${IndexStyles['info']}`}
          onClick={clickReset}
        ></div>
        <KexinIndexProducts selectCounty={selectCounty} />
        <KexinIndexProductsDetail selectCounty={selectCounty} />
      </StatusContext.Provider>
    </>
  )
}

export default KexinIndex
