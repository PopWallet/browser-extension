import React       from 'react'
import { connect } from 'react-redux'
import unit        from 'ethjs-unit'
import Preloader   from 'ui/loader'

const TransactionValue = ({ value }) => (
  <div className="transaction-value">
    <Preloader value={value}>
      <div className="amount">{value} ETH</div>
    </Preloader>
  </div>
);

const mapStore = ({ transaction }) => {
  return {
    value: unit.fromWei(transaction.pending.current.params.value || 0, 'ether')
  };
};

export default connect(mapStore)(TransactionValue);