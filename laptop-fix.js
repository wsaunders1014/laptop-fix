Hooks.on('init',() => {
	console.log('Laptop Fix')
	Game.prototype._displayUsabilityErrors = function() {
	    // Unsupported Chromium version
	    const MIN_CHROMIUM_VERSION = 80;
	    const chromium = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
	    if ( chromium && (parseInt(chromium[2]) < MIN_CHROMIUM_VERSION) ) {
	      ui.notifications.error(game.i18n.format("ERROR.ChromiumVersion", {
	        version: chromium[2],
	        minimum: MIN_CHROMIUM_VERSION
	      }), {permanent: true});
	    }
  	}
})
Hooks.on('renderSceneConfig',(object,html)=>{
	//console.log(object,html);
	html.find('form').wrapInner('<div class="scroll"></div>')
	let button = html.find('button[name="submit"]');
	html.find('form').append(button);
	if(typeof game.modules.get('MythicUI') !='undefined'){
		if(game.modules.get('MythicUI').active){
			html.find('form').addClass('mythicUI-fix')
		}
	}
})
Hooks.on('renderFilePicker',(object,html)=>{
	console.log(html)
	if(typeof game.modules.get('MythicUI') !='undefined'){
		if(game.modules.get('MythicUI').active){
			html.addClass('mythicUI-fix')
		}
	}
})
Hooks.on('renderModuleManagement', (object,html)=>{
	if(typeof game.modules.get('MythicUI') !='undefined'){
		if(game.modules.get('MythicUI').active){
			html.addClass('mythicUI-fix')
		}
	}
	if(typeof game.modules.get('find-the-culprit') !='undefined'){
		if(game.modules.get('find-the-culprit').active){
			html.addClass('culprit-fix')
		}
	}
	if(typeof game.modules.get('tidy-ui_game-settings') !='undefined'){
		if(game.modules.get('tidy-ui_game-settings').active){
			html.addClass('tidyUI-fix')
		}
	}
})