import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from '../Pictures/whitelogo.svg'
import gh from '../Pictures/GitHub.png'
import li from '../Pictures/linkedin.png'
import EmailIcon from '@material-ui/icons/Email';

function Header(props) {
    const trigger = useScrollTrigger();
    const logoContainer = {
        width: '75px',
        height: '75px',
    };
    const logoStyle = {
        borderRadius: 100,
        backgroundColor: '#03045E',
        width: '100%',
        height: '100%',
    };
    const space = {
        width: '90%'
    };
    const socialsContainer = {
        display: 'flex',
        flexDirection: 'row',
    };
    const socialContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '3px',
        color: 'white'
    };
    const socialIconStyle = {
        width: '45px',
        height: '45px',
        borderRadius: 100,
    };
    return <Slide appear={trigger} direction="down" in={!trigger}>
        <AppBar id={"app-bar"}>
            <ToolBar>
                <div style={logoContainer}>
                    <img style={logoStyle} alt="logo" src={logo}/>
                </div>
                <div style={space}>
                </div>
                <div style={socialsContainer}>
                    <div>
                        <a href={"https://github.com/drewmj1s"} style={socialContainerStyle}>
                            <img style={socialIconStyle} alt="github" src={gh}/>
                        </a>
                    </div>
                    <div>
                        <a href={"https://www.linkedin.com/in/andrew-jones-612824211/"} style={socialContainerStyle}>
                            <img style={socialIconStyle} alt="linkedin" src={li}/>
                        </a>
                    </div>
                    <div style={socialsContainer}>
                        <a style={socialContainerStyle} href={"mailto:tech.andrewjones@gmail.com"}>
                            <EmailIcon fontSize="large"/>
                        </a>
                    </div>
                </div>
            </ToolBar>
        </AppBar>
    </Slide>
}

export default Header