// Dependencies
import React, { useEffect } from 'react'
import { Skeleton } from '@nextui-org/react'
//Components
import { ArrowsIcon, ClipboardIcon, MicrophoneIcon, SpeakerIcon, StopIcon } from './components/icons'
import { ButtonIcon, InterchangeButton } from './components/buttonsIcons'
import { LanguageSelector } from './components/languageSelector'
import { TextArea } from './components/textArea'
import { Header } from './components/headers'
//Hooks
import { useSupportedLanguages } from './hooks/useSupportedLanguages'
import { useSpeechRecognition } from './hooks/useSpeechRecognition'
import { useDebounce } from './hooks/useDebounce'
import { useStore } from './hooks/useStore'
//config
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from './lib/constants'
import { SectionType } from './types/types.d'
//Service
import translateText from './services/translate'

function App() {
  const {
    loading,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    setResult,
    setFromText,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage
  } = useStore()

  const fromLanguageVoice = VOICE_FOR_LANGUAGE[fromLanguage as keyof typeof VOICE_FOR_LANGUAGE] || undefined

  const { fromLanguages, toLanguages, isLoading: isLanguagesLoading } = useSupportedLanguages()
  const { transcript, isListening } = useSpeechRecognition(fromLanguageVoice)
  const debouncedFromText = useDebounce(fromText, 500)

  useEffect(() => {
    if (debouncedFromText === '') return
    translateText({ fromLanguage, toLanguage, text: debouncedFromText })
      .then(response => {
        if (response == null) return
        const { translatedText } = response
        setResult(translatedText)
      })
      .catch(() => {
        setResult('Error')
      })
  }, [debouncedFromText, fromLanguage, toLanguage])

  useEffect(() => {
    if (!isListening) return
    setFromText(transcript)
  }, [isListening, transcript])

  const handleClipboard = (): void => {
    navigator.clipboard.writeText(result).catch(() => {
      console.error('Error copying to clipboard')
    })
  }

  const handleFromSpeak = (): void => {
    const utterance = new SpeechSynthesisUtterance(fromText)
    utterance.lang = VOICE_FOR_LANGUAGE[fromLanguage as keyof typeof VOICE_FOR_LANGUAGE]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  const handleToSpeak = (): void => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage as keyof typeof VOICE_FOR_LANGUAGE]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  return (
    <>
      <Header />
      <main className='flex-1 flex items-start justify-center mt-14'>
        <div className='w-full max-w-screen-lg mx-auto p-4'>
          <h1 className='text-3xl text-center mb-6'>Google Translate clon</h1>
          <section className='flex items gap-4'>
            <div className='flex flex-col w-1/2 gap-4'>
              <Skeleton
                className='rounded-xl'
                isLoaded={!isLanguagesLoading}>
                <LanguageSelector
                  languageOptions={fromLanguages}
                  onChange={setFromLanguage}
                  type={SectionType.From}
                  value={fromLanguage}
                />
              </Skeleton>
              <div className='relative'>
                <TextArea
                  onChange={setFromText}
                  type={SectionType.From}
                  value={fromText}
                />
                <div className='absolute flex gap-2'>
                  <ButtonIcon
                    handleClick={handleFromSpeak}
                    isDisabled={fromLanguageVoice == null}>
                    {isListening ? <StopIcon /> : <MicrophoneIcon />}
                  </ButtonIcon>
                  {fromText && (
                    <ButtonIcon handleClick={handleFromSpeak}>
                      <SpeakerIcon />
                    </ButtonIcon>
                  )}
                </div>
              </div>
            </div>
            <InterchangeButton
              handleClick={interchangeLanguages}
              isDisabled={fromLanguage === AUTO_LANGUAGE}>
              <ArrowsIcon />
            </InterchangeButton>
            <div className='flex flex-col w-1/2 gap-4'>
              <Skeleton
                className='rounded-xl'
                isLoaded={!isLanguagesLoading}>
                <LanguageSelector
                  languageOptions={toLanguages}
                  onChange={setToLanguage}
                  type={SectionType.To}
                  value={toLanguage}
                />
              </Skeleton>
              <div className='relative'>
                <TextArea
                  loading={loading}
                  onChange={setResult}
                  type={SectionType.To}
                  value={result}
                />
                {fromText && (
                  <div className='absolute flex gap-2'>
                    <ButtonIcon handleClick={handleClipboard}>
                      <ClipboardIcon />
                    </ButtonIcon>
                    <ButtonIcon handleClick={handleToSpeak}>
                      <SpeakerIcon />
                    </ButtonIcon>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
