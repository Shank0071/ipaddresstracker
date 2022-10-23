import './Header.css'
import arrow from '../images/icon-arrow.svg'
import LocationDetails from './LocationDetails'

export default function Header({data, handleChange}) {

  return (
    <div className='Header'>
        <h1>Ip Address Tracker</h1>
        <div className="input">
            <input type="text" placeholder='Search for any Ip address or domain' onChange={handleChange} required />
            <img src={arrow} alt="arrowIcon" onClick={handleChange}/>
        </div>
        <LocationDetails data={data}/>
    </div>
  )
}
