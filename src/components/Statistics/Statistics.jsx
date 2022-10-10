import React from 'react';
import MediaStaats from '../MediaStaats/MediaStaats';
import styles from '../Statistics/Statistics.module.scss';
import { ReactComponent as ChevronDown } from '../../assets/images/chevronDown.svg';
import ActiveMedias from '../ActiveMedias/ActiveMedias';
import GeographicData from '../GeographicData/GeographicData';

const Statitstics = () => {
  return (
    <div className={styles.staticContainer}>
      <div className={styles.mediaLineContainer}>
        <div className={styles.media}>
          <h3>Medias Staats</h3>
          <div className={styles.lastWeek}>
            <p>Last Week</p>
            <ChevronDown />
          </div>
        </div>
        <MediaStaats />
      </div>
      <div className={styles.activeMediasContainer}>
        <ActiveMedias />
      </div>
      <div className={styles.geoContainer}>
        <div className={styles.header}>
          <h2>Geographic Data</h2>
          <div className={styles.lastMonth}>
            <p>Last Month</p>
            <ChevronDown />
          </div>
        </div>
        <div className={styles.mapContainer}>
          <div className={styles.squares}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
          </div>
          <GeographicData />
        </div>
        <div className={styles.countriesBlock}>
          <div className={styles.countriesTitle}>
            <p>Affiliate Sign Ups</p>
            <ChevronDown />
          </div>
          <div className={styles.countries}>
            <div className={styles.countriesName}>
              <div className={styles.name}>
                <p>1. United States</p>
                <p>200</p>
              </div>
              <div className={styles.name}>
                <p>2. Chine</p>
                <p>65</p>
              </div>
              <div className={styles.name}>
                <p>3. United Kingdom</p>
                <p>22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statitstics;
