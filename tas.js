function tasSetup(c2) {
	const notifications = document.createElement("div")
	notifications.style = "pointer-events: none; position: fixed; left: 0px; right: 0px; top: 0px; bottom: 0px; font-family: monospace; white-space: pre;"
	function notify(text, time) {
		const notification = document.createElement("p")
		notification.innerHTML = text
		notifications.append(notification)
		setTimeout(()=>notification.remove(), time*1000)
	}
	notify("TAS loaded", 3")
}
