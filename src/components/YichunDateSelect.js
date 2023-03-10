// Packages
import React, { useEffect, useState, useRef } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'

// Components

// Styles
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import styles from './../styles/yichun_styles/YichunSearchBar.module.css'
import './../styles/yichun_styles/YichunSearchBarCalendar.css'

function YichunDateSelect(props) {
  const { dateRange, setDateRange } = props

  // open close calendar select
  const [open, setOpen] = useState(false)

  const refOne = useRef(null)

  useEffect(() => {
    document.addEventListener('keydown', hideOnKeyDown, true)
    document.addEventListener('click', hideOnClickOutside, true)
  }, [])

  // hide on click outside
  const hideOnKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      setOpen(false)
    }
  }
  // hide on click outside
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  return (
    <>
      <div className="calendarWrap">
        <input
          type="text"
          name=""
          id=""
          placeholder={`${format(
            dateRange[0].startDate,
            'yyyy-MM-dd'
          )} — ${format(dateRange[0].endDate, 'yyyy-MM-dd')}`}
          readOnly
          onClick={() => setOpen((open) => !open)}
        />
        <div ref={refOne}>
          {open && (
            <DateRange
              onChange={(item) => setDateRange([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
              months={1}
              direction="horizontal"
              className="calendarElement"
              rangeColors={['#6CBA7C']}
              dateDisplayFormat="yyyy-MM-dd"
              color="#000000"
            />
          )}
        </div>
      </div>
    </>
  )
}

export default YichunDateSelect