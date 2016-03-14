System.register('ignivis/termlink/components/TermlinkSettingsModal', ['flarum/components/SettingsModal'], function (_export) {
  'use strict';

  var SettingsModal, TermlinkSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal['default'];
    }],
    execute: function () {
      TermlinkSettingsModal = (function (_SettingsModal) {
        babelHelpers.inherits(TermlinkSettingsModal, _SettingsModal);

        function TermlinkSettingsModal() {
          babelHelpers.classCallCheck(this, TermlinkSettingsModal);
          babelHelpers.get(Object.getPrototypeOf(TermlinkSettingsModal.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(TermlinkSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'TermlinkSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return 'Termlink Settings';
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('ignivis-favicon.admin.favicon-folder')
              ),
              m(
                'p',
                null,
                app.translator.trans('ignivis-favicon.admin.download-pack'),
                ' ',
                m(
                  'a',
                  { href: 'https://realfavicongenerator.net/', target: '_blank' },
                  app.translator.trans('ignivis-favicon.admin.here')
                )
              ),
              m('input', { className: 'FormControl', bidi: this.setting('ignivis.favicon.folder') })
            )];
          }
        }]);
        return TermlinkSettingsModal;
      })(SettingsModal);

      _export('default', TermlinkSettingsModal);
    }
  };
});;
System.register('ignivis/termlink/main', ['flarum/extend', 'flarum/app', 'ignivis/termlink/components/TermlinkSettingsModal'], function (_export) {
  'use strict';

  var extend, app, TermlinkSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_ignivisTermlinkComponentsTermlinkSettingsModal) {
      TermlinkSettingsModal = _ignivisTermlinkComponentsTermlinkSettingsModal['default'];
    }],
    execute: function () {

      app.initializers.add('ignivis-termlink', function (app) {
        app.extensionSettings['ignivis-termlink'] = function () {
          return app.modal.show(new TermlinkSettingsModal());
        };
      });
    }
  };
});