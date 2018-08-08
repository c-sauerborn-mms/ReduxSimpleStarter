import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars, SparklinesText } from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length);
}

function minimum(data){
    return _.round(_.min(data));
}

function maximum(data){
    return _.round(_.max(data));
}

export default (props) => {

    return (
        <div>
            <div className="chart-max-label"> Max: {maximum(props.data)} {props.units}</div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
                <SparklinesBars />
            </Sparklines>
            <div className="chart-min-label">Min: {minimum(props.data)} {props.units}</div>
            <div>Average: {average(props.data)} {props.units}</div>
        </div>
    )
}