import React, { Component } from 'react';

// Full Screen Library (https://github.com/sindresorhus/screenfull.js)
import * as screenfull from 'screenfull';

// Styles
import { ReadabilityBox } from './styles';


export default class Readability extends Component {


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
    }

    this.setState({
      isFullScreen: !this.state.isFullScreen
    });
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
    return (
      // Readability
      <ReadabilityBox>
        <div className="config">
          <button className="btn-config-toggle" onClick={this.toggleConfigPanel}><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU0IDU0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NCA1NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8Zz4KCTxwYXRoIGQ9Ik01MS4yMiwyMWgtNS4wNTJjLTAuODEyLDAtMS40ODEtMC40NDctMS43OTItMS4xOTdzLTAuMTUzLTEuNTQsMC40Mi0yLjExNGwzLjU3Mi0zLjU3MSAgIGMwLjUyNS0wLjUyNSwwLjgxNC0xLjIyNCwwLjgxNC0xLjk2NmMwLTAuNzQzLTAuMjg5LTEuNDQxLTAuODE0LTEuOTY3bC00LjU1My00LjU1M2MtMS4wNS0xLjA1LTIuODgxLTEuMDUyLTMuOTMzLDBsLTMuNTcxLDMuNTcxICAgYy0wLjU3NCwwLjU3My0xLjM2NiwwLjczMy0yLjExNCwwLjQyMUMzMy40NDcsOS4zMTMsMzMsOC42NDQsMzMsNy44MzJWMi43OEMzMywxLjI0NywzMS43NTMsMCwzMC4yMiwwSDIzLjc4ICAgQzIyLjI0NywwLDIxLDEuMjQ3LDIxLDIuNzh2NS4wNTJjMCwwLjgxMi0wLjQ0NywxLjQ4MS0xLjE5NywxLjc5MmMtMC43NDgsMC4zMTMtMS41NCwwLjE1Mi0yLjExNC0wLjQyMWwtMy41NzEtMy41NzEgICBjLTEuMDUyLTEuMDUyLTIuODgzLTEuMDUtMy45MzMsMGwtNC41NTMsNC41NTNjLTAuNTI1LDAuNTI1LTAuODE0LDEuMjI0LTAuODE0LDEuOTY3YzAsMC43NDIsMC4yODksMS40NCwwLjgxNCwxLjk2NmwzLjU3MiwzLjU3MSAgIGMwLjU3MywwLjU3NCwwLjczLDEuMzY0LDAuNDIsMi4xMTRTOC42NDQsMjEsNy44MzIsMjFIMi43OEMxLjI0NywyMSwwLDIyLjI0NywwLDIzLjc4djYuNDM5QzAsMzEuNzUzLDEuMjQ3LDMzLDIuNzgsMzNoNS4wNTIgICBjMC44MTIsMCwxLjQ4MSwwLjQ0NywxLjc5MiwxLjE5N3MwLjE1MywxLjU0LTAuNDIsMi4xMTRsLTMuNTcyLDMuNTcxYy0wLjUyNSwwLjUyNS0wLjgxNCwxLjIyNC0wLjgxNCwxLjk2NiAgIGMwLDAuNzQzLDAuMjg5LDEuNDQxLDAuODE0LDEuOTY3bDQuNTUzLDQuNTUzYzEuMDUxLDEuMDUxLDIuODgxLDEuMDUzLDMuOTMzLDBsMy41NzEtMy41NzJjMC41NzQtMC41NzMsMS4zNjMtMC43MzEsMi4xMTQtMC40MiAgIGMwLjc1LDAuMzExLDEuMTk3LDAuOTgsMS4xOTcsMS43OTJ2NS4wNTJjMCwxLjUzMywxLjI0NywyLjc4LDIuNzgsMi43OGg2LjQzOWMxLjUzMywwLDIuNzgtMS4yNDcsMi43OC0yLjc4di01LjA1MiAgIGMwLTAuODEyLDAuNDQ3LTEuNDgxLDEuMTk3LTEuNzkyYzAuNzUxLTAuMzEyLDEuNTQtMC4xNTMsMi4xMTQsMC40MmwzLjU3MSwzLjU3MmMxLjA1MiwxLjA1MiwyLjg4MywxLjA1LDMuOTMzLDBsNC41NTMtNC41NTMgICBjMC41MjUtMC41MjUsMC44MTQtMS4yMjQsMC44MTQtMS45NjdjMC0wLjc0Mi0wLjI4OS0xLjQ0LTAuODE0LTEuOTY2bC0zLjU3Mi0zLjU3MWMtMC41NzMtMC41NzQtMC43My0xLjM2NC0wLjQyLTIuMTE0ICAgUzQ1LjM1NiwzMyw0Ni4xNjgsMzNoNS4wNTJjMS41MzMsMCwyLjc4LTEuMjQ3LDIuNzgtMi43OFYyMy43OEM1NCwyMi4yNDcsNTIuNzUzLDIxLDUxLjIyLDIxeiBNNTIsMzAuMjIgICBDNTIsMzAuNjUsNTEuNjUsMzEsNTEuMjIsMzFoLTUuMDUyYy0xLjYyNCwwLTMuMDE5LDAuOTMyLTMuNjQsMi40MzJjLTAuNjIyLDEuNS0wLjI5NSwzLjE0NiwwLjg1NCw0LjI5NGwzLjU3MiwzLjU3MSAgIGMwLjMwNSwwLjMwNSwwLjMwNSwwLjgsMCwxLjEwNGwtNC41NTMsNC41NTNjLTAuMzA0LDAuMzA0LTAuNzk5LDAuMzA2LTEuMTA0LDBsLTMuNTcxLTMuNTcyYy0xLjE0OS0xLjE0OS0yLjc5NC0xLjQ3NC00LjI5NC0wLjg1NCAgIGMtMS41LDAuNjIxLTIuNDMyLDIuMDE2LTIuNDMyLDMuNjR2NS4wNTJDMzEsNTEuNjUsMzAuNjUsNTIsMzAuMjIsNTJIMjMuNzhDMjMuMzUsNTIsMjMsNTEuNjUsMjMsNTEuMjJ2LTUuMDUyICAgYzAtMS42MjQtMC45MzItMy4wMTktMi40MzItMy42NGMtMC41MDMtMC4yMDktMS4wMjEtMC4zMTEtMS41MzMtMC4zMTFjLTEuMDE0LDAtMS45OTcsMC40LTIuNzYxLDEuMTY0bC0zLjU3MSwzLjU3MiAgIGMtMC4zMDYsMC4zMDYtMC44MDEsMC4zMDQtMS4xMDQsMGwtNC41NTMtNC41NTNjLTAuMzA1LTAuMzA1LTAuMzA1LTAuOCwwLTEuMTA0bDMuNTcyLTMuNTcxYzEuMTQ4LTEuMTQ4LDEuNDc2LTIuNzk0LDAuODU0LTQuMjk0ICAgQzEwLjg1MSwzMS45MzIsOS40NTYsMzEsNy44MzIsMzFIMi43OEMyLjM1LDMxLDIsMzAuNjUsMiwzMC4yMlYyMy43OEMyLDIzLjM1LDIuMzUsMjMsMi43OCwyM2g1LjA1MiAgIGMxLjYyNCwwLDMuMDE5LTAuOTMyLDMuNjQtMi40MzJjMC42MjItMS41LDAuMjk1LTMuMTQ2LTAuODU0LTQuMjk0bC0zLjU3Mi0zLjU3MWMtMC4zMDUtMC4zMDUtMC4zMDUtMC44LDAtMS4xMDRsNC41NTMtNC41NTMgICBjMC4zMDQtMC4zMDUsMC43OTktMC4zMDUsMS4xMDQsMGwzLjU3MSwzLjU3MWMxLjE0NywxLjE0NywyLjc5MiwxLjQ3Niw0LjI5NCwwLjg1NEMyMi4wNjgsMTAuODUxLDIzLDkuNDU2LDIzLDcuODMyVjIuNzggICBDMjMsMi4zNSwyMy4zNSwyLDIzLjc4LDJoNi40MzlDMzAuNjUsMiwzMSwyLjM1LDMxLDIuNzh2NS4wNTJjMCwxLjYyNCwwLjkzMiwzLjAxOSwyLjQzMiwzLjY0ICAgYzEuNTAyLDAuNjIyLDMuMTQ2LDAuMjk0LDQuMjk0LTAuODU0bDMuNTcxLTMuNTcxYzAuMzA2LTAuMzA1LDAuODAxLTAuMzA1LDEuMTA0LDBsNC41NTMsNC41NTNjMC4zMDUsMC4zMDUsMC4zMDUsMC44LDAsMS4xMDQgICBsLTMuNTcyLDMuNTcxYy0xLjE0OCwxLjE0OC0xLjQ3NiwyLjc5NC0wLjg1NCw0LjI5NGMwLjYyMSwxLjUsMi4wMTYsMi40MzIsMy42NCwyLjQzMmg1LjA1MkM1MS42NSwyMyw1MiwyMy4zNSw1MiwyMy43OFYzMC4yMnoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik0yNywxOGMtNC45NjMsMC05LDQuMDM3LTksOXM0LjAzNyw5LDksOXM5LTQuMDM3LDktOVMzMS45NjMsMTgsMjcsMTh6IE0yNywzNGMtMy44NTksMC03LTMuMTQxLTctN3MzLjE0MS03LDctNyAgIHM3LDMuMTQxLDcsN1MzMC44NTksMzQsMjcsMzR6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" alt=""/></button>
          <div className={this.state.isHidden ? 'config-panel' : 'config-panel active'}>
            <ul>
              <li><button className={this.state.isFullScreen ? 'btn-config active' : 'btn-config'} onClick={this.toggleFullScreen}>Full Screen</button></li>
              <li><button className={this.state.isEnlargedText ? 'btn-config active' : 'btn-config'} onClick={this.enlargedText}>Enlarged Text</button></li>
              <li><button className={this.state.isNightTheme ? 'btn-config active' : 'btn-config'} onClick={this.nightTheme}>Night Theme</button></li>
            </ul>
          </div>
        </div>
      </ReadabilityBox>
    );
  }
}