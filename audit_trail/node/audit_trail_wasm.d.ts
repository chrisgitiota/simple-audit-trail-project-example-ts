/* tslint:disable */
/* eslint-disable */

import {
    Balance,
    ExecuteTransactionBlockParams,
    GetCoinsParams,
    GetDynamicFieldObjectParams,
    GetDynamicFieldObjectV2Params,
    GetObjectParams,
    GetOwnedObjectsParams,
    GetTransactionBlockParams,
    IotaClient,
    IotaObjectData,
    IotaObjectResponse,
    IotaTransactionBlockResponse,
    IotaTransactionBlockResponseOptions,
    ObjectRead,
    PaginatedCoins,
    PaginatedEvents,
    PaginatedObjectsResponse,
    QueryEventsParams,
    TryGetPastObjectParams,
    DevInspectTransactionBlockParams,
    DevInspectResults
} from "@iota/iota-sdk/client";
import { bcs } from "@iota/iota-sdk/bcs";
import {
    executeTransaction,
    WasmIotaTransactionBlockResponseWrapper,
} from "./iota_client_helpers"



import {
    Transaction,
    TransactionOutput,
    TransactionBuilder,
    CoreClient,
    CoreClientReadOnly
} from './index';



import { PublicKey } from "@iota/iota-sdk/cryptography";

interface TransactionSigner {
    sign: (tx_data_bcs: Uint8Array) => Promise<string>;
    publicKey: () => Promise<PublicKey>;
    iotaPublicKeyBytes: () => Promise<Uint8Array>;
    keyId: () => string;
}



import { Request, Response } from "@iota/iota_interaction_ts/http_client";



/**
 * Transaction wrapper for adding a record.
 *
 * @remarks
 * While the trail's `writeLock` is active the call aborts. Tagged writes additionally require the
 * tag to exist in the trail registry and the supplied capability's role to allow that tag.
 * Records are assigned the trail's current monotonic sequence number, which is never reused even
 * after deletions.
 *
 * Requires the {@link Permission.AddRecord} permission.
 *
 * Emits a {@link RecordAdded} event on success.
 */
export class AddRecord {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link RecordAdded} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<RecordAdded>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for adding a record tag to the trail registry.
 *
 * @remarks
 * Aborts on-chain if the tag is already in the registry.
 *
 * Requires the {@link Permission.AddRecordTags} permission.
 */
export class AddRecordTag {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Builder that assembles the parameters for creating a new audit trail.
 *
 * @remarks
 * The resulting transaction publishes the trail as a *shared* object, seeds the reserved
 * {@link RoleMap.initialAdminRoleName | Admin} role with the recommended admin permissions, and
 * transfers a freshly minted initial-admin {@link Capability} to the configured admin address. An
 * admin address must be set (either through {@link AuditTrailBuilder.withAdmin} or by constructing
 * the builder via {@link AuditTrailClient.createTrail}, which seeds it with the signer); otherwise
 * {@link AuditTrailBuilder.finish} produces a transaction that fails to build. When an initial
 * record is set, its tag — if any — must already be in the configured record-tag list.
 */
export class AuditTrailBuilder {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Finalizes the builder into a transaction wrapper.
     *
     * @remarks
     * On execution the audit-trail package shares the new trail object, seeds the reserved
     * {@link RoleMap.initialAdminRoleName | Admin} role, transfers an initial-admin capability to
     * the configured admin address, and optionally stores the initial record at sequence number
     * `0`.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link CreateTrail} transaction.
     *
     * @throws When the builder is missing a required field or its initial record references a tag
     * that is not in the record-tag list.
     *
     * Emits an {@link AuditTrailCreated} event on success.
     */
    finish(): TransactionBuilder<CreateTrail>;
    /**
     * Sets the initial admin address.
     *
     * @remarks
     * On execution the trail's role map is seeded with a single role named `"Admin"` carrying the
     * recommended admin permissions, and a freshly minted initial-admin capability is transferred
     * to this address. Setting an admin is required before {@link AuditTrailBuilder.finish} can
     * produce a viable transaction; constructing the builder via
     * {@link AuditTrailClient.createTrail} already seeds it with the signer address.
     *
     * @param admin - Address that will receive the initial-admin capability.
     *
     * @returns The same builder, with the admin address configured.
     *
     * @throws When `admin` is not a valid IOTA address.
     */
    withAdmin(admin: string): AuditTrailBuilder;
    /**
     * Sets the initial record using a raw byte payload.
     *
     * @remarks
     * The record is stored at sequence number `0`.
     * When `tag` is provided it must already appear in the list passed to
     * {@link AuditTrailBuilder.withRecordTags}; the on-chain call aborts otherwise.
     * Bumps the tag's usage count on success.
     *
     * @param data - Raw bytes stored as the initial record payload.
     * @param metadata - Optional application-defined metadata stored alongside the record.
     * @param tag - Optional trail-owned tag attached to the record.
     *
     * @returns The same builder, with the initial record configured.
     */
    withInitialRecordBytes(data: Uint8Array, metadata?: string | null, tag?: string | null): AuditTrailBuilder;
    /**
     * Sets the initial record using a UTF-8 string payload.
     *
     * @remarks
     * The record is stored at sequence number `0`.
     *
     * When `tag` is provided it must already appear in the list passed to
     * {@link AuditTrailBuilder.withRecordTags}; the on-chain call aborts otherwise.
     * Bumps the tag's usage count on success.
     *
     * @param data - UTF-8 text payload for the initial record.
     * @param metadata - Optional application-defined metadata stored alongside the record.
     * @param tag - Optional trail-owned tag attached to the record.
     *
     * @returns The same builder, with the initial record configured.
     */
    withInitialRecordString(data: string, metadata?: string | null, tag?: string | null): AuditTrailBuilder;
    /**
     * Sets the {@link LockingConfig} for the trail.
     *
     * @remarks
     * `config.deleteTrailLock` must not be {@link TimeLock.withUntilDestroyed}; trail creation
     * aborts on-chain otherwise.
     *
     * @param config - Combined delete-record window, delete-trail lock, and write lock.
     *
     * @returns The same builder, with the locking configuration applied.
     */
    withLockingConfig(config: LockingConfig): AuditTrailBuilder;
    /**
     * Sets the canonical list of record tags owned by the trail.
     *
     * @remarks
     * Every tag name later referenced by an initial record, an {@link TrailRecords.add} call, or a
     * role's {@link RoleTags} allowlist must appear in this list. Tags are inserted with a usage
     * count of zero.
     *
     * @param tags - Tag names that the trail will recognize.
     *
     * @returns The same builder, with the record-tag registry configured.
     */
    withRecordTags(tags: string[]): AuditTrailBuilder;
    /**
     * Sets the trail's {@link ImmutableMetadata} (name and optional description).
     *
     * @remarks
     * Stored once at trail creation and exposed read-only thereafter. Use
     * {@link AuditTrailBuilder.withUpdatableMetadata} for the mutable counterpart.
     *
     * @param name - Human-readable trail name.
     * @param description - Optional human-readable description.
     *
     * @returns The same builder, with the immutable metadata configured.
     */
    withTrailMetadata(name: string, description?: string | null): AuditTrailBuilder;
    /**
     * Sets the trail's `updatableMetadata` field.
     *
     * @remarks
     * This field can later be replaced or cleared by holders of {@link Permission.UpdateMetadata}
     * via {@link AuditTrailHandle.updateMetadata}.
     *
     * @param metadata - Initial value of the trail's `updatableMetadata` field.
     *
     * @returns The same builder, with the updatable metadata configured.
     */
    withUpdatableMetadata(metadata: string): AuditTrailBuilder;
}

/**
 * Signing audit-trail client.
 *
 * @remarks
 * Wraps an {@link AuditTrailClientReadOnly} together with a transaction signer so that typed
 * write transactions can be built. The actual transaction submission and execution remain the
 * responsibility of the caller.
 */
