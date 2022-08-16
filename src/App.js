import { useRef, useState } from "react";
import styled from "styled-components";
import Modal from "./components/modal";

 
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 50px;
    background-color: lightgrey;
`

const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 10px;
    width: 800px;
    min-height: 200px;
    background-color: #fff;
    img {
        height: 200px;
    }
`

function App() {
    const [showModal, setShowModal] = useState(false);
    const [images, setImages] = useState([]);
    const [imgLink, setLink] = useState('');

    const attach = useRef();
   
    function inputClicker() {
        attach.current.click();
    }

    function checkAttached(e) {
        let blob = new Blob(e.target.files);
        let link = URL.createObjectURL(blob);
        setLink(link);
    }

    return (
        <>  
            {showModal && <Modal images={images} setImages={setImages} closeModal={setShowModal} uploadPhoto={inputClicker} imgLink={imgLink} setLink={setLink}/>}
            <Container>
                <ImagesContainer>
                    {images.map((image, i) => <img src={image} key={i}/>)}
                </ImagesContainer>
                    <input ref={attach} type='file' hidden onChange={e => checkAttached(e)} />
                    <button onClick={() => setShowModal(true)}>upload</button>
            </Container>
        </> 
    );
}

export default App;
