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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<RecordAdded>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    finish(): TransactionBuilder<CreateTrail>;
    withAdmin(admin: string): AuditTrailBuilder;
    withInitialRecordBytes(data: Uint8Array, metadata?: string | null, tag?: string | null): AuditTrailBuilder;
    withInitialRecordString(data: string, metadata?: string | null, tag?: string | null): AuditTrailBuilder;
    withLockingConfig(config: LockingConfig): AuditTrailBuilder;
    withRecordTags(tags: string[]): AuditTrailBuilder;
    withTrailMetadata(name: string, description?: string | null): AuditTrailBuilder;
    withUpdatableMetadata(metadata: string): AuditTrailBuilder;
}

export class AuditTrailClient {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    chainId(): string;
    static create(client: AuditTrailClientReadOnly, signer: TransactionSigner): Promise<AuditTrailClient>;
    static createFromIotaClient(iota_client: IotaClient, signer: TransactionSigner, package_id?: string | null): Promise<AuditTrailClient>;
    static createFromIotaClientWithPackageOverrides(iota_client: IotaClient, signer: TransactionSigner, package_overrides?: PackageOverrides | null): Promise<AuditTrailClient>;
    createTrail(): AuditTrailBuilder;
    iotaClient(): IotaClient;
    network(): string;
    packageHistory(): string[];
    packageId(): string;
    readOnly(): AuditTrailClientReadOnly;
    senderAddress(): string;
    senderPublicKey(): PublicKey;
    signer(): TransactionSigner;
    tfComponentsPackageId(): string;
    trail(trail_id: string): AuditTrailHandle;
    withSigner(signer: TransactionSigner): Promise<AuditTrailClient>;
}

export class AuditTrailClientReadOnly {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    chainId(): string;
    static create(iota_client: IotaClient): Promise<AuditTrailClientReadOnly>;
    static createWithPackageOverrides(iota_client: IotaClient, package_overrides: PackageOverrides): Promise<AuditTrailClientReadOnly>;
    static createWithPkgId(iota_client: IotaClient, package_id: string): Promise<AuditTrailClientReadOnly>;
    iotaClient(): IotaClient;
    network(): string;
    packageHistory(): string[];
    packageId(): string;
    tfComponentsPackageId(): string;
    trail(trail_id: string): AuditTrailHandle;
}

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
    creator: string;
    timestamp: bigint;
    trailId: string;
}

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
    timestamp: bigint;
    trailId: string;
}

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
    access(): TrailAccess;
    deleteAuditTrail(): TransactionBuilder<DeleteAuditTrail>;
    get(): Promise<OnChainAuditTrail>;
    locking(): TrailLocking;
    migrate(): TransactionBuilder<Migrate>;
    records(): TrailRecords;
    tags(): TrailTags;
    updateMetadata(metadata?: string | null): TransactionBuilder<UpdateMetadata>;
}

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
    id: string;
    get issuedTo(): string | undefined;
    set issuedTo(value: string | null | undefined);
    role: string;
    targetKey: string;
    get validFrom(): bigint | undefined;
    set validFrom(value: bigint | null | undefined);
    get validUntil(): bigint | undefined;
    set validUntil(value: bigint | null | undefined);
}

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
    add: Permission;
    revoke: Permission;
}

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
    capabilityId: string;
    get issuedTo(): string | undefined;
    set issuedTo(value: string | null | undefined);
    role: string;
    targetKey: string;
    get validFrom(): bigint | undefined;
    set validFrom(value: bigint | null | undefined);
    get validUntil(): bigint | undefined;
    set validUntil(value: bigint | null | undefined);
}

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
    constructor(issued_to?: string | null, valid_from_ms?: bigint | null, valid_until_ms?: bigint | null);
    get issuedTo(): string | undefined;
    set issuedTo(value: string | null | undefined);
    get validFromMs(): bigint | undefined;
    set validFromMs(value: bigint | null | undefined);
    get validUntilMs(): bigint | undefined;
    set validUntilMs(value: bigint | null | undefined);
}

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
    capabilityId: string;
    get issuedTo(): string | undefined;
    set issuedTo(value: string | null | undefined);
    role: string;
    targetKey: string;
    get validFrom(): bigint | undefined;
    set validFrom(value: bigint | null | undefined);
    get validUntil(): bigint | undefined;
    set validUntil(value: bigint | null | undefined);
}

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
    capabilityId: string;
    targetKey: string;
    validUntil: bigint;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<RoleCreated>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<OnChainAuditTrail>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
    constructor(builder: AuditTrailBuilder);
}

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
    static fromBytes(data: Uint8Array): Data;
    static fromString(data: string): Data;
    toBytes(): Uint8Array;
    toString(): string;
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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<AuditTrailDeleted>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<RecordDeleted>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<bigint>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<RoleDeleted>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<CapabilityDestroyed>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<CapabilityDestroyed>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    get description(): string | undefined;
    set description(value: string | null | undefined);
    name: string;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<CapabilityIssued>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    get head(): bigint | undefined;
    set head(value: bigint | null | undefined);
    id: string;
    size: bigint;
    get tail(): bigint | undefined;
    set tail(value: bigint | null | undefined);
}

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
    constructor(delete_record_window: LockingWindow, delete_trail_lock: TimeLock, write_lock: TimeLock);
    deleteRecordWindow: LockingWindow;
    deleteTrailLock: TimeLock;
    writeLock: TimeLock;
}

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
    static withCountBased(count: bigint): LockingWindow;
    static withNone(): LockingWindow;
    static withTimeBased(seconds: bigint): LockingWindow;
    readonly args: any;
    readonly type: LockingWindowType;
}

