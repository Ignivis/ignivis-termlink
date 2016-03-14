import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';

app.initializers.add('ignivis-termlink', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('termlink',
      <div
        className="LogInButton--terms">
        {app.translator.trans('ignivis-favicon.forum.termscond-text')} <a href="terms.php">{app.translator.trans('ignivis-favicon.forum.termscond-prav')}</a>
      </div>
    );
  });
});
