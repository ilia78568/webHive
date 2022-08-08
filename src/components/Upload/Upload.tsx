import {useRef, useState} from "react";
import styles from './styles.module.scss'
import {Image} from "../Image";
import {ImageTypes} from "../Image/constants";

const Upload = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    let inputFile: string = '';

    const inputRef = useRef(null)

    const fd = (e: any) => {

        e.preventDefault();
        // @ts-ignore
        inputFile.click();
        return false;
    }

    return (
        <div>
            <h1>Upload and Display Image usign React Hook's</h1>
                <div onClick={fd}>
                    {selectedImage ? <img  alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} /> : <Image width={55} height={60} type={ImageTypes.companyLogo} />}
                </div>

            <input
                type="file"
                name="myImage"
                style={{visibility: 'hidden'}}
                ref={input => {
                    // assigns a reference so we can trigger it later
                    // @ts-ignore
                    inputFile = input;
                }}
                onChange={(event: any) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    )
}

export default Upload