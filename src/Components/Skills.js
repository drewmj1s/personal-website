import Grid from "@material-ui/core/Grid";
import TechStack from "./TechStack";
import Javascript from '../Pictures/Javascript.png'
import React from "../Pictures/react.svg";
import MaterialUI from "../Pictures/material-ui.png";
import MySQL from "../Pictures/mysql-logo.svg";
import Django from "../Pictures/django.webp";
import Python from "../Pictures/python.png";
import PostgreSQL from "../Pictures/postgresql.png";
import Java from "../Pictures/java.png";
import Selenium from '../Pictures/Selenium.png'
import Cypress from '../Pictures/cypress.png';
import NodeJS from '../Pictures/nodejs.png';
import Docker from '../Pictures/docker.png';

function Skills(props) {

    return <div id={"skill-container"}>
        <h1 style={{color: props.theme.palette.common.black, marginLeft: '10%'}}>Skills</h1>
        <hr style={{width: '80%', margin: 'auto'}}/>
        <Grid container spacing={0} direction={"row"} alignItems={"center"} justify={"center"}>
            <TechStack tech="JavaScript" image={Javascript}/>
            <TechStack tech="React" image={React}/>
            <TechStack tech="MySQL" image={MySQL}/>
            <TechStack tech="Cypress.io" image={Cypress}/>
            <TechStack tech="Material UI" image={MaterialUI}/>
            <TechStack tech="NodeJS" image={NodeJS}/>
            <TechStack tech="Python" image={Python}/>
            <TechStack tech="Django" image={Django}/>
            <TechStack tech="PostgreSQL" image={PostgreSQL}/>
            <TechStack tech="Docker" image={Docker}/>
            <TechStack tech="Java" image={Java}/>
            <TechStack tech="Selenium" image={Selenium}/>
        </Grid>
    </div>
}

export default Skills