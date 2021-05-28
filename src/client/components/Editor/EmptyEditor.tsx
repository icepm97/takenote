import React from 'react'
import Dictaphone from './VoiceRecognition'

export const EmptyEditor: React.FC = () => {
  return (
    <div className="empty-editor v-center" data-testid="empty-editor">
      <div className="text-center">
        <p>
          <strong>Create a note</strong>
        </p>
        <p>
          <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>N</kbd>
        </p>
      <Dictaphone></Dictaphone>
      </div>
    </div>
  )
}
