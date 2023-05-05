import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { addDays } from 'date-fns'
import { format } from 'date-fns'

// components
import styles from '../styles/DavisTrailsFilter.module.css'
import DavisFilterComLeft from '../components/DavisTrailsFilter/DavisFilterComLeft'
import DavisFilterComRight from '../components/DavisTrailsFilter/DavisFilterComRight'
import DavisFilterMoTop from '../components/DavisTrailsFilter/DavisFilterMoTop'
import DavisFilterMoBo from '../components/DavisTrailsFilter/DavisFilterMoBo'

// search context
import { SearchContext } from '../contexts/SearchContext'
import { LoginContext } from '../App'

// api
import { TRAILS_FILTER_DATA } from '../connections/api-config'

function DavisTrailsFilter() {
  const location = useLocation()
  const usp = new URLSearchParams(location.search)

  const [keywordpr, setKeywordpr] = useState('')

  const [startdatepr, setStartdatepr] = useState('')

  const [enddatepr, setEnddatepr] = useState(format(new Date(), 'yyyy-MM-dd'))

  const [maxpeplepr, setMaxpeplepr] = useState()

  // trails_data
  const [data, setData] = useState({
    page: 0,
    rows: [],
    perPage: 0,
    totalPages: 0,
    totalRows: 0,
  })

  const { search } = useContext(SearchContext)
  const { setMapInteraction } = useContext(LoginContext)

  useEffect(() => {
    setMapInteraction(0)
    // console.log('initSearch render')

    // console.log('search:', search, search.location)
    // console.log('before startdatepr:', startdatepr)
    setKeywordpr(search.location)
    setStartdatepr(search.startDate)
    // console.log('startdatepr:', startdatepr)
    setEnddatepr(search.endDate)
  }, [search])

  const filterByKeyword = (rows_data, keywordpr, startdatepr, enddatepr) => {
    return rows_data.filter((v, i) => {
      const keywordMatch =
        v.trail_name.includes(keywordpr) ||
        v.difficulty_describ.includes(keywordpr) ||
        v.geo_location_sid.includes(keywordpr) ||
        v.geo_location_town_sid.includes(keywordpr)
      const dateRangeMatch =
        Date.parse(v.batch_start) > Date.parse(startdatepr) &&
        Date.parse(v.batch_end) < Date.parse(enddatepr)

      return keywordMatch && dateRangeMatch
    })
  }

  const getListData = async (page = 1) => {
    const response = await axios.get(TRAILS_FILTER_DATA, {
      params: {
        page,
      },
    })
    setData(response.data)
  }

  useEffect(() => {
    // console.log('useEffect--')
    getListData(+usp.get('page'))

    return () => {
      // console.log('unmount AbList--')
    }
  }, [location.search])

  return (
    <>
      <main>
        {/* computer size */}
        <div className={`d-none d-lg-flex flex-row ${styles.main_all}`}>
          {/*computer size left_card  */}
          {/* FIXME: 日期選單 */}
          <DavisFilterComLeft
            data={data}
            keywordpr={keywordpr}
            startdatepr={startdatepr}
            enddatepr={enddatepr}
            setKeywordpr={setKeywordpr}
            setStartdatepr={setStartdatepr}
            setEnddatepr={setEnddatepr}
            setMaxpeplepr={setMaxpeplepr}
          />

          {/*computer size right_card TODO: */}
          <DavisFilterComRight
            data={data}
            keywordpr={keywordpr}
            startdatepr={startdatepr}
            enddatepr={enddatepr}
            maxpeplepr={maxpeplepr}
            filterByKeyword={filterByKeyword}
          />
        </div>

        {/* mobile_phone top FIXME: */}
        <div className={`d-lg-none flex-column m-2 ${styles.phone_container}`}>
          {/* mobile_phone top card */}
          <DavisFilterMoTop
            data={data}
            keywordpr={keywordpr}
            startdatepr={startdatepr}
            setKeywordpr={setKeywordpr}
            setStartdatepr={setStartdatepr}
            setEnddatepr={setEnddatepr}
            setMaxpeplepr={setMaxpeplepr}
          />

          {/* mobile_phone bottom  */}
          <DavisFilterMoBo
            data={data}
            keywordpr={keywordpr}
            startdatepr={startdatepr}
            enddatepr={enddatepr}
            maxpeplepr={maxpeplepr}
            filterByKeyword={filterByKeyword}
          />
        </div>
      </main>
    </>
  )
}

export default DavisTrailsFilter
