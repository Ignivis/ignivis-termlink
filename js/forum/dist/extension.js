System.register('ignivis/termlink/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons'], function (_export) {
  'use strict';

  var extend, app, LogInButtons;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons['default'];
    }],
    execute: function () {

      app.initializers.add('ignivis-termlink', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('termlink', m(
            'div',
            {
              className: 'LogInButton--terms' },
            app.translator.trans('ignivis-favicon.forum.termscond-text'),
            ' ',
            m(
              'a',
              { href: 'terms.php' },
              app.translator.trans('ignivis-favicon.forum.termscond-prav')
            )
          ));
        });
      });
    }
  };
});