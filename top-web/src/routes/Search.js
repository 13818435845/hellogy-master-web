import React from 'react';
import { connect } from 'dva';
import styles from './Search.css';
import MainLayout from '../components/MainLayout/MainLayout'

function Search() {
  return (
      <div className={styles.normal}>
        Route Component: Search
      </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Search);
