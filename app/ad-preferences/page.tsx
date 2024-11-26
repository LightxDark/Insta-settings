'use client'

import Image from "next/image";
import Button from '../../components/Button';
import SideBar from '../../components/Sidebar';
import { useState } from 'react';
import Modal from '../../components/Modal';
import Toggle from '../../components/Toggle'
import Popup from '../../components/popup'

export default function AdPreferences() {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const handleButtonClick = (message: string) => {
        setPopupMessage(message); // Set the popup message dynamically
        setIsPopupOpen(true); // Open the popup
    };

    // Function to close the popup
    const closePopup = () => {
        setIsPopupOpen(false);
        setPopupMessage(''); // Clear message when popup closes
    };

    return (
        <div className="px-4 min-h-screen place-items-center">
            <div className="flex flex-1 w-1/2 ">
                <SideBar className={"px-2 w-1/3"}></SideBar>

                <hr className="bg-gray-950" />

                {/*The start of the Ad Preferences Page */}
                {isModalVisible && <Modal onClose={handleModalClose} />}

                <section className=" py-4 w-2/3 space-y-4">

                    <span className="font-semibold text-2xl">Ad Preferences</span>

                    <div className="">Take control of your ad experience and the information used to show you ads. </div>

                    <div className=" border rounded-3xl hover:bg-gray-200">

                        <div className=" p-4 cursor-pointer" onClick={() => handleButtonClick("PersonalizedAds")}>
                            <section className="flex ">
                                <div className="">
                                    <span className="flex flex-row justify-between items-center">Personalized Ads</span>
                                    Choose whether we use the information gathered to show ads that are more relevant to you


                                </div>
                                <Image src="https://www.svgrepo.com/show/535137/angle-right.svg" alt="" width={16} height={16} className=" " />

                            </section>


                        </div>

                    </div>

                    <div className=" ">
                        <div className="font-semibold">Learn more about ads privacy</div>
                        <div>Find out more about what information is used to show you ads, and how you can control your privacy.</div>
                    </div>

                    <section className="flex h-64 gap-x-4">
                        <div id="modalContent" className="bg-white p-8 rounded  w-1/3 space-y-4 border ">
                            <h2 className="text-xl mb-4 font-bold">What information is used to show me ads?</h2>
                            <p>We show you ads based on your information and activity. You get to control these settings.</p>

                            <div className=' text-center '>
                                <button
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    More details
                                </button>
                            </div>


                        </div>

                        <div id="modalContent" className="bg-white p-8 rounded w-1/3 space-y-4 flex-col border">
                            <h2 className="text-xl mb-4 font-bold ">Do we sell your information?</h2>
                            <p className=" h-16">No. We never sell your information.</p>
                            <p> </p>

                            <div className=' text-center'>
                                <button
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    More details
                                </button>
                            </div>


                        </div>
                    </section>



                </section>



                {/* Conditionally render Popup based on the state */}
                {isPopupOpen && <Popup message={popupMessage} onClose={closePopup} />}
            </div>
        </div>
    );
}
