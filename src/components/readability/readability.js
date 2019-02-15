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
    isNightTheme: false
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
  nightTheme = () => {
    this.setState({
      isNightTheme: !this.state.isNightTheme
    });

    document.documentElement.classList.toggle('theme-night');
  }

  render() {
    const {isHidden, isFullScreen, isEnlargedText, isNightTheme} = this.state;

    // Status Buttons
    const statusHidden = isHidden ? '' : 'active'
    const statusFullScreen = isFullScreen ? 'active' : '';
    const statusEnlargedText = isEnlargedText ? 'active' : '';
    const statusNightTheme = isNightTheme ? 'active' : '';

    // Check Screenfull event
    if (screenfull.enabled) {
      screenfull.on('change', () => {
        this.setState({
          isFullScreen: screenfull.isFullscreen
        });
      });
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
                onClick={this.nightTheme}>Night Theme</button>
            </li>
          </ul>
        </div>
      </ReadabilityBox>
    );
  }
}