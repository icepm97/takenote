import React, { useState } from 'react'
import { Mic, MicOff } from 'react-feather'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import { ReactMouseEvent } from '@/types'
import 'regenerator-runtime/runtime.js'

const VoiceRecognition = ({ speechDataCallback }) => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  const [state, setState] = useState(false)

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div className="dictaphone">
      {!state ? (
        <button
          className="record-button"
          onClick={async (event: React.MouseEvent<HTMLButtonElement>) => {
            setState(true)
            await SpeechRecognition.startListening({ continuous: true })
          }}
        >
          <Mic size={18} />
        </button>
      ) : (
        <button
          className="record-button"
          onClick={async (event: React.MouseEvent<HTMLButtonElement>) => {
            SpeechRecognition.stopListening()
            console.log(transcript)
            speechDataCallback(transcript)
            resetTranscript()
            setState(false)
          }}
        >
          <MicOff size={18} />
        </button>
      )}
      <p className="transcript">{transcript}</p>
    </div>
  )
}
export default VoiceRecognition
