#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

// change to parent directory so all paths are relative to the top dir
process.chdir(path.dirname(__dirname));

var targetFile = path.join(__dirname, "spice_web_client.js");

var files = [
    "lib/jsbn.js",
    "lib/jsbn2.js",
    "lib/sha1.js",
    "lib/encrypt.js",
    "swcanvas/swcanvas.js",
    "lib/utils.js",
    "lib/flipper.js",
    "lib/CollisionDetector.js",
    "lib/GlobalPool.js",
    "lib/GenericObjectPool.js",
    "lib/AsyncConsumer.js",
    "lib/AsyncWorker.js",
    "lib/PacketWorkerIdentifier.js",
    "spiceobjects/spiceobjects.js",
    "spiceobjects/generated/protocol.js",
    "lib/graphicdebug.js",
    "lib/images/lz.js",
    "lib/images/bitmap.js",
    "lib/images/png.js",
    "lib/runqueue.js",
    "lib/graphic.js",
    "lib/queue.js",
    "lib/ImageUncompressor.js",
    "lib/SyncAsyncHandler.js",
    "lib/IntegrationBenchmark.js",
    "lib/stuckkeyshandler.js",
    "lib/timelapsedetector.js",
    "lib/displayRouter.js",
    "lib/rasterEngine.js",
    "lib/DataLogger.js",
    "network/socket.js",
    "network/clusternodechooser.js",
    "network/socketqueue.js",
    "network/packetcontroller.js",
    "network/packetextractor.js",
    "network/packetreassembler.js",
    "network/reassemblerfactory.js",
    "network/sizedefiner.js",
    "network/packetlinkfactory.js",
    "network/spicechannel.js",
    "network/busconnection.js",
    "network/websocketwrapper.js",
    "network/connectioncontrol.js",
    "application/agent.js",
    "application/spiceconnection.js",
    "application/clientgui.js",
    "application/packetprocess.js",
    "application/packetfilter.js",
    "application/packetfactory.js",
    "application/application.js",
    "application/virtualmouse.js",
    "application/imagecache.js",
    "application/rasteroperation.js",
    "application/stream.js",
    "application/inputmanager.js",
    "process/busprocess.js",
    "process/displayprocess.js",
    "process/displaypreprocess.js",
    "process/inputprocess.js",
    "process/cursorprocess.js",
    "process/playbackprocess.js",
    "process/mainprocess.js",
    "keymaps/keymapes.js",
    "keymaps/keymapit.js",
    "keymaps/keymapus.js",
    "keymaps/keymapfr.js",
    "keymaps/keymapru.js",
    "keymaps/keymap.js",
    "flexvdi/inactivity.js",
    "flexvdi/flexvdi.js",
    "flexvdi/extwin.js",
    "translation.js"
];

var exportString = "\nmodule.exports = wdi; \n";

console.log("Will generate %s", targetFile);
if (fs.existsSync(targetFile)) {
	fs.unlinkSync(targetFile);
}

files.forEach(function (file) {
	var data = fs.readFileSync(file);
	console.log('... appending %s', file);
	fs.appendFileSync(targetFile, data);
});

console.log("Done! Appending module.exports line...");
fs.appendFileSync(targetFile, exportString);

console.log("Finish... Everything is stored in %s", targetFile);
