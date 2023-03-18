import axios from 'axios'
import React from 'react'
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

// api
import { TRAILS_FILTER_DATA } from '../connections/api-config'

function DavisTrailsFilter() {
  const location = useLocation()
  const usp = new URLSearchParams(location.search)

  const [keywordpr, setKeywordpr] = useState('')

  const [startdatepr, setStartdatepr] = useState(
    format(new Date(1), 'yyyy-MM-dd')
  )

  const [enddatepr, setEnddatepr] = useState(format(new Date(), 'yyyy-MM-dd'))

  const [maxpeplepr, setMaxpeplepr] = useState()

  // console.log(Date.parse(startdatepr))
  // console.log(Date.parse(enddatepr))
  // trails_data
  const [data, setData] = useState({
    page: 0,
    rows: [],
    perPage: 0,
    totalPages: 0,
    totalRows: 0,
  })

  // (v.batch_start > startdatepr && v.batch_end < enddatepr)

  // return rows_data.filter((v, i) => {
  //   if (v.batch_start > startdatepr && v.batch_end < enddatepr) {
  //     return (
  //       v.trail_name.includes(keywordpr) ||
  //       v.geo_location_sid.includes(keywordpr) ||
  //       v.geo_location_town_sid.includes(keywordpr)
  //     )
  //   }
  // })

  // FIXME:
  // let rows_data = data.rows

  const filterByKeyword = (rows_data, keywordpr, startdatepr, enddatepr) => {
    // console.log(startdatepr)
    return rows_data.filter((v, i) => {
      const keywordMatch =
        v.trail_name.includes(keywordpr) ||
        v.geo_location_sid.includes(keywordpr) ||
        v.geo_location_town_sid.includes(keywordpr)
      const dateRangeMatch =
        Date.parse(v.batch_start) > Date.parse(startdatepr) &&
        Date.parse(v.batch_end) < Date.parse(enddatepr)
      // console.log(dateRangeMatch)
      // console.log(Date.parse(v.batch_start))
      const peopleCount = v.batch_max >= maxpeplepr && v.batch_min <= maxpeplepr

      return keywordMatch && dateRangeMatch && peopleCount
    })
  }

  const getListData = async (page = 1) => {
    const response = await axios.get(TRAILS_FILTER_DATA, {
      params: {
        page,
      },
    })
    // console.log(response.data)
    setData(response.data)
  }

  // console.log(data.rows)

  // const filterFromBatch = (rows_data) => {
  //   if (!Array.isArray(rows_data)) {
  //     return []
  //   }
  //   return rows_data.slice(0, 1)
  // }

  // console.log('filterFromBatch', filterFromBatch(rows_data))

  useEffect(() => {
    // 設定功能
    console.log('useEffect--')
    getListData(+usp.get('page'))

    return () => {
      // 解除功能
      console.log('unmount AbList--')
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
          <DavisFilterMoTop />

          {/* mobile_phone bottom  */}
          <DavisFilterMoBo data={data} />
          {/*  phone_card*n */}
          {/* <div className={`d-flex flex-column ${styles.phone_card}`}>
            <div className={`${styles.text_re}`}>
              <div className={`${styles.trails_img_wrap}`}>
                <img
                  className={`w-100 ${styles.img_style}`}
                  src="./imgs/Davis/5-1.jpg"
                  alt=""
                />
              </div>
              <div className={`${styles.img_text}`}>
                <p className={`${styles.rate}`}>4.5</p>
                <div className={`d-flex flex-row ${styles.p_wrap}`}>
                  <p className={`${styles.difficulty}`}>難度</p>
                  <p className={`${styles.difficulty_en}`}>EASY</p>
                </div>
              </div>
            </div>
            <div className="w-100 d-flex flex-row justify-content-between">
              <div>
                <h6 className={`mb-0 ${styles.phone_h6_sub_t}`}>
                  草嶺古道｜探索新北一日遊
                </h6>
                <p className={`mb-0 ${styles.phone_p_tag}`}>新北市雙溪區</p>
              </div>
              <div>
                <p className={`mb-0 ${styles.phone_p_ntd}`}>NTD</p>
                <h6 className={`mb-0 ${styles.phone_h6_price}`}>1300</h6>
              </div>
            </div>
          </div> */}

          {/* mobile_phone bottom > pagination */}
          {/* <div
            className={`page-bar col d-flex align-self-center ${styles.details_pagination}`}
          >
            <nav
              className={`${styles.pagination_nav}`}
              aria-label=" Page navigation example"
            >
              <ul className="pagination ">
                <li className={`page-item ${styles.li_margin}`}>
                  <Link
                    className={`page-link ${styles.a_decoration}`}
                    aria-label="Previous"
                    to="/"
                  >
                    {' '}
                    <span aria-hidden="true">&laquo;</span>
                  </Link>
                </li>
                <li className={`page-item ${styles.li_margin}`}>
                  <Link
                    className={`page-link fw-bold ${styles.a_decoration}`}
                    aria-label="Previous"
                    to="/"
                  >
                    1
                  </Link>
                </li>
                <li className={`page-item ${styles.li_margin}`}>
                  <Link
                    className={`page-link fw-bold ${styles.a_decoration}`}
                    aria-label="Previous"
                    to="/"
                  >
                    2
                  </Link>
                </li>
                <li className={`page-item ${styles.li_margin}`}>
                  <span className={`page-link fw-bold ${styles.a_decoration}`}>
                    {' '}
                    ...{' '}
                  </span>
                </li>
                <li className={`page-item ${styles.li_margin}`}>
                  <Link
                    className={`page-link fw-bold ${styles.a_decoration}`}
                    aria-label="Previous"
                    to="/"
                  >
                    9
                  </Link>
                </li>
                <li className={`page-item ${styles.li_margin}`}>
                  <Link
                    className={`page-link fw-bold ${styles.a_decoration}`}
                    aria-label="Previous"
                    to="/"
                  >
                    10
                  </Link>
                </li>
                <li className={`page-item ${styles.li_margin}`}>
                  <Link
                    className={`page-link ${styles.a_decoration}`}
                    aria-label="Next"
                    to="/"
                  >
                    {' '}
                    <span aria-hidden="true">&raquo;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </main>
    </>
  )
}

export default DavisTrailsFilter
