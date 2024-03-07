import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InfoElement({icon, heading, text, color}) {
    return(
        <div className="mt-6 lg:mt-0 w-72 flex flex-col justify-between items-start h-36">
            <FontAwesomeIcon icon={icon} size="2xl" color={color}/>
            <h3 className="font-bold text-gray-800">{heading}</h3>
            <p className="text-gray-500">{text}</p>
        </div>
    )
}

export default InfoElement