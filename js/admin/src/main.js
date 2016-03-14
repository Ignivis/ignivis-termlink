import { extend } from 'flarum/extend';
import app from 'flarum/app';

import TermlinkSettingsModal from 'ignivis/termlink/components/TermlinkSettingsModal';

app.initializers.add('ignivis-termlink', app => {
  app.extensionSettings['ignivis-termlink'] = () => app.modal.show(new TermlinkSettingsModal());
});
