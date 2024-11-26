'use client'; 

import { useState } from 'react';

export default function Toggle() {
    const [isAdsEnabled, setIsAdsEnabled] = useState(true); // Default to "enabled"

    const handleToggle = () => {
        setIsAdsEnabled(!isAdsEnabled);
        console.log(`Personalized Ads: ${!isAdsEnabled ? 'Enabled' : 'Disabled'}`);
    };

    return (
        <div>
            <div id="toggle-container">
                <label id="toggle-label">Personalized Ads: {isAdsEnabled ? <span className='text-green-500'>Enabled</span> : <span className='text-red-500'>Disabled</span>}
                    <div>{isAdsEnabled ? "Yes, use my activity to show more relevant ads" : "No, don't use my activity for ad personalization"}</div>
                </label>
                <div id="toggle-switch" onClick={handleToggle}>

                    <div id="toggle-knob" style={{ transform: isAdsEnabled ? 'translateX(25px)' : 'translateX(0)' }}></div>
                </div>
                
            </div>   
        </div>

    );
}
