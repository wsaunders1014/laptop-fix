Hooks.on('init',() => {;
	console.log('Laptop Fix')
	CONFIG.debug.hooks = true;
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