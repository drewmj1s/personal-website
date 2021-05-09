import Grid from '@material-ui/core/Grid'

function TechStack(props) {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        background: "white",
        borderRadius: '18px',
        width: '100px',
        height: '100px',
        margin: '10px',
        padding: '2px',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 4px 1px #ccc',
    };
    return <Grid item>
        <div style={style}>
            <img alt={props.tech} style={{borderRadius: '15px'}} src={props.image} width={80} height={80}/>
            <p style={{color: '#343434'}}>{props.tech}</p>
        </div>

    </Grid>
}

export default TechStack