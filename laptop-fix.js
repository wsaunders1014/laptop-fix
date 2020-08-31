Hooks.on('init',() => {;
	console.log('Laptop Fix')
	//CONFIG.debug.hooks = true;
})
Hooks.on('renderSceneConfig',(object,html)=>{
	//console.log(object,html);
	html.find('form').wrapInner('<div class="scroll"></div>')
	let button = html.find('button[name="submit"]');
	html.find('form').append(button);
})
