import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';




const Speech = () => {
            const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
            const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
            if (!browserSupportsSpeechRecognition) {
                        return <div>Browser doesn't support speech recognition.</div>;
            }
            return (
                        <>

                                    <div className='text-area'>
                                                {transcript}
                                    </div>

                                    <div className='btn-style'>
                                                <button>copy</button>
                                                <button onClick={startListening}>Start Listening</button>
                                                <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                                    </div>
                        </>

            )
}

export default Speech