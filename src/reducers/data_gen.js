

export const JAN_1_1990 = new Date(1990, 1, 1, 0, 0, 0);
export const JAN_1_2000 = new Date(2000, 1, 1, 0, 0, 0);
export const JAN_1_2010 = new Date(2010, 1, 1, 0, 0, 0);
export const JAN_1_2017 = new Date(2017, 1, 1, 0, 0, 0);
export const JAN_1_2018 = new Date(2018, 1, 1, 0, 0, 0);
export const JAN_1_2019 = new Date(2019, 1, 1, 0, 0, 0);

export const JAN_2_2019 = new Date(2019, 1, 2, 0, 0, 0);
export const JAN_8_2019 = new Date(2019, 1, 8, 0, 0, 0);
export const JAN_30_2019 = new Date(2019, 1, 30, 0, 0, 0);



export const ONE_HOUR = 3600 * 1000;
export const ONE_DAY = JAN_2_2019 - JAN_1_2019;

export const ONE_WEEK = JAN_8_2019 - JAN_1_2019;
export const ONE_MONTH = JAN_30_2019 - JAN_1_2019;


export const TimeseriesGenX = ({n, start, periodicity }) => {
    var x = [];
    const start_i = (start - 1) + 1;
    for(var i=0; i < n; i++){
        x.push(start_i + periodicity * i);
    }
    return x;
};

export const RandSinY = ({n, start, sinAmp, randAmp  }) => {
    var y = [];
    for(var i=0; i < n; i++){
        y.push(
            start + 
            (Math.sin(i) * sinAmp) + 
            (Math.random() * randAmp));
    }

    return y;
};
