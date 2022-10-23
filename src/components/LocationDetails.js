import './LocationDetails.css'


export default function LocationDetails({data}) {
    
    
  
  return (
    <div className='LocationDetails'>
        <div className="container">
            <small>IP ADDRESS</small>
            {data && (<h3>{data.ip}</h3>)}
        </div>
        <div className="container">
            <small>LOCATION</small>
            {data && (<h3>{data.location.country}</h3>)}

        </div>
        <div className="container">
            <small>TIMEZONE</small>
            {data && <h3>{data.location.timezone}</h3>}

        </div>
        <div className="container">
            <small>ISP</small>
            {data && <h3>{data.isp}</h3>}

        </div>
    </div>
  )
}
