import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StatusContext, ProductContext } from '../pages/KexinIndex'

// FontAwesome
import {
  faSun,
  faCloudSun,
  faCloud,
  faCloudShowersHeavy,
  faCloudSunRain,
} from '@fortawesome/free-solid-svg-icons'

// Styles
import styles from '../styles/kexinWeather.module.css'

function KexinWeather(props) {
    const { selectCounty } = props
  const [weather, setWeather] = useState([])
  const [time, setTime] = useState(1)
  const { mapInteraction, setMapInteraction } = useContext(StatusContext)
  const { myProduct, setMyProduct } = useContext(ProductContext)

  // get weather data
  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-DC624EB8-BAF7-4C0D-94AE-FE5108A7450B&format=JSON&elementName=MinT,MaxT,PoP12h,Wx'
      )
      //   console.log('weather data:', response.data.records.locations[0].location)
      return response.data.records.locations[0].location
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getWeatherData()
        setWeather(weatherData)
        console.log('catch data')
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  console.log(weather)
  //   const time = weather[0].weatherElement[0].time[1].startTime.slice(11, 13)
  //   console.log(time)

  //   console.log(weather.length)
  //   console.log(weather[0].locationName)
  //   console.log(weather[0].weatherElement[0].time[0].startTime.slice(11, 13))

  function seticon(v) {
    if (v === '01') {
      return <FontAwesomeIcon icon={faSun} />
    } else if (v === '02' || v === '03') {
      return <FontAwesomeIcon icon={faCloudSun} />
    } else if (v === '04' || v === '05' || v === '06' || v === '07') {
      return <FontAwesomeIcon icon={faCloud} />
    } else if (
      v === '08' ||
      v === '09' ||
      v === '10' ||
      v === '11' ||
      v === '12' ||
      v === '13' ||
      v === '14' ||
      v === '15' ||
      v === '16' ||
      v === '17' ||
      v === '18'
    ) {
      return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    } else if (v === '19') {
      return <FontAwesomeIcon icon={faCloudSunRain} />
    } else if (v === '20' || v === '21' || v === '22') {
      return <FontAwesomeIcon icon={faCloudShowersHeavy} />
    } else {
      return <FontAwesomeIcon icon={faCloud} />
    }
    
  }

  console.log(
    weather
      .filter((el, i) => {
        return el.locationName === myProduct.geo_location_sid
      })
      .map((el, i) => {
        return el.weatherElement[1].time[time].elementValue[1].value
      })[0]
  )

  console.log('icon', seticon('01'))

  return (
    <>
      <div className={styles.weatherBox}>
        <div className={`d-flex ${styles.weatherUp} justify-content-between`}>
          <div>
            <div className={styles.icon}>
              {seticon(
                weather.length > 1 &&
                  weather
                    .filter((el, i) => {
                      return el.locationName === myProduct.geo_location_sid
                    })
                    .map((el, i) => {
                      console.log(
                        el.weatherElement[1].time[1].elementValue[1].value
                      )
                      return el.weatherElement[1].time[time].elementValue[1].value
                    })[0]
              )}
            </div>

            <h2>26°C</h2>
          </div>
          <div className="d-flex flex-column justify-content-between">
            <h3>{myProduct.geo_location_sid}</h3>
            <div>
              <p className={`${styles.weatherStatus} d-flex justify-content-end`}>
                {weather.length > 1 &&
                  weather
                    .filter((el, i) => {
                      return el.locationName === myProduct.geo_location_sid
                    })
                    .map((el, i) => {
                      console.log(el.weatherElement[1].time[1])
                      return el.weatherElement[2].time[time].elementValue[0].value
                    })}
                °C -{' '}
                {weather.length > 1 &&
                  weather
                    .filter((el, i) => {
                      return el.locationName === myProduct.geo_location_sid
                    })
                    .map((el, i) => {
                      console.log(el.weatherElement[1].time[1])
                      return el.weatherElement[3].time[time].elementValue[0].value
                    })}{' '}
                °C
              </p>
              <div className={`d-flex justify-content-end `}>
                <p className={`${styles.weatherText}`}>
                  {weather.length > 1 &&
                    weather
                      .filter((el, i) => {
                        return el.locationName === myProduct.geo_location_sid
                      })
                      .map((el, i) => {
                        console.log(el.weatherElement[1].time[1])
                        return el.weatherElement[1].time[time].elementValue[0]
                          .value
                      })}
                </p>
                <p className={`${styles.weatherH}`}>
                  {weather.length > 1 &&
                    weather
                      .filter((el, i) => {
                        return el.locationName === myProduct.geo_location_sid
                      })
                      .map((el, i) => {
                        console.log(el.weatherElement[1].time[1])
                        return el.weatherElement[0].time[time].elementValue[0]
                          .value
                      })}
                  %
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`d-flex ${styles.weatherDown}`}>
          <button className="flex-fill">現在</button>
          <button className="flex-fill" 
          onClick={()=>{setTime(2)}}>
            {weather.length > 1 &&
            weather[0].weatherElement[0].time[1].startTime.slice(11, 13) ===
              '18'
              ? '今晚'
              : '明早'}
          </button>
          <button className="flex-fill"
          onClick={()=>{setTime(3)}}>
            {weather.length > 1 &&
            weather[0].weatherElement[0].time[1].startTime.slice(11, 13) ===
              '18'
              ? '明早'
              : '明晚'}
          </button>
        </div>
      </div>
    </>
  )
}

export default KexinWeather
