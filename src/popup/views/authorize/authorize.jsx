import React            from 'react'
import Header           from 'ui/header'
import TxSignForm       from './tx_sign_form'
import TxPanel          from './tx_panel'

const AuthorizeView = () => (
  <div className="view authorize-view">
    <Header caption="Your total balance"/>
    <TxPanel/>
    <TxSignForm/>
  </div>
);

export default AuthorizeView;
