import React       from 'react'
import { connect } from 'react-redux'
import unit        from 'ethjs-unit'
import Preloader   from 'ui/loader'

import './account_balance.css'

const AccountBalance = ({ balance }) => (
  <div className="account-balance">
    <Preloader value={ balance }>
      <div className="amount">{ balance }&nbsp;ETH</div>
    </Preloader>
  </div>
);

const mapStore = (store) => ({
  balance: unit.fromWei(store.balance, 'ether')
});

export default connect(mapStore)(AccountBalance);