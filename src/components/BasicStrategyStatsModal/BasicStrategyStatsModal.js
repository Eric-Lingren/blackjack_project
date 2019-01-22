import React from 'react';
import {withCorrectPlay} from '../../context/CorrectPlayProvider';
import './BasicStrategyStatsModal.css'

const BasicStrategyStatsModal = (props) => {

    const show = props.showBasicStrategyStats
    console.log('show modal: ' + show)

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.toggleBasicStrategyStats}>&times;</span>
                    <h1 className='modalTitle'> Modal Title Here </h1>
                    <h2 className='modalSubTitle'> Modal Subtitle Here </h2>
                    <h4>Total Hands Played: {props.hardHandsPlayed + props.softHandsPlayed + props.splitHandsPlayed} </h4>
                    <h4>{props.hardHandsPlayed}</h4>
                    <h4>{props.hardHandsCorrect}</h4>
                    <h4>{props.softHandsPlayed}</h4>
                    <h4>{props.softHandsCorrect}</h4>
                    <h4>{props.splitHandsPlayed}</h4>
                    <h4>{props.splitHandsCorrect}</h4>
                    
                    
                    
                    
                </div>
            </div>
    )  
}

export default withCorrectPlay(BasicStrategyStatsModal)
