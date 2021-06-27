import Grid from '@material-ui/core/Grid'
import React from "react";

class Lava extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            a: 50,
            b: 50,
            c: 50,
            d: 50,
            e: 50,
            f: 50,
            g: 50,
            h: 50,
            width: 400,
            height: 400,
            lavaStyle: {
                backgroundColor: 'aqua',
                width: '900px',
                height: '900px',
                borderRadius: '100% 100% 100% 100% / 100% 100% 100% 100%'
            },
            scales: this.props.scales,
            rotate: Math.floor(Math.random() * 360),
        }
        this.theta = this.props.scales.map(x => x/10);
        this.oscillate = this.oscillate.bind(this);
        this.setStateVals = this.setStateVals.bind(this);
        this.randomIntBetweenMinMax = this.randomIntBetweenMinMax.bind(this);
    }
    componentDidMount() {
        setInterval(this.setStateVals, 250);
    }
    randomIntBetweenMinMax() {
        let val = Math.floor(Math.random() * (this.maximum - this.minimum) + this.minimum);
        if (val !== 0) {
            return val;
        }
        return 1;
    }

    oscillate(stateVal, scaleVal) {
        // console.log(this.state)

        // let tempScales = this.state.scales;
        // let tempSum = stateVal + tempScales[scaleVal];
        // if (tempSum >= 80 || tempSum < 20) {
        //     tempScales[scaleVal] = tempScales[scaleVal]*-1;
        //     this.setState((state) => ({
        //         scales: tempScales,
        //         theta: state.theta+0.05
        //     }))
        // }
        // tempSum = stateVal + tempScales[scaleVal];
        // return tempSum;
        // console.log( Math.floor(Math.sin(this.state.theta)*25+50))
        // this.theta[scaleVal] = (this.state.scales[scaleVal]/100);
        // console.log(this.theta);
        this.theta[scaleVal] += Math.random()
        return Math.floor(Math.sin(this.theta[scaleVal])*25+50);
    }

    setStateVals() {
        let oscillateValues = []
        oscillateValues.push(this.oscillate(this.state.a, 0));
        oscillateValues.push(this.oscillate(this.state.b, 1));
        oscillateValues.push(this.oscillate(this.state.c, 2));
        oscillateValues.push(this.oscillate(this.state.d, 3));
        oscillateValues.push(this.oscillate(this.state.e, 4));
        oscillateValues.push(this.oscillate(this.state.f, 5));
        oscillateValues.push(this.oscillate(this.state.g, 6));
        oscillateValues.push(this.oscillate(this.state.h, 7));
        // console.log(this.theta);
        this.setState({
            a: oscillateValues[0],
            b: oscillateValues[1],
            c: oscillateValues[2],
            d: oscillateValues[3],
            e: oscillateValues[4],
            f: oscillateValues[5],
            g: oscillateValues[6],
            h: oscillateValues[7]
        }, () => {
            this.setState({
                lavaStyle:
                    {
                        backgroundColor: 'aqua',
                        width: this.state.width,
                        height: this.state.height,
                        borderRadius: this.state.a + '% ' +
                            this.state.b + '% ' +
                            this.state.c + '% ' +
                            this.state.d + '% / ' +
                            this.state.e + '% ' +
                            this.state.f + '% ' +
                            this.state.g + '% ' +
                            this.state.h + '%',
                        transition: 'border-radius 1s',
                        filter: 'drop-shadow(2px 4px 8px #585858)',
                        backgroundImage: 'linear-gradient('+this.state.rotate+'deg, '+this.props.colors[0]+', '+this.props.colors[1]+')',
                        // transform: 'rotate('+this.state.rotate+'deg)'
                    },
                rotate: this.state.rotate+1
            })
        })
    };
    render(){
        return <Grid item>
            <div style={this.state.lavaStyle}/>
        </Grid>
    }

}

export default Lava