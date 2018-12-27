import React            from 'react'
import { connect }      from 'react-redux'
import { fetchTxInfo }  from 'lib/store/actions'
import AccountBalance   from './account_balance'
import TransactionValue from './transaction_value'
import GasPrice         from './gas_price'
import GasEstimate      from './gas_estimate'
import TransactionFee   from './transaction_fee'

class TxInfo extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTxInfo());
  }

  render () {
    return (
      <div className="transaction-panel">
        <AccountBalance/>
        <TransactionValue/>
        <GasPrice/>
        <GasEstimate/>
        <TransactionFee/>
      </div>
    );
  }
}

export default connect()(TxInfo);