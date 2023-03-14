import React, { useContext } from 'react'
import styles from './../styles/Member.module.css'
import { MemberContext } from './../contexts/MemberContext.js'
import AuthContext from './../contexts/AuthContexts'

export default function MemberContent(props) {
  const { user, setUser } = props
  // const { myAuth, setMyAuth, logout } = useContext(AuthContext)

  //性別欄位用
  // const genderSwitch = (params) => {
  //   switch (params) {
  //     case 'male':
  //       return (
  //         <>
  //           <select
  //             value="male"
  //             onChange={(e) => {
  //               setUser(e.target.value)
  //             }}
  //           >
  //             <option value="male">男性</option>
  //             <option value="female">女性</option>
  //             <option value="none">不透露</option>
  //           </select>
  //         </>
  //       )
  //     case 'female':
  //       return (
  //         <>
  //           <select
  //             value="female"
  //             onChange={(e) => {
  //               setUser(e.target.value)
  //             }}
  //           >
  //             <option value="male">男性</option>
  //             <option value="female">女性</option>
  //             <option value="none">不透露</option>
  //           </select>
  //         </>
  //       )
  //     case 'none':
  //       return (
  //         <>
  //           <select
  //             value="none"
  //             onChange={(e) => {
  //               setUser(e.target.value)
  //             }}
  //           >
  //             <option value="male">男性</option>
  //             <option value="female">女性</option>
  //             <option value="none">不透露</option>
  //           </select>
  //         </>
  //       )
  //   }
  // }
  //生日日期格式轉換
  const birthDate = new Date(user.birthday)
  const year = birthDate.getFullYear()
  const month = String(birthDate.getMonth() + 1).padStart(2, '0') //預設字串長度要兩個字，用0填充不夠的部分
  const day = String(birthDate.getDate()).padStart(2, '0')
  const dateFormat = `${year}-${month}-${day}`

  // console.log('生日：', dateFormat)

  return (
    <>
      <div className={styles['member-data']}>
        <div className={styles['title']}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.4446 30.0001V26.889C28.4446 25.2387 27.789 23.6561 26.6221 22.4892C25.4552 21.3223 23.8726 20.6667 22.2223 20.6667H9.77789C8.12765 20.6667 6.545 21.3223 5.37811 22.4892C4.21122 23.6561 3.55566 25.2387 3.55566 26.889V30.0001"
              stroke="#6CBA7C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0005 14.4444C19.437 14.4444 22.2228 11.6587 22.2228 8.22222C22.2228 4.78578 19.437 2 16.0005 2C12.5641 2 9.77832 4.78578 9.77832 8.22222C9.77832 11.6587 12.5641 14.4444 16.0005 14.4444Z"
              stroke="#6CBA7C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1>會員中心</h1>
        </div>
        <div className={styles['data-area']}>
          <div className={`${styles['name-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              名字
            </label>
            <input
              type="text"
              className=""
              id=""
              name=""
              value={user.firstname}
              onChange={(e) => {
                setUser(e.target.value)
              }}
              required
            />
          </div>
          <div className={`${styles['fname-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className={''}>
              姓氏
            </label>
            <input
              type="text"
              className={''}
              id=""
              name=""
              value={user.lastname}
              onChange={(e) => {
                setUser(e.target.value.lastname)
              }}
              required
            />
          </div>
          <div className={`${styles['gender-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              性別
            </label>
            <select
              value={user.gender}
              onChange={(e) => {
                setUser(e.target.value)
              }}
            >
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="none">不透露</option>
            </select>
            {/* {genderSwitch(user.gender)} */}
            {/* <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="none">不透露</option> */}
          </div>
          <div
            className={`${styles['birth-wrap']} ${styles['input-blocks']}`}
            //   className={styles['birth-wrap']}
          >
            <label htmlFor="" className="">
              出生年月日
            </label>
            <input
              type="date"
              className=""
              id=""
              name=""
              value={dateFormat}
              onChange={(e) => {
                setUser(e.target.value.birthday)
              }}
              required
            />
          </div>
          <div className={`${styles['id-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              身分證字號
            </label>
            <input
              type="text"
              className=""
              id=""
              name=""
              value={user.personal_id}
              onChange={(e) => {
                setUser(e.target.value.personal_id)
              }}
              required
            />
          </div>
          <div className={`${styles['phone-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              聯絡電話
            </label>
            <input
              type="text"
              className=""
              id=""
              name=""
              value={user.mobile}
              onChange={(e) => {
                setUser(e.target.value.mobile)
              }}
              required
            />
          </div>
          <div
            className={`${styles['account-wrap']} ${styles['input-blocks']}`}
          >
            <label htmlFor="" className="">
              會員帳號
            </label>
            <input
              type="text"
              className={''}
              id=""
              name=""
              value={user.account}
              onChange={(e) => {
                setUser(e.target.value)
              }}
              required
            />
          </div>
          <div className={`${styles['email-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              電子信箱
            </label>
            <input
              type="email"
              className=""
              id=""
              name=""
              value={user.email}
              onChange={(e) => {
                setUser(e.target.value)
              }}
              required
            />
          </div>
          <div className={`${styles['zip-wrap']} ${styles['input-blocks']}`}>
            <label htmlFor="" className="">
              聯絡地址
            </label>
            <input
              type="text"
              className=""
              id=""
              name=""
              value={user.zip}
              onChange={(e) => {
                setUser(e.target.value)
              }}
              required
            />
          </div>
          <div className={`${styles['city-wrap']} ${styles['input-blocks']}`}>
            <div className={styles['fake-label-city']}></div>
            <select
              value={user.city}
              onChange={(e) => {
                setUser(e.target.value)
              }}
            >
              <option>基隆市</option>
              <option>臺北市</option>
              <option>新北市</option>
              <option>桃園市</option>
              <option>新竹市</option>
              <option>新竹縣</option>
              <option>苗栗縣</option>
              <option>臺中市</option>
              <option>彰化縣</option>
              <option>南投縣</option>
              <option>嘉義市</option>
              <option>嘉義縣</option>
              <option>臺南市</option>
              <option>高雄市</option>
              <option>屏東縣</option>
              <option>宜蘭縣</option>
              <option>台東縣</option>
              <option>花蓮縣</option>
              <option>澎湖縣</option>
              <option>連江縣</option>
            </select>
          </div>
          <div
            className={`${styles['address-wrap']} ${styles['input-blocks']}`}
          >
            <div className={styles['fake-label-add']}></div>
            <input
              type="text"
              className=""
              id=""
              name=""
              value={user.address}
              onChange={(e) => {
                setUser(e.target.value)
              }}
              required
            />
          </div>
          <button className={styles['save-btn']}>儲存變更</button>
        </div>
      </div>
    </>
  )
}
