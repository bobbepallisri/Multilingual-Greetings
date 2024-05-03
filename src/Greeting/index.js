import {Component} from 'react'

import GreetingLanguages from '../GreetingLanguages'

import {
  AppContainer,
  GreetingContainer,
  Heading,
  ButtonsContainer,
  GreetingImageContainer,
  GreetingImage,
} from './styledComponent'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greeting extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  clickLanguage = id => {
    this.setState({activeId: id})
  }

  getFilterGreeting = () => {
    const {activeId} = this.state
    const filterGreeting = languageGreetingsList.filter(
      eachGreeting => eachGreeting.id === activeId,
    )
    return filterGreeting
  }

  render() {
    const {activeId} = this.state
    console.log(activeId)
    const filterGreeting = this.getFilterGreeting()
    console.log(filterGreeting)
    return (
      <AppContainer>
        <Heading>Multilingual Greetings</Heading>
        <GreetingContainer>
          <ButtonsContainer>
            {languageGreetingsList.map(eachGreeting => (
              <GreetingLanguages
                key={eachGreeting.id}
                GreetingDetails={eachGreeting}
                clickLanguage={this.clickLanguage}
                isActiveTab={activeId === eachGreeting.id}
              />
            ))}
          </ButtonsContainer>
          <GreetingImageContainer>
            {filterGreeting.map(eachItem => (
              <GreetingImage
                src={eachItem.imageUrl}
                alt={eachItem.imageAltText}
                key={eachItem.id}
              />
            ))}
          </GreetingImageContainer>
        </GreetingContainer>
      </AppContainer>
    )
  }
}

export default Greeting