export enum LockingWindowType {
    None = 0,
    TimeBased = 1,
    CountBased = 2,
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    get head(): string | undefined;
    set head(value: string | null | undefined);
    id: string;
    size: bigint;
    get tail(): string | undefined;
    set tail(value: string | null | undefined);
}

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
    readonly createdAt: bigint;
    readonly creator: string;
    readonly id: string;
    readonly immutableMetadata: ImmutableMetadata | undefined;
    readonly lockingConfig: LockingConfig;
    readonly records: LinkedTable;
    readonly roles: RoleMap;
    readonly sequenceNumber: bigint;
    readonly tags: RecordTagEntry[];
    readonly updatableMetadata: string | undefined;
    readonly version: bigint;
}

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
    constructor(audit_trail_package_id?: string | null, tf_components_package_id?: string | null);
    get auditTrailPackageId(): string | undefined;
    set auditTrailPackageId(value: string | null | undefined);
    get tfComponentsPackageId(): string | undefined;
    set tfComponentsPackageId(value: string | null | undefined);
}

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
    hasNextPage: boolean;
    get nextCursor(): bigint | undefined;
    set nextCursor(value: bigint | null | undefined);
    records: Record[];
}

export enum Permission {
    DeleteAuditTrail = 0,
    DeleteAllRecords = 1,
    AddRecord = 2,
    DeleteRecord = 3,
    CorrectRecord = 4,
    UpdateLockingConfig = 5,
    UpdateLockingConfigForDeleteRecord = 6,
    UpdateLockingConfigForDeleteTrail = 7,
    UpdateLockingConfigForWrite = 8,
    AddRoles = 9,
    UpdateRoles = 10,
    DeleteRoles = 11,
    AddCapabilities = 12,
    RevokeCapabilities = 13,
    UpdateMetadata = 14,
    DeleteMetadata = 15,
    Migrate = 16,
    AddRecordTags = 17,
    DeleteRecordTags = 18,
}

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
    static adminPermissions(): PermissionSet;
    static capAdminPermissions(): PermissionSet;
    static lockingAdminPermissions(): PermissionSet;
    static metadataAdminPermissions(): PermissionSet;
    constructor(permissions: any[]);
    static recordAdminPermissions(): PermissionSet;
    static roleAdminPermissions(): PermissionSet;
    static tagAdminPermissions(): PermissionSet;
    permissions: any[];
}

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
    addedAt: bigint;
    addedBy: string;
    correction: RecordCorrection;
    data: Data;
    get metadata(): string | undefined;
    set metadata(value: string | null | undefined);
    sequenceNumber: bigint;
    get tag(): string | undefined;
    set tag(value: string | null | undefined);
}

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
    addedBy: string;
    sequenceNumber: bigint;
    timestamp: bigint;
    trailId: string;
}

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
    get isReplacedBy(): bigint | undefined;
    set isReplacedBy(value: bigint | null | undefined);
    replaces: BigUint64Array;
}

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
    deletedBy: string;
    sequenceNumber: bigint;
    timestamp: bigint;
    trailId: string;
}

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
    tag: string;
    usageCount: bigint;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<CapabilityRevoked>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<CapabilityRevoked>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    add: Permission;
    delete: Permission;
    update: Permission;
}

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
    createdBy: string;
    permissions: PermissionSet;
    get roleTags(): RoleTags | undefined;
    set roleTags(value: RoleTags | null | undefined);
    role: string;
    timestamp: bigint;
    trailId: string;
}

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
    deletedBy: string;
    role: string;
    timestamp: bigint;
    trailId: string;
}

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
    create(permissions: PermissionSet, role_tags?: RoleTags | null): TransactionBuilder<CreateRole>;
    delete(): TransactionBuilder<DeleteRole>;
    issueCapability(options: CapabilityIssueOptions): TransactionBuilder<IssueCapability>;
    updatePermissions(permissions: PermissionSet, role_tags?: RoleTags | null): TransactionBuilder<UpdateRole>;
    readonly name: string;
}

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
    capabilityAdminPermissions: CapabilityAdminPermissions;
    initialAdminCapIds: string[];
    initialAdminRoleName: string;
    revokedCapabilities: ObjectIdLinkedTable;
    roleAdminPermissions: RoleAdminPermissions;
    roles: RolePermissionsEntry[];
    targetKey: string;
}

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
    name: string;
    permissions: any[];
    get roleTags(): RoleTags | undefined;
    set roleTags(value: RoleTags | null | undefined);
}

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
    constructor(tags: string[]);
    tags: string[];
}

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
    permissions: PermissionSet;
    get roleTags(): RoleTags | undefined;
    set roleTags(value: RoleTags | null | undefined);
    role: string;
    timestamp: bigint;
    trailId: string;
    updatedBy: string;
}

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
    static withInfinite(): TimeLock;
    static withNone(): TimeLock;
    static withUnlockAt(time_sec: number): TimeLock;
    static withUnlockAtMs(time_ms: bigint): TimeLock;
    static withUntilDestroyed(): TimeLock;
    readonly args: any;
    readonly type: TimeLockType;
}

