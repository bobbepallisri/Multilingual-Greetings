import {ButtonItem, LanguageButton} from './styledComponent'

const GreetingLanguages = props => {
  const {GreetingDetails, clickLanguage, isActiveTab} = props
  const {id, buttonText} = GreetingDetails

  const onClickLanguageButton = () => {
    clickLanguage(id)
  }

  const buttonBgColor = isActiveTab ? '#db1c48' : '#ffffff'

  const buttonTextColor = isActiveTab ? '#ffffff' : '#db1c48'

  return (
    <ButtonItem>
      <LanguageButton
        buttonBgColor={buttonBgColor}
        buttonTextColor={buttonTextColor}
        type="button"
        onClick={onClickLanguageButton}
      >
        {buttonText}
      </LanguageButton>
    </ButtonItem>
  )
}

export default GreetingLanguages