export class AuditTrailClient {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Returns the chain ID of the network this client is connected to.
     *
     * @returns Hex-encoded chain identifier.
     */
    chainId(): string;
    /**
     * Creates a signing client from an existing read-only client and signer.
     *
     * @param client - Read-only client whose network and package configuration will be reused.
     * @param signer - Signer that will sign transactions built by this client.
     *
     * @returns A signing audit-trail client bound to `client`'s network and the given signer.
     *
     * @throws When the signer cannot be queried for its public key or address.
     */
    static create(client: AuditTrailClientReadOnly, signer: TransactionSigner): Promise<AuditTrailClient>;
    /**
     * Creates a signing client directly from an IOTA client and signer.
     *
     * @remarks
     * Pass `packageId` when connecting to a custom deployment that is not known to the package
     * registry; otherwise package IDs are resolved from the connected network.
     *
     * @param iotaClient - IOTA client used to talk to the network.
     * @param signer - Signer that will sign transactions built by this client.
     * @param packageId - Optional audit-trail package ID override.
     *
     * @returns A signing audit-trail client bound to the resolved or supplied package IDs.
     *
     * @throws When package resolution fails or the supplied `packageId` is malformed.
     */
    static createFromIotaClient(iota_client: IotaClient, signer: TransactionSigner, package_id?: string | null): Promise<AuditTrailClient>;
    /**
     * Creates a signing client directly from an IOTA client, signer, and full package overrides.
     *
     * @param iotaClient - IOTA client used to talk to the network.
     * @param signer - Signer that will sign transactions built by this client.
     * @param packageOverrides - Optional explicit package IDs; when omitted the registry is used.
     *
     * @returns A signing audit-trail client bound to the resolved or supplied package IDs.
     *
     * @throws When package resolution fails or the supplied overrides are malformed.
     */
    static createFromIotaClientWithPackageOverrides(iota_client: IotaClient, signer: TransactionSigner, package_overrides?: PackageOverrides | null): Promise<AuditTrailClient>;
    /**
     * Creates a builder for a new audit trail.
     *
     * @remarks
     * The builder is pre-populated with the signer address as the initial admin, so the trail's
     * initial-admin capability lands in the signer's wallet on execution. Override with
     * {@link AuditTrailBuilder.withAdmin} when a different recipient is needed.
     *
     * @returns A pre-configured {@link AuditTrailBuilder}.
     */
    createTrail(): AuditTrailBuilder;
    /**
     * Returns the underlying IOTA client used to talk to the network.
     *
     * @returns The IOTA client carried by the wrapped read-only client.
     */
    iotaClient(): IotaClient;
    /**
     * Returns the human-readable name of the network this client is connected to.
     *
     * @returns Network name (e.g. `"mainnet"`, `"testnet"`, `"localnet"`).
     */
    network(): string;
    /**
     * Returns the resolved audit-trail package upgrade history.
     *
     * @returns Stringified object IDs of every published version, most recent first.
     */
    packageHistory(): string[];
    /**
     * Returns the audit-trail package ID currently in use.
     *
     * @returns Stringified object ID of the resolved audit-trail package.
     */
    packageId(): string;
    /**
     * Returns the read-only view of this client.
     *
     * @remarks
     * Useful when passing the client into code that only needs read capabilities.
     *
     * @returns A {@link AuditTrailClientReadOnly} sharing this client's network configuration.
     */
    readOnly(): AuditTrailClientReadOnly;
    /**
     * Returns the address that signs transactions built by this client.
     *
     * @returns Stringified IOTA address of the signer.
     */
    senderAddress(): string;
    /**
     * Returns the public key of the address that signs transactions built by this client.
     *
     * @returns Public key bound to the signer.
     *
     * @throws When the signer's public key cannot be converted to the expected representation.
     */
    senderPublicKey(): PublicKey;
    /**
     * Returns the signer attached to this client.
     *
     * @returns A clone of the configured transaction signer.
     */
    signer(): TransactionSigner;
    /**
     * Returns the `tf_components` package ID currently in use.
     *
     * @returns Stringified object ID of the resolved `tf_components` package.
     */
    tfComponentsPackageId(): string;
    /**
     * Returns a trail-scoped handle for the given trail object ID.
     *
     * @remarks
     * Creating the handle is cheap. Network reads and transaction building happen on the returned
     * handle and its subsystem wrappers.
     *
     * @param trailId - Object ID of the trail this handle should target.
     *
     * @returns A signing {@link AuditTrailHandle} bound to `trailId`.
     *
     * @throws When `trailId` is not a valid object ID.
     */
    trail(trail_id: string): AuditTrailHandle;
    /**
     * Returns a clone of this client whose transactions are signed by `signer` instead.
     *
     * @remarks
     * Network and package configuration are preserved. The returned client's
     * {@link AuditTrailClient.senderAddress} reflects the new signer.
     *
     * @param signer - Replacement transaction signer.
     *
     * @returns A new client with the signer swapped in.
     *
     * @throws When the replacement signer cannot be queried for its public key or address.
     */
    withSigner(signer: TransactionSigner): Promise<AuditTrailClient>;
}

/**
 * Read-only audit-trail client.
 *
 * @remarks
 * This is the main entry point for package resolution and typed reads. Use
 * {@link AuditTrailClientReadOnly.trail} to obtain an {@link AuditTrailHandle} bound to a single
 * trail object.
 */
export class AuditTrailClientReadOnly {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Returns the chain ID of the network this client is connected to.
     *
     * @returns Hex-encoded chain identifier.
     */
    chainId(): string;
    /**
     * Creates a read-only client by resolving package IDs from the connected network.
     *
     * @remarks
     * This is the recommended constructor for official deployments tracked by the built-in
     * package registry.
     *
     * @param iotaClient - IOTA client used to talk to the network.
     *
     * @returns A read-only audit-trail client bound to the resolved package IDs.
     *
     * @throws When package resolution fails for the connected network.
     */
    static create(iota_client: IotaClient): Promise<AuditTrailClientReadOnly>;
    /**
     * Creates a read-only client with explicit package overrides.
     *
     * @remarks
     * Prefer this when targeting a local deployment, preview environment, or any package pair
     * that is not yet part of the SDK's built-in registry.
     *
     * @param iotaClient - IOTA client used to talk to the network.
     * @param packageOverrides - Package IDs to use instead of registry lookups.
     *
     * @returns A read-only audit-trail client bound to the supplied package IDs.
     *
     * @throws When the supplied package IDs are malformed or cannot be resolved.
     */
    static createWithPackageOverrides(iota_client: IotaClient, package_overrides: PackageOverrides): Promise<AuditTrailClientReadOnly>;
    /**
     * Creates a read-only client while overriding only the audit-trail package ID.
     *
     * @remarks
     * Compatibility helper for callers that need exactly one package override.
     *
     * @param iotaClient - IOTA client used to talk to the network.
     * @param packageId - Audit-trail package ID to use instead of the registry entry.
     *
     * @returns A read-only audit-trail client bound to `packageId`.
     *
     * @throws When `packageId` is malformed or cannot be resolved.
     */
    static createWithPkgId(iota_client: IotaClient, package_id: string): Promise<AuditTrailClientReadOnly>;
    /**
     * Returns the underlying IOTA client used to talk to the network.
     *
     * @returns The IOTA client passed to (or constructed during) creation of this client.
     */
    iotaClient(): IotaClient;
    /**
     * Returns the human-readable name of the network this client is connected to.
     *
     * @returns Network name (e.g. `"mainnet"`, `"testnet"`, `"localnet"`).
     */
    network(): string;
    /**
     * Returns the resolved audit-trail package upgrade history.
     *
     * @returns Stringified object IDs of every published version, most recent first.
     */
    packageHistory(): string[];
    /**
     * Returns the audit-trail package ID currently in use.
     *
     * @returns Stringified object ID of the resolved audit-trail package.
     */
    packageId(): string;
    /**
     * Returns the `tf_components` package ID currently in use.
     *
     * @returns Stringified object ID of the resolved `tf_components` package.
     */
    tfComponentsPackageId(): string;
    /**
     * Returns a trail-scoped handle for the given trail object ID.
     *
     * @remarks
     * Creating the handle is cheap. Reads only happen when methods are called on the returned
     * handle.
     *
     * @param trailId - Object ID of the trail this handle should target.
     *
     * @returns Read-only {@link AuditTrailHandle} bound to `trailId`.
     *
     * @throws When `trailId` is not a valid object ID.
     */
    trail(trail_id: string): AuditTrailHandle;
}

/**
 * Event payload emitted when a trail is created.
 */
export class AuditTrailCreated {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Address that created the trail.
     */
    creator: string;
    /**
     * Millisecond event timestamp.
     */
    timestamp: bigint;
    /**
     * Newly created trail object ID.
     */
    trailId: string;
}

/**
 * Event payload emitted when a trail is deleted.
 */
export class AuditTrailDeleted {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Millisecond event timestamp.
     */
    timestamp: bigint;
    /**
     * Deleted trail object ID.
     */
    trailId: string;
}

/**
 * Handle bound to a specific audit-trail object.
 *
 * @remarks
 * `AuditTrailHandle` keeps one trail ID together with the originating client so all trail-scoped
 * reads and transaction builders can be discovered from a single value. Use the subsystem
 * accessors {@link AuditTrailHandle.records}, {@link AuditTrailHandle.access},
 * {@link AuditTrailHandle.locking}, and {@link AuditTrailHandle.tags} to reach the corresponding
 * APIs.
 */
export class AuditTrailHandle {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Returns the access-control API scoped to this trail.
     *
     * @remarks
     * Use this for roles, capabilities, and access-policy updates.
     *
     * @returns A {@link TrailAccess} wrapper bound to this trail.
     */
    access(): TrailAccess;
    /**
     * Builds a delete transaction for this trail.
     *
     * @remarks
     * Deletion additionally requires the trail to be empty (the on-chain call aborts otherwise)
     * and the configured `deleteTrailLock` to have elapsed.
     *
     * Requires the {@link Permission.DeleteAuditTrail} permission.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link DeleteAuditTrail} transaction.
     *
     * @throws When the handle was created from a read-only client.
     *
     * Emits an {@link AuditTrailDeleted} event on success.
     */
    deleteAuditTrail(): TransactionBuilder<DeleteAuditTrail>;
    /**
     * Loads the full on-chain trail object.
     *
     * @remarks
     * Each call fetches a fresh snapshot from chain state.
     *
     * @returns The current {@link OnChainAuditTrail} state of this trail.
     *
     * @throws When the trail object cannot be fetched or decoded.
     */
    get(): Promise<OnChainAuditTrail>;
    /**
     * Returns the locking API scoped to this trail.
     *
     * @remarks
     * Use this for inspecting lock state and updating locking rules.
     *
     * @returns A {@link TrailLocking} wrapper bound to this trail.
     */
    locking(): TrailLocking;
    /**
     * Builds a migration transaction for this trail.
     *
     * @remarks
     * Bumps the trail's stored data layout to the current package version. Intended to be called
     * once after the audit-trail Move package is upgraded.
     *
     * Requires the {@link Permission.Migrate} permission.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link Migrate} transaction.
     *
     * @throws When the handle was created from a read-only client.
     */
    migrate(): TransactionBuilder<Migrate>;
    /**
     * Returns the record API scoped to this trail.
     *
     * @remarks
     * Use this for record reads, appends, and deletions.
     *
     * @returns A {@link TrailRecords} wrapper bound to this trail.
     */
    records(): TrailRecords;
    /**
     * Returns the tag-registry API scoped to this trail.
     *
     * @remarks
     * Use this for managing the canonical tag registry that record writes and role-tag
     * restrictions must reference.
     *
     * @returns A {@link TrailTags} wrapper bound to this trail.
     */
    tags(): TrailTags;
    /**
     * Builds a mutable-metadata update transaction for this trail.
     *
     * @remarks
     * Replaces or clears the trail's `updatableMetadata` field.
     *
     * Requires the {@link Permission.UpdateMetadata} permission.
     *
     * @param metadata - New value for the trail's `updatableMetadata` field, or `null` to clear
     * it.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link UpdateMetadata} transaction.
     *
     * @throws When the handle was created from a read-only client.
     */
    updateMetadata(metadata?: string | null): TransactionBuilder<UpdateMetadata>;
}

