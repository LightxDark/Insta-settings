import { useEffect, useState } from "react";

export default function Modal({ onClose }) {
    const [show, setShow] = useState(false);

    // Show the modal after the component mounts
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000);
        return () => clearTimeout(timer); 
    }, []);

    // Close the modal
    const handleClose = () => {
        setShow(false);
        onClose(); 
    };

    if (!show) return null; 

    return (
        <div id="modalBackdrop">
            <div id="modalContent" className=" ">
                <h2>Personalized Ads Information</h2>
                <p>Here's some important information about how personalized ads work on Instagram.</p>
                <div className="text-center"> <button onClick={handleClose} id="closeButton" className=" font-semibold text-center">Got It</button>
                </div>
            </div>
        </div>

    );
}