import { useEffect, useState } from 'react'

export const useSpeechRecognition = (language = 'en-US') => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new SpeechRecognition()
  recognition.continuous = true
  recognition.interimResults = true
  recognition.lang = language

  const [transcript, setTranscript] = useState('')
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    const handleResult = (event: SpeechRecognitionEvent) => {
      const text = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

      setTranscript(text)
    }

    if (isListening) {
      setTranscript('')
      recognition.start()
      recognition.addEventListener('result', handleResult)
    } else {
      recognition.stop()
      recognition.removeEventListener('result', handleResult)
    }

    return () => {
      recognition.removeEventListener('result', handleResult)
    }
  }, [isListening])

  return {
    transcript,
    isListening
  }
}
