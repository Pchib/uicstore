import React, { Component } from "react";
import HeaderContainer from "../../components/header/headerContainer";
import Product from "./components/Product";
import LoadingAnimation from "../../components/loadingAnimation";
import styles from "./stylesheets/dashboard.module.sass";
import Footer from "../../components/footer/Footer"

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.products) {
      this.props.getAllProducts();
    }
  }
  // chi do temp prodct gotten from database
  render() {
    const { products, applyFilters } = this.props;
    return (
      <div className={styles.outbox}>
        {/* Header */}
        <HeaderContainer />
        <div className={styles.box}>
          {/* loading animation */}
          {this.props.loading && <LoadingAnimation />}
          {/* filter */}
         
          {/* products */}
          <div className={`row ${styles.products}`}>
            {products &&
              products.map(p => (
                <div
                  key={p.title}
                  className={`col-6 col-sm-4 col-md-4 col-lg-3 my-3 ${styles.product}`}
                  onClick={() =>
                    this.props.history.push(`/product-overview/${p._id}`)
                  }
                >
                  <Product
                    title={p.title}
                    price={`$${p.price} CAD`}
                    color={p.color}
                    image={p.imagePath}
                  />
                  
                </div>
              ))}
              </div>
        </div>
        <Footer/>

      </div>
    );
  }
}
