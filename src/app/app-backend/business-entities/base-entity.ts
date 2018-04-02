export class BaseEntity {

	private _symbolCode: string;
	private _exchangeCode: string;

	public get symbolCode(): string {
		return this._symbolCode;
	}

	public set symbolCode(value: string) {
		this._symbolCode = value;
	}

	public get exchangeCode(): string {
		return this._exchangeCode;
	}

	public set exchangeCode(value: string) {
		this._exchangeCode = value;
	}

	public setValues(values: Object = {}): void {
		Object.assign(this, values);
		this.caclulateDependantValues();
	}

	public caclulateDependantValues(): void {
		// Override this if you want to calculate any dependant values based on updates.
	}
}
