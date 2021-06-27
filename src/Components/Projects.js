import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import Project from "./Project";
import React from "../Pictures/react.svg";
import V_IT_PIC from '../Pictures/visualize-it.png'
import egg from '../Pictures/egg.svg'

function Projects(props) {

    const iconStyle = {
        backgroundColor: 'white',
        color: props.theme.palette.secondary.main,
    };
    return <div id={"projects-container"}>
        <h1 style={{color: props.theme.palette.common.black}}>Highlighted Projects</h1>
        <VerticalTimeline
            layout={"1-column-left"}>
            <Project
                project_name="Visualize-IT"
                theme={props.theme}
                classes={props.classes}
                link={"https://radford-software-eng.github.io/tm-repo-se-team-3-visualize-it/"}
                description={"Visualize-IT was a system built to help computer science students better " +
                "understand the subjects taught in a specific class which taught sorting algorithms and" +
                " binary search tree behavior."}
                date={"2020-2021"}
                // position={"left"}
                picture={V_IT_PIC}
                icon={0}
                techstack={"React, MySQL, Material UI, NodeJS"}
                roles={"Software Engineer, Scrum Master, Software Tester"}/>
            <Project project_name="Live Well"
                     theme={props.theme}
                     classes={props.classes}
                     link={false}
                     picture={false}
                     description={"Live Well was part of a spike exercise and was built in about 3 weeks." +
                     "The purpose was to build a site which could function as a roommate finder app based" +
                     " on user input preferences."}
                     date={"2020"}
                // position = {"right"}
                     icon={1}
                     techstack={"React, MySQL, Material UI, NodeJS"}
                     roles={"Software Engineer, Scrum Master, Software Tester"}/>
            <Project project_name="Carol Lee Donuts"
                     theme={props.theme}
                     classes={props.classes}
                     link={false}
                     picture={false}
                     description={"This site was built for a donut shop in Blacksburg, VA as a point of " +
                     "sales for their menu online."}
                     date={"2019"}
                     techstack={"Django, PostgreSQL, Selenium, HTML, CSS"}
                     roles={"Software Engineer, Project Manager"}
                     icon={2}/>
            <VerticalTimelineElement
                iconStyle={iconStyle}
                icon={<a href={"https://radford-software-eng.github.io/dev-spike-drewmj1s/"}><img alt="egg"
                                                                                                  width="40px"
                                                                                                  src={egg}/></a>}/>
        </VerticalTimeline>
    </div>
}

export default Projects