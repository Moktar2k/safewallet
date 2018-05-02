import React from 'react';
import { translate } from '../../../translate/translate';

class Support extends React.Component {
  constructor() {
    super();
  }

  openExternalWindow(url) {
    return window.require('electron').shell.openExternal(url);
  }

  render() {
    return (
      <div className="page margin-left-0">
        <div className="page-content">
          <h2>{ translate('SETTINGS.SUPPORT') }</h2>
          <div className="row">
            <div className="col-sm-12 no-padding-left">
              <div className="support-box-wrapper">
                <div
                  className="support-box"
                  onClick={ () => this.openExternalWindow('http://support.ipv6admin.com') }>
                  <img
                    src="assets/images/cryptologo/supernet.png"
                    alt={ translate('SETTINGS.SUPPORT_TICKETS') } />
                  <div className="support-box-title">{ translate('SETTINGS.SUPPORT_TICKETS') }</div>
                  <div className="support-box-link">support.ipv6admin.com</div>
                </div>
              </div>
              <div className="support-box-wrapper">
                <div
                  className="support-box"
                  onClick={ () => this.openExternalWindow('https://sprnt.slack.com') }>
                  <img
                    src="assets/images/support/slack-icon.png"
                    alt="Slack" />
                  <div className="support-box-title">Slack</div>
                  <div className="support-box-link">sprnt.slack.com</div>
                </div>
              </div>
              <div className="support-box-wrapper">
                <div
                  className="support-box"
                  onClick={ () => this.openExternalWindow('http://slackinvite.ipv6admin.com/') }>
                  <img
                    src="assets/images/support/slack-invite-icon.png"
                    alt={ translate('SETTINGS.GET_SLACK_INVITE') } />
                  <div className="support-box-title">{ translate('SETTINGS.GET_SLACK_INVITE') }</div>
                  <div className="support-box-link">slackinvite.ipv6admin.com</div>
                </div>
              </div>
              <div className="support-box-wrapper">
                <div
                  className="support-box"
                  onClick={ () => this.openExternalWindow('https://github.com/fair-exchange/Safewallet') }>
                  <img
                    src="assets/images/support/github-icon.png"
                    alt="Github" />
                  <div className="support-box-title">Github</div>
                  <div className="support-box-link">github.com/fair-exchange/Safewallet</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row margin-top-30">
            <div className="col-sm-12">
              <p>
                For guides & FAQ please go to <a onClick={ () => this.openExternalWindow('https://support.safecoinplatform.com/support/home') }>https://support.safecoinplatform.com/support/home</a>
              </p>
              <p>
                To send feedback please open a ticket at <a onClick={ () => this.openExternalWindow('https://support.safecoinplatform.com/support/tickets/new') }>https://support.safecoinplatform.com/support/tickets/new</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
