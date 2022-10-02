import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import Button from '../../components/button/Button';

import './Main.css';

const Main = () => {
    const navigate = useNavigate();

    const filesUploaded = (files) => {
        navigate('/encode', { state: { files: files } })
    }

    const toDecode = () => {
        navigate('/decode');
    }

    return (
        <main className="main">
            <div className="container">
                <Logo className="main--logo" />
                <h1>Convert your <span>Images</span> to <span>Base64</span> and back</h1>
                <p>
                    You can upload images as JPG, PNG, GIF, WebP, SVG or BMP and decode your Base64 images.
                </p>
                <div className="main__buttons">
                    <Button className="button" text="Encode" onFilesUploaded={filesUploaded}  />
                    <Button className="button" text="Decode" activeInput={false} onClick={toDecode} />
                </div>
            </div>
        </main>
    );
}

export default Main;