import React          from 'react'
import { connect }    from 'react-redux'
import Header         from 'ui/header'
import SignForm       from './sign_form'
import TxInfo         from './info'

import { getTxPricing, getLatestNonce } from 'lib/rpc/eth_node'
import { updatePricing, updateBlockNonce, txInfoFailed } from 'lib/store/actions'
import './authorize.css'

class AuthorizeView extends React.Component {
  constructor (props) {
    super(props);
    this.state = { showAdvanced: false }
  }

  async componentDidMount () {
    try {
      const pricing    = await getTxPricing(this.props.current);
      const blockNonce = await getLatestNonce();

      this.props.dispatch(updatePricing(pricing.map(i => i.result)));
      this.props.dispatch(updateBlockNonce(blockNonce.result));
    }
    catch(e) {
      console.error(e.message);
      this.props.dispatch(txInfoFailed('Transaction will fail.'));
    }
  }

  render () {
    return (
      <div className="view authorize-view">
        <Header caption="Your total balance"/>
        <TxInfo/>
        <SignForm/>
      </div>
    )
  }
}

export default connect(({ tx }) =>  ({ current: tx.current }))(AuthorizeView);
