// Write your code here

import React, { Component } from 'react'

class CoinToss extends Component {

    constructor(event) {
        super(event);

        this.state = {
            result: "heads",
            total: 0,
            heads: 0,
            tails: 0,
        }
    }

    clickToss = () => {
        const { result, total, heads, tails } = this.state
        this.setState({
            total: total + 1
        })
        result === "heads" ?
            this.setState({
                result: "tails",
                heads: heads + 1
            }) :
            this.setState({
                result: "heads",
                tails: tails + 1
            })
    }

    render() {
        const { result, total, heads, tails } = this.state
        return (
            <div className="bg-gradient-to-b from-green-400 to-blue-500 h-100 bg-cover flex flex-row px-32 justify-center items-center h-screen text-center">
                <div className="card py-8 bg-white rounded w-min flex flex-col justify-center items-center text-center shadow-xl">
                    <h1 className="text-3xl font-bold text-gray-800">Coin Toss Game</h1>
                    <p>Heads (or) Tails</p>

                    {result === "heads" ? <img alt="toss result" className="h-48 w-48" src="https://assets.ccbp.in/frontend/react-js/heads-img.png" /> :
                        <img alt="tails" className="h-48 w-48" src="https://assets.ccbp.in/frontend/react-js/tails-img.png" />}

                    <button onClick={this.clickToss} className="m-3 py-2 px-6 text-white font-bold rounded shadow bg-gradient-to-r from-orange-400 to-yellow-400">Toss Coin</button>
                    <div className="flex flex-row">
                        <p className="m-3 w-20">Total: {total}</p>
                        <p className="m-3 w-20">Heads: {heads}</p>
                        <p className="m-3 w-20">Tails: {tails}</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default CoinToss
