import React from 'react'
import styles from '../../styles/DavisTrailsFilter.module.css'

function DavisFilterComLeft() {
  return (
    <>
      <div
        className={`card-body d-flex flex-column ${styles['card_padding']} ${styles['left_card']} `}
      >
        <h5 className={`${styles.h5_sub_title}`}>搜尋</h5>
        <div className={`d-flex flex-column ${styles.search}`}>
          <p className={`mb-0 ${styles.p_content}`}>目的地</p>
          <div className={`d-flex flex-row ${styles.input_with_icon}`}>
            <span className={`col ${styles.icon_span}`}>
              <svg
                className={`${styles.icon_size}`}
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00004 17C13.4183 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4183 1 9.00004 1C4.58174 1 1 4.58172 1 9C1 13.4183 4.58174 17 9.00004 17Z"
                  stroke="#6CBA7C"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
                <path
                  d="M18.9999 18.9999L14.6499 14.6499"
                  stroke="#6CBA7C"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </span>
            <div className="col">
              <input className={`${styles.input_style}`} type="text" />
            </div>
          </div>
        </div>

        <div className={`d-flex flex-column ${styles.search}`}>
          <p className={`mb-0 ${styles.p_content}`}>出發日期</p>
          <div className={`d-flex flex-row ${styles.input_with_icon}`}>
            <span className={`${styles.icon_span}`}>
              <svg
                className={`${styles.icon_size}`}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2418 2.7832H3.75844C2.77353 2.7832 1.9751 3.58163 1.9751 4.56655V17.0499C1.9751 18.0349 2.77353 18.8333 3.75844 18.8333H16.2418C17.2268 18.8333 18.0252 18.0349 18.0252 17.0499V4.56655C18.0252 3.58163 17.2268 2.7832 16.2418 2.7832Z"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <path
                  d="M13.5669 1V4.56668"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6.43311 1V4.56668"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M1.9751 8.1333H18.0252"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </span>
            <div className={`${styles.input_wrap}`}>
              <input
                className={`${styles.input_style}`}
                type="date"
                id="picker"
                pseudo="-webkit-calendar-picker-indicator"
              />
            </div>
          </div>
        </div>

        <div className={`d-flex flex-column ${styles.search}`}>
          <p className={`mb-0 ${styles.p_content}`}>返程日期</p>
          <div className={`d-flex flex-row ${styles.input_with_icon}`}>
            <span className={`${styles.icon_span}`}>
              <svg
                className={`${styles.icon_size}`}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2418 2.7832H3.75844C2.77353 2.7832 1.9751 3.58163 1.9751 4.56655V17.0499C1.9751 18.0349 2.77353 18.8333 3.75844 18.8333H16.2418C17.2268 18.8333 18.0252 18.0349 18.0252 17.0499V4.56655C18.0252 3.58163 17.2268 2.7832 16.2418 2.7832Z"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <path
                  d="M13.5669 1V4.56668"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6.43311 1V4.56668"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M1.9751 8.1333H18.0252"
                  stroke="#6CBA7C"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </span>
            <div className={`${styles.input_wrap}`}>
              <input
                className={`${styles.input_style}`}
                type="date"
                id="picker"
                pseudo="-webkit-calendar-picker-indicator"
              />
            </div>
          </div>
        </div>

        <div className={`d-flex flex-column ${styles.search_count}`}>
          <p className={`mb-0 ${styles.p_content}`}>人數</p>
          <div className={`d-flex flex-row ${styles.input_with_icon}`}>
            <span className={`col ${styles.icon_span}`}>
              <svg
                className={`${styles.icon_size}`}
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8 18.0002V16.1113C17.8 15.1093 17.3821 14.1485 16.6382 13.44C15.8943 12.7315 14.8854 12.3335 13.8334 12.3335H5.90002C4.84799 12.3335 3.83905 12.7315 3.09516 13.44C2.35127 14.1485 1.93335 15.1093 1.93335 16.1113V18.0002"
                  stroke="#6CBA7C"
                  strokeWidth="1.78948"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.86682 8.55556C12.0575 8.55556 13.8335 6.86419 13.8335 4.77778C13.8335 2.69137 12.0575 1 9.86682 1C7.67608 1 5.90015 2.69137 5.90015 4.77778C5.90015 6.86419 7.67608 8.55556 9.86682 8.55556Z"
                  stroke="#6CBA7C"
                  strokeWidth="1.78948"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="col">
              <input className={`${styles.input_style}`} type="number" />
            </div>
          </div>
        </div>
        <button className={`${styles.btn_search}`} type="button">
          搜尋
        </button>
      </div>
    </>
  )
}

export default DavisFilterComLeft