import {VerticalTimelineElement} from 'react-vertical-timeline-component';
import BarChartIcon from '@material-ui/icons/BarChart';
import HomeIcon from '@material-ui/icons/Home';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function Project(props) {
    // const position = props.position ? props.position : null;
    const arrOfIcons = [<BarChartIcon/>, <HomeIcon/>, <EmojiFoodBeverageIcon/>];
    const iconStyle = {
        backgroundColor: 'white',
        color: props.theme.palette.secondary.main,
    };
    const projectContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        margin: 0,
    };
    const textContainer = {
        margin: '4px',
    };
    const nameAndLinkStyle = {
        display: 'flex',
        borderBottom: '1px solid black',
        alignItems: 'center',
    };
    return <VerticalTimelineElement
        // className={props.classes.paper}
        contentStyle={{background: 'white', color: '#000', padding: 0, marginBottom: 0}}
        contentArrowStyle={{borderRight: '12px solid ' + props.theme.palette.primary.main,}}
        date={props.date}
        // position={position}
        iconStyle={iconStyle}
        icon={arrOfIcons[props.icon]}
        dateClassName={"date"}
    >
        <div style={projectContainer}>
            <div style={textContainer}>
                <div style={nameAndLinkStyle}>
                    <h2 style={{color: props.theme.palette.primary.main}}>{props.project_name}</h2>
                    {props.link ?
                        <a style={{color: props.theme.palette.common.black, marginLeft: '10px'}} href={props.link}>
                            <OpenInNewIcon/>
                        </a> : null}
                </div>
                <p style={{color: "#000"}}>{props.description}</p>
                <p style={{color: "gray", marginTop: "2px"}}>{props.techstack}</p>
            </div>
            {/*{props.picture? <img src={props.picture} width={500} height={200}/> : null}*/}
        </div>
    </VerticalTimelineElement>;
}

export default Project