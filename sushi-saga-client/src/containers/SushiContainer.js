import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi sushi={sushi} key={sushi.id} onBuy={props.onBuySushi}/>)}
        <MoreButton onClick={props.onPopulateSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer