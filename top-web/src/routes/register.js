import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import RegisterModal from '../components/Register/register'
import MainLayout from '../components/MainLayout/MainLayout'

function Register({dispatch,login}) {

  function submit(data){
      console.log("45645")
    dispatch({
      type:'register/register',
      payload: data
    })
  }

  let ret=login.ret
  return (
    <div className={styles.normal}>
      <RegisterModal
        onclickHandler={submit}
        //ret={login.ret}
      >
      </RegisterModal>
    </div>
  );
}

function mapStateToProps(state) {
  let login=state.login
  return {
    login
  };
}

export default connect(mapStateToProps)(Register);
