import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component {

  state = {
    balance: undefined
  }

  updateBalance = event => this.setState({ balance: parseInt(event.target.value, 10) })

  deposit = () => this.props.deposit(this.state.balance)

  withdraw = () => this.props.withdraw(this.state.balance)

  render() {
    return (
      <div>
        <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
        <br />
        <input className='input-wallet' onChange={this.updateBalance}/>
        <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
        <button className='btn-withdraw' onClick={this.withdraw}>Withdrawal</button>
      </div>
    )
  }
}

export default connect(state => { return { balance: state.balance } }, { deposit, withdraw })(Wallet);
//Note: We export the wallet class above so that our tests are testing the unconnected version of the Wallet
//When we connect a component, it adds in quite a bit of nuance that is hard to test