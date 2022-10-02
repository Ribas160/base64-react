import { useState } from 'react';

import Header from '../../components/header/Header';
import Button from "../../components/button/Button";
import ListItem from "../../components/list/ListItem";
import ListItemAction from '../../components/list/ListItemAction';

import './Decode.css';

const Decode = () => {

    const [images, setImages] = useState([]);
    const [base64, setBase64] = useState('');

    const loadImage = () => {
        let matches = base64.match(/data:image\/(jpeg|png|svg|webp|gif|bmp)/);

        let newImage = {
            name: 'image',
            size: base64.length,
            base64: base64,
            error: '',
        };

        if (matches === null || typeof matches[1] === 'undefined') {
            newImage.error = 'Invalid image format';

        } else {
            newImage.name = newImage.name + '.' + matches[1];
        }

        if (!newImage.error) {
            let img = new Image();
            img.onerror = () => {
                newImage.error = 'Invalid Base64';
            }
            img.src = base64;
            img = null;
        }

        setImages([...images, newImage]);
    }


    const downloadImage = (e, img) => {
        if (img.error) {
            return;
        }

        let a = document.createElement('a');
        a.setAttribute('href', img.base64);
        a.setAttribute('download', img.name);
        a.click();
        a.remove();

        ListItemAction.action(e);
    }

    return (
        <>
            <Header />
            <main className="decode">
                <div className="container">
                    <textarea 
                        placeholder="Enter your code" 
                        autoComplete="off" 
                        autoCorrect="off" 
                        autoCapitalize="off" 
                        spellCheck="false" 
                        col="1"
                        onChange={(e) => setBase64(e.target.value)}
                    >
                    </textarea>
                    <Button text="Decode" activeInput={false} onClick={loadImage} />
                    <ul>
                        {images.map((image, i) => (
                            <li key={i}>
                                <ListItem image={image} actionText="Saved" onClick={(e) => downloadImage(e, image)} />
                            </li>
                        ))}
                    </ul>
                </div>			
            </main>
        </>
    );

}


export default Decode;