/**
 * Capability data describing a granted role and its validity window.
 *
 * @remarks
 * A capability grants exactly one role against exactly one trail and may additionally restrict
 * who may use it and during which time window it is valid.
 */
export class Capability {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Capability object ID.
     */
    id: string;
    /**
     * Address bound to the capability. When `null`, any holder may present the capability for
     * authorization.
     */
    get issuedTo(): string | undefined;
    /**
     * Address bound to the capability. When `null`, any holder may present the capability for
     * authorization.
     */
    set issuedTo(value: string | null | undefined);
    /**
     * Role granted by the capability.
     */
    role: string;
    /**
     * Trail object ID protected by the capability.
     */
    targetKey: string;
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * is valid. When `null`, the capability is valid from its creation time.
     */
    get validFrom(): bigint | undefined;
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * is valid. When `null`, the capability is valid from its creation time.
     */
    set validFrom(value: bigint | null | undefined);
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability is
     * still valid. When `null`, the capability does not expire.
     */
    get validUntil(): bigint | undefined;
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability is
     * still valid. When `null`, the capability does not expire.
     */
    set validUntil(value: bigint | null | undefined);
}

/**
 * Permissions required to administer capabilities, as enforced by the trail.
 */
export class CapabilityAdminPermissions {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Permission required to issue capabilities.
     */
    add: Permission;
    /**
     * Permission required to revoke capabilities.
     */
    revoke: Permission;
}

/**
 * Event payload emitted when a capability is destroyed.
 */
export class CapabilityDestroyed {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Destroyed capability object ID.
     */
    capabilityId: string;
    /**
     * Address bound to the capability, if one had been assigned.
     */
    get issuedTo(): string | undefined;
    /**
     * Address bound to the capability, if one had been assigned.
     */
    set issuedTo(value: string | null | undefined);
    /**
     * Role granted by the capability.
     */
    role: string;
    /**
     * Trail object ID protected by the capability.
     */
    targetKey: string;
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * became valid. `null` when no lower bound had been set.
     */
    get validFrom(): bigint | undefined;
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * became valid. `null` when no lower bound had been set.
     */
    set validFrom(value: bigint | null | undefined);
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability had
     * been valid. `null` when no expiry had been set.
     */
    get validUntil(): bigint | undefined;
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability had
     * been valid. `null` when no expiry had been set.
     */
    set validUntil(value: bigint | null | undefined);
}

/**
 * Capability issuance options.
 *
 * @remarks
 * These fields configure restrictions on the issued capability object. Matching against the
 * current caller and the on-chain timestamp happens whenever the capability is later presented
 * for authorization, not at issue time.
 */
export class CapabilityIssueOptions {
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Creates capability issuance options.
     *
     * @param issuedTo - Optional recipient address; `null` keeps the capability with the caller.
     * @param validFromMs - Optional earliest valid timestamp in milliseconds since the Unix
     * epoch.
     * @param validUntilMs - Optional latest valid timestamp in milliseconds since the Unix epoch.
     */
    constructor(issued_to?: string | null, valid_from_ms?: bigint | null, valid_until_ms?: bigint | null);
    /**
     * Address that should own the issued capability. When `null`, the capability is transferred
     * to the caller.
     */
    get issuedTo(): string | undefined;
    /**
     * Address that should own the issued capability. When `null`, the capability is transferred
     * to the caller.
     */
    set issuedTo(value: string | null | undefined);
    /**
     * Earliest millisecond timestamp (since the Unix epoch) at which the capability becomes
     * valid. When `null`, the capability is valid from its creation time.
     */
    get validFromMs(): bigint | undefined;
    /**
     * Earliest millisecond timestamp (since the Unix epoch) at which the capability becomes
     * valid. When `null`, the capability is valid from its creation time.
     */
    set validFromMs(value: bigint | null | undefined);
    /**
     * Latest millisecond timestamp (since the Unix epoch) at which the capability is still
     * valid. When `null`, the capability does not expire.
     */
    get validUntilMs(): bigint | undefined;
    /**
     * Latest millisecond timestamp (since the Unix epoch) at which the capability is still
     * valid. When `null`, the capability does not expire.
     */
    set validUntilMs(value: bigint | null | undefined);
}

/**
 * Event payload emitted when a capability is issued.
 */
export class CapabilityIssued {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Newly created capability object ID.
     */
    capabilityId: string;
    /**
     * Address bound to the capability, if one was assigned at issue time.
     */
    get issuedTo(): string | undefined;
    /**
     * Address bound to the capability, if one was assigned at issue time.
     */
    set issuedTo(value: string | null | undefined);
    /**
     * Role granted by the capability.
     */
    role: string;
    /**
     * Trail object ID protected by the capability.
     */
    targetKey: string;
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * becomes valid. `null` when no lower bound was set.
     */
    get validFrom(): bigint | undefined;
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * becomes valid. `null` when no lower bound was set.
     */
    set validFrom(value: bigint | null | undefined);
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability is
     * still valid. `null` when no expiry was set.
     */
    get validUntil(): bigint | undefined;
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability is
     * still valid. `null` when no expiry was set.
     */
    set validUntil(value: bigint | null | undefined);
}

/**
 * Event payload emitted when a capability is revoked.
 */
export class CapabilityRevoked {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Revoked capability object ID.
     */
    capabilityId: string;
    /**
     * Trail object ID protected by the capability.
     */
    targetKey: string;
    /**
     * Millisecond timestamp retained for denylist cleanup.
     *
     * `0` when the capability had no expiry — denylist entries with `validUntil == 0` are kept
     * indefinitely.
     */
    validUntil: bigint;
}

/**
 * Transaction wrapper for cleaning up expired revoked-capability entries.
 *
 * @remarks
 * Only prunes denylist entries whose stored `validUntil` is non-zero and strictly less than the
 * current clock time. Entries with `validUntil == 0` are kept indefinitely. Does not revoke
 * additional capabilities.
 *
 * Requires the {@link Permission.RevokeCapabilities} permission.
 *
 * Emits a {@link RevokedCapabilitiesCleanedUp} event on success.
 */
export class CleanupRevokedCapabilities {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link RevokedCapabilitiesCleanedUp} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<RevokedCapabilitiesCleanedUp>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for creating a role.
 *
 * @remarks
 * Any `roleTags` supplied must already exist in the trail's record-tag registry; the on-chain
 * call aborts otherwise.
 *
 * Requires the {@link Permission.AddRoles} permission.
 *
 * Emits a {@link RoleCreated} event on success.
 */
export class CreateRole {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link RoleCreated} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<RoleCreated>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for trail creation.
 *
 * @remarks
 * On execution the audit-trail package shares the new trail object, seeds the reserved
 * {@link RoleMap.initialAdminRoleName | Admin} role, transfers a fresh initial-admin capability to
 * the admin address, and optionally stores the initial record at sequence number `0`, validating
 * its tag against the registry.
 *
 * Emits an {@link AuditTrailCreated} event on success.
 */
export class CreateTrail {
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and then fetches the created trail object.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used to fetch the new trail object.
     *
     * @returns The on-chain {@link OnChainAuditTrail} created by the transaction.
     *
     * @throws When the expected event is missing or the trail cannot be fetched.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<OnChainAuditTrail>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
    /**
     * Creates a transaction wrapper from an {@link AuditTrailBuilder}.
     *
     * @param builder - Fully configured {@link AuditTrailBuilder}.
     */
    constructor(builder: AuditTrailBuilder);
}

/**
 * Audit-trail record payload.
 *
 * @remarks
 * Holds either a UTF-8 string or a raw byte sequence. Use {@link Data.fromString} or
 * {@link Data.fromBytes} to construct an instance, and {@link Data.toString} or
 * {@link Data.toBytes} to extract the payload as the desired representation.
 */
export class Data {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Creates a binary payload.
     *
     * @param data - Raw bytes to wrap.
     *
     * @returns A {@link Data} carrying `data` as bytes.
     */
    static fromBytes(data: Uint8Array): Data;
    /**
     * Creates a text payload.
     *
     * @param data - UTF-8 string to wrap.
     *
     * @returns A {@link Data} carrying `data` as text.
     */
    static fromString(data: string): Data;
    /**
     * Returns the payload as raw bytes.
     *
     * @remarks
     * Text payloads are encoded as UTF-8.
     *
     * @returns A byte view of the payload.
     */
    toBytes(): Uint8Array;
    /**
     * Returns the payload as a string.
     *
     * @remarks
     * Byte payloads are decoded with lossy UTF-8 conversion (invalid sequences become the U+FFFD
     * replacement character).
     *
     * @returns A string view of the payload.
     */
    toString(): string;
    /**
     * Returns the underlying payload in its original representation.
     *
     * @returns A `string` for text payloads or a `Uint8Array` for byte payloads.
     */
    readonly value: any;
}

/**
 * A default implementation for {@link HttpClient}.
 */
export class DefaultHttpClient {
    free(): void;
    [Symbol.dispose](): void;
    constructor();
    send(request: Request): Promise<Response>;
}

