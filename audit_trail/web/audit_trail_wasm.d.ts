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

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_audittrailcreated_free: (a: number, b: number) => void;
    readonly __wbg_audittraildeleted_free: (a: number, b: number) => void;
    readonly __wbg_capability_free: (a: number, b: number) => void;
    readonly __wbg_capabilityadminpermissions_free: (a: number, b: number) => void;
    readonly __wbg_capabilitydestroyed_free: (a: number, b: number) => void;
    readonly __wbg_capabilityissued_free: (a: number, b: number) => void;
    readonly __wbg_capabilityissueoptions_free: (a: number, b: number) => void;
    readonly __wbg_capabilityrevoked_free: (a: number, b: number) => void;
    readonly __wbg_data_free: (a: number, b: number) => void;
    readonly __wbg_empty_free: (a: number, b: number) => void;
    readonly __wbg_get_audittrailcreated_creator: (a: number) => [number, number];
    readonly __wbg_get_audittrailcreated_timestamp: (a: number) => bigint;
    readonly __wbg_get_audittrailcreated_trailId: (a: number) => [number, number];
    readonly __wbg_get_capability_id: (a: number) => [number, number];
    readonly __wbg_get_capability_issuedTo: (a: number) => [number, number];
    readonly __wbg_get_capability_role: (a: number) => [number, number];
    readonly __wbg_get_capability_targetKey: (a: number) => [number, number];
    readonly __wbg_get_capability_validFrom: (a: number) => [number, bigint];
    readonly __wbg_get_capability_validUntil: (a: number) => [number, bigint];
    readonly __wbg_get_capabilityadminpermissions_add: (a: number) => number;
    readonly __wbg_get_capabilityadminpermissions_revoke: (a: number) => number;
    readonly __wbg_get_capabilityissueoptions_issuedTo: (a: number) => [number, number];
    readonly __wbg_get_immutablemetadata_description: (a: number) => [number, number];
    readonly __wbg_get_immutablemetadata_name: (a: number) => [number, number];
    readonly __wbg_get_linkedtable_id: (a: number) => [number, number];
    readonly __wbg_get_linkedtable_size: (a: number) => bigint;
    readonly __wbg_get_lockingconfig_deleteRecordWindow: (a: number) => number;
    readonly __wbg_get_lockingconfig_deleteTrailLock: (a: number) => number;
    readonly __wbg_get_lockingconfig_writeLock: (a: number) => number;
    readonly __wbg_get_objectidlinkedtable_head: (a: number) => [number, number];
    readonly __wbg_get_paginatedrecord_hasNextPage: (a: number) => number;
    readonly __wbg_get_paginatedrecord_records: (a: number) => [number, number];
    readonly __wbg_get_permissionset_permissions: (a: number) => [number, number];
    readonly __wbg_get_record_addedAt: (a: number) => bigint;
    readonly __wbg_get_record_addedBy: (a: number) => [number, number];
    readonly __wbg_get_record_correction: (a: number) => number;
    readonly __wbg_get_record_data: (a: number) => number;
    readonly __wbg_get_record_metadata: (a: number) => [number, number];
    readonly __wbg_get_record_sequenceNumber: (a: number) => bigint;
    readonly __wbg_get_record_tag: (a: number) => [number, number];
    readonly __wbg_get_recordadded_addedBy: (a: number) => [number, number];
    readonly __wbg_get_recordadded_timestamp: (a: number) => bigint;
    readonly __wbg_get_recordadded_trailId: (a: number) => [number, number];
    readonly __wbg_get_recordcorrection_replaces: (a: number) => [number, number];
    readonly __wbg_get_roleadminpermissions_update: (a: number) => number;
    readonly __wbg_get_rolecreated_permissions: (a: number) => number;
    readonly __wbg_get_rolecreated_roleTags: (a: number) => number;
    readonly __wbg_get_rolemap_capabilityAdminPermissions: (a: number) => number;
    readonly __wbg_get_rolemap_initialAdminCapIds: (a: number) => [number, number];
    readonly __wbg_get_rolemap_initialAdminRoleName: (a: number) => [number, number];
    readonly __wbg_get_rolemap_revokedCapabilities: (a: number) => number;
    readonly __wbg_get_rolemap_roleAdminPermissions: (a: number) => number;
    readonly __wbg_get_rolemap_roles: (a: number) => [number, number];
    readonly __wbg_get_rolemap_targetKey: (a: number) => [number, number];
    readonly __wbg_get_rolepermissionsentry_permissions: (a: number) => [number, number];
    readonly __wbg_get_rolepermissionsentry_roleTags: (a: number) => number;
    readonly __wbg_get_roletags_tags: (a: number) => [number, number];
    readonly __wbg_immutablemetadata_free: (a: number, b: number) => void;
    readonly __wbg_linkedtable_free: (a: number, b: number) => void;
    readonly __wbg_lockingconfig_free: (a: number, b: number) => void;
    readonly __wbg_lockingwindow_free: (a: number, b: number) => void;
    readonly __wbg_objectidlinkedtable_free: (a: number, b: number) => void;
    readonly __wbg_paginatedrecord_free: (a: number, b: number) => void;
    readonly __wbg_permissionset_free: (a: number, b: number) => void;
    readonly __wbg_record_free: (a: number, b: number) => void;
    readonly __wbg_recordadded_free: (a: number, b: number) => void;
    readonly __wbg_recordcorrection_free: (a: number, b: number) => void;
    readonly __wbg_recorddeleted_free: (a: number, b: number) => void;
    readonly __wbg_recordtagentry_free: (a: number, b: number) => void;
    readonly __wbg_roleadminpermissions_free: (a: number, b: number) => void;
    readonly __wbg_rolecreated_free: (a: number, b: number) => void;
    readonly __wbg_roledeleted_free: (a: number, b: number) => void;
    readonly __wbg_rolemap_free: (a: number, b: number) => void;
    readonly __wbg_rolepermissionsentry_free: (a: number, b: number) => void;
    readonly __wbg_roletags_free: (a: number, b: number) => void;
    readonly __wbg_roleupdated_free: (a: number, b: number) => void;
    readonly __wbg_set_audittrailcreated_creator: (a: number, b: number, c: number) => void;
    readonly __wbg_set_audittrailcreated_timestamp: (a: number, b: bigint) => void;
    readonly __wbg_set_audittrailcreated_trailId: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capability_id: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capability_issuedTo: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capability_role: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capability_targetKey: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capability_validFrom: (a: number, b: number, c: bigint) => void;
    readonly __wbg_set_capability_validUntil: (a: number, b: number, c: bigint) => void;
    readonly __wbg_set_capabilityadminpermissions_add: (a: number, b: number) => void;
    readonly __wbg_set_capabilityadminpermissions_revoke: (a: number, b: number) => void;
    readonly __wbg_set_capabilityissueoptions_issuedTo: (a: number, b: number, c: number) => void;
    readonly __wbg_set_immutablemetadata_description: (a: number, b: number, c: number) => void;
    readonly __wbg_set_immutablemetadata_name: (a: number, b: number, c: number) => void;
    readonly __wbg_set_linkedtable_id: (a: number, b: number, c: number) => void;
    readonly __wbg_set_linkedtable_size: (a: number, b: bigint) => void;
    readonly __wbg_set_lockingconfig_deleteRecordWindow: (a: number, b: number) => void;
    readonly __wbg_set_lockingconfig_deleteTrailLock: (a: number, b: number) => void;
    readonly __wbg_set_lockingconfig_writeLock: (a: number, b: number) => void;
    readonly __wbg_set_objectidlinkedtable_head: (a: number, b: number, c: number) => void;
    readonly __wbg_set_paginatedrecord_hasNextPage: (a: number, b: number) => void;
    readonly __wbg_set_paginatedrecord_records: (a: number, b: number, c: number) => void;
    readonly __wbg_set_permissionset_permissions: (a: number, b: number, c: number) => void;
    readonly __wbg_set_record_addedAt: (a: number, b: bigint) => void;
    readonly __wbg_set_record_addedBy: (a: number, b: number, c: number) => void;
    readonly __wbg_set_record_correction: (a: number, b: number) => void;
    readonly __wbg_set_record_data: (a: number, b: number) => void;
    readonly __wbg_set_record_metadata: (a: number, b: number, c: number) => void;
    readonly __wbg_set_record_sequenceNumber: (a: number, b: bigint) => void;
    readonly __wbg_set_record_tag: (a: number, b: number, c: number) => void;
    readonly __wbg_set_recordadded_addedBy: (a: number, b: number, c: number) => void;
    readonly __wbg_set_recordadded_timestamp: (a: number, b: bigint) => void;
    readonly __wbg_set_recordadded_trailId: (a: number, b: number, c: number) => void;
    readonly __wbg_set_recordcorrection_replaces: (a: number, b: number, c: number) => void;
    readonly __wbg_set_roleadminpermissions_update: (a: number, b: number) => void;
    readonly __wbg_set_rolecreated_permissions: (a: number, b: number) => void;
    readonly __wbg_set_rolecreated_roleTags: (a: number, b: number) => void;
    readonly __wbg_set_rolemap_capabilityAdminPermissions: (a: number, b: number) => void;
    readonly __wbg_set_rolemap_initialAdminCapIds: (a: number, b: number, c: number) => void;
    readonly __wbg_set_rolemap_initialAdminRoleName: (a: number, b: number, c: number) => void;
    readonly __wbg_set_rolemap_revokedCapabilities: (a: number, b: number) => void;
    readonly __wbg_set_rolemap_roleAdminPermissions: (a: number, b: number) => void;
    readonly __wbg_set_rolemap_roles: (a: number, b: number, c: number) => void;
    readonly __wbg_set_rolemap_targetKey: (a: number, b: number, c: number) => void;
    readonly __wbg_set_rolepermissionsentry_permissions: (a: number, b: number, c: number) => void;
    readonly __wbg_set_rolepermissionsentry_roleTags: (a: number, b: number) => void;
    readonly __wbg_set_roletags_tags: (a: number, b: number, c: number) => void;
    readonly __wbg_timelock_free: (a: number, b: number) => void;
    readonly capabilityissueoptions_new: (a: number, b: number, c: number, d: bigint, e: number, f: bigint) => number;
    readonly data_fromBytes: (a: any) => number;
    readonly data_fromString: (a: number, b: number) => number;
    readonly data_toBytes: (a: number) => [number, number];
    readonly data_toString: (a: number) => [number, number];
    readonly data_value: (a: number) => any;
    readonly lockingconfig_new: (a: number, b: number, c: number) => number;
    readonly lockingwindow_args: (a: number) => any;
    readonly lockingwindow_type: (a: number) => number;
    readonly lockingwindow_withCountBased: (a: bigint) => number;
    readonly lockingwindow_withNone: () => number;
    readonly lockingwindow_withTimeBased: (a: bigint) => number;
    readonly permissionset_adminPermissions: () => number;
    readonly permissionset_capAdminPermissions: () => number;
    readonly permissionset_lockingAdminPermissions: () => number;
    readonly permissionset_metadataAdminPermissions: () => number;
    readonly permissionset_new: (a: number, b: number) => number;
    readonly permissionset_recordAdminPermissions: () => number;
    readonly permissionset_roleAdminPermissions: () => number;
    readonly permissionset_tagAdminPermissions: () => number;
    readonly roletags_new: (a: number, b: number) => number;
    readonly timelock_args: (a: number) => any;
    readonly timelock_type: (a: number) => number;
    readonly timelock_withInfinite: () => number;
    readonly timelock_withNone: () => number;
    readonly timelock_withUnlockAt: (a: number) => number;
    readonly timelock_withUnlockAtMs: (a: bigint) => number;
    readonly timelock_withUntilDestroyed: () => number;
    readonly __wbg_set_audittraildeleted_trailId: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capabilitydestroyed_capabilityId: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capabilitydestroyed_role: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capabilitydestroyed_targetKey: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capabilityissued_capabilityId: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capabilityissued_role: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capabilityissued_targetKey: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capabilityrevoked_capabilityId: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capabilityrevoked_targetKey: (a: number, b: number, c: number) => void;
    readonly __wbg_set_objectidlinkedtable_id: (a: number, b: number, c: number) => void;
    readonly __wbg_set_recorddeleted_deletedBy: (a: number, b: number, c: number) => void;
    readonly __wbg_set_recorddeleted_trailId: (a: number, b: number, c: number) => void;
    readonly __wbg_set_recordtagentry_tag: (a: number, b: number, c: number) => void;
    readonly __wbg_set_rolecreated_createdBy: (a: number, b: number, c: number) => void;
    readonly __wbg_set_rolecreated_role: (a: number, b: number, c: number) => void;
    readonly __wbg_set_rolecreated_trailId: (a: number, b: number, c: number) => void;
    readonly __wbg_set_roledeleted_deletedBy: (a: number, b: number, c: number) => void;
    readonly __wbg_set_roledeleted_role: (a: number, b: number, c: number) => void;
    readonly __wbg_set_roledeleted_trailId: (a: number, b: number, c: number) => void;
    readonly __wbg_set_rolepermissionsentry_name: (a: number, b: number, c: number) => void;
    readonly __wbg_set_roleupdated_role: (a: number, b: number, c: number) => void;
    readonly __wbg_set_roleupdated_trailId: (a: number, b: number, c: number) => void;
    readonly __wbg_set_roleupdated_updatedBy: (a: number, b: number, c: number) => void;
    readonly __wbg_set_roleadminpermissions_add: (a: number, b: number) => void;
    readonly __wbg_set_roleadminpermissions_delete: (a: number, b: number) => void;
    readonly __wbg_get_roleupdated_roleTags: (a: number) => number;
    readonly __wbg_get_roleadminpermissions_add: (a: number) => number;
    readonly __wbg_get_roleadminpermissions_delete: (a: number) => number;
    readonly __wbg_set_audittraildeleted_timestamp: (a: number, b: bigint) => void;
    readonly __wbg_set_capabilityrevoked_validUntil: (a: number, b: bigint) => void;
    readonly __wbg_set_objectidlinkedtable_size: (a: number, b: bigint) => void;
    readonly __wbg_set_recordadded_sequenceNumber: (a: number, b: bigint) => void;
    readonly __wbg_set_recorddeleted_sequenceNumber: (a: number, b: bigint) => void;
    readonly __wbg_set_recorddeleted_timestamp: (a: number, b: bigint) => void;
    readonly __wbg_set_recordtagentry_usageCount: (a: number, b: bigint) => void;
    readonly __wbg_set_rolecreated_timestamp: (a: number, b: bigint) => void;
    readonly __wbg_set_roledeleted_timestamp: (a: number, b: bigint) => void;
    readonly __wbg_set_roleupdated_timestamp: (a: number, b: bigint) => void;
    readonly __wbg_get_audittraildeleted_timestamp: (a: number) => bigint;
    readonly __wbg_get_capabilityrevoked_validUntil: (a: number) => bigint;
    readonly __wbg_get_objectidlinkedtable_size: (a: number) => bigint;
    readonly __wbg_get_recordadded_sequenceNumber: (a: number) => bigint;
    readonly __wbg_get_recorddeleted_sequenceNumber: (a: number) => bigint;
    readonly __wbg_get_recorddeleted_timestamp: (a: number) => bigint;
    readonly __wbg_get_recordtagentry_usageCount: (a: number) => bigint;
    readonly __wbg_get_rolecreated_timestamp: (a: number) => bigint;
    readonly __wbg_get_roledeleted_timestamp: (a: number) => bigint;
    readonly __wbg_get_roleupdated_timestamp: (a: number) => bigint;
    readonly __wbg_set_capabilitydestroyed_issuedTo: (a: number, b: number, c: number) => void;
    readonly __wbg_set_capabilityissued_issuedTo: (a: number, b: number, c: number) => void;
    readonly __wbg_set_objectidlinkedtable_tail: (a: number, b: number, c: number) => void;
    readonly __wbg_get_capabilitydestroyed_validFrom: (a: number) => [number, bigint];
    readonly __wbg_get_capabilitydestroyed_validUntil: (a: number) => [number, bigint];
    readonly __wbg_get_capabilityissued_validFrom: (a: number) => [number, bigint];
    readonly __wbg_get_capabilityissued_validUntil: (a: number) => [number, bigint];
    readonly __wbg_get_capabilityissueoptions_validFromMs: (a: number) => [number, bigint];
    readonly __wbg_get_capabilityissueoptions_validUntilMs: (a: number) => [number, bigint];
    readonly __wbg_get_linkedtable_head: (a: number) => [number, bigint];
    readonly __wbg_get_linkedtable_tail: (a: number) => [number, bigint];
    readonly __wbg_get_paginatedrecord_nextCursor: (a: number) => [number, bigint];
    readonly __wbg_get_recordcorrection_isReplacedBy: (a: number) => [number, bigint];
    readonly __wbg_get_capabilitydestroyed_issuedTo: (a: number) => [number, number];
    readonly __wbg_get_capabilityissued_issuedTo: (a: number) => [number, number];
    readonly __wbg_get_objectidlinkedtable_tail: (a: number) => [number, number];
    readonly __wbg_set_capabilitydestroyed_validFrom: (a: number, b: number, c: bigint) => void;
    readonly __wbg_set_capabilitydestroyed_validUntil: (a: number, b: number, c: bigint) => void;
    readonly __wbg_set_capabilityissued_validFrom: (a: number, b: number, c: bigint) => void;
    readonly __wbg_set_capabilityissued_validUntil: (a: number, b: number, c: bigint) => void;
    readonly __wbg_set_capabilityissueoptions_validFromMs: (a: number, b: number, c: bigint) => void;
    readonly __wbg_set_capabilityissueoptions_validUntilMs: (a: number, b: number, c: bigint) => void;
    readonly __wbg_set_linkedtable_head: (a: number, b: number, c: bigint) => void;
    readonly __wbg_set_linkedtable_tail: (a: number, b: number, c: bigint) => void;
    readonly __wbg_set_paginatedrecord_nextCursor: (a: number, b: number, c: bigint) => void;
    readonly __wbg_set_recordcorrection_isReplacedBy: (a: number, b: number, c: bigint) => void;
    readonly __wbg_get_roleupdated_permissions: (a: number) => number;
    readonly __wbg_set_roleupdated_roleTags: (a: number, b: number) => void;
    readonly __wbg_set_roleupdated_permissions: (a: number, b: number) => void;
    readonly __wbg_get_audittraildeleted_trailId: (a: number) => [number, number];
    readonly __wbg_get_capabilitydestroyed_capabilityId: (a: number) => [number, number];
    readonly __wbg_get_capabilitydestroyed_role: (a: number) => [number, number];
    readonly __wbg_get_capabilitydestroyed_targetKey: (a: number) => [number, number];
    readonly __wbg_get_capabilityissued_capabilityId: (a: number) => [number, number];
    readonly __wbg_get_capabilityissued_role: (a: number) => [number, number];
    readonly __wbg_get_capabilityissued_targetKey: (a: number) => [number, number];
    readonly __wbg_get_capabilityrevoked_capabilityId: (a: number) => [number, number];
    readonly __wbg_get_capabilityrevoked_targetKey: (a: number) => [number, number];
    readonly __wbg_get_objectidlinkedtable_id: (a: number) => [number, number];
    readonly __wbg_get_recorddeleted_deletedBy: (a: number) => [number, number];
    readonly __wbg_get_recorddeleted_trailId: (a: number) => [number, number];
    readonly __wbg_get_recordtagentry_tag: (a: number) => [number, number];
    readonly __wbg_get_rolecreated_createdBy: (a: number) => [number, number];
    readonly __wbg_get_rolecreated_role: (a: number) => [number, number];
    readonly __wbg_get_rolecreated_trailId: (a: number) => [number, number];
    readonly __wbg_get_roledeleted_deletedBy: (a: number) => [number, number];
    readonly __wbg_get_roledeleted_role: (a: number) => [number, number];
    readonly __wbg_get_roledeleted_trailId: (a: number) => [number, number];
    readonly __wbg_get_rolepermissionsentry_name: (a: number) => [number, number];
    readonly __wbg_get_roleupdated_role: (a: number) => [number, number];
    readonly __wbg_get_roleupdated_trailId: (a: number) => [number, number];
    readonly __wbg_get_roleupdated_updatedBy: (a: number) => [number, number];
    readonly __wbg_trailtags_free: (a: number, b: number) => void;
    readonly trailtags_add: (a: number, b: number, c: number) => [number, number, number];
    readonly trailtags_remove: (a: number, b: number, c: number) => [number, number, number];
    readonly __wbg_rolehandle_free: (a: number, b: number) => void;
    readonly __wbg_trailaccess_free: (a: number, b: number) => void;
    readonly rolehandle_create: (a: number, b: number, c: number) => [number, number, number];
    readonly rolehandle_delete: (a: number) => [number, number, number];
    readonly rolehandle_issueCapability: (a: number, b: number) => [number, number, number];
    readonly rolehandle_name: (a: number) => [number, number];
    readonly rolehandle_updatePermissions: (a: number, b: number, c: number) => [number, number, number];
    readonly trailaccess_cleanupRevokedCapabilities: (a: number) => [number, number, number];
    readonly trailaccess_destroyCapability: (a: number, b: number, c: number) => [number, number, number];
    readonly trailaccess_destroyInitialAdminCapability: (a: number, b: number, c: number) => [number, number, number];
    readonly trailaccess_forRole: (a: number, b: number, c: number) => number;
    readonly trailaccess_revokeCapability: (a: number, b: number, c: number, d: number, e: bigint) => [number, number, number];
    readonly trailaccess_revokeInitialAdminCapability: (a: number, b: number, c: number, d: number, e: bigint) => [number, number, number];
    readonly __wbg_traillocking_free: (a: number, b: number) => void;
    readonly traillocking_isRecordLocked: (a: number, b: bigint) => any;
    readonly traillocking_update: (a: number, b: number) => [number, number, number];
    readonly traillocking_updateDeleteRecordWindow: (a: number, b: number) => [number, number, number];
    readonly traillocking_updateDeleteTrailLock: (a: number, b: number) => [number, number, number];
    readonly traillocking_updateWriteLock: (a: number, b: number) => [number, number, number];
    readonly __wbg_audittrailclientreadonly_free: (a: number, b: number) => void;
    readonly __wbg_audittrailhandle_free: (a: number, b: number) => void;
    readonly __wbg_get_packageoverrides_auditTrailPackageId: (a: number) => [number, number];
    readonly __wbg_get_packageoverrides_tfComponentsPackageId: (a: number) => [number, number];
    readonly __wbg_packageoverrides_free: (a: number, b: number) => void;
    readonly __wbg_set_packageoverrides_auditTrailPackageId: (a: number, b: number, c: number) => void;
    readonly __wbg_set_packageoverrides_tfComponentsPackageId: (a: number, b: number, c: number) => void;
    readonly audittrailclientreadonly_chainId: (a: number) => [number, number];
    readonly audittrailclientreadonly_create: (a: any) => any;
    readonly audittrailclientreadonly_createWithPackageOverrides: (a: any, b: number) => any;
    readonly audittrailclientreadonly_createWithPkgId: (a: any, b: number, c: number) => any;
    readonly audittrailclientreadonly_iotaClient: (a: number) => any;
    readonly audittrailclientreadonly_network: (a: number) => [number, number];
    readonly audittrailclientreadonly_packageHistory: (a: number) => [number, number];
    readonly audittrailclientreadonly_packageId: (a: number) => [number, number];
    readonly audittrailclientreadonly_tfComponentsPackageId: (a: number) => [number, number];
    readonly audittrailclientreadonly_trail: (a: number, b: number, c: number) => [number, number, number];
    readonly audittrailhandle_access: (a: number) => number;
    readonly audittrailhandle_deleteAuditTrail: (a: number) => [number, number, number];
    readonly audittrailhandle_get: (a: number) => any;
    readonly audittrailhandle_locking: (a: number) => number;
    readonly audittrailhandle_migrate: (a: number) => [number, number, number];
    readonly audittrailhandle_records: (a: number) => number;
    readonly audittrailhandle_tags: (a: number) => number;
    readonly audittrailhandle_updateMetadata: (a: number, b: number, c: number) => [number, number, number];
    readonly packageoverrides_new: (a: number, b: number, c: number, d: number) => number;
    readonly start: () => void;
    readonly __wbg_audittrailclient_free: (a: number, b: number) => void;
    readonly __wbg_trailrecords_free: (a: number, b: number) => void;
    readonly audittrailclient_chainId: (a: number) => [number, number];
    readonly audittrailclient_create: (a: number, b: any) => any;
    readonly audittrailclient_createFromIotaClient: (a: any, b: any, c: number, d: number) => any;
    readonly audittrailclient_createFromIotaClientWithPackageOverrides: (a: any, b: any, c: number) => any;
    readonly audittrailclient_createTrail: (a: number) => number;
    readonly audittrailclient_iotaClient: (a: number) => any;
    readonly audittrailclient_network: (a: number) => [number, number];
    readonly audittrailclient_packageHistory: (a: number) => [number, number];
    readonly audittrailclient_packageId: (a: number) => [number, number];
    readonly audittrailclient_readOnly: (a: number) => number;
    readonly audittrailclient_senderAddress: (a: number) => [number, number];
    readonly audittrailclient_senderPublicKey: (a: number) => [number, number, number];
    readonly audittrailclient_signer: (a: number) => any;
    readonly audittrailclient_tfComponentsPackageId: (a: number) => [number, number];
    readonly audittrailclient_trail: (a: number, b: number, c: number) => [number, number, number];
    readonly audittrailclient_withSigner: (a: number, b: any) => any;
    readonly trailrecords_add: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number];
    readonly trailrecords_correct: (a: number, b: number, c: number, d: number, e: number, f: number) => any;
    readonly trailrecords_delete: (a: number, b: bigint) => [number, number, number];
    readonly trailrecords_deleteBatch: (a: number, b: bigint) => [number, number, number];
    readonly trailrecords_get: (a: number, b: bigint) => any;
    readonly trailrecords_list: (a: number) => any;
    readonly trailrecords_listPage: (a: number, b: number, c: bigint, d: number) => any;
    readonly trailrecords_listWithLimit: (a: number, b: number) => any;
    readonly trailrecords_recordCount: (a: number) => any;
    readonly __wbg_addrecord_free: (a: number, b: number) => void;
    readonly __wbg_addrecordtag_free: (a: number, b: number) => void;
    readonly __wbg_audittrailbuilder_free: (a: number, b: number) => void;
    readonly __wbg_cleanuprevokedcapabilities_free: (a: number, b: number) => void;
    readonly __wbg_createrole_free: (a: number, b: number) => void;
    readonly __wbg_createtrail_free: (a: number, b: number) => void;
    readonly __wbg_deleteaudittrail_free: (a: number, b: number) => void;
    readonly __wbg_deleterecord_free: (a: number, b: number) => void;
    readonly __wbg_deleterecordsbatch_free: (a: number, b: number) => void;
    readonly __wbg_deleterole_free: (a: number, b: number) => void;
    readonly __wbg_destroycapability_free: (a: number, b: number) => void;
    readonly __wbg_destroyinitialadmincapability_free: (a: number, b: number) => void;
    readonly __wbg_issuecapability_free: (a: number, b: number) => void;
    readonly __wbg_migrate_free: (a: number, b: number) => void;
    readonly __wbg_onchainaudittrail_free: (a: number, b: number) => void;
    readonly __wbg_removerecordtag_free: (a: number, b: number) => void;
    readonly __wbg_revokecapability_free: (a: number, b: number) => void;
    readonly __wbg_revokeinitialadmincapability_free: (a: number, b: number) => void;
    readonly __wbg_updatedeleterecordwindow_free: (a: number, b: number) => void;
    readonly __wbg_updatedeletetraillock_free: (a: number, b: number) => void;
    readonly __wbg_updatelockingconfig_free: (a: number, b: number) => void;
    readonly __wbg_updatemetadata_free: (a: number, b: number) => void;
    readonly __wbg_updaterole_free: (a: number, b: number) => void;
    readonly __wbg_updatewritelock_free: (a: number, b: number) => void;
    readonly addrecord_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly addrecord_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly addrecordtag_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly addrecordtag_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly audittrailbuilder_finish: (a: number) => [number, number, number];
    readonly audittrailbuilder_withAdmin: (a: number, b: number, c: number) => [number, number, number];
    readonly audittrailbuilder_withInitialRecordBytes: (a: number, b: any, c: number, d: number, e: number, f: number) => number;
    readonly audittrailbuilder_withInitialRecordString: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
    readonly audittrailbuilder_withLockingConfig: (a: number, b: number) => number;
    readonly audittrailbuilder_withRecordTags: (a: number, b: number, c: number) => number;
    readonly audittrailbuilder_withTrailMetadata: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly audittrailbuilder_withUpdatableMetadata: (a: number, b: number, c: number) => number;
    readonly cleanuprevokedcapabilities_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly cleanuprevokedcapabilities_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly createrole_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly createrole_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly createtrail_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly createtrail_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly createtrail_new: (a: number) => number;
    readonly deleteaudittrail_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly deleteaudittrail_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly deleterecord_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly deleterecord_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly deleterecordsbatch_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly deleterecordsbatch_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly deleterole_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly deleterole_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly destroycapability_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly destroycapability_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly destroyinitialadmincapability_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly destroyinitialadmincapability_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly issuecapability_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly issuecapability_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly migrate_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly migrate_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly onchainaudittrail_createdAt: (a: number) => bigint;
    readonly onchainaudittrail_creator: (a: number) => [number, number];
    readonly onchainaudittrail_id: (a: number) => [number, number];
    readonly onchainaudittrail_immutableMetadata: (a: number) => number;
    readonly onchainaudittrail_lockingConfig: (a: number) => number;
    readonly onchainaudittrail_records: (a: number) => number;
    readonly onchainaudittrail_roles: (a: number) => number;
    readonly onchainaudittrail_sequenceNumber: (a: number) => bigint;
    readonly onchainaudittrail_tags: (a: number) => [number, number];
    readonly onchainaudittrail_updatableMetadata: (a: number) => [number, number];
    readonly onchainaudittrail_version: (a: number) => bigint;
    readonly removerecordtag_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly removerecordtag_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly revokecapability_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly revokecapability_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly revokeinitialadmincapability_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly revokeinitialadmincapability_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly updatedeleterecordwindow_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly updatedeleterecordwindow_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly updatedeletetraillock_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly updatedeletetraillock_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly updatelockingconfig_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly updatelockingconfig_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly updatemetadata_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly updatemetadata_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly updaterole_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly updaterole_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly updatewritelock_applyWithEvents: (a: number, b: any, c: any, d: any) => any;
    readonly updatewritelock_buildProgrammableTransaction: (a: number, b: any) => any;
    readonly __wbg_gasstationparams_free: (a: number, b: number) => void;
    readonly gasstationparams_gasReservationDuration: (a: number) => bigint;
    readonly gasstationparams_headers: (a: number) => [number, number, number];
    readonly gasstationparams_new: (a: number) => [number, number, number];
    readonly gasstationparams_withAuthToken: (a: number, b: number, c: number) => number;
    readonly transactionbuilder_executeWithGasStation: (a: number, b: any, c: number, d: number, e: any, f: number) => any;
    readonly __wbg_get_transactionoutput_output: (a: number) => any;
    readonly __wbg_get_transactionoutput_response: (a: number) => any;
    readonly __wbg_set_transactionoutput_output: (a: number, b: any) => void;
    readonly __wbg_set_transactionoutput_response: (a: number, b: any) => void;
    readonly __wbg_transactionbuilder_free: (a: number, b: number) => void;
    readonly __wbg_transactionoutput_free: (a: number, b: number) => void;
    readonly transactionbuilder_build: (a: number, b: any) => any;
    readonly transactionbuilder_buildAndExecute: (a: number, b: any) => any;
    readonly transactionbuilder_build_with_defaults: (a: number, b: any) => any;
    readonly transactionbuilder_new: (a: any) => number;
    readonly transactionbuilder_transaction: (a: number) => any;
    readonly transactionbuilder_withGasBudget: (a: number, b: bigint) => number;
    readonly transactionbuilder_withGasOwner: (a: number, b: number, c: number) => [number, number, number];
    readonly transactionbuilder_withGasPayment: (a: number, b: number, c: number) => [number, number, number];
    readonly transactionbuilder_withGasPrice: (a: number, b: bigint) => number;
    readonly transactionbuilder_withSender: (a: number, b: number, c: number) => [number, number, number];
    readonly transactionbuilder_withSignature: (a: number, b: any) => any;
    readonly transactionbuilder_withSponsor: (a: number, b: any, c: any) => any;
    readonly __wbg_defaulthttpclient_free: (a: number, b: number) => void;
    readonly defaulthttpclient_new: () => number;
    readonly defaulthttpclient_send: (a: number, b: any) => any;
    readonly __wbg_wasmmanagedcoreclient_free: (a: number, b: number) => void;
    readonly __wbg_wasmmanagedcoreclientreadonly_free: (a: number, b: number) => void;
    readonly wasmmanagedcoreclient_iotaClient: (a: number) => any;
    readonly wasmmanagedcoreclient_network: (a: number) => [number, number];
    readonly wasmmanagedcoreclient_packageHistory: (a: number) => [number, number];
    readonly wasmmanagedcoreclient_packageId: (a: number) => [number, number];
    readonly wasmmanagedcoreclient_senderAddress: (a: number) => [number, number];
    readonly wasmmanagedcoreclient_senderPublicKey: (a: number) => [number, number, number];
    readonly wasmmanagedcoreclient_signer: (a: number) => any;
    readonly wasmmanagedcoreclient_tfComponentsPackageId: (a: number) => [number, number];
    readonly wasmmanagedcoreclientreadonly_iotaClient: (a: number) => any;
    readonly wasmmanagedcoreclientreadonly_network: (a: number) => [number, number];
    readonly wasmmanagedcoreclientreadonly_packageHistory: (a: number) => [number, number];
    readonly wasmmanagedcoreclientreadonly_packageId: (a: number) => [number, number];
    readonly wasmmanagedcoreclientreadonly_tfComponentsPackageId: (a: number) => [number, number];
    readonly rustsecp256k1_v0_8_1_context_create: (a: number) => number;
    readonly rustsecp256k1_v0_8_1_context_destroy: (a: number) => void;
    readonly rustsecp256k1_v0_8_1_default_error_callback_fn: (a: number, b: number) => void;
    readonly rustsecp256k1_v0_8_1_default_illegal_callback_fn: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h51a12a66d4da83b9: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h8d7b4eaef5c6c593: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h3c2c58ba82e1b53c: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h6b4e9b9236ca6a14: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h1622ecdfbc350ccf: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __externref_drop_slice: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;

/**
* Loads the Wasm file so the lib can be used, relative path to Wasm file
*
* @param {string | undefined} path
*/
export function init (path?: string): Promise<void>;