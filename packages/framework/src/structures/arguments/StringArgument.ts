import { inlineCode } from 'guilded.ts';
import { Argument } from './Argument';

/** Represents a string command argument. */
export abstract class StringArgument extends Argument {
	/** The default value of the argument. */
	public default?: string;
	/** The choices of the argument. */
	public choices: string[] = [];
	/** The max size of the argument. */
	public max?: number;
	/** The min size of the argument. */
	public min?: number;

	public async validate(value: string): Promise<string> {
		value = (await super.validate(value)) as string;
		if (this.choices.length > 0 && !this.choices.includes(value))
			throw new Error(
				`${inlineCode(this.name)} must tbe one of the following: ${this.choices
					.map((choice) => inlineCode(choice))
					.join(', ')}`,
			);
		else if (this.max && value.length > this.max)
			throw new Error(`${inlineCode(this.name)} must be shorter than ${this.max} characters`);
		else if (this.min && value.length < this.min)
			throw new Error(`${inlineCode(this.name)} must be longer than ${this.min} characters`);
		else if (this.default && !value) return this.default;
		else return value;
	}
}
