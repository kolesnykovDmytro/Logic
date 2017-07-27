let tl = new TimelineMax();

		tl

			.staggerFromTo('.content__title .letter', 1, {y: 20,opacity: 0}, {y:0,opacity: 1,ease: Back.easeOut.config(1)},0.05)