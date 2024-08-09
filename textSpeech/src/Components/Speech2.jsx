import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function VoiceCommand({ onCommand }) {
            const { transcript, resetTranscript } = useSpeechRecognition();

            const handleStart = () => {
                        SpeechRecognition.startListening({ continuous: true });
            };

            const handleStop = () => {
                        SpeechRecognition.stopListening();
                        onCommand(transcript.trim()); // Pass the command to parent component
                        resetTranscript(); // Clear the transcript for the next command
            };

            return (
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10 max-w-md mx-auto bg-white rounded-lg shadow-lg space-y-6">
                                    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center">Voice Command</h1>
                                    <p className="text-lg sm:text-xl text-gray-600 text-center">
                                                Shape name: <span className="font-medium text-gray-800">{transcript}</span>
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                                                <button
                                                            onClick={handleStart}
                                                            className="px-4 py-2 sm:px-5 sm:py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                >
                                                            Start Listening
                                                </button>
                                                <button
                                                            onClick={handleStop}
                                                            className="px-4 py-2 sm:px-5 sm:py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                                >
                                                            Stop Listening
                                                </button>
                                    </div>
                        </div>
            );
}

export default VoiceCommand;
