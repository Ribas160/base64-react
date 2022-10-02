import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import Header from '../../components/header/Header';
import ListItem from '../../components/list/ListItem';
import ListItemAction from "../../components/list/ListItemAction";

import { Encode as EncodeFiles } from '../../api/FileUploading';

import './Encode.css';

const Encode = () => {
    const location = useLocation();
    const [images, setImages] = useState([]);

    useEffect(() => {
        encodeImages();
        
    }, []);

    const encodeImages = async () => {
        let files = {};
        let imagesArr = [];

        if (!files.length && location.state.files) {
            files = location.state.files;
        }

        if (files) {
            for (const key in files) {

                if (key === 'length' || key === 'item') {
                    continue;
                }
    
                if (files[key]['size'] > (1048576 * 2)) {
                    imagesArr.push({
                        name: files[key]['name'],
                        size: files[key]['size'],
                        base64: '',
                        error: 'File is too big. Max. 2 MB per file.',
                    });

                } else {
                    let formData = new FormData();
                    formData.append(key, files[key]);
        
                    await EncodeFiles(formData).then(data => {
                        imagesArr.push(data[0]);
                    });
                }
            }

            files = {};
        }

        setImages(imagesArr);
    }

    const action = (e, base64) => {
        navigator.clipboard.writeText(base64).then(() => {
            ListItemAction.action(e);
        }, (err) => {
            console.log(err);
        });
    }

    return (
        <>
            <Header />
            <main className="encode">
                <div className="container">
                    <ul>
                        {images.map((image, i) => (
                            <li key={i}>
                                <ListItem image={image} actionText="Copied" onClick={(e) => action(e, image.base64)} />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    );
}


export default Encode;