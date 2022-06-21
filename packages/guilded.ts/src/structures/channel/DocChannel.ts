import { APIChannel, APIChannelType } from 'guilded-api-typings';
import { Client } from '../Client';
import { Channel } from './Channel';
import { DocManager } from '../../managers/DocManager';

/** Represents a doc channel on Guilded. */
export class DocChannel extends Channel {
	public declare readonly type: APIChannelType.Docs;

	/** The manager of docs that belong to the doc channel. */
	public readonly docs: DocManager;

	/**
	 * @param client The client the doc channel belongs to.
	 * @param raw The raw data of the doc channel.
	 * @param cache Whether to cache the doc channel.
	 */
	constructor(client: Client, raw: APIChannel, cache?: boolean) {
		super(client, raw, cache);
		this.docs = new DocManager(this);
	}

	/**
	 * Create a doc in the doc channel.
	 * @param title The title of the doc.
	 * @param content The content of the doc.
	 * @returns The created doc.
	 */
	public post(title: string, content: string) {
		return this.docs.create(title, content);
	}
}
