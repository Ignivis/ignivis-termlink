import SettingsModal from 'flarum/components/SettingsModal';

export default class TermlinkSettingsModal extends SettingsModal {
  className() {
    return 'TermlinkSettingsModal Modal--small';
  }

  title() {
    return 'Termlink Settings';
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('ignivis-favicon.admin.favicon-folder')}</label>
        <p>{app.translator.trans('ignivis-favicon.admin.download-pack')} <a href="https://realfavicongenerator.net/" target="_blank">{app.translator.trans('ignivis-favicon.admin.here')}</a></p>
        <input className="FormControl" bidi={this.setting('ignivis.favicon.folder')}/>
      </div>
    ];
  }
}