/**
 * Transaction wrapper for deleting a trail.
 *
 * @remarks
 * Aborts on-chain when records still exist or while the configured trail-delete time lock is
 * active.
 *
 * Requires the {@link Permission.DeleteAuditTrail} permission.
 *
 * Emits an {@link AuditTrailDeleted} event on success.
 */
export class DeleteAuditTrail {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link AuditTrailDeleted} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<AuditTrailDeleted>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for deleting a single record.
 *
 * @remarks
 * Aborts on-chain when no record exists at the supplied sequence number or while the
 * delete-record window still protects it. Tag-aware authorization additionally applies when the
 * record carries a tag.
 *
 * Requires the {@link Permission.DeleteRecord} permission.
 *
 * Emits a {@link RecordDeleted} event on success.
 */
export class DeleteRecord {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link RecordDeleted} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<RecordDeleted>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for deleting records in batch form.
 *
 * @remarks
 * Walks the trail from the front and silently skips records still inside the delete-record
 * window. Tag-aware authorization applies to every record actually deleted.
 *
 * Requires the {@link Permission.DeleteAllRecords} permission.
 *
 * Emits one {@link RecordDeleted} event per deletion.
 */
export class DeleteRecordsBatch {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Sequence numbers of the records deleted in this batch, in deletion order — at
     * most the requested limit, possibly fewer.
     *
     * @throws When transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<BigUint64Array>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for deleting a role.
 *
 * @remarks
 * The reserved initial-admin role (`"Admin"`) cannot be deleted.
 *
 * Requires the {@link Permission.DeleteRoles} permission.
 *
 * Emits a {@link RoleDeleted} event on success.
 */
export class DeleteRole {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link RoleDeleted} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<RoleDeleted>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for destroying a capability.
 *
 * @remarks
 * Consumes the owned capability object. This path is for ordinary capabilities only —
 * initial-admin capabilities must use {@link DestroyInitialAdminCapability}.
 *
 * Requires the {@link Permission.RevokeCapabilities} permission.
 *
 * Emits a {@link CapabilityDestroyed} event on success.
 */
export class DestroyCapability {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link CapabilityDestroyed} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<CapabilityDestroyed>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for destroying an initial-admin capability.
 *
 * @remarks
 * Self-service: the holder consumes their own initial-admin capability without presenting another
 * authorization capability. **Warning:** if every initial-admin capability is destroyed (and none
 * was issued separately), the trail is permanently sealed with no admin access.
 *
 * Emits a {@link CapabilityDestroyed} event on success.
 */
export class DestroyInitialAdminCapability {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link CapabilityDestroyed} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<CapabilityDestroyed>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Placeholder type used as the resolved value of transactions that carry no payload.
 */
export class Empty {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
}

export class GasStationParams {
    free(): void;
    [Symbol.dispose](): void;
    constructor(params?: GasStationParamsI | null);
    /**
     * Adds an `Authorization` header using `token` as a bearer token.
     */
    withAuthToken(token: string): GasStationParams;
    readonly gasReservationDuration: bigint;
    readonly headers: HeaderMap;
}

/**
 * Immutable trail metadata.
 *
 * @remarks
 * Stored once on the trail object at creation and exposed read-only thereafter. Use
 * {@link OnChainAuditTrail.updatableMetadata} for the mutable counterpart.
 */
export class ImmutableMetadata {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Optional human-readable description.
     */
    get description(): string | undefined;
    /**
     * Optional human-readable description.
     */
    set description(value: string | null | undefined);
    /**
     * Human-readable trail name.
     */
    name: string;
}

/**
 * Transaction wrapper for issuing a capability.
 *
 * @remarks
 * Mints a new {@link Capability} for the role and transfers it to the configured recipient (or
 * the caller when none was set). The validity window configured via
 * {@link CapabilityIssueOptions} is enforced when the capability is later presented for
 * authorization.
 *
 * Requires the {@link Permission.AddCapabilities} permission.
 *
 * Emits a {@link CapabilityIssued} event on success.
 */
export class IssueCapability {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link CapabilityIssued} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<CapabilityIssued>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Linked-table metadata for record storage.
 */
export class LinkedTable {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Sequence number of the first entry, if any.
     */
    get head(): bigint | undefined;
    /**
     * Sequence number of the first entry, if any.
     */
    set head(value: bigint | null | undefined);
    /**
     * Linked-table object ID.
     */
    id: string;
    /**
     * Declared number of entries in the table.
     */
    size: bigint;
    /**
     * Sequence number of the last entry, if any.
     */
    get tail(): bigint | undefined;
    /**
     * Sequence number of the last entry, if any.
     */
    set tail(value: bigint | null | undefined);
}

/**
 * Full locking configuration.
 *
 * @remarks
 * Combines three independent rules: a per-record delete window, a trail-delete time lock, and a
 * write-time lock. The trail-delete lock must not be {@link TimeLock.withUntilDestroyed}; trail
 * creation and locking updates that violate this invariant abort on-chain.
 */
export class LockingConfig {
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Creates a locking configuration.
     *
     * @param deleteRecordWindow - {@link LockingWindow} that controls when individual records may
     * be deleted.
     * @param deleteTrailLock - {@link TimeLock} that controls when the trail itself may be
     * deleted.
     * @param writeLock - {@link TimeLock} that controls when records may be appended.
     */
    constructor(delete_record_window: LockingWindow, delete_trail_lock: TimeLock, write_lock: TimeLock);
    /**
     * Delete-window policy applied to individual records.
     *
     * Records inside the window are locked against deletion.
     */
    deleteRecordWindow: LockingWindow;
    /**
     * Time lock that gates deletion of the entire trail.
     *
     * Must not be {@link TimeLock.withUntilDestroyed}; trail creation and locking updates that
     * violate this invariant abort on-chain.
     */
    deleteTrailLock: TimeLock;
    /**
     * Time lock that gates record writes (`addRecord`).
     */
    writeLock: TimeLock;
}

/**
 * Delete-window definition used in the trail's {@link LockingConfig}.
 *
 * @remarks
 * A window describes the period during which a record stays *locked against deletion*: time-based
 * windows lock a record while its age is below the configured number of seconds; count-based
 * windows lock a record while it is among the most recent N records. Records outside the window
 * may be deleted, subject to remaining permission and tag checks.
 */
export class LockingWindow {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Creates a count-based delete window.
     *
     * @param count - Number of most recent records that stay locked against deletion.
     *
     * @returns A window that locks the `count` most recent records.
     */
    static withCountBased(count: bigint): LockingWindow;
    /**
     * Creates a disabled delete window.
     *
     * @returns A window that does not lock records against deletion.
     */
    static withNone(): LockingWindow;
    /**
     * Creates a time-based delete window.
     *
     * @param seconds - Maximum record age, in seconds, for which the record stays locked against
     * deletion.
     *
     * @returns A window that locks records younger than `seconds`.
     */
    static withTimeBased(seconds: bigint): LockingWindow;
    /**
     * Returns the window argument for parameterized variants.
     *
     * @returns The numeric argument for `TimeBased`/`CountBased` variants, or `undefined`
     * otherwise.
     */
    readonly args: any;
    /**
     * Returns the window variant.
     *
     * @returns The {@link LockingWindowType} discriminant for this window.
     */
    readonly type: LockingWindowType;
}

/**
 * Discriminant for the shape stored inside {@link LockingWindow}.
 */
export enum LockingWindowType {
    /**
     * No delete window is enforced; records may be deleted at any time.
     */
    None = 0,
    /**
     * The window locks records while their age is below a configured number of seconds.
     */
    TimeBased = 1,
    /**
     * The window locks records while they are among the most recent N records.
     */
    CountBased = 2,
}

/**
 * Transaction wrapper for trail migration.
 *
 * @remarks
 * Succeeds only when the on-chain trail's package version is strictly less than the package
 * version this binding targets.
 *
 * Requires the {@link Permission.Migrate} permission.
 */
export class Migrate {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Linked-table metadata keyed by object IDs.
 */
export class ObjectIdLinkedTable {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Object ID of the first entry, if any.
     */
    get head(): string | undefined;
    /**
     * Object ID of the first entry, if any.
     */
    set head(value: string | null | undefined);
    /**
     * Linked-table object ID.
     */
    id: string;
    /**
     * Declared number of entries in the table.
     */
    size: bigint;
    /**
     * Object ID of the last entry, if any.
     */
    get tail(): string | undefined;
    /**
     * Object ID of the last entry, if any.
     */
    set tail(value: string | null | undefined);
}

/**
 * Read-only view of an on-chain audit trail.
 *
 * @remarks
 * The trail is a *shared*, tamper-evident object that maintains an ordered sequence of records.
 * Each record is assigned a unique, auto-incrementing sequence number that is never reused (the
 * counter does not decrement on deletion). Access is governed by capability-based RBAC: every
 * mutating call must present a {@link Capability} bound to a role whose permissions cover the
 * operation.
 */
export class OnChainAuditTrail {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Returns the creation timestamp in milliseconds since the Unix epoch.
     *
     * @returns Creation timestamp in milliseconds.
     */
    readonly createdAt: bigint;
    /**
     * Returns the address that created this trail.
     *
     * @returns Stringified IOTA address of the trail creator.
     */
    readonly creator: string;
    /**
     * Returns the trail object ID.
     *
     * @returns Stringified object ID of this trail.
     */
    readonly id: string;
    /**
     * Returns metadata fixed at creation time, when present.
     *
     * @returns The trail's {@link ImmutableMetadata}, or `null` when none was set.
     */
    readonly immutableMetadata: ImmutableMetadata | undefined;
    /**
     * Returns the active locking configuration that governs record deletion, trail deletion, and
     * record writes.
     *
     * @returns Active {@link LockingConfig} for the trail.
     */
    readonly lockingConfig: LockingConfig;
    /**
     * Returns the linked-table metadata for record storage.
     *
     * @remarks
     * Returns table size and head/tail sequence numbers; record contents must be loaded via
     * {@link TrailRecords}.
     *
     * @returns {@link LinkedTable} metadata for the record table.
     */
    readonly records: LinkedTable;
    /**
     * Returns the trail's role definitions, the revoked-capability denylist, and the permissions
     * required to administer roles and capabilities.
     *
     * @returns The trail's {@link RoleMap}.
     */
    readonly roles: RoleMap;
    /**
     * Returns the next sequence number that will be assigned to a new record.
     *
     * @remarks
     * This is a monotonic counter that never decrements, even after records are deleted, so
     * existing sequence numbers remain unique for the lifetime of the trail.
     *
     * @returns Sequence number that the next added record will receive.
     */
    readonly sequenceNumber: bigint;
    /**
     * Returns the canonical list of tags that may be attached to records in this trail, together
     * with their combined usage counts.
     *
     * @returns Tag entries sorted alphabetically by tag name.
     */
    readonly tags: RecordTagEntry[];
    /**
     * Returns metadata that holders of {@link Permission.UpdateMetadata} can change after
     * creation, when present.
     *
     * @returns Current value of `updatableMetadata`, or `null` when the field is unset.
     */
    readonly updatableMetadata: string | undefined;
    /**
     * Returns the on-chain package version of the trail object.
     *
     * @remarks
     * Use {@link AuditTrailHandle.migrate} after a package upgrade if this lags behind the SDK's
     * expected version.
     *
     * @returns Stored package version of the trail object.
     */
    readonly version: bigint;
}

/**
 * Package-ID overrides used when targeting custom audit-trail deployments.
 *
 * @remarks
 * Pass an instance of this type to
 * {@link AuditTrailClientReadOnly.createWithPackageOverrides} or
 * {@link AuditTrailClient.createFromIotaClientWithPackageOverrides} when the connected network
 * hosts the audit-trail package — and optionally the `tf_components` package — at addresses that
 * are not part of the SDK's built-in registry. Leave a field unset to fall back to the registry
 * lookup for that package.
 */
export class PackageOverrides {
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Creates package overrides for custom deployments.
     *
     * @param auditTrailPackageId - Optional audit-trail package ID to use instead of the registry
     * entry.
     * @param tfComponentsPackageId - Optional `tf_components` package ID to use instead of the
     * registry entry.
     */
    constructor(audit_trail_package_id?: string | null, tf_components_package_id?: string | null);
    /**
     * Override for the audit-trail package ID.
     */
    get auditTrailPackageId(): string | undefined;
    /**
     * Override for the audit-trail package ID.
     */
    set auditTrailPackageId(value: string | null | undefined);
    /**
     * Override for the `tf_components` package ID.
     */
    get tfComponentsPackageId(): string | undefined;
    /**
     * Override for the `tf_components` package ID.
     */
    set tfComponentsPackageId(value: string | null | undefined);
}

/**
 * One page of records returned by {@link TrailRecords.listPage}.
 */
export class PaginatedRecord {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Indicates whether another page may be available.
     */
    hasNextPage: boolean;
    /**
     * Cursor to pass to the next {@link TrailRecords.listPage} call.
     */
    get nextCursor(): bigint | undefined;
    /**
     * Cursor to pass to the next {@link TrailRecords.listPage} call.
     */
    set nextCursor(value: bigint | null | undefined);
    /**
     * Records included in the current page, ordered by sequence number.
     */
    records: Record[];
}

/**
 * Permission variants enumerated by the audit trail.
 *
 * @remarks
 * Each variant authorizes one operation on a trail. Variants are grouped by the proposed role
 * that typically owns them (`Admin`, `RecordAdmin`, `LockingAdmin`, `RoleAdmin`, `CapAdmin`,
 * `MetadataAdmin`, `TagAdmin`); see {@link PermissionSet} for the recommended sets.
 */
export enum Permission {
    /**
     * Authorizes deleting the trail itself.
     */
    DeleteAuditTrail = 0,
    /**
     * Authorizes the batched record-deletion entry point.
     */
    DeleteAllRecords = 1,
    /**
     * Authorizes appending a record.
     */
    AddRecord = 2,
    /**
     * Authorizes deleting an individual record.
     */
    DeleteRecord = 3,
    /**
     * Authorizes adding a record that supersedes earlier records via `RecordCorrection`.
     */
    CorrectRecord = 4,
    /**
     * Authorizes replacing the full {@link LockingConfig}.
     */
    UpdateLockingConfig = 5,
    /**
     * Authorizes updating only the delete-record window of the locking configuration.
     */
    UpdateLockingConfigForDeleteRecord = 6,
    /**
     * Authorizes updating only the delete-trail lock of the locking configuration.
     */
    UpdateLockingConfigForDeleteTrail = 7,
    /**
     * Authorizes updating only the write lock of the locking configuration.
     */
    UpdateLockingConfigForWrite = 8,
    /**
     * Authorizes creating roles.
     */
    AddRoles = 9,
    /**
     * Authorizes updating existing roles.
     */
    UpdateRoles = 10,
    /**
     * Authorizes deleting roles.
     */
    DeleteRoles = 11,
    /**
     * Authorizes issuing capabilities.
     */
    AddCapabilities = 12,
    /**
     * Authorizes revoking, destroying, and cleaning up capabilities.
     */
    RevokeCapabilities = 13,
    /**
     * Authorizes replacing the trail's `updatableMetadata`.
     */
    UpdateMetadata = 14,
    /**
     * Authorizes clearing the trail's `updatableMetadata`.
     */
    DeleteMetadata = 15,
    /**
     * Authorizes the migration entry point used after package upgrades.
     */
    Migrate = 16,
    /**
     * Authorizes adding entries to the trail's record-tag registry.
     */
    AddRecordTags = 17,
    /**
     * Authorizes removing entries from the trail's record-tag registry.
     */
    DeleteRecordTags = 18,
}

/**
 * Set of permissions granted by a role.
 */
export class PermissionSet {
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Returns the recommended permission set for the reserved initial-admin role.
     *
     * @returns A {@link PermissionSet} that authorizes role and capability administration.
     */
    static adminPermissions(): PermissionSet;
    /**
     * Returns the permissions needed to issue and revoke capabilities.
     *
     * @returns A {@link PermissionSet} that authorizes the capability lifecycle.
     */
    static capAdminPermissions(): PermissionSet;
    /**
     * Returns the permissions needed to administer locking rules.
     *
     * @returns A {@link PermissionSet} that authorizes updates to all locking dimensions.
     */
    static lockingAdminPermissions(): PermissionSet;
    /**
     * Returns the permissions needed to administer mutable metadata.
     *
     * @returns A {@link PermissionSet} that authorizes updating and clearing
     * `updatableMetadata`.
     */
    static metadataAdminPermissions(): PermissionSet;
    /**
     * Creates a permission set from an explicit list of permissions.
     *
     * @param permissions - Permissions to include in the set.
     */
    constructor(permissions: any[]);
    /**
     * Returns the permissions needed to administer records.
     *
     * @returns A {@link PermissionSet} that authorizes record reads, writes, and deletions.
     */
    static recordAdminPermissions(): PermissionSet;
    /**
     * Returns the permissions needed to administer roles.
     *
     * @returns A {@link PermissionSet} that authorizes adding, updating, and deleting roles.
     */
    static roleAdminPermissions(): PermissionSet;
    /**
     * Returns the permissions needed to administer record tags.
     *
     * @returns A {@link PermissionSet} that authorizes adding and removing entries from the
     * trail's record-tag registry.
     */
    static tagAdminPermissions(): PermissionSet;
    /**
     * Permissions granted by this set.
     */
    permissions: any[];
}

/**
 * Single audit-trail record.
 *
 * @remarks
 * Records form a tamper-evident, sequential chain: each record has a monotonically increasing
 * sequence number that is never reused, even after the record is deleted.
 */
export class Record {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Millisecond timestamp at which the record was added.
     */
    addedAt: bigint;
    /**
     * Address that added the record.
     */
    addedBy: string;
    /**
     * Correction relationships for this record.
     */
    correction: RecordCorrection;
    /**
     * Record payload stored on-chain.
     */
    data: Data;
    /**
     * Optional application-defined metadata.
     */
    get metadata(): string | undefined;
    /**
     * Optional application-defined metadata.
     */
    set metadata(value: string | null | undefined);
    /**
     * Monotonic record sequence number inside the trail.
     */
    sequenceNumber: bigint;
    /**
     * Optional trail-owned tag attached to the record.
     */
    get tag(): string | undefined;
    /**
     * Optional trail-owned tag attached to the record.
     */
    set tag(value: string | null | undefined);
}

/**
 * Event payload emitted when a record is added.
 */
export class RecordAdded {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Address that added the record.
     */
    addedBy: string;
    /**
     * Sequence number assigned to the new record.
     */
    sequenceNumber: bigint;
    /**
     * Millisecond event timestamp.
     */
    timestamp: bigint;
    /**
     * Trail object ID receiving the new record.
     */
    trailId: string;
}

/**
 * Correction metadata attached to a record.
 *
 * @remarks
 * {@link RecordCorrection.replaces} is fixed at record creation and lists the sequence numbers
 * this record supersedes; {@link RecordCorrection.isReplacedBy} is a back-pointer the trail sets
 * later when this record itself is corrected.
 */
export class RecordCorrection {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Sequence number of the record that supersedes this one, if any.
     */
    get isReplacedBy(): bigint | undefined;
    /**
     * Sequence number of the record that supersedes this one, if any.
     */
    set isReplacedBy(value: bigint | null | undefined);
    /**
     * Sorted sequence numbers that this record supersedes.
     */
    replaces: BigUint64Array;
}

/**
 * Event payload emitted when a record is deleted.
 */
export class RecordDeleted {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Address that deleted the record.
     */
    deletedBy: string;
    /**
     * Sequence number of the deleted record.
     */
    sequenceNumber: bigint;
    /**
     * Millisecond event timestamp.
     */
    timestamp: bigint;
    /**
     * Trail object ID from which the record was deleted.
     */
    trailId: string;
}

/**
 * Trail-owned record tag plus its usage count.
 */
export class RecordTagEntry {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Tag name.
     */
    tag: string;
    /**
     * Combined number of records and roles currently referencing the tag.
     */
    usageCount: bigint;
}

/**
 * Transaction wrapper for removing a record tag from the trail registry.
 *
 * @remarks
 * Aborts on-chain if the tag is not in the registry or while it is still referenced by any
 * existing record or role-tag restriction.
 *
 * Requires the {@link Permission.DeleteRecordTags} permission.
 */
export class RemoveRecordTag {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for revoking a capability.
 *
 * @remarks
 * Adds the capability ID to the trail's denylist. Pass `capabilityValidUntil` so
 * {@link CleanupRevokedCapabilities} can later prune the entry once that timestamp elapses; pass
 * `null` to keep the denylist entry permanently.
 *
 * Requires the {@link Permission.RevokeCapabilities} permission.
 *
 * Emits a {@link CapabilityRevoked} event on success.
 */
export class RevokeCapability {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link CapabilityRevoked} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<CapabilityRevoked>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for revoking an initial-admin capability.
 *
 * @remarks
 * Same denylist semantics as {@link RevokeCapability} but uses the dedicated entry point reserved
 * for initial-admin capability IDs. **Warning:** revoking every initial-admin capability
 * permanently seals the trail.
 *
 * Requires the {@link Permission.RevokeCapabilities} permission.
 *
 * Emits a {@link CapabilityRevoked} event on success.
 */
export class RevokeInitialAdminCapability {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link CapabilityRevoked} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<CapabilityRevoked>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Event payload emitted when expired revoked-capability entries are cleaned up.
 */
export class RevokedCapabilitiesCleanedUp {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Address that triggered the cleanup.
     */
    cleanedBy: string;
    /**
     * Number of expired entries removed by this cleanup call.
     */
    cleanedCount: bigint;
    /**
     * Millisecond event timestamp.
     */
    timestamp: bigint;
    /**
     * Trail object ID whose denylist was pruned.
     */
    trailId: string;
}

/**
 * Permissions required to administer roles, as enforced by the trail.
 */
export class RoleAdminPermissions {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Permission required to create roles.
     */
    add: Permission;
    /**
     * Permission required to delete roles.
     */
    delete: Permission;
    /**
     * Permission required to update roles.
     */
    update: Permission;
}

/**
 * Event payload emitted when a role is created.
 */
export class RoleCreated {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Address that created the role.
     */
    createdBy: string;
    /**
     * Permissions granted by the new role.
     */
    permissions: PermissionSet;
    /**
     * Optional record-tag restrictions stored as role data.
     */
    get roleTags(): RoleTags | undefined;
    /**
     * Optional record-tag restrictions stored as role data.
     */
    set roleTags(value: RoleTags | null | undefined);
    /**
     * Role name.
     */
    role: string;
    /**
     * Millisecond event timestamp.
     */
    timestamp: bigint;
    /**
     * Trail object ID that owns the role.
     */
    trailId: string;
}

/**
 * Event payload emitted when a role is deleted.
 */
export class RoleDeleted {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Address that deleted the role.
     */
    deletedBy: string;
    /**
     * Role name.
     */
    role: string;
    /**
     * Millisecond event timestamp.
     */
    timestamp: bigint;
    /**
     * Trail object ID that owned the role.
     */
    trailId: string;
}

/**
 * Role-scoped access-control API.
 *
 * @remarks
 * Identifies one role name inside the trail's access-control state and builds transactions that
 * act on that role.
 */
export class RoleHandle {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Builds a role-creation transaction.
     *
     * @remarks
     * Creates this role with `permissions` and the optional `roleTags` allowlist. Each tag
     * referenced by `roleTags` must already exist in the trail-owned tag registry; the on-chain
     * call aborts otherwise and bumps that tag's usage counter on success.
     *
     * Requires the {@link Permission.AddRoles} permission.
     *
     * @param permissions - {@link PermissionSet} granted by the new role.
     * @param roleTags - Optional {@link RoleTags} allowlist that restricts the role's reach to
     * records carrying one of these tags.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link CreateRole} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     *
     * Emits a {@link RoleCreated} event on success.
     */
    create(permissions: PermissionSet, role_tags?: RoleTags | null): TransactionBuilder<CreateRole>;
    /**
     * Builds a role-deletion transaction for this role.
     *
     * @remarks
     * Decrements the usage count of every tag the role's `roleTags` referenced. The reserved
     * initial-admin role cannot be deleted.
     *
     * Requires the {@link Permission.DeleteRoles} permission.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link DeleteRole} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     *
     * Emits a {@link RoleDeleted} event on success.
     */
    delete(): TransactionBuilder<DeleteRole>;
    /**
     * Builds a capability-issuance transaction for this role.
     *
     * @remarks
     * The resulting capability always targets this trail and grants exactly this role. Only
     * `options.issuedTo`, `options.validFromMs`, and `options.validUntilMs` configure restrictions
     * on the issued object; enforcement happens on-chain when the capability is later presented
     * for authorization. The capability is transferred to `options.issuedTo` if set, otherwise to
     * the caller.
     *
     * Requires the {@link Permission.AddCapabilities} permission.
     *
     * @param options - {@link CapabilityIssueOptions} configuring recipient and validity window.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link IssueCapability} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     *
     * Emits a {@link CapabilityIssued} event on success.
     */
    issueCapability(options: CapabilityIssueOptions): TransactionBuilder<IssueCapability>;
    /**
     * Builds a role-update transaction for this role.
     *
     * @remarks
     * Replaces both the role's permission set and its `roleTags` allowlist. Any newly supplied tag
     * must already exist in the trail's record-tag registry; tag usage counters are adjusted to
     * reflect the difference between the old and the new role-tag sets. Updating the
     * initial-admin role with permissions that do not include every permission configured in the
     * trail's role- and capability-admin permission sets aborts on-chain.
     *
     * Requires the {@link Permission.UpdateRoles} permission.
     *
     * @param permissions - Replacement {@link PermissionSet} for the role.
     * @param roleTags - Replacement {@link RoleTags} allowlist, or `null` to clear the
     * restriction.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link UpdateRole} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     *
     * Emits a {@link RoleUpdated} event on success.
     */
    updatePermissions(permissions: PermissionSet, role_tags?: RoleTags | null): TransactionBuilder<UpdateRole>;
    /**
     * Returns the role name represented by this handle.
     *
     * @returns The role name bound to this handle.
     */
    readonly name: string;
}

/**
 * Snapshot of the trail's role map.
 *
 * @remarks
 * Mirrors the access-control state maintained by the audit-trail package, including the reserved
 * initial-admin role, the revoked-capability denylist, and the role data used for tag-aware
 * authorization.
 */
export class RoleMap {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Permissions required to administer capabilities.
     */
    capabilityAdminPermissions: CapabilityAdminPermissions;
    /**
     * Capability IDs currently recognized as initial-admin capabilities.
     */
    initialAdminCapIds: string[];
    /**
     * Reserved role name used for initial-admin capabilities.
     *
     * Always equals `"Admin"`. The role bearing this name cannot be deleted.
     */
    initialAdminRoleName: string;
    /**
     * Denylist of revoked capability IDs.
     */
    revokedCapabilities: ObjectIdLinkedTable;
    /**
     * Permissions required to administer roles.
     */
    roleAdminPermissions: RoleAdminPermissions;
    /**
     * Role definitions sorted by role name.
     */
    roles: RolePermissionsEntry[];
    /**
     * Trail object ID that this role map protects.
     */
    targetKey: string;
}

/**
 * Flattened role entry exposed inside {@link RoleMap}.
 */
export class RolePermissionsEntry {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Role name.
     */
    name: string;
    /**
     * Permissions granted by the role.
     */
    permissions: any[];
    /**
     * Optional role-scoped record-tag restrictions.
     */
    get roleTags(): RoleTags | undefined;
    /**
     * Optional role-scoped record-tag restrictions.
     */
    set roleTags(value: RoleTags | null | undefined);
}

/**
 * Allowlisted record tags stored on a role.
 *
 * @remarks
 * Every tag listed here must already exist in the trail's record-tag registry before the role is
 * created or updated; otherwise the on-chain call aborts.
 */
export class RoleTags {
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Creates role-tag restrictions from a list of tag names.
     *
     * @remarks
     * The supplied names are sorted alphabetically and de-duplicated.
     *
     * @param tags - Tag names allowed by the role.
     */
    constructor(tags: string[]);
    /**
     * Sorted tag names allowed by the role.
     */
    tags: string[];
}

/**
 * Event payload emitted when a role is updated.
 */
export class RoleUpdated {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Updated permissions for the role.
     */
    permissions: PermissionSet;
    /**
     * Updated record-tag restrictions, if any.
     */
    get roleTags(): RoleTags | undefined;
    /**
     * Updated record-tag restrictions, if any.
     */
    set roleTags(value: RoleTags | null | undefined);
    /**
     * Role name.
     */
    role: string;
    /**
     * Millisecond event timestamp.
     */
    timestamp: bigint;
    /**
     * Trail object ID that owns the role.
     */
    trailId: string;
    /**
     * Address that updated the role.
     */
    updatedBy: string;
}

/**
 * Time-based lock used in the trail's {@link LockingConfig}.
 *
 * @remarks
 * {@link TimeLock.withUntilDestroyed} is rejected by the audit-trail package when used as the
 * trail-delete lock; pass it only for the write lock.
 */
export class TimeLock {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Creates a lock that never unlocks.
     *
     * @returns A lock that is always active.
     */
    static withInfinite(): TimeLock;
    /**
     * Creates a disabled lock.
     *
     * @returns A lock that does not gate the protected operation.
     */
    static withNone(): TimeLock;
    /**
     * Creates a lock that unlocks at a Unix timestamp in seconds.
     *
     * @param timeSec - Unlock time in seconds since the Unix epoch.
     *
     * @returns A lock that unlocks once the on-chain clock reaches `timeSec`.
     */
    static withUnlockAt(time_sec: number): TimeLock;
    /**
     * Creates a lock that unlocks at a Unix timestamp in milliseconds.
     *
     * @param timeMs - Unlock time in milliseconds since the Unix epoch.
     *
     * @returns A lock that unlocks once the on-chain clock reaches `timeMs`.
     */
    static withUnlockAtMs(time_ms: bigint): TimeLock;
    /**
     * Creates a lock that stays active until the protected object is destroyed.
     *
     * @returns A lock that remains active until the protected object is destroyed.
     */
    static withUntilDestroyed(): TimeLock;
    /**
     * Returns the lock argument for parameterized variants.
     *
     * @returns The numeric argument for `UnlockAt`/`UnlockAtMs` variants, or `undefined`
     * otherwise.
     */
    readonly args: any;
    /**
     * Returns the lock variant.
     *
     * @returns The {@link TimeLockType} discriminant for this lock.
     */
    readonly type: TimeLockType;
}

/**
 * Discriminant for the shape stored inside {@link TimeLock}.
 */
export enum TimeLockType {
    /**
     * The time lock is disabled.
     */
    None = 0,
    /**
     * The lock unlocks at a Unix timestamp in seconds.
     */
    UnlockAt = 1,
    /**
     * The lock unlocks at a Unix timestamp in milliseconds.
     */
    UnlockAtMs = 2,
    /**
     * The lock stays active until the protected object is explicitly destroyed.
     *
     * Not supported as the trail-delete lock.
     */
    UntilDestroyed = 3,
    /**
     * The lock is always active.
     */
    Infinite = 4,
}

/**
 * Access-control API scoped to a specific trail.
 *
 * @remarks
 * Exposes role-management and capability-management operations for one trail. Per-role operations
 * live on {@link RoleHandle}, which is reached through {@link TrailAccess.forRole}.
 */
export class TrailAccess {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Builds a cleanup transaction for expired revoked-capability entries.
     *
     * @remarks
     * Only prunes denylist entries whose stored `validUntil` is non-zero and strictly less than
     * the current clock time. Entries with `validUntil == 0` (revocations without a known expiry)
     * remain on the denylist indefinitely. Does not revoke additional capabilities and does not
     * destroy any objects.
     *
     * Requires the {@link Permission.RevokeCapabilities} permission.
     *
     * @returns A {@link TransactionBuilder} wrapping the
     * {@link CleanupRevokedCapabilities} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     *
     * Emits a {@link RevokedCapabilitiesCleanedUp} event on success.
     */
    cleanupRevokedCapabilities(): TransactionBuilder<CleanupRevokedCapabilities>;
    /**
     * Builds a capability-destruction transaction.
     *
     * @remarks
     * Consumes the owned capability object and removes any matching denylist entry. This path is
     * for ordinary capabilities only — initial-admin capabilities must use
     * {@link TrailAccess.destroyInitialAdminCapability}.
     *
     * Requires the {@link Permission.RevokeCapabilities} permission.
     *
     * @param capabilityId - Object ID of the capability to destroy.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link DestroyCapability} transaction.
     *
     * @throws When `capabilityId` is malformed or the wrapper was created from a read-only
     * client.
     *
     * Emits a {@link CapabilityDestroyed} event on success.
     */
    destroyCapability(capability_id: string): TransactionBuilder<DestroyCapability>;
    /**
     * Builds an initial-admin-capability destruction transaction.
     *
     * @remarks
     * Self-service: the holder consumes their own initial-admin capability without presenting
     * another authorization capability. Initial-admin capability IDs are tracked separately and
     * cannot be removed through the generic destroy path. **Warning:** if every initial-admin
     * capability is destroyed (and none was issued separately), the trail is permanently sealed
     * with no admin access possible.
     *
     * @param capabilityId - Object ID of the initial-admin capability to destroy.
     *
     * @returns A {@link TransactionBuilder} wrapping the
     * {@link DestroyInitialAdminCapability} transaction.
     *
     * @throws When `capabilityId` is malformed or the wrapper was created from a read-only
     * client.
     *
     * Emits a {@link CapabilityDestroyed} event on success.
     */
    destroyInitialAdminCapability(capability_id: string): TransactionBuilder<DestroyInitialAdminCapability>;
    /**
     * Returns a role-scoped handle for the given role name.
     *
     * @remarks
     * The returned handle only identifies the role. If a role with `name` does not yet exist, the
     * handle can still be used to create it via {@link RoleHandle.create}.
     *
     * @param name - Role name to bind the handle to.
     *
     * @returns A {@link RoleHandle} bound to `name` inside this trail.
     */
    forRole(name: string): RoleHandle;
    /**
     * Builds a capability-revocation transaction.
     *
     * @remarks
     * Adds `capabilityId` to the trail's revoked-capability denylist. Initial-admin capabilities
     * cannot be revoked through this path — use
     * {@link TrailAccess.revokeInitialAdminCapability} instead.
     *
     * Requires the {@link Permission.RevokeCapabilities} permission.
     *
     * @param capabilityId - Object ID of the capability to revoke.
     * @param capabilityValidUntil - Original capability expiry in milliseconds since the Unix
     * epoch. Pass it so {@link CleanupRevokedCapabilities} can later prune the denylist entry once
     * the timestamp has elapsed; pass `null` to keep the entry permanently.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link RevokeCapability} transaction.
     *
     * @throws When `capabilityId` is malformed or the wrapper was created from a read-only
     * client.
     *
     * Emits a {@link CapabilityRevoked} event on success.
     */
    revokeCapability(capability_id: string, capability_valid_until?: bigint | null): TransactionBuilder<RevokeCapability>;
    /**
     * Builds an initial-admin-capability revocation transaction.
     *
     * @remarks
     * Same denylist semantics as {@link TrailAccess.revokeCapability} but uses the dedicated entry
     * point reserved for initial-admin capability IDs. **Warning:** revoking every initial-admin
     * capability permanently seals the trail with no admin access possible.
     *
     * Requires the {@link Permission.RevokeCapabilities} permission.
     *
     * @param capabilityId - Object ID of the initial-admin capability to revoke.
     * @param capabilityValidUntil - Original capability expiry in milliseconds since the Unix
     * epoch. Pass it so {@link CleanupRevokedCapabilities} can later prune the denylist entry once
     * the timestamp has elapsed; pass `null` to keep the entry permanently.
     *
     * @returns A {@link TransactionBuilder} wrapping the
     * {@link RevokeInitialAdminCapability} transaction.
     *
     * @throws When `capabilityId` is malformed or the wrapper was created from a read-only
     * client.
     *
     * Emits a {@link CapabilityRevoked} event on success.
     */
    revokeInitialAdminCapability(capability_id: string, capability_valid_until?: bigint | null): TransactionBuilder<RevokeInitialAdminCapability>;
}

/**
 * Locking API scoped to a specific trail.
 *
 * @remarks
 * Updates the trail's {@link LockingConfig} and queries whether an individual record is currently
 * locked against deletion.
 */
export class TrailLocking {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Returns whether a record is currently locked against deletion.
     *
     * @remarks
     * Evaluates the trail's `deleteRecordWindow` against the record at `sequenceNumber` and the
     * current clock time.
     *
     * @param sequenceNumber - Sequence number of the record to inspect.
     *
     * @returns `true` when the record is still inside the delete-record window, `false`
     * otherwise.
     *
     * @throws When no record exists at `sequenceNumber`.
     */
    isRecordLocked(sequence_number: bigint): Promise<boolean>;
    /**
     * Builds a transaction that replaces the full locking configuration.
     *
     * @remarks
     * Overwrites all three locking dimensions at once: delete-record window, delete-trail lock,
     * and write lock. `config.deleteTrailLock` must not be {@link TimeLock.withUntilDestroyed};
     * the on-chain call aborts otherwise.
     *
     * Requires the {@link Permission.UpdateLockingConfig} permission.
     *
     * @param config - Replacement {@link LockingConfig}.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link UpdateLockingConfig} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     */
    update(config: LockingConfig): TransactionBuilder<UpdateLockingConfig>;
    /**
     * Builds a transaction that updates only the delete-record window.
     *
     * @remarks
     * Replaces the trail's `deleteRecordWindow`. Records currently inside the new window
     * immediately become locked against deletion.
     *
     * Requires the {@link Permission.UpdateLockingConfigForDeleteRecord} permission.
     *
     * @param window - Replacement {@link LockingWindow}.
     *
     * @returns A {@link TransactionBuilder} wrapping the
     * {@link UpdateDeleteRecordWindow} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     */
    updateDeleteRecordWindow(window: LockingWindow): TransactionBuilder<UpdateDeleteRecordWindow>;
    /**
     * Builds a transaction that updates only the delete-trail lock.
     *
     * @remarks
     * Replaces the trail's `deleteTrailLock`. The new lock must not be
     * {@link TimeLock.withUntilDestroyed}; the on-chain call aborts otherwise.
     *
     * Requires the {@link Permission.UpdateLockingConfigForDeleteTrail} permission.
     *
     * @param lock - Replacement delete-trail {@link TimeLock}.
     *
     * @returns A {@link TransactionBuilder} wrapping the
     * {@link UpdateDeleteTrailLock} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     */
    updateDeleteTrailLock(lock: TimeLock): TransactionBuilder<UpdateDeleteTrailLock>;
    /**
     * Builds a transaction that updates only the write lock.
     *
     * @remarks
     * Replaces the trail's `writeLock`. While the new lock is active, {@link TrailRecords.add}
     * aborts on-chain. {@link TimeLock.withUntilDestroyed} is permitted here.
     *
     * Requires the {@link Permission.UpdateLockingConfigForWrite} permission.
     *
     * @param lock - Replacement write {@link TimeLock}.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link UpdateWriteLock} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     */
    updateWriteLock(lock: TimeLock): TransactionBuilder<UpdateWriteLock>;
}

/**
 * Record API scoped to a specific trail.
 *
 * @remarks
 * Builds record-oriented transactions and loads record data from the trail's linked-table
 * storage.
 */
export class TrailRecords {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Builds a record-add transaction.
     *
     * @remarks
     * Records are appended sequentially with auto-assigned, monotonically increasing sequence
     * numbers that are never reused. While the trail's `writeLock` is active the on-chain call
     * aborts. When `tag` is set, it must already exist in the trail's record-tag registry and the
     * supplied capability's role must allow that tag.
     *
     * Requires the {@link Permission.AddRecord} permission.
     *
     * @param data - {@link Data} payload of the new record.
     * @param metadata - Optional application-defined metadata stored alongside the record.
     * @param tag - Optional trail-owned tag attached to the record.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link AddRecord} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     *
     * Emits a {@link RecordAdded} event on success.
     */
    add(data: Data, metadata?: string | null, tag?: string | null): TransactionBuilder<AddRecord>;
    /**
     * Executes the correction helper for a record payload.
     *
     * @remarks
     * Placeholder for a future correction helper — currently always throws because the underlying
     * implementation is not yet wired up.
     *
     * @param replaces - Sequence numbers of the records that the correction supersedes.
     * @param data - Replacement record payload.
     * @param metadata - Optional application-defined metadata stored alongside the correction.
     *
     * @throws Always; the helper is not yet implemented.
     */
    correct(replaces: BigUint64Array, data: Data, metadata?: string | null): Promise<Empty>;
    /**
     * Builds a single-record delete transaction.
     *
     * @remarks
     * The on-chain call aborts when no record exists at `sequenceNumber` or while the configured
     * delete-record window still protects it. When the record carries a tag, the supplied
     * capability's role must allow that tag.
     *
     * Requires the {@link Permission.DeleteRecord} permission.
     *
     * @param sequenceNumber - Sequence number of the record to delete.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link DeleteRecord} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     *
     * Emits a {@link RecordDeleted} event on success.
     */
    delete(sequence_number: bigint): TransactionBuilder<DeleteRecord>;
    /**
     * Builds a batched record-delete transaction.
     *
     * @remarks
     * Walks the trail from the front and silently skips records still inside the delete-record
     * window, deleting up to `limit` unlocked records in trail order. Tag-aware authorization
     * applies to every record actually deleted.
     *
     * Requires the {@link Permission.DeleteAllRecords} permission.
     *
     * @param limit - Maximum number of records to delete in this batch.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link DeleteRecordsBatch} transaction;
     * when applied it resolves to the sequence numbers of the records deleted in this batch, in
     * deletion order — at most `limit` entries, possibly fewer.
     *
     * @throws When the wrapper was created from a read-only client.
     *
     * Emits one {@link RecordDeleted} event per deletion.
     */
    deleteBatch(limit: bigint): TransactionBuilder<DeleteRecordsBatch>;
    /**
     * Loads one record by sequence number.
     *
     * @param sequenceNumber - Sequence number of the record to load.
     *
     * @returns The record stored at `sequenceNumber`.
     *
     * @throws When no record exists at the requested sequence number or the data cannot be
     * deserialized.
     */
    get(sequence_number: bigint): Promise<Record>;
    /**
     * Lists all records in sequence-number order.
     *
     * @remarks
     * Traverses the full on-chain linked table and can be expensive for large trails. For
     * paginated access, use {@link TrailRecords.listPage}.
     *
     * @returns Every record in the trail, sorted by ascending sequence number.
     *
     * @throws When the trail object cannot be fetched or a record cannot be deserialized.
     */
    list(): Promise<Record[]>;
    /**
     * Loads one page of records starting at `cursor`.
     *
     * @param cursor - Sequence-number cursor for the page boundary; pass `null` for the first
     * page and reuse {@link PaginatedRecord.nextCursor} for subsequent pages.
     * @param limit - Maximum number of records to return; may not exceed the SDK-side maximum
     * page size.
     *
     * @returns A {@link PaginatedRecord} carrying the loaded records and pagination metadata.
     *
     * @throws When the trail object cannot be fetched, a record cannot be deserialized, or
     * `limit` exceeds the SDK-side maximum.
     */
    listPage(cursor: bigint | null | undefined, limit: number): Promise<PaginatedRecord>;
    /**
     * Lists all records while enforcing a maximum number of entries.
     *
     * @remarks
     * Use this as a safety net against unexpectedly large traversals.
     *
     * @param maxEntries - Upper bound on the number of records the caller is willing to load.
     *
     * @returns Every record in the trail, sorted by ascending sequence number.
     *
     * @throws When the trail's linked-table size exceeds `maxEntries`.
     */
    listWithLimit(max_entries: number): Promise<Record[]>;
    /**
     * Returns the number of records currently stored in the trail.
     *
     * @returns Current record count.
     *
     * @throws When the trail object cannot be fetched.
     */
    recordCount(): Promise<bigint>;
}

/**
 * Tag-registry API scoped to a specific trail.
 *
 * @remarks
 * The registry defines the canonical set of tags that record writes and {@link RoleTags}
 * restrictions may reference.
 */
export class TrailTags {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Builds a transaction that adds a tag to the trail registry.
     *
     * @remarks
     * Inserted with a usage count of zero. The on-chain call aborts when the tag is already in
     * the registry. Added tags become available to future tagged record writes and role-tag
     * restrictions.
     *
     * Requires the {@link Permission.AddRecordTags} permission.
     *
     * @param tag - Tag name to add to the registry.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link AddRecordTag} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     */
    add(tag: string): TransactionBuilder<AddRecordTag>;
    /**
     * Lists every tag in the trail's registry alongside its current usage count.
     *
     * @returns Tag entries sorted alphabetically by tag name.
     *
     * @throws When the trail object cannot be fetched.
     */
    list(): Promise<RecordTagEntry[]>;
    /**
     * Builds a transaction that removes a tag from the trail registry.
     *
     * @remarks
     * The tag must currently be in the registry and must not be referenced by any record or
     * role-tag restriction; the on-chain call aborts otherwise.
     *
     * Requires the {@link Permission.DeleteRecordTags} permission.
     *
     * @param tag - Tag name to remove from the registry.
     *
     * @returns A {@link TransactionBuilder} wrapping the {@link RemoveRecordTag} transaction.
     *
     * @throws When the wrapper was created from a read-only client.
     */
    remove(tag: string): TransactionBuilder<RemoveRecordTag>;
}

