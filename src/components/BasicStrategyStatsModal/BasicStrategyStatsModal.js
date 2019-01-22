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

    let totalPercentageClass = ''
    let hardPercentageClass = ''
    let softPercentageClass = ''
    let splitPercentageClass = ''

    if(totalPercentageCorrect >= 90){
        totalPercentageClass = 'good-percentage'
    } else if(totalPercentageCorrect >= 70 && totalPercentageCorrect < 90){
        totalPercentageClass = 'average-percentage'
    } else{
        totalPercentageClass = 'bad-percentage'
    }

    if(hardPercentageCorrect >= 90){
        hardPercentageClass = 'good-percentage'
    } else if(hardPercentageCorrect >= 70 && hardPercentageCorrect < 90){
        hardPercentageClass = 'average-percentage'
    } else{
        hardPercentageClass = 'bad-percentage'
    }

    if(softPercentageCorrect >= 90){
        softPercentageClass = 'good-percentage'
    } else if(softPercentageCorrect >= 70 && softPercentageCorrect < 90){
        softPercentageClass = 'average-percentage'
    } else{
        softPercentageClass = 'bad-percentage'
    }

    if(splitPercentageCorrect >= 90){
        splitPercentageClass = 'good-percentage'
    } else if(splitPercentageCorrect >= 70 && splitPercentageCorrect < 90){
        splitPercentageClass = 'average-percentage'
    } else{
        splitPercentageClass = 'bad-percentage'
    }

    let modal = document.getElementById('simpleModal')
    window.addEventListener('mousedown', clickOutsideStatsModal)
    function clickOutsideStatsModal(e){
        if(e.target === modal){
            props.toggleBasicStrategyStats()
        }
    }

    return(
        <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
            <div id='my-modal-content' className="modal-content">
                <span className="closeBtn" onClick={props.toggleBasicStrategyStats}>&times;</span>
                <h2 className='modalSubTitle'> Current Player Stats </h2>
                <div className='stats-wrapper'>
                    <div className='first-stats'>
                        <div>
                            <h3>Cumulative:</h3>
                            <h4>Played: {props.hardHandsPlayed + props.softHandsPlayed + props.splitHandsPlayed} </h4>
                            <h4>Correct: {props.hardHandsCorrect + props.softHandsCorrect + props.splitHandsCorrect} </h4>
                            <h4 className={totalPercentageClass}> Accuracy: { totalPercentageCorrect >= 0 ? totalPercentageCorrect : 0 }% 
                            </h4>
                        </div>
                        <div>
                            <h3>Hard Hands:</h3>
                            <h4>Played: {props.hardHandsPlayed} </h4>
                            <h4>Correct: {props.hardHandsCorrect} </h4>
                            <h4 className={hardPercentageClass}> Accuracy: {hardPercentageCorrect >=0 ? hardPercentageCorrect : 0 }% </h4>
                        </div>
                    </div>
                    <div className='second-stats'>
                        <div>
                            <h3>Soft Hands:</h3>
                            <h4>Played: {props.softHandsPlayed} </h4>
                            <h4>Correct: {props.softHandsCorrect} </h4>
                            <h4 className={softPercentageClass}> Accuracy: {softPercentageCorrect >=0 ? softPercentageCorrect : 0 }% </h4>
                        </div>
                        <div>
                            <h3>Split Hands:</h3>
                            <h4>Played: {props.splitHandsPlayed} </h4>
                            <h4>Correct: {props.splitHandsCorrect} </h4>
                            <h4 className={splitPercentageClass}> Accuracy: {splitPercentageCorrect >=0 ? splitPercentageCorrect : 0 }% </h4>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )  
}

export default withCorrectPlay(BasicStrategyStatsModal)
