import { ReactMouseEvent } from '@/types'
import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import "regenerator-runtime/runtime.js";

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
      <button onClick={async (event: React.MouseEvent<HTMLButtonElement>) => {
          await SpeechRecognition.startListening()}}>Start</button>
      <button onClick={async (event: React.MouseEvent<HTMLButtonElement>) => {
          SpeechRecognition.stopListening()
          console.log(transcript)}}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone