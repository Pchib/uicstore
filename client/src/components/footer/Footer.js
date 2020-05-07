import React, { Component } from 'react'
import styles from './stylesheets/footer.module.sass'
export default class Footer extends Component {

  render() {
    return (
      <div>
      <footer className={styles.footer}>
      <div className={styles.container}>
          <div className={styles.row}>
              <div className="col-md-8 col-sm-7">
                  <p>Copyright &copy; 2020 UicSoft</p>
                  <small>Designed by <a rel="nofollow" href="/" target="_parent">Ugwu Isaac</a></small>
              </div>
              <div className="col-md-4 col-sm-5">
                  <ul className={styles.socialicon}>
                      <li><a href="https://www.facebook.com/ugwu.isaac.5" className="fa fa-facebook"></a></li>
                      <li><a href="https://www.instagram.com/ugwu.chi" className="fa fa-instagram"></a></li>
                       <li><a href="https://ugwuisaaciu@gmail.com" className="fa fa-google"></a></li>
                      <li><a href="https://github.com/Pchib" className="fa fa-github"></a></li>
                      <li><a href="https://www.linkedin.com/in/isaac-ugwu-2b6355193" className="fa fa-twitter"></a></li>
                      </ul>
              </div>
          </div>
      </div>
  </footer>
      </div>
    )
  }
}

