<?php 

/*
 * This file is part of Flarum.
 *
 * (c) Ignivis <ignivis@ignivis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Ignivis\Termlink\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);

};