import React, { Component } from 'react';

import ErrorHandler from '../error-handler';

// Full Screen Library (https://github.com/sindresorhus/screenfull.js)
import screenfull from 'screenfull';

// Styles
import { ReadabilityBox } from './styles';

// Image
import { ReactComponent as IconConfig } from './icon-config.svg';

// Service
import FlatService from '../../services/flat-service';

/**
 * Readability Component
 */
export default class Readability extends Component {

  /**
   * Get Data
   */
  flatService = new FlatService();

  /**
   * Constructor
   */
  constructor() {
    super();

    // Get speech content
    this.getSpeechСontent();
  }

  /**
   * Mounted Status
   */
  componentDidMount() {
    // Check Screenfull event
    if (screenfull.enabled) {
      screenfull.on('change', () => {
        this.setState({
          isFullScreen: screenfull.isFullscreen
        });
      });
    }

    // Check speechSynthesis API availability
    if ('speechSynthesis' in window) {

      // @todo .addEventListener('end', function(event) { });

      this.setState({
        isSpeechAPI: true
      });
    }
  }


  /**
   * State
   */
  state = {
    isHidden: true,
    isFullScreen: false,
    isEnlargedText: false,
    isNightTheme: false,
    isSpeech: false,
    isSpeechAPI: false,
    speechContent: null,
    loading: true
  }

  onSpeechContentLoaded = (text) => {
    this.setState({
      speechContent: text,
      loading: false,
      error: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  /**
   * Get Speech Content
   */
  getSpeechСontent = () => {
    this.flatService
      .getDumpSpeech()
      .then(this.onSpeechContentLoaded)
      .catch(this.onError);
  };

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
      isSpeech: !this.state.isSpeech,
    });

    // Aticle content optimization
    const text = this.state.speechContent;
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.pitch = 1;
    if (this.state.isSpeech) {
      speechSynthesis.cancel(utterance);
    } else {
      speechSynthesis.speak(utterance);
    }
  }

  /**
   * Render component
   */
  render() {
    const { error, isHidden, isFullScreen, isEnlargedText, isNightTheme, isSpeech, isSpeechAPI } = this.state;

    // Erorr
    const errorMessage = error ? <ErrorHandler /> : null;

    // Status Buttons
    const statusHidden = isHidden ? '' : 'active'
    const statusFullScreen = isFullScreen ? 'active' : '';
    const statusEnlargedText = isEnlargedText ? 'active' : '';
    const statusNightTheme = isNightTheme ? 'active' : '';
    const statusSpeech = isSpeech ? 'active' : '';

    return (
      // Readability
      <ReadabilityBox className="config">
        {errorMessage}
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