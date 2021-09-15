import CircularProgressbar from 'react-circular-progressbar';
const ProjCard = () => {
    return ( 
        <div className="proj-card">
                        
        <div style={{marginRight:'36px', height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <div>
            <p className="subtitle2 regular" style={{marginBottom:"8px"}} >Project Name</p>
            <p className="caption regular">Target Date</p>
            </div>
        <button className="start-btn outlined-btn small regular ">Start</button>
        </div>
        <div style={{ display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%" }}>

        <div style={{  height:"88px",
            width:"88px",}}>

        <CircularProgressbar 
        percentage={66}
        strokeWidth={16}
        styles={{
            
            
            
            path: {
                stroke: `#FF145F`,
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
            },
            trail: {
                // Trail color
                stroke: '#Fec539',
            },
            // Customize the text
            
            // Customize background - only used when the `background` prop is true
            background: {
                fill: '#3e98c7',
            },
        }}
        />
        </div>
        <p className="overline light">2/5</p>
        </div>
        
    </div>
     );
}
 
export default ProjCard;