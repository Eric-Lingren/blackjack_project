import React from 'react';
import {withCorrectPlay} from '../../context/CorrectPlayProvider';
import './BasicStrategyStatsModal.css'

const BasicStrategyStatsModal = (props) => {

    const show = props.showBasicStrategyStats

    let totalAverageStats = ((props.hardHandsCorrect + props.softHandsCorrect + props.splitHandsCorrect) / 
                            (props.hardHandsPlayed + props.softHandsPlayed + props.splitHandsPlayed)*100 )
    let totalPercentageCorrect = totalAverageStats.toFixed(1)
    let hardPercentageCorrect = (((props.hardHandsCorrect / props.hardHandsPlayed) * 100).toFixed(1))
    let softPercentageCorrect = (((props.softHandsCorrect / props.softHandsPlayed) * 100).toFixed(1))
    let splitPercentageCorrect = (((props.splitHandsCorrect / props.splitHandsPlayed) * 100).toFixed(1))

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.toggleBasicStrategyStats}>&times;</span>
                    <h2 className='modalSubTitle'> Current Player Stats </h2>
                    <div>
                        <h3>Cumulative:</h3>
                        <h4>Played: {props.hardHandsPlayed + props.softHandsPlayed + props.splitHandsPlayed} </h4>
                        <h4>Correct: {props.hardHandsCorrect + props.softHandsCorrect + props.splitHandsCorrect} </h4>
                        <h4>Accuracy: { totalPercentageCorrect >= 0 ? totalPercentageCorrect : 0 }% </h4>
                    </div>

                    <div>
                        <h3>Hard Hands:</h3>
                        <h4>Played: {props.hardHandsPlayed} </h4>
                        <h4>Correct: {props.hardHandsCorrect} </h4>
                        <h4>Accuracy: {hardPercentageCorrect >=0 ? hardPercentageCorrect : 0 }% </h4>
                    </div>
                    <div>
                        <h3>Soft Hands:</h3>
                        <h4>Played: {props.softHandsPlayed} </h4>
                        <h4>Correct: {props.softHandsCorrect} </h4>
                        <h4>Accuracy: {softPercentageCorrect >=0 ? softPercentageCorrect : 0 }% </h4>
                    </div>
                    <div>
                        <h3>Split Hands:</h3>
                        <h4>Played: {props.splitHandsPlayed} </h4>
                        <h4>Correct: {props.splitHandsCorrect} </h4>
                        <h4>Accuracy: {splitPercentageCorrect >=0 ? splitPercentageCorrect : 0 }% </h4>
                    </div>
                    
                    
                    
                </div>
            </div>
    )  
}

export default withCorrectPlay(BasicStrategyStatsModal)
