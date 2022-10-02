import { useRef } from 'react';
import PropTypes from 'prop-types';

import './ListItem.css';

const ListItem = ({ image, actionText, onClick }) => {

    const shortName = (name) => {
        let shortName = name.split('.').slice(0, -1).join('.');
        let ext = name.replace(shortName, '');

        if (shortName.length > 5) {
            return shortName.substr(0, 5) + '... ' + ext;

        } else {
            return shortName + ext;
        }
    }

    const getFileSize = (bytes) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

        if (bytes === 0) {
            return '0 Byte';
        }

        let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        let num = bytes / Math.pow(1024, i);

        return num.toFixed(2) + ' ' + sizes[i];
    }

    return (
        <button className={`listItem ${image.error && 'error'}`} title={image.name} onClick={onClick}>
            <div className="listItem--img" style={{ backgroundImage: `url(${image.base64})` }}></div>
            <p className="listItem--name">{ shortName(image.name) }</p>
            <p className="listItem--text">{ (image.error) ? image.error : getFileSize(image.size)}</p>
            <p className="listItem--message">{ actionText }</p>
        </button>
    );

}


ListItem.propTypes = {
    image: PropTypes.any.isRequired,
    actionText: PropTypes.string.isRequired,
}


export default ListItem;