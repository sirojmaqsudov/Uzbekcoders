import React from 'react';
import {toast, ToastContainer} from "react-toastify";

const Code = ({code, url, text=null}) => {
    const CopyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        toast.success('Copied', {
            position: 'top-center',
            theme: 'colored',
            duration: 500,
            autoClose: 1000,
            pauseOnHover: false
        })
    }

    return (
        <div className='Code min-w-[300px] min-h-[300px] flex flex-col justify-center items-center' onClick={CopyToClipboard}>
            <img src={url} alt="" className='w-[300px] h-[300px] object-cover'/>
            {text && <h1 className='mt-2 font-semibold'>{text}</h1>}
            <ToastContainer />
        </div>
    );
};

export default Code;