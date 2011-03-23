
elFinder.prototype.commands.paste = function() {
	var self = this;
	
	this._handlers = {
		changeclipboard : function() { self._update(); }
	}

	this._shortcuts = [{
		pattern     : 'ctrl+v shift+insert',
		description : 'Paste',
		callback    : function() { self.exec(); }
	}];
	
	this._getstate = function() {
		return this.fm.clipboard().files.length && this.fm.cwd().write ? this._state.enabled : this._state.disabled;
	}
	
	this._exec = function() {
		self.fm.paste();
	}

}