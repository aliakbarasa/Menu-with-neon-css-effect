window.addEventListener("DOMContentLoaded",() => {
	const share = new ShareButton("#share-btn");
});

class ShareButton {
	constructor(qs) {
		this.button = document.querySelector(qs);
		this.openClass = "share__btn--open";

		this.button?.addEventListener("click",this.toggle.bind(this));
		window.addEventListener("keydown",this.close.bind(this));
	}
	close(e) {
		if (e.key === "Escape") {
			this.button?.classList.remove(this.openClass);
			this.updateTitle();
		}
	}
	toggle() {
		this.button?.classList.toggle(this.openClass);
		this.updateTitle();
	}
	updateTitle() {
		const open = this.button?.classList.contains(this.openClass);

		this.button.title = open ? "Close" : "Share";
	}
}