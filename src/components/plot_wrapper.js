import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility } from '../actions';
import PlotProps from "../components/plot_props";
import {PlotlyTranslator} from "../components/plotly_translator";


//<Plot data={seriesArr} />
const _PlotWrapper = ({ seriesArr }) => {
    return (<div>
                <PlotProps />
                <PlotlyTranslator />
                
            </div>);};


export default connect(null, null)(_PlotWrapper);
