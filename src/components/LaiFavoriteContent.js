import React from 'react'
import styles from './../styles/Favorite.module.css'
import FavoriteAmount from './LaiFavoriteAmount'
import FavoriteCard from './LaiFavoriteCard'
import TreeAnimation2 from './LaiAchievementTreeAnimation2'

export default function LaiFavoriteContent() {
  return (
    <>
      <div className={styles['member-data']}>
        <div className={styles['title']}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8401 5.10999C20.3294 4.599 19.7229 4.19364 19.0555 3.91708C18.388 3.64052 17.6726 3.49817 16.9501 3.49817C16.2276 3.49817 15.5122 3.64052 14.8448 3.91708C14.1773 4.19364 13.5709 4.599 13.0601 5.10999L12.0001 6.16999L10.9401 5.10999C9.90843 4.0783 8.50915 3.4987 7.05012 3.4987C5.59109 3.4987 4.19181 4.0783 3.16012 5.10999C2.12843 6.14169 1.54883 7.54096 1.54883 8.99999C1.54883 10.459 2.12843 11.8583 3.16012 12.89L4.22012 13.95L12.0001 21.73L19.7801 13.95L20.8401 12.89C21.3511 12.3792 21.7565 11.7728 22.033 11.1053C22.3096 10.4379 22.4519 9.72248 22.4519 8.99999C22.4519 8.27751 22.3096 7.5621 22.033 6.89464C21.7565 6.22718 21.3511 5.62075 20.8401 5.10999Z"
              stroke="#6cba7c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1>我的收藏</h1>
        </div>
        <div className={styles['container']}>
          <div className={styles['filter-area']}>
            <div className={styles['show-number']}>
              <p>已收藏</p>
              {/* TODO 連結真實的評論數 */}
              <FavoriteAmount amount={10} />
              {/* <p id={styles['fav-amount']}>5</p> */}
              <p>個行程</p>
            </div>
            <div className={styles['filter-btn']}>
              <select>
                <option>排列順序</option>
                <option>依照加入時間</option>
                <option>依照價格排序</option>
                <option>依照行程時間</option>
              </select>
            </div>
          </div>
          <div className={styles['fav-list']}>
            <FavoriteCard
              img={''}
              title={'草嶺古道｜探索新北一日遊'}
              describ={
                '你見過南橫之美嗎？自從2009年8月，南橫公路中斷之後，美麗的南橫三星便淪為黑山、少有人探訪，直到最近才又終於開放了許多山友鍾情的南橫三星！塔關山、關山嶺山、庫哈諾辛山皆為A級百岳，是適合當日來回的平易、絕美山嶺，封閉多年的原始森林風華更甚以往，台灣368還安排了專車接送往返民宿及各登山口，讓你飽覽南橫的沿線風光、更讓你輕鬆的入手三座百岳。'
              }
              location={'宜蘭縣頭城鎮'}
              // TODO星星數量的傳值
              starAmount={''}
              price={'2,400'}
            />
          </div>
          <TreeAnimation2 />
          
        </div>
      </div>
    </>
  )
}
