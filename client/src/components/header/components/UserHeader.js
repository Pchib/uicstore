import styles from "../stylesheets/userHeader.module.sass";
import { NavDropdown } from "react-bootstrap";
import Auth from "../../../modules/Auth";
import jumpTo from "../../../modules/Navigation";
import Search from "./Search";
import styles1 from "../stylesheets/header.module.sass";

import React, { Component } from 'react'

export default class UserHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      isToggle: false,
      index: 0
    };
  }
    handleChange = v => {
      this.setState({
        input: v
      });
    };
    handleSuggest = v => {
      this.setState({
        input: v
      });
    };
  
  render() {
    const {
      user_token,
      departments,
      search,
      getProductsByCategory,
      getAllProducts
    } = this.props;
    return (
      <div>
      <div className={styles.outbox}>
      <div className={styles1.left}>
        <Search search={search}
        onChange={this.handleChange}
        input_value={this.state.input}
        handleSuggest={this.handleSuggest}

        />
      </div>
      <div className={styles.tag} onClick={() => jumpTo("/bag")}>
        CART
      </div>
      {user_token && Object.keys(user_token).length > 0 ? (
        <div className={styles.loggout}>
          <NavDropdown title={`Hello, ${user_token.user_name}`}>
            <NavDropdown.Item onClick={Auth.logout} href="/">
              logout
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      ) : (
        <div className={styles.loggout}>
          <div className={styles.login} onClick={() => jumpTo("/login")}>
            Login
          </div>
        </div>
      )}
    </div>
      </div>
    )
  }
}


// export default function UserHeader({ user_token, search }) {
//   return (
//     <div className={styles.outbox}>
//       <div className={styles1.left}>
//         <Search search={search}
//         onChange={this.handleChange}
//         input_value={this.state.input}
//         handleSuggest={this.handleSuggest}

//         />
//       </div>
//       <div className={styles.tag} onClick={() => jumpTo("/bag")}>
//         CART
//       </div>
//       {user_token && Object.keys(user_token).length > 0 ? (
//         <div className={styles.loggout}>
//           <NavDropdown title={`Hello, ${user_token.user_name}`}>
//             <NavDropdown.Item onClick={Auth.logout} href="/">
//               logout
//             </NavDropdown.Item>
//           </NavDropdown>
//         </div>
//       ) : (
//         <div className={styles.loggout}>
//           <div className={styles.login} onClick={() => jumpTo("/login")}>
//             Login
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
