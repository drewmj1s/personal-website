import Gradient from '../Pictures/Gradient.png'

function Title(props) {
    const titleBackground = {
        backgroundImage: 'url(' + Gradient + ')',
        backgroundSize: '100% 100%',
        // backgroundAttachment: 'fixed'
    };
    return <div id={"title-container"} style={titleBackground}>
        <p> Hello, my name is </p>
        <br/>
        <h1 id={"name"}> Andrew Jones </h1>
    </div>
}

export default Title;