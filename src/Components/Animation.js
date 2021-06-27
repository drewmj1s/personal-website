import {Tooltip} from "@material-ui/core";
import Lava from "./Lava";
import Grid from "@material-ui/core/Grid";
import React from "react";
function Animation(props){
    const AnimStyle = {
        width: (props.width?props.width:400),
        height: (props.height?props.height:400),
        border: '1px solid red'
    }
    let maximum = 9;
    let minimum = 3;
    // this.randomStartingScales = this.randomStartingScales.bind(this);
    function randomStartingScales() {
        let vals = []
        for (let index = 0; index < 8; index++) {
            vals.push(Math.floor(Math.random() * (maximum - minimum) + minimum))
        }
        return vals;
    }
    return <div style={AnimStyle}>
        <Tooltip title={props.anim_id}>
            <Grid container spacing={2} direction={"row"} alignItems={"center"} justify={"center"}>
                <Lava colors={['red','yellow']} scales={randomStartingScales()}/>
                <Lava colors={['blue','white']} scales={randomStartingScales()}/>
                <Lava colors={['lightgray','purple']} scales={randomStartingScales()}/>
                <Lava colors={['rgba(255,0,0,0)','rgba(255,0,0,1)']} scales={randomStartingScales()}/>
            </Grid>
        </Tooltip>
    </div>
}
export default Animation