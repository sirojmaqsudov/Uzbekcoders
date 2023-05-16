import React, {useState} from 'react';

const Code = ({code, url, text=null}) => {
    const [copy, setCopy] = useState(`-z-10`)
    const CopyToClipboard = async () => {
        // let textField = document.createElement('textarea')
        // textField.innerText = code
        // document.body.appendChild(textField)
        // textField.select()
        // document.execCommand('copy')
        // textField.remove()
        await navigator.clipboard.writeText(code);
        console.log('Content copied to clipboard');

        setCopy(`z-10`)
        setTimeout(() => {
            setCopy(`-z-10`)
        }, 700)
    }

    return (
        <div className='Code w-[300px] h-[300px] flex flex-col' onClick={CopyToClipboard}>
            <img src={url} alt="" className='w-[300px] h-[300px] object-cover'/>
            {text && <h1 className='text-center'>{text}</h1>}
            <div className={`thumbnail w-[300px] h-[300px] bg-lime-500 absolute ${copy} flex justify-center items-center`}>
                <h1 className='text-white font-semibold '>Copied 📋</h1>
            </div>
        </div>
    );
};

export default Code;