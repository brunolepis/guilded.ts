import { BaseManager, FetchManyOptions } from '../BaseManager';
import { ServerMember } from '../../structures/server/ServerMember';
import { ServerMemberRole } from '../../structures/server/ServerMemberRole';
import { ServerRole } from '../../structures/server/ServerRole';

/**
 * The manager for server member roles
 */
export class ServerMemberRoleManager extends BaseManager<number, ServerMemberRole> {
	/**
	 * @param member The server member
	 */
	constructor(public readonly member: ServerMember) {
		super(member.client, member.client.options.maxServerMemberRoleCache);
	}

	/**
	 * Fetch roles that belong to the server member
	 * @param options The options to fetch the server member roles with
	 * @returns The fetched server member roles
	 */
	fetch(options?: ServerMemberRoleFetchManyOptions) {
		return this.member.server.roles.fetch(this.member, {
			cache: options?.cacheServerRoles,
			cacheMemberRoles: options?.cache,
		});
	}

	/**
	 * Assign a role to the server member
	 * @param role The role
	 * @returns The added server member role
	 */
	assign(role: number | ServerRole) {
		return this.member.server.roles.assign(this.member, role);
	}

	/**
	 * Unassign a role from the server member
	 * @param role The role
	 * @returns The removed server member role
	 */
	unassign(role: number | ServerRole) {
		return this.member.server.roles.unassign(this.member, role);
	}
}

/**
 * The options for fetching server member roles
 */
export interface ServerMemberRoleFetchManyOptions extends FetchManyOptions {
	/**
	 * Whether to cache the fetched server roles
	 */
	cacheServerRoles?: boolean;
}
