import { useState } from "react";
import styled from "styled-components";
import ImageUploader from "./components/ImageUploader";
import Modal from "./components/Modal";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 10px;
    button {
        cursor: pointer;
    }
`

const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 80%;
    min-height: 200px;
    max-height: 610px;
    padding: 5px;
    border: 1px solid lightgray;
    overflow-y: scroll;
    >img {
        height: 200px;
    }
`

function App() {
    const [showModal, setShowModal] = useState(false);
    const [images, setImages] = useState([]);

    function closeModalHandler() {
        setShowModal(false);
    }

    function showModalHadnler() {
        setShowModal(true);
    }

    function addImage(url) {
        if(!url) return;
        let nextImages = [...images];
        nextImages.push(url);
        setImages(nextImages);
        setShowModal(false);
    }

    return (
        <>  
        {
            showModal && 
            <Modal closeModal={closeModalHandler}>
                <ImageUploader closeModal={closeModalHandler} addImage={addImage}/>
            </Modal>
        }
        <Container>
            <ImageContainer>
                {images.map((image, i) => <img src={image} key={i} />)}
            </ImageContainer>
            <button onClick={showModalHadnler}>Add Photo</button>
        </Container> 
        </> 
    );
}

export default App;
