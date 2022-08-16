import { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    >div:last-child {
        display: flex;
        gap: 10px;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    width: 90%;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    >div {
        position: absolute;
        opacity: 0.5;
        cursor: pointer;
    }
    >img {
            height: 100%;
    }
`;

function ImageUploader({closeModal, addImage}) {
    const [imageUrl, setImageUrl] = useState('');
    const fileInput = useRef();

    function uploadTrigger() {
        fileInput.current.click();
    }

    function attachPhoto(e) {
        let blob = new Blob(e.target.files);
        let imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
    }

    

    return (
        <Wrapper>
            <div>Attach Photo</div>
            <ImageContainer>
                {imageUrl && <img src={imageUrl}/>}
                <input ref={fileInput} type='file' hidden onChange={attachPhoto}/>
                {!imageUrl && <div onClick={uploadTrigger}>choose photo</div>}
            </ImageContainer>
            <div>
                <button onClick={() => addImage(imageUrl)}>OK</button>
                <button onClick={closeModal}>Close</button>
            </div>
        </Wrapper>
    )
}

export default ImageUploader;