/**
 * Transaction wrapper for updating the delete-record window.
 *
 * @remarks
 * Updates only the rule that locks individual records against deletion (time-based or
 * count-based).
 *
 * Requires the {@link Permission.UpdateLockingConfigForDeleteRecord} permission.
 */
export class UpdateDeleteRecordWindow {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for updating the delete-trail lock.
 *
 * @remarks
 * The new lock must not be {@link TimeLock.withUntilDestroyed}.
 *
 * Requires the {@link Permission.UpdateLockingConfigForDeleteTrail} permission.
 */
export class UpdateDeleteTrailLock {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for replacing the full locking configuration.
 *
 * @remarks
 * The supplied configuration's `deleteTrailLock` must not be {@link TimeLock.withUntilDestroyed};
 * the call aborts on-chain otherwise.
 *
 * Requires the {@link Permission.UpdateLockingConfig} permission.
 */
export class UpdateLockingConfig {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for mutable-metadata updates.
 *
 * @remarks
 * Passing `null`/`undefined` for the new metadata clears the `updatableMetadata` field on-chain.
 *
 * Requires the {@link Permission.UpdateMetadata} permission.
 */
export class UpdateMetadata {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for updating a role.
 *
 * @remarks
 * Replaces both the role's permissions and its `roleTags`; any newly supplied tag must already be
 * in the trail's record-tag registry.
 *
 * Requires the {@link Permission.UpdateRoles} permission.
 *
 * Emits a {@link RoleUpdated} event on success.
 */
export class UpdateRole {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events and decodes the matching event payload.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @returns Decoded {@link RoleUpdated} event payload.
     *
     * @throws When the expected event is missing or transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<RoleUpdated>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

/**
 * Transaction wrapper for updating the write lock.
 *
 * @remarks
 * While the new lock is active, {@link TrailRecords.add} aborts on-chain.
 *
 * Requires the {@link Permission.UpdateLockingConfigForWrite} permission.
 */
export class UpdateWriteLock {
    private constructor();
    /**
     ** Return copy of self without private attributes.
     */
    toJSON(): Object;
    /**
     * Return stringified version of self.
     */
    toString(): string;
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     */
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     */
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

export class WasmManagedCoreClient {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    iotaClient(): IotaClient;
    network(): string;
    packageHistory(): string[];
    packageId(): string;
    senderAddress(): string;
    senderPublicKey(): PublicKey;
    signer(): TransactionSigner;
    tfComponentsPackageId(): string | undefined;
}

export class WasmManagedCoreClientReadOnly {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    iotaClient(): IotaClient;
    network(): string;
    packageHistory(): string[];
    packageId(): string;
    tfComponentsPackageId(): string | undefined;
}

/**
 * Installs the panic hook used by the wasm bindings.
 */
export function start(): void;
