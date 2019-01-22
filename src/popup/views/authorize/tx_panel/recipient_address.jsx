import React       from 'react'
import { connect } from 'react-redux'
import Preloader   from 'ui/loader'

const RecipientAddress = ({ recipientAddress }) => (
  <div className="recipient-address">
    <Preloader value={ recipientAddress }>
      <div className="recipient-address-amount">{ recipientAddress }</div>
    </Preloader>
  </div>
);

const mapStore = ({ pending }) => ({
  recipientAddress: pending[0].params[0].to || 'N/A'
});

export default connect(mapStore)(RecipientAddress);
