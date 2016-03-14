<?php  
/*
 * This file is part of Flarum.
 *
 * (c) Ignivis <ignivis@ignivis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Ignivis\Termlink\Listener;
use DirectoryIterator;
use Flarum\Event\ConfigureClientView;
use Flarum\Event\ConfigureLocales;
use Illuminate\Contracts\Events\Dispatcher;

class AddClientAssets
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureClientView::class, [$this, 'addAssets']);
		$events->listen(ConfigureLocales::class, [$this, 'addLocales']);
    }

    /**
     * @param ConfigureClientView $event
     */
    public function addAssets(ConfigureClientView $event)
    {
        if ($event->isForum()) {
            $event->addAssets([
                __DIR__ . '/../../js/forum/dist/extension.js',
                __DIR__ . '/../../less/forum/extension.less'
            ]);
            $event->addBootstrapper('ignivis/termlink/main');
        }

        if ($event->isAdmin()) {
            $event->addAssets([
                __DIR__ . '/../../js/admin/dist/extension.js'
            ]);
            $event->addBootstrapper('ignivis/termlink/main');
        }
    }
  public function addLocales(ConfigureLocales $event)
  {
    foreach (new DirectoryIterator(__DIR__.'/../../locale') as $file) {
      if ($file->isFile() && in_array($file->getExtension(), ['yml', 'yaml'])) {
        $event->locales->addTranslations($file->getBasename('.'.$file->getExtension()), $file->getPathname());
      }
    }
  }
}
