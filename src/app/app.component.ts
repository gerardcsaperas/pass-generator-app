import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	passLength: number;
	invalidLength: boolean = false;
	password: string = '';
	useLetters: boolean = false;
	useNumbers: boolean = false;
	useSymbols: boolean = false;

	handleLengthChange(length: string) {
		if (length.length > 0) {
			if (!isNaN(parseInt(length)) && parseInt(length) != 0) {
				this.invalidLength = false;
				this.passLength = parseInt(length);
			} else {
				this.invalidLength = true;
			}
		} else {
			this.invalidLength = false;
		}
	}

	useLettersChange() {
		this.useLetters = !this.useLetters;
	}

	useNumbersChange() {
		this.useNumbers = !this.useNumbers;
	}

	useSymbolsChange() {
		this.useSymbols = !this.useSymbols;
	}

	onButtonClick() {
		if (!this.useSymbols && !this.useLetters && !this.useNumbers) {
			return;
		}

		const numbers = '0123456789';
		const letters = 'abcçdefghijklmnopqrstuvwxyz';
		const symbols = '!"·$%&/()=_:;,.-?¿';

		let validChars = '';

		if (this.useLetters) {
			validChars += letters;
		}

		if (this.useNumbers) {
			validChars += numbers;
		}

		if (this.useSymbols) {
			validChars += symbols;
		}

		console.log(validChars);

		let generatedPass = '';

		for (let i = 0; i < this.passLength; i++) {
			const letterIndex = Math.floor(Math.random() * validChars.length);
			generatedPass += validChars[letterIndex];
		}

		this.password = generatedPass;
	}
}
