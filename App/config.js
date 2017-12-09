'use strict';
var config = {};
config.command = {
	get guess() {
		return {
			path: "",
			protocol: "ws",
			host: "127.0.0.1",
			port: "6800",
			interf: "jsonrpc",
			token: "",
			zoom: "1",
			sound: "3",
			menu: false,
			shutdown: false,
			aggressive: false,
			windowLoc: false,
			auto: true,
			autoSet: true,
			chgLog: true,
			badge: true,
			cmDownPanel: true,
		};
	}
};