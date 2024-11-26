import React from 'react';
import Toggle from '../components/Toggle'

const Popup = ({ message, onClose }) => {
    if (message == "PersonalizedAds") {
        return (
            <div id="modalBackdrop">

                <div id="modalContent" className="bg-white p-8 rounded shadow-lg w-1/3 space-y-4">
                    <h2 className="text-xl mb-4 font-bold">Control Your Ad Experience</h2>
                    <p>To show you ads that matter to you, we may use your activity from our ad partners (e.g., sites you visit, apps you use, or purchases you make).</p>
                    <p>If you'd prefer not to have ads tailored to your preferences, you can opt out. Regardless of your choice, some anonymized data may still be used to improve our services as outlined in our <span className='text-blue-600 cursor-pointer'>Privacy Policy</span>.</p>

                    <section className='text-left'>
                        <Toggle />
                    </section>

                    <section className='flex flex-1 text-blue-600 pt-6'>
                        <a className=' '>Learn more about ad partners</a>
                        <a className=' '>See audience-based advertising details</a>
                    </section>
                    
                    <div className=' text-center'>
                        <button
                            onClick={onClose}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Close
                        </button>
                    </div>


                </div>

            </div>
        )
    }

    return (
        <div id="modalBackdrop" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div id="modalContent" className="bg-white p-8 rounded shadow-lg w-1/3">
                <h2 className="text-xl mb-4">Popup</h2>
                <p>{message}</p>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;
