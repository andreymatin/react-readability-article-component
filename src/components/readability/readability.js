import React, { Component } from 'react';

// Full Screen Library (https://github.com/sindresorhus/screenfull.js)
import screenfull from 'screenfull';

// Styles
import { ReadabilityBox } from './styles';

// Image
import {ReactComponent as IconConfig} from './icon-config.svg';

/**
 * Readability Component
 */
export default class Readability extends Component {

  /**
   * State
   */
  state = {
    isHidden: true,
    isFullScreen: false,
    isEnlargedText: false,
    isNightTheme: false,
    isSpeech: false
  }

  /**
   * Toggle Config Panel
   */
  toggleConfigPanel = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  /**
   * Toggle Full Screen
   */
  toggleFullScreen = () => {
    if (screenfull.enabled) {
      screenfull.toggle();

      this.setState({
        isFullScreen: !this.state.isFullScreen
      });
    }
  }

  /**
   * Toggle Font Size
   */
  enlargedText = () => {
    this.setState({
      isEnlargedText: !this.state.isEnlargedText
    });

    document.documentElement.classList.toggle('increase-font-size');
  }

  /**
   * Toggle theme
   */
  onNightTheme = () => {
    this.setState({
      isNightTheme: !this.state.isNightTheme
    });

    document.documentElement.classList.toggle('theme-night');
  }

  /**
   * Text Speaker
   * Speech Synthesis API
	 * https://developer.mozilla.org/en/docs/Web/API/SpeechSynthesis
   */
  onSpeech = () => {
    this.setState({
      isSpeech: !this.state.isSpeech
    });

    const text = `
      Title: Header.
      Subtitle: Summary subtitle.
      Author: John Doe.
      Date: 12, February, 2019
      Article Content:
      Chapter 1: Basic Typography calculations + ligature.
      Igature Test: fi fl ff fb ffb fh ffh ffi fj ffj fk ffk fl st ct.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. etc.
      Chapter 2: Advanced Typography Features with Font Metrics
      Lorem ipsum dolor sit amet consectetur adipisicing elit. etc.
      Subtitle: List Example
      List Item 1: Coffee
      List Item 2: Tea
      List Item 3: Milk
    `;
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.pitch = 1;
    if (this.state.isSpeech) {
      speechSynthesis.cancel(utterance);
    } else {
      speechSynthesis.speak(utterance);
    }
  }

  render() {
    const {isHidden, isFullScreen, isEnlargedText, isNightTheme, isSpeech} = this.state;

    // Status Buttons
    const statusHidden = isHidden ? '' : 'active'
    const statusFullScreen = isFullScreen ? 'active' : '';
    const statusEnlargedText = isEnlargedText ? 'active' : '';
    const statusNightTheme = isNightTheme ? 'active' : '';
    const statusSpeech = isSpeech ? 'active' : '';

    // Check Screenfull event
    if (screenfull.enabled) {
      screenfull.on('change', () => {
        this.setState({
          isFullScreen: screenfull.isFullscreen
        });
      });
    }

    // Check speechSynthesis API availability
    let isSpeechAPI = false;
    if ('speechSynthesis' in window) {
      isSpeechAPI = true;
    }

    return (
      // Readability
      <ReadabilityBox className="config">
        <button className="btn-config-toggle" onClick={this.toggleConfigPanel}><IconConfig /></button>
        <div className={`config-panel ${statusHidden}`}>
          <ul>
            <li>
              <button
                className={`btn-config btn-fullscreen ${statusFullScreen}`}
                onClick={this.toggleFullScreen}>Full Screen</button>
            </li>
            <li>
              <button
                className={`btn-config ${statusEnlargedText}`}
                onClick={this.enlargedText}>Enlarged Text</button>
            </li>
            <li>
              <button
                className={`btn-config ${statusNightTheme}`}
                onClick={this.onNightTheme}>Night Theme</button>
            </li>
            <li>
              {isSpeechAPI ?
              <button
                className={`btn-config ${statusSpeech}`}
                onClick={this.onSpeech}>Speech</button>
                : null
              }
            </li>

          </ul>
        </div>
      </ReadabilityBox>
    );
  }
}