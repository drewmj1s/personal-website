import './App.css';
// import Button from '@material-ui/core/Button'
import Header from './Components/Header.js'
import Title from './Components/Title.js'
import Projects from './Components/Projects.js'
import Skills from './Components/Skills.js'
import Animations from './Components/Animations.js'
import {createMuiTheme, makeStyles} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import 'react-vertical-timeline-component/style.min.css';
import AboutMe from "./Components/AboutMe";
import {LinearProgress} from "@material-ui/core";
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00B4D8'
        },
        secondary: {
            main: '#0077B6'
        },
        background: {
            main: '#862D63'
        },
        action: {
            main: '#FFE66D',
            active: '#FFE66D',
            hover: '#FFE047',
            selected: '#FFDD33',
        },
        common: {
            black: '#000',
            babypowder: '#FDFFFC',
        }
    },
})
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#FFF'
    },
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div id={"portfolio"}>
                <Header/>
                <Title />
                <br/>
                <AboutMe/>
                <br/>
                <Skills theme={theme} classes={classes}/>
                <br/>
                <hr style={{width: "80%", margin: "auto"}}/>
                <br/>
                <Projects theme={theme} classes={classes}/>
                <Animations/>
            </div>
        </ThemeProvider>
    );
}

export default App;