export enum TimeLockType {
    None = 0,
    UnlockAt = 1,
    UnlockAtMs = 2,
    UntilDestroyed = 3,
    Infinite = 4,
}

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
    cleanupRevokedCapabilities(): TransactionBuilder<CleanupRevokedCapabilities>;
    destroyCapability(capability_id: string): TransactionBuilder<DestroyCapability>;
    destroyInitialAdminCapability(capability_id: string): TransactionBuilder<DestroyInitialAdminCapability>;
    forRole(name: string): RoleHandle;
    revokeCapability(capability_id: string, capability_valid_until?: bigint | null): TransactionBuilder<RevokeCapability>;
    revokeInitialAdminCapability(capability_id: string, capability_valid_until?: bigint | null): TransactionBuilder<RevokeInitialAdminCapability>;
}

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
    isRecordLocked(sequence_number: bigint): Promise<boolean>;
    update(config: LockingConfig): TransactionBuilder<UpdateLockingConfig>;
    updateDeleteRecordWindow(window: LockingWindow): TransactionBuilder<UpdateDeleteRecordWindow>;
    updateDeleteTrailLock(lock: TimeLock): TransactionBuilder<UpdateDeleteTrailLock>;
    updateWriteLock(lock: TimeLock): TransactionBuilder<UpdateWriteLock>;
}

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
    add(data: Data, metadata?: string | null, tag?: string | null): TransactionBuilder<AddRecord>;
    correct(replaces: BigUint64Array, data: Data, metadata?: string | null): Promise<Empty>;
    delete(sequence_number: bigint): TransactionBuilder<DeleteRecord>;
    deleteBatch(limit: bigint): TransactionBuilder<DeleteRecordsBatch>;
    get(sequence_number: bigint): Promise<Record>;
    list(): Promise<Record[]>;
    listPage(cursor: bigint | null | undefined, limit: number): Promise<PaginatedRecord>;
    listWithLimit(max_entries: number): Promise<Record[]>;
    recordCount(): Promise<bigint>;
}

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
    add(tag: string): TransactionBuilder<AddRecordTag>;
    remove(tag: string): TransactionBuilder<RemoveRecordTag>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<RoleUpdated>;
    buildProgrammableTransaction(client: CoreClientReadOnly): Promise<Uint8Array>;
}

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
    applyWithEvents(wasm_effects: TransactionEffects, wasm_events: IotaEvent[], client: CoreClientReadOnly): Promise<Empty>;
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

export function start(): void;
