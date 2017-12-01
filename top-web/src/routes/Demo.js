import React from 'react';
import { connect } from 'dva';
import styles from './Demo.less';
import MainLayout from '../components/MainLayout/MainLayout'
import Rechart1 from '../components/rechart/rechart1'

function Demo() {
  return (  
      <div className={styles.normal}>
        <Row gutter={16} style={{ background: '#FFFFFF', padding: '10px' }}>
            <Col span="24">
              <Card title={"demo1"} bordered={true} style={{border:'1px solid #DCDCDC'}} extra={
                <div>
                  <div >
                  </div>
                </div>
              }>
                <div className="custom-card">
                 
                </div>
              </Card>
            </Col>
          </Row>
      </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Demo);
