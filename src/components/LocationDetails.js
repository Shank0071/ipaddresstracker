import './LocationDetails.css'


export default function LocationDetails({data}) {
    
    
  
  return (
    <div className='LocationDetails'>
        <div className="container">
            <small>IP ADDRESS</small>
            {data && (<h2>{data.ip}</h2>)}
        </div>
        <div className="container">
            <small>LOCATION</small>
            {data && (<h2>{data.location.country}</h2>)}

        </div>
        <div className="container">
            <small>TIMEZONE</small>
            {data && <h2>{data.location.timezone}</h2>}

        </div>
        <div className="container">
            <small>ISP</small>
            {data && <h2>{data.isp}</h2>}

        </div>
    </div>
  )
}
