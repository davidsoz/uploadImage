import styled from "styled-components";

const ModalWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    >div:last-child {
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 500px;
        height: 400px;
        position: absolute;
        top: 20%;
        left: calc(50% - 250px);
        z-index: 100;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        >div:last-child {
            display: flex;
            gap: 20px;
        }
        
        >.title {
            font-weight: bold;
        }
        >.image {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid black;
            width: 70%;
            height: 83%;
            overflow: hidden;
            border-radius: 50%;
            >img {
                height: 100%;
            }
            >div.choose_photo {
                position: absolute;
                opacity: 0.5;
                cursor: pointer;
            }
        }
    }
`
const BackDrop = styled.div`
    width: 100%;
    height: 100%;
    background-color: lightgray;
    opacity: 0.5;
`

function Modal({closeModal, uploadPhoto, imgLink, setLink, images, setImages}) {

    function saveImage() {
        if(!imgLink) return;
        let nextImages = [...images];
        nextImages.push(imgLink);
        setLink('');
        setImages(nextImages);
        closeModal(false);
    }

    function removeModal() {
        closeModal(false);
        setLink('');
    }

    return (
        <ModalWrapper>
            <BackDrop onClick={removeModal}/>
            <div>
                <div className="title">Image</div>
                <div className="image">
                    {imgLink && <img src={imgLink}/>}
                    <div className="choose_photo" onClick={uploadPhoto}>choose photo</div>
                </div>
                <div className="control">
                    <button onClick={saveImage}>OK</button>
                    <button onClick={removeModal}>close</button>
                </div>
            </div>
        </ModalWrapper>
    )
}

export default Modal;