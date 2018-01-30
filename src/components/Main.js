import React, { Component } from 'react';
import {ShotChart} from "./ShotChart";
import nba from 'nba';
import {Profile} from "./Profile"

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer('Russell Westbrook').playerId
    }

    render () {
        return (
            <div className='main'>
                <Profile playerId={this.state.playerId}/>
                <ShotChart playerId={this.state.playerId}/>
            </div>
        )
    }
}