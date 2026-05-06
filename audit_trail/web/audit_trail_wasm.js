/* @ts-self-types="./audit_trail_wasm.d.ts" */
import { WasmIotaTransactionBlockResponseWrapper } from '@iota/iota-interaction-ts/web/iota_client_helpers';
import { Ed25519PublicKey } from '@iota/iota-sdk/keypairs/ed25519';
import { Secp256k1PublicKey } from '@iota/iota-sdk/keypairs/secp256k1';
import { Secp256r1PublicKey } from '@iota/iota-sdk/keypairs/secp256r1';
import { TransactionDataBuilder } from '@iota/iota-sdk/transactions';

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(AddRecord.prototype);
        obj.__wbg_ptr = ptr;
        AddRecordFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AddRecordFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_addrecord_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<RecordAdded>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.addrecord_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.addrecord_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) AddRecord.prototype[Symbol.dispose] = AddRecord.prototype.free;

/**
 * Transaction wrapper for adding a record tag to the trail registry.
 *
 * @remarks
 * Aborts on-chain if the tag is already in the registry.
 *
 * Requires the {@link Permission.AddRecordTags} permission.
 */
export class AddRecordTag {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(AddRecordTag.prototype);
        obj.__wbg_ptr = ptr;
        AddRecordTagFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AddRecordTagFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_addrecordtag_free(ptr, 0);
    }
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Empty>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.addrecordtag_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.addrecordtag_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) AddRecordTag.prototype[Symbol.dispose] = AddRecordTag.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(AuditTrailBuilder.prototype);
        obj.__wbg_ptr = ptr;
        AuditTrailBuilderFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AuditTrailBuilderFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_audittrailbuilder_free(ptr, 0);
    }
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
     * @returns {TransactionBuilder<CreateTrail>}
     */
    finish() {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.audittrailbuilder_finish(ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @param {string} admin
     * @returns {AuditTrailBuilder}
     */
    withAdmin(admin) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(admin, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.audittrailbuilder_withAdmin(ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AuditTrailBuilder.__wrap(ret[0]);
    }
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
     * @param {Uint8Array} data
     * @param {string | null} [metadata]
     * @param {string | null} [tag]
     * @returns {AuditTrailBuilder}
     */
    withInitialRecordBytes(data, metadata, tag) {
        const ptr = this.__destroy_into_raw();
        var ptr0 = isLikeNone(metadata) ? 0 : passStringToWasm0(metadata, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(tag) ? 0 : passStringToWasm0(tag, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ret = wasm.audittrailbuilder_withInitialRecordBytes(ptr, data, ptr0, len0, ptr1, len1);
        return AuditTrailBuilder.__wrap(ret);
    }
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
     * @param {string} data
     * @param {string | null} [metadata]
     * @param {string | null} [tag]
     * @returns {AuditTrailBuilder}
     */
    withInitialRecordString(data, metadata, tag) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(metadata) ? 0 : passStringToWasm0(metadata, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(tag) ? 0 : passStringToWasm0(tag, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        const ret = wasm.audittrailbuilder_withInitialRecordString(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
        return AuditTrailBuilder.__wrap(ret);
    }
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
     * @param {LockingConfig} config
     * @returns {AuditTrailBuilder}
     */
    withLockingConfig(config) {
        const ptr = this.__destroy_into_raw();
        _assertClass(config, LockingConfig);
        var ptr0 = config.__destroy_into_raw();
        const ret = wasm.audittrailbuilder_withLockingConfig(ptr, ptr0);
        return AuditTrailBuilder.__wrap(ret);
    }
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
     * @param {string[]} tags
     * @returns {AuditTrailBuilder}
     */
    withRecordTags(tags) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passArrayJsValueToWasm0(tags, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.audittrailbuilder_withRecordTags(ptr, ptr0, len0);
        return AuditTrailBuilder.__wrap(ret);
    }
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
     * @param {string} name
     * @param {string | null} [description]
     * @returns {AuditTrailBuilder}
     */
    withTrailMetadata(name, description) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(description) ? 0 : passStringToWasm0(description, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ret = wasm.audittrailbuilder_withTrailMetadata(ptr, ptr0, len0, ptr1, len1);
        return AuditTrailBuilder.__wrap(ret);
    }
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
     * @param {string} metadata
     * @returns {AuditTrailBuilder}
     */
    withUpdatableMetadata(metadata) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(metadata, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.audittrailbuilder_withUpdatableMetadata(ptr, ptr0, len0);
        return AuditTrailBuilder.__wrap(ret);
    }
}
if (Symbol.dispose) AuditTrailBuilder.prototype[Symbol.dispose] = AuditTrailBuilder.prototype.free;

/**
 * Signing audit-trail client.
 *
 * @remarks
 * Wraps an {@link AuditTrailClientReadOnly} together with a transaction signer so that typed
 * write transactions can be built. The actual transaction submission and execution remain the
 * responsibility of the caller.
 */
export class AuditTrailClient {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(AuditTrailClient.prototype);
        obj.__wbg_ptr = ptr;
        AuditTrailClientFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AuditTrailClientFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_audittrailclient_free(ptr, 0);
    }
    /**
     * Returns the chain ID of the network this client is connected to.
     *
     * @returns Hex-encoded chain identifier.
     * @returns {string}
     */
    chainId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.audittrailclient_chainId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Creates a signing client from an existing read-only client and signer.
     *
     * @param client - Read-only client whose network and package configuration will be reused.
     * @param signer - Signer that will sign transactions built by this client.
     *
     * @returns A signing audit-trail client bound to `client`'s network and the given signer.
     *
     * @throws When the signer cannot be queried for its public key or address.
     * @param {AuditTrailClientReadOnly} client
     * @param {TransactionSigner} signer
     * @returns {Promise<AuditTrailClient>}
     */
    static create(client, signer) {
        _assertClass(client, AuditTrailClientReadOnly);
        var ptr0 = client.__destroy_into_raw();
        const ret = wasm.audittrailclient_create(ptr0, signer);
        return ret;
    }
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
     * @param {IotaClient} iota_client
     * @param {TransactionSigner} signer
     * @param {string | null} [package_id]
     * @returns {Promise<AuditTrailClient>}
     */
    static createFromIotaClient(iota_client, signer, package_id) {
        var ptr0 = isLikeNone(package_id) ? 0 : passStringToWasm0(package_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.audittrailclient_createFromIotaClient(iota_client, signer, ptr0, len0);
        return ret;
    }
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
     * @param {IotaClient} iota_client
     * @param {TransactionSigner} signer
     * @param {PackageOverrides | null} [package_overrides]
     * @returns {Promise<AuditTrailClient>}
     */
    static createFromIotaClientWithPackageOverrides(iota_client, signer, package_overrides) {
        let ptr0 = 0;
        if (!isLikeNone(package_overrides)) {
            _assertClass(package_overrides, PackageOverrides);
            ptr0 = package_overrides.__destroy_into_raw();
        }
        const ret = wasm.audittrailclient_createFromIotaClientWithPackageOverrides(iota_client, signer, ptr0);
        return ret;
    }
    /**
     * Creates a builder for a new audit trail.
     *
     * @remarks
     * The builder is pre-populated with the signer address as the initial admin, so the trail's
     * initial-admin capability lands in the signer's wallet on execution. Override with
     * {@link AuditTrailBuilder.withAdmin} when a different recipient is needed.
     *
     * @returns A pre-configured {@link AuditTrailBuilder}.
     * @returns {AuditTrailBuilder}
     */
    createTrail() {
        const ret = wasm.audittrailclient_createTrail(this.__wbg_ptr);
        return AuditTrailBuilder.__wrap(ret);
    }
    /**
     * Returns the underlying IOTA client used to talk to the network.
     *
     * @returns The IOTA client carried by the wrapped read-only client.
     * @returns {IotaClient}
     */
    iotaClient() {
        const ret = wasm.audittrailclient_iotaClient(this.__wbg_ptr);
        return ret;
    }
    /**
     * Returns the human-readable name of the network this client is connected to.
     *
     * @returns Network name (e.g. `"mainnet"`, `"testnet"`, `"localnet"`).
     * @returns {string}
     */
    network() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.audittrailclient_network(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Returns the resolved audit-trail package upgrade history.
     *
     * @returns Stringified object IDs of every published version, most recent first.
     * @returns {string[]}
     */
    packageHistory() {
        const ret = wasm.audittrailclient_packageHistory(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Returns the audit-trail package ID currently in use.
     *
     * @returns Stringified object ID of the resolved audit-trail package.
     * @returns {string}
     */
    packageId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.audittrailclient_packageId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Returns the read-only view of this client.
     *
     * @remarks
     * Useful when passing the client into code that only needs read capabilities.
     *
     * @returns A {@link AuditTrailClientReadOnly} sharing this client's network configuration.
     * @returns {AuditTrailClientReadOnly}
     */
    readOnly() {
        const ret = wasm.audittrailclient_readOnly(this.__wbg_ptr);
        return AuditTrailClientReadOnly.__wrap(ret);
    }
    /**
     * Returns the address that signs transactions built by this client.
     *
     * @returns Stringified IOTA address of the signer.
     * @returns {string}
     */
    senderAddress() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.audittrailclient_senderAddress(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Returns the public key of the address that signs transactions built by this client.
     *
     * @returns Public key bound to the signer.
     *
     * @throws When the signer's public key cannot be converted to the expected representation.
     * @returns {PublicKey}
     */
    senderPublicKey() {
        const ret = wasm.audittrailclient_senderPublicKey(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * Returns the signer attached to this client.
     *
     * @returns A clone of the configured transaction signer.
     * @returns {TransactionSigner}
     */
    signer() {
        const ret = wasm.audittrailclient_signer(this.__wbg_ptr);
        return ret;
    }
    /**
     * Returns the `tf_components` package ID currently in use.
     *
     * @returns Stringified object ID of the resolved `tf_components` package.
     * @returns {string}
     */
    tfComponentsPackageId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.audittrailclient_tfComponentsPackageId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
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
     * @param {string} trail_id
     * @returns {AuditTrailHandle}
     */
    trail(trail_id) {
        const ptr0 = passStringToWasm0(trail_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.audittrailclient_trail(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AuditTrailHandle.__wrap(ret[0]);
    }
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
     * @param {TransactionSigner} signer
     * @returns {Promise<AuditTrailClient>}
     */
    withSigner(signer) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.audittrailclient_withSigner(ptr, signer);
        return ret;
    }
}
if (Symbol.dispose) AuditTrailClient.prototype[Symbol.dispose] = AuditTrailClient.prototype.free;

/**
 * Read-only audit-trail client.
 *
 * @remarks
 * This is the main entry point for package resolution and typed reads. Use
 * {@link AuditTrailClientReadOnly.trail} to obtain an {@link AuditTrailHandle} bound to a single
 * trail object.
 */
export class AuditTrailClientReadOnly {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(AuditTrailClientReadOnly.prototype);
        obj.__wbg_ptr = ptr;
        AuditTrailClientReadOnlyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AuditTrailClientReadOnlyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_audittrailclientreadonly_free(ptr, 0);
    }
    /**
     * Returns the chain ID of the network this client is connected to.
     *
     * @returns Hex-encoded chain identifier.
     * @returns {string}
     */
    chainId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.audittrailclientreadonly_chainId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
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
     * @param {IotaClient} iota_client
     * @returns {Promise<AuditTrailClientReadOnly>}
     */
    static create(iota_client) {
        const ret = wasm.audittrailclientreadonly_create(iota_client);
        return ret;
    }
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
     * @param {IotaClient} iota_client
     * @param {PackageOverrides} package_overrides
     * @returns {Promise<AuditTrailClientReadOnly>}
     */
    static createWithPackageOverrides(iota_client, package_overrides) {
        _assertClass(package_overrides, PackageOverrides);
        var ptr0 = package_overrides.__destroy_into_raw();
        const ret = wasm.audittrailclientreadonly_createWithPackageOverrides(iota_client, ptr0);
        return ret;
    }
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
     * @param {IotaClient} iota_client
     * @param {string} package_id
     * @returns {Promise<AuditTrailClientReadOnly>}
     */
    static createWithPkgId(iota_client, package_id) {
        const ptr0 = passStringToWasm0(package_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.audittrailclientreadonly_createWithPkgId(iota_client, ptr0, len0);
        return ret;
    }
    /**
     * Returns the underlying IOTA client used to talk to the network.
     *
     * @returns The IOTA client passed to (or constructed during) creation of this client.
     * @returns {IotaClient}
     */
    iotaClient() {
        const ret = wasm.audittrailclientreadonly_iotaClient(this.__wbg_ptr);
        return ret;
    }
    /**
     * Returns the human-readable name of the network this client is connected to.
     *
     * @returns Network name (e.g. `"mainnet"`, `"testnet"`, `"localnet"`).
     * @returns {string}
     */
    network() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.audittrailclientreadonly_network(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Returns the resolved audit-trail package upgrade history.
     *
     * @returns Stringified object IDs of every published version, most recent first.
     * @returns {string[]}
     */
    packageHistory() {
        const ret = wasm.audittrailclientreadonly_packageHistory(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Returns the audit-trail package ID currently in use.
     *
     * @returns Stringified object ID of the resolved audit-trail package.
     * @returns {string}
     */
    packageId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.audittrailclientreadonly_packageId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Returns the `tf_components` package ID currently in use.
     *
     * @returns Stringified object ID of the resolved `tf_components` package.
     * @returns {string}
     */
    tfComponentsPackageId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.audittrailclientreadonly_tfComponentsPackageId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
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
     * @param {string} trail_id
     * @returns {AuditTrailHandle}
     */
    trail(trail_id) {
        const ptr0 = passStringToWasm0(trail_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.audittrailclientreadonly_trail(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AuditTrailHandle.__wrap(ret[0]);
    }
}
if (Symbol.dispose) AuditTrailClientReadOnly.prototype[Symbol.dispose] = AuditTrailClientReadOnly.prototype.free;

/**
 * Event payload emitted when a trail is created.
 */
export class AuditTrailCreated {
    toJSON() {
        return {
            creator: this.creator,
            timestamp: this.timestamp,
            trailId: this.trailId,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AuditTrailCreatedFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_audittrailcreated_free(ptr, 0);
    }
    /**
     * Address that created the trail.
     * @returns {string}
     */
    get creator() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_audittrailcreated_creator(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Millisecond event timestamp.
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Newly created trail object ID.
     * @returns {string}
     */
    get trailId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_audittrailcreated_trailId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Address that created the trail.
     * @param {string} arg0
     */
    set creator(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_creator(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Millisecond event timestamp.
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Newly created trail object ID.
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) AuditTrailCreated.prototype[Symbol.dispose] = AuditTrailCreated.prototype.free;

/**
 * Event payload emitted when a trail is deleted.
 */
export class AuditTrailDeleted {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(AuditTrailDeleted.prototype);
        obj.__wbg_ptr = ptr;
        AuditTrailDeletedFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            timestamp: this.timestamp,
            trailId: this.trailId,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AuditTrailDeletedFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_audittraildeleted_free(ptr, 0);
    }
    /**
     * Millisecond event timestamp.
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Deleted trail object ID.
     * @returns {string}
     */
    get trailId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_audittraildeleted_trailId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Millisecond event timestamp.
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Deleted trail object ID.
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) AuditTrailDeleted.prototype[Symbol.dispose] = AuditTrailDeleted.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(AuditTrailHandle.prototype);
        obj.__wbg_ptr = ptr;
        AuditTrailHandleFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AuditTrailHandleFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_audittrailhandle_free(ptr, 0);
    }
    /**
     * Returns the access-control API scoped to this trail.
     *
     * @remarks
     * Use this for roles, capabilities, and access-policy updates.
     *
     * @returns A {@link TrailAccess} wrapper bound to this trail.
     * @returns {TrailAccess}
     */
    access() {
        const ret = wasm.audittrailhandle_access(this.__wbg_ptr);
        return TrailAccess.__wrap(ret);
    }
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
     * @returns {TransactionBuilder<DeleteAuditTrail>}
     */
    deleteAuditTrail() {
        const ret = wasm.audittrailhandle_deleteAuditTrail(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
    /**
     * Loads the full on-chain trail object.
     *
     * @remarks
     * Each call fetches a fresh snapshot from chain state.
     *
     * @returns The current {@link OnChainAuditTrail} state of this trail.
     *
     * @throws When the trail object cannot be fetched or decoded.
     * @returns {Promise<OnChainAuditTrail>}
     */
    get() {
        const ret = wasm.audittrailhandle_get(this.__wbg_ptr);
        return ret;
    }
    /**
     * Returns the locking API scoped to this trail.
     *
     * @remarks
     * Use this for inspecting lock state and updating locking rules.
     *
     * @returns A {@link TrailLocking} wrapper bound to this trail.
     * @returns {TrailLocking}
     */
    locking() {
        const ret = wasm.audittrailhandle_locking(this.__wbg_ptr);
        return TrailLocking.__wrap(ret);
    }
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
     * @returns {TransactionBuilder<Migrate>}
     */
    migrate() {
        const ret = wasm.audittrailhandle_migrate(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
    /**
     * Returns the record API scoped to this trail.
     *
     * @remarks
     * Use this for record reads, appends, and deletions.
     *
     * @returns A {@link TrailRecords} wrapper bound to this trail.
     * @returns {TrailRecords}
     */
    records() {
        const ret = wasm.audittrailhandle_records(this.__wbg_ptr);
        return TrailRecords.__wrap(ret);
    }
    /**
     * Returns the tag-registry API scoped to this trail.
     *
     * @remarks
     * Use this for managing the canonical tag registry that record writes and role-tag
     * restrictions must reference.
     *
     * @returns A {@link TrailTags} wrapper bound to this trail.
     * @returns {TrailTags}
     */
    tags() {
        const ret = wasm.audittrailhandle_tags(this.__wbg_ptr);
        return TrailTags.__wrap(ret);
    }
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
     * @param {string | null} [metadata]
     * @returns {TransactionBuilder<UpdateMetadata>}
     */
    updateMetadata(metadata) {
        var ptr0 = isLikeNone(metadata) ? 0 : passStringToWasm0(metadata, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.audittrailhandle_updateMetadata(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
}
if (Symbol.dispose) AuditTrailHandle.prototype[Symbol.dispose] = AuditTrailHandle.prototype.free;

/**
 * Capability data describing a granted role and its validity window.
 *
 * @remarks
 * A capability grants exactly one role against exactly one trail and may additionally restrict
 * who may use it and during which time window it is valid.
 */
export class Capability {
    toJSON() {
        return {
            id: this.id,
            issuedTo: this.issuedTo,
            role: this.role,
            targetKey: this.targetKey,
            validFrom: this.validFrom,
            validUntil: this.validUntil,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CapabilityFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_capability_free(ptr, 0);
    }
    /**
     * Capability object ID.
     * @returns {string}
     */
    get id() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_capability_id(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Address bound to the capability. When `null`, any holder may present the capability for
     * authorization.
     * @returns {string | undefined}
     */
    get issuedTo() {
        const ret = wasm.__wbg_get_capability_issuedTo(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Role granted by the capability.
     * @returns {string}
     */
    get role() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_capability_role(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Trail object ID protected by the capability.
     * @returns {string}
     */
    get targetKey() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_capability_targetKey(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * is valid. When `null`, the capability is valid from its creation time.
     * @returns {bigint | undefined}
     */
    get validFrom() {
        const ret = wasm.__wbg_get_capability_validFrom(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability is
     * still valid. When `null`, the capability does not expire.
     * @returns {bigint | undefined}
     */
    get validUntil() {
        const ret = wasm.__wbg_get_capability_validUntil(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Capability object ID.
     * @param {string} arg0
     */
    set id(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_id(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Address bound to the capability. When `null`, any holder may present the capability for
     * authorization.
     * @param {string | null} [arg0]
     */
    set issuedTo(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_issuedTo(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Role granted by the capability.
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_role(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Trail object ID protected by the capability.
     * @param {string} arg0
     */
    set targetKey(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_targetKey(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * is valid. When `null`, the capability is valid from its creation time.
     * @param {bigint | null} [arg0]
     */
    set validFrom(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability is
     * still valid. When `null`, the capability does not expire.
     * @param {bigint | null} [arg0]
     */
    set validUntil(arg0) {
        wasm.__wbg_set_capability_validUntil(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
}
if (Symbol.dispose) Capability.prototype[Symbol.dispose] = Capability.prototype.free;

/**
 * Permissions required to administer capabilities, as enforced by the trail.
 */
export class CapabilityAdminPermissions {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(CapabilityAdminPermissions.prototype);
        obj.__wbg_ptr = ptr;
        CapabilityAdminPermissionsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            add: this.add,
            revoke: this.revoke,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CapabilityAdminPermissionsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_capabilityadminpermissions_free(ptr, 0);
    }
    /**
     * Permission required to issue capabilities.
     * @returns {Permission}
     */
    get add() {
        const ret = wasm.__wbg_get_capabilityadminpermissions_add(this.__wbg_ptr);
        return ret;
    }
    /**
     * Permission required to revoke capabilities.
     * @returns {Permission}
     */
    get revoke() {
        const ret = wasm.__wbg_get_capabilityadminpermissions_revoke(this.__wbg_ptr);
        return ret;
    }
    /**
     * Permission required to issue capabilities.
     * @param {Permission} arg0
     */
    set add(arg0) {
        wasm.__wbg_set_capabilityadminpermissions_add(this.__wbg_ptr, arg0);
    }
    /**
     * Permission required to revoke capabilities.
     * @param {Permission} arg0
     */
    set revoke(arg0) {
        wasm.__wbg_set_capabilityadminpermissions_revoke(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) CapabilityAdminPermissions.prototype[Symbol.dispose] = CapabilityAdminPermissions.prototype.free;

/**
 * Event payload emitted when a capability is destroyed.
 */
export class CapabilityDestroyed {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(CapabilityDestroyed.prototype);
        obj.__wbg_ptr = ptr;
        CapabilityDestroyedFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            capabilityId: this.capabilityId,
            issuedTo: this.issuedTo,
            role: this.role,
            targetKey: this.targetKey,
            validFrom: this.validFrom,
            validUntil: this.validUntil,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CapabilityDestroyedFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_capabilitydestroyed_free(ptr, 0);
    }
    /**
     * Destroyed capability object ID.
     * @returns {string}
     */
    get capabilityId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_capabilitydestroyed_capabilityId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Address bound to the capability, if one had been assigned.
     * @returns {string | undefined}
     */
    get issuedTo() {
        const ret = wasm.__wbg_get_capabilitydestroyed_issuedTo(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Role granted by the capability.
     * @returns {string}
     */
    get role() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_capabilitydestroyed_role(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Trail object ID protected by the capability.
     * @returns {string}
     */
    get targetKey() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_capabilitydestroyed_targetKey(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * became valid. `null` when no lower bound had been set.
     * @returns {bigint | undefined}
     */
    get validFrom() {
        const ret = wasm.__wbg_get_capabilitydestroyed_validFrom(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability had
     * been valid. `null` when no expiry had been set.
     * @returns {bigint | undefined}
     */
    get validUntil() {
        const ret = wasm.__wbg_get_capabilitydestroyed_validUntil(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Destroyed capability object ID.
     * @param {string} arg0
     */
    set capabilityId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_targetKey(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Address bound to the capability, if one had been assigned.
     * @param {string | null} [arg0]
     */
    set issuedTo(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_issuedTo(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Role granted by the capability.
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_role(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Trail object ID protected by the capability.
     * @param {string} arg0
     */
    set targetKey(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_id(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * became valid. `null` when no lower bound had been set.
     * @param {bigint | null} [arg0]
     */
    set validFrom(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability had
     * been valid. `null` when no expiry had been set.
     * @param {bigint | null} [arg0]
     */
    set validUntil(arg0) {
        wasm.__wbg_set_capability_validUntil(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
}
if (Symbol.dispose) CapabilityDestroyed.prototype[Symbol.dispose] = CapabilityDestroyed.prototype.free;

/**
 * Capability issuance options.
 *
 * @remarks
 * These fields configure restrictions on the issued capability object. Matching against the
 * current caller and the on-chain timestamp happens whenever the capability is later presented
 * for authorization, not at issue time.
 */
export class CapabilityIssueOptions {
    toJSON() {
        return {
            issuedTo: this.issuedTo,
            validFromMs: this.validFromMs,
            validUntilMs: this.validUntilMs,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CapabilityIssueOptionsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_capabilityissueoptions_free(ptr, 0);
    }
    /**
     * Creates capability issuance options.
     *
     * @param issuedTo - Optional recipient address; `null` keeps the capability with the caller.
     * @param validFromMs - Optional earliest valid timestamp in milliseconds since the Unix
     * epoch.
     * @param validUntilMs - Optional latest valid timestamp in milliseconds since the Unix epoch.
     * @param {string | null} [issued_to]
     * @param {bigint | null} [valid_from_ms]
     * @param {bigint | null} [valid_until_ms]
     */
    constructor(issued_to, valid_from_ms, valid_until_ms) {
        var ptr0 = isLikeNone(issued_to) ? 0 : passStringToWasm0(issued_to, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.capabilityissueoptions_new(ptr0, len0, !isLikeNone(valid_from_ms), isLikeNone(valid_from_ms) ? BigInt(0) : valid_from_ms, !isLikeNone(valid_until_ms), isLikeNone(valid_until_ms) ? BigInt(0) : valid_until_ms);
        this.__wbg_ptr = ret >>> 0;
        CapabilityIssueOptionsFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Address that should own the issued capability. When `null`, the capability is transferred
     * to the caller.
     * @returns {string | undefined}
     */
    get issuedTo() {
        const ret = wasm.__wbg_get_capabilityissueoptions_issuedTo(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Earliest millisecond timestamp (since the Unix epoch) at which the capability becomes
     * valid. When `null`, the capability is valid from its creation time.
     * @returns {bigint | undefined}
     */
    get validFromMs() {
        const ret = wasm.__wbg_get_capabilityissueoptions_validFromMs(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Latest millisecond timestamp (since the Unix epoch) at which the capability is still
     * valid. When `null`, the capability does not expire.
     * @returns {bigint | undefined}
     */
    get validUntilMs() {
        const ret = wasm.__wbg_get_capabilityissueoptions_validUntilMs(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Address that should own the issued capability. When `null`, the capability is transferred
     * to the caller.
     * @param {string | null} [arg0]
     */
    set issuedTo(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capabilityissueoptions_issuedTo(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Earliest millisecond timestamp (since the Unix epoch) at which the capability becomes
     * valid. When `null`, the capability is valid from its creation time.
     * @param {bigint | null} [arg0]
     */
    set validFromMs(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * Latest millisecond timestamp (since the Unix epoch) at which the capability is still
     * valid. When `null`, the capability does not expire.
     * @param {bigint | null} [arg0]
     */
    set validUntilMs(arg0) {
        wasm.__wbg_set_capability_validUntil(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
}
if (Symbol.dispose) CapabilityIssueOptions.prototype[Symbol.dispose] = CapabilityIssueOptions.prototype.free;

/**
 * Event payload emitted when a capability is issued.
 */
export class CapabilityIssued {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(CapabilityIssued.prototype);
        obj.__wbg_ptr = ptr;
        CapabilityIssuedFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            capabilityId: this.capabilityId,
            issuedTo: this.issuedTo,
            role: this.role,
            targetKey: this.targetKey,
            validFrom: this.validFrom,
            validUntil: this.validUntil,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CapabilityIssuedFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_capabilityissued_free(ptr, 0);
    }
    /**
     * Newly created capability object ID.
     * @returns {string}
     */
    get capabilityId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_capabilityissued_capabilityId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Address bound to the capability, if one was assigned at issue time.
     * @returns {string | undefined}
     */
    get issuedTo() {
        const ret = wasm.__wbg_get_capabilityissued_issuedTo(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Role granted by the capability.
     * @returns {string}
     */
    get role() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_capabilityissued_role(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Trail object ID protected by the capability.
     * @returns {string}
     */
    get targetKey() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_capabilityissued_targetKey(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * becomes valid. `null` when no lower bound was set.
     * @returns {bigint | undefined}
     */
    get validFrom() {
        const ret = wasm.__wbg_get_capabilityissued_validFrom(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability is
     * still valid. `null` when no expiry was set.
     * @returns {bigint | undefined}
     */
    get validUntil() {
        const ret = wasm.__wbg_get_capabilityissued_validUntil(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Newly created capability object ID.
     * @param {string} arg0
     */
    set capabilityId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_targetKey(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Address bound to the capability, if one was assigned at issue time.
     * @param {string | null} [arg0]
     */
    set issuedTo(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_issuedTo(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Role granted by the capability.
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_role(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Trail object ID protected by the capability.
     * @param {string} arg0
     */
    set targetKey(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_id(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Earliest millisecond timestamp (since the Unix epoch, inclusive) at which the capability
     * becomes valid. `null` when no lower bound was set.
     * @param {bigint | null} [arg0]
     */
    set validFrom(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * Latest millisecond timestamp (since the Unix epoch, inclusive) at which the capability is
     * still valid. `null` when no expiry was set.
     * @param {bigint | null} [arg0]
     */
    set validUntil(arg0) {
        wasm.__wbg_set_capability_validUntil(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
}
if (Symbol.dispose) CapabilityIssued.prototype[Symbol.dispose] = CapabilityIssued.prototype.free;

/**
 * Event payload emitted when a capability is revoked.
 */
export class CapabilityRevoked {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(CapabilityRevoked.prototype);
        obj.__wbg_ptr = ptr;
        CapabilityRevokedFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            capabilityId: this.capabilityId,
            targetKey: this.targetKey,
            validUntil: this.validUntil,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CapabilityRevokedFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_capabilityrevoked_free(ptr, 0);
    }
    /**
     * Revoked capability object ID.
     * @returns {string}
     */
    get capabilityId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_capabilityrevoked_capabilityId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Trail object ID protected by the capability.
     * @returns {string}
     */
    get targetKey() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_capabilityrevoked_targetKey(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Millisecond timestamp retained for denylist cleanup.
     *
     * `0` when the capability had no expiry — denylist entries with `validUntil == 0` are kept
     * indefinitely.
     * @returns {bigint}
     */
    get validUntil() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Revoked capability object ID.
     * @param {string} arg0
     */
    set capabilityId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_creator(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Trail object ID protected by the capability.
     * @param {string} arg0
     */
    set targetKey(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Millisecond timestamp retained for denylist cleanup.
     *
     * `0` when the capability had no expiry — denylist entries with `validUntil == 0` are kept
     * indefinitely.
     * @param {bigint} arg0
     */
    set validUntil(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) CapabilityRevoked.prototype[Symbol.dispose] = CapabilityRevoked.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(CleanupRevokedCapabilities.prototype);
        obj.__wbg_ptr = ptr;
        CleanupRevokedCapabilitiesFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CleanupRevokedCapabilitiesFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_cleanuprevokedcapabilities_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<RevokedCapabilitiesCleanedUp>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.cleanuprevokedcapabilities_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.cleanuprevokedcapabilities_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) CleanupRevokedCapabilities.prototype[Symbol.dispose] = CleanupRevokedCapabilities.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(CreateRole.prototype);
        obj.__wbg_ptr = ptr;
        CreateRoleFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CreateRoleFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_createrole_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<RoleCreated>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.createrole_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.createrole_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) CreateRole.prototype[Symbol.dispose] = CreateRole.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(CreateTrail.prototype);
        obj.__wbg_ptr = ptr;
        CreateTrailFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CreateTrailFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_createtrail_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<OnChainAuditTrail>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.createtrail_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.createtrail_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
    /**
     * Creates a transaction wrapper from an {@link AuditTrailBuilder}.
     *
     * @param builder - Fully configured {@link AuditTrailBuilder}.
     * @param {AuditTrailBuilder} builder
     */
    constructor(builder) {
        _assertClass(builder, AuditTrailBuilder);
        var ptr0 = builder.__destroy_into_raw();
        const ret = wasm.createtrail_new(ptr0);
        this.__wbg_ptr = ret >>> 0;
        CreateTrailFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
}
if (Symbol.dispose) CreateTrail.prototype[Symbol.dispose] = CreateTrail.prototype.free;

/**
 * Audit-trail record payload.
 *
 * @remarks
 * Holds either a UTF-8 string or a raw byte sequence. Use {@link Data.fromString} or
 * {@link Data.fromBytes} to construct an instance, and {@link Data.toString} or
 * {@link Data.toBytes} to extract the payload as the desired representation.
 */
export class Data {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Data.prototype);
        obj.__wbg_ptr = ptr;
        DataFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            value: this.value,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DataFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_data_free(ptr, 0);
    }
    /**
     * Creates a binary payload.
     *
     * @param data - Raw bytes to wrap.
     *
     * @returns A {@link Data} carrying `data` as bytes.
     * @param {Uint8Array} data
     * @returns {Data}
     */
    static fromBytes(data) {
        const ret = wasm.data_fromBytes(data);
        return Data.__wrap(ret);
    }
    /**
     * Creates a text payload.
     *
     * @param data - UTF-8 string to wrap.
     *
     * @returns A {@link Data} carrying `data` as text.
     * @param {string} data
     * @returns {Data}
     */
    static fromString(data) {
        const ptr0 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.data_fromString(ptr0, len0);
        return Data.__wrap(ret);
    }
    /**
     * Returns the payload as raw bytes.
     *
     * @remarks
     * Text payloads are encoded as UTF-8.
     *
     * @returns A byte view of the payload.
     * @returns {Uint8Array}
     */
    toBytes() {
        const ret = wasm.data_toBytes(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * Returns the payload as a string.
     *
     * @remarks
     * Byte payloads are decoded with lossy UTF-8 conversion (invalid sequences become the U+FFFD
     * replacement character).
     *
     * @returns A string view of the payload.
     * @returns {string}
     */
    toString() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.data_toString(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Returns the underlying payload in its original representation.
     *
     * @returns A `string` for text payloads or a `Uint8Array` for byte payloads.
     * @returns {any}
     */
    get value() {
        const ret = wasm.data_value(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) Data.prototype[Symbol.dispose] = Data.prototype.free;

/**
 * A default implementation for {@link HttpClient}.
 */
export class DefaultHttpClient {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DefaultHttpClientFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_defaulthttpclient_free(ptr, 0);
    }
    constructor() {
        const ret = wasm.defaulthttpclient_new();
        this.__wbg_ptr = ret >>> 0;
        DefaultHttpClientFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {Request} request
     * @returns {Promise<Response>}
     */
    send(request) {
        const ret = wasm.defaulthttpclient_send(this.__wbg_ptr, request);
        return ret;
    }
}
if (Symbol.dispose) DefaultHttpClient.prototype[Symbol.dispose] = DefaultHttpClient.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DeleteAuditTrail.prototype);
        obj.__wbg_ptr = ptr;
        DeleteAuditTrailFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DeleteAuditTrailFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_deleteaudittrail_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<AuditTrailDeleted>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.deleteaudittrail_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.deleteaudittrail_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DeleteAuditTrail.prototype[Symbol.dispose] = DeleteAuditTrail.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DeleteRecord.prototype);
        obj.__wbg_ptr = ptr;
        DeleteRecordFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DeleteRecordFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_deleterecord_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<RecordDeleted>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.deleterecord_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.deleterecord_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DeleteRecord.prototype[Symbol.dispose] = DeleteRecord.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DeleteRecordsBatch.prototype);
        obj.__wbg_ptr = ptr;
        DeleteRecordsBatchFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DeleteRecordsBatchFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_deleterecordsbatch_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<BigUint64Array>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.deleterecordsbatch_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.deleterecordsbatch_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DeleteRecordsBatch.prototype[Symbol.dispose] = DeleteRecordsBatch.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DeleteRole.prototype);
        obj.__wbg_ptr = ptr;
        DeleteRoleFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DeleteRoleFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_deleterole_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<RoleDeleted>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.deleterole_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.deleterole_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DeleteRole.prototype[Symbol.dispose] = DeleteRole.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DestroyCapability.prototype);
        obj.__wbg_ptr = ptr;
        DestroyCapabilityFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DestroyCapabilityFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_destroycapability_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<CapabilityDestroyed>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.destroycapability_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.destroycapability_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DestroyCapability.prototype[Symbol.dispose] = DestroyCapability.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DestroyInitialAdminCapability.prototype);
        obj.__wbg_ptr = ptr;
        DestroyInitialAdminCapabilityFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DestroyInitialAdminCapabilityFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_destroyinitialadmincapability_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<CapabilityDestroyed>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.destroyinitialadmincapability_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.destroyinitialadmincapability_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DestroyInitialAdminCapability.prototype[Symbol.dispose] = DestroyInitialAdminCapability.prototype.free;

/**
 * Placeholder type used as the resolved value of transactions that carry no payload.
 */
export class Empty {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Empty.prototype);
        obj.__wbg_ptr = ptr;
        EmptyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        EmptyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_empty_free(ptr, 0);
    }
}
if (Symbol.dispose) Empty.prototype[Symbol.dispose] = Empty.prototype.free;

export class GasStationParams {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(GasStationParams.prototype);
        obj.__wbg_ptr = ptr;
        GasStationParamsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        GasStationParamsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_gasstationparams_free(ptr, 0);
    }
    /**
     * @returns {bigint}
     */
    get gasReservationDuration() {
        const ret = wasm.gasstationparams_gasReservationDuration(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * @returns {HeaderMap}
     */
    get headers() {
        const ret = wasm.gasstationparams_headers(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * @param {GasStationParamsI | null} [params]
     */
    constructor(params) {
        const ret = wasm.gasstationparams_new(isLikeNone(params) ? 0 : addToExternrefTable0(params));
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        GasStationParamsFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Adds an `Authorization` header using `token` as a bearer token.
     * @param {string} token
     * @returns {GasStationParams}
     */
    withAuthToken(token) {
        const ptr0 = passStringToWasm0(token, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.gasstationparams_withAuthToken(this.__wbg_ptr, ptr0, len0);
        return GasStationParams.__wrap(ret);
    }
}
if (Symbol.dispose) GasStationParams.prototype[Symbol.dispose] = GasStationParams.prototype.free;

/**
 * Immutable trail metadata.
 *
 * @remarks
 * Stored once on the trail object at creation and exposed read-only thereafter. Use
 * {@link OnChainAuditTrail.updatableMetadata} for the mutable counterpart.
 */
export class ImmutableMetadata {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ImmutableMetadata.prototype);
        obj.__wbg_ptr = ptr;
        ImmutableMetadataFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            description: this.description,
            name: this.name,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ImmutableMetadataFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_immutablemetadata_free(ptr, 0);
    }
    /**
     * Optional human-readable description.
     * @returns {string | undefined}
     */
    get description() {
        const ret = wasm.__wbg_get_immutablemetadata_description(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Human-readable trail name.
     * @returns {string}
     */
    get name() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_immutablemetadata_name(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Optional human-readable description.
     * @param {string | null} [arg0]
     */
    set description(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_immutablemetadata_description(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Human-readable trail name.
     * @param {string} arg0
     */
    set name(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_immutablemetadata_name(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) ImmutableMetadata.prototype[Symbol.dispose] = ImmutableMetadata.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(IssueCapability.prototype);
        obj.__wbg_ptr = ptr;
        IssueCapabilityFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        IssueCapabilityFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_issuecapability_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<CapabilityIssued>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.issuecapability_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.issuecapability_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) IssueCapability.prototype[Symbol.dispose] = IssueCapability.prototype.free;

/**
 * Linked-table metadata for record storage.
 */
export class LinkedTable {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(LinkedTable.prototype);
        obj.__wbg_ptr = ptr;
        LinkedTableFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            head: this.head,
            id: this.id,
            size: this.size,
            tail: this.tail,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LinkedTableFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_linkedtable_free(ptr, 0);
    }
    /**
     * Sequence number of the first entry, if any.
     * @returns {bigint | undefined}
     */
    get head() {
        const ret = wasm.__wbg_get_linkedtable_head(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Linked-table object ID.
     * @returns {string}
     */
    get id() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_linkedtable_id(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Declared number of entries in the table.
     * @returns {bigint}
     */
    get size() {
        const ret = wasm.__wbg_get_linkedtable_size(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Sequence number of the last entry, if any.
     * @returns {bigint | undefined}
     */
    get tail() {
        const ret = wasm.__wbg_get_linkedtable_tail(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Sequence number of the first entry, if any.
     * @param {bigint | null} [arg0]
     */
    set head(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * Linked-table object ID.
     * @param {string} arg0
     */
    set id(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_linkedtable_id(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Declared number of entries in the table.
     * @param {bigint} arg0
     */
    set size(arg0) {
        wasm.__wbg_set_linkedtable_size(this.__wbg_ptr, arg0);
    }
    /**
     * Sequence number of the last entry, if any.
     * @param {bigint | null} [arg0]
     */
    set tail(arg0) {
        wasm.__wbg_set_capability_validUntil(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
}
if (Symbol.dispose) LinkedTable.prototype[Symbol.dispose] = LinkedTable.prototype.free;

/**
 * Full locking configuration.
 *
 * @remarks
 * Combines three independent rules: a per-record delete window, a trail-delete time lock, and a
 * write-time lock. The trail-delete lock must not be {@link TimeLock.withUntilDestroyed}; trail
 * creation and locking updates that violate this invariant abort on-chain.
 */
export class LockingConfig {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(LockingConfig.prototype);
        obj.__wbg_ptr = ptr;
        LockingConfigFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            deleteRecordWindow: this.deleteRecordWindow,
            deleteTrailLock: this.deleteTrailLock,
            writeLock: this.writeLock,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LockingConfigFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_lockingconfig_free(ptr, 0);
    }
    /**
     * Delete-window policy applied to individual records.
     *
     * Records inside the window are locked against deletion.
     * @returns {LockingWindow}
     */
    get deleteRecordWindow() {
        const ret = wasm.__wbg_get_lockingconfig_deleteRecordWindow(this.__wbg_ptr);
        return LockingWindow.__wrap(ret);
    }
    /**
     * Time lock that gates deletion of the entire trail.
     *
     * Must not be {@link TimeLock.withUntilDestroyed}; trail creation and locking updates that
     * violate this invariant abort on-chain.
     * @returns {TimeLock}
     */
    get deleteTrailLock() {
        const ret = wasm.__wbg_get_lockingconfig_deleteTrailLock(this.__wbg_ptr);
        return TimeLock.__wrap(ret);
    }
    /**
     * Time lock that gates record writes (`addRecord`).
     * @returns {TimeLock}
     */
    get writeLock() {
        const ret = wasm.__wbg_get_lockingconfig_writeLock(this.__wbg_ptr);
        return TimeLock.__wrap(ret);
    }
    /**
     * Creates a locking configuration.
     *
     * @param deleteRecordWindow - {@link LockingWindow} that controls when individual records may
     * be deleted.
     * @param deleteTrailLock - {@link TimeLock} that controls when the trail itself may be
     * deleted.
     * @param writeLock - {@link TimeLock} that controls when records may be appended.
     * @param {LockingWindow} delete_record_window
     * @param {TimeLock} delete_trail_lock
     * @param {TimeLock} write_lock
     */
    constructor(delete_record_window, delete_trail_lock, write_lock) {
        _assertClass(delete_record_window, LockingWindow);
        var ptr0 = delete_record_window.__destroy_into_raw();
        _assertClass(delete_trail_lock, TimeLock);
        var ptr1 = delete_trail_lock.__destroy_into_raw();
        _assertClass(write_lock, TimeLock);
        var ptr2 = write_lock.__destroy_into_raw();
        const ret = wasm.lockingconfig_new(ptr0, ptr1, ptr2);
        this.__wbg_ptr = ret >>> 0;
        LockingConfigFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Delete-window policy applied to individual records.
     *
     * Records inside the window are locked against deletion.
     * @param {LockingWindow} arg0
     */
    set deleteRecordWindow(arg0) {
        _assertClass(arg0, LockingWindow);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_lockingconfig_deleteRecordWindow(this.__wbg_ptr, ptr0);
    }
    /**
     * Time lock that gates deletion of the entire trail.
     *
     * Must not be {@link TimeLock.withUntilDestroyed}; trail creation and locking updates that
     * violate this invariant abort on-chain.
     * @param {TimeLock} arg0
     */
    set deleteTrailLock(arg0) {
        _assertClass(arg0, TimeLock);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_lockingconfig_deleteTrailLock(this.__wbg_ptr, ptr0);
    }
    /**
     * Time lock that gates record writes (`addRecord`).
     * @param {TimeLock} arg0
     */
    set writeLock(arg0) {
        _assertClass(arg0, TimeLock);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_lockingconfig_writeLock(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) LockingConfig.prototype[Symbol.dispose] = LockingConfig.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(LockingWindow.prototype);
        obj.__wbg_ptr = ptr;
        LockingWindowFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            args: this.args,
            type: this.type,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LockingWindowFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_lockingwindow_free(ptr, 0);
    }
    /**
     * Returns the window argument for parameterized variants.
     *
     * @returns The numeric argument for `TimeBased`/`CountBased` variants, or `undefined`
     * otherwise.
     * @returns {any}
     */
    get args() {
        const ret = wasm.lockingwindow_args(this.__wbg_ptr);
        return ret;
    }
    /**
     * Returns the window variant.
     *
     * @returns The {@link LockingWindowType} discriminant for this window.
     * @returns {LockingWindowType}
     */
    get type() {
        const ret = wasm.lockingwindow_type(this.__wbg_ptr);
        return ret;
    }
    /**
     * Creates a count-based delete window.
     *
     * @param count - Number of most recent records that stay locked against deletion.
     *
     * @returns A window that locks the `count` most recent records.
     * @param {bigint} count
     * @returns {LockingWindow}
     */
    static withCountBased(count) {
        const ret = wasm.lockingwindow_withCountBased(count);
        return LockingWindow.__wrap(ret);
    }
    /**
     * Creates a disabled delete window.
     *
     * @returns A window that does not lock records against deletion.
     * @returns {LockingWindow}
     */
    static withNone() {
        const ret = wasm.lockingwindow_withNone();
        return LockingWindow.__wrap(ret);
    }
    /**
     * Creates a time-based delete window.
     *
     * @param seconds - Maximum record age, in seconds, for which the record stays locked against
     * deletion.
     *
     * @returns A window that locks records younger than `seconds`.
     * @param {bigint} seconds
     * @returns {LockingWindow}
     */
    static withTimeBased(seconds) {
        const ret = wasm.lockingwindow_withTimeBased(seconds);
        return LockingWindow.__wrap(ret);
    }
}
if (Symbol.dispose) LockingWindow.prototype[Symbol.dispose] = LockingWindow.prototype.free;

/**
 * Discriminant for the shape stored inside {@link LockingWindow}.
 * @enum {0 | 1 | 2}
 */
export const LockingWindowType = Object.freeze({
    /**
     * No delete window is enforced; records may be deleted at any time.
     */
    None: 0, "0": "None",
    /**
     * The window locks records while their age is below a configured number of seconds.
     */
    TimeBased: 1, "1": "TimeBased",
    /**
     * The window locks records while they are among the most recent N records.
     */
    CountBased: 2, "2": "CountBased",
});

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Migrate.prototype);
        obj.__wbg_ptr = ptr;
        MigrateFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        MigrateFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_migrate_free(ptr, 0);
    }
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Empty>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.migrate_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.migrate_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) Migrate.prototype[Symbol.dispose] = Migrate.prototype.free;

/**
 * Linked-table metadata keyed by object IDs.
 */
export class ObjectIdLinkedTable {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ObjectIdLinkedTable.prototype);
        obj.__wbg_ptr = ptr;
        ObjectIdLinkedTableFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            head: this.head,
            id: this.id,
            size: this.size,
            tail: this.tail,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ObjectIdLinkedTableFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_objectidlinkedtable_free(ptr, 0);
    }
    /**
     * Object ID of the first entry, if any.
     * @returns {string | undefined}
     */
    get head() {
        const ret = wasm.__wbg_get_objectidlinkedtable_head(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Linked-table object ID.
     * @returns {string}
     */
    get id() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_objectidlinkedtable_id(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Declared number of entries in the table.
     * @returns {bigint}
     */
    get size() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Object ID of the last entry, if any.
     * @returns {string | undefined}
     */
    get tail() {
        const ret = wasm.__wbg_get_objectidlinkedtable_tail(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Object ID of the first entry, if any.
     * @param {string | null} [arg0]
     */
    set head(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_objectidlinkedtable_head(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Linked-table object ID.
     * @param {string} arg0
     */
    set id(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Declared number of entries in the table.
     * @param {bigint} arg0
     */
    set size(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Object ID of the last entry, if any.
     * @param {string | null} [arg0]
     */
    set tail(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capabilityissueoptions_issuedTo(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) ObjectIdLinkedTable.prototype[Symbol.dispose] = ObjectIdLinkedTable.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(OnChainAuditTrail.prototype);
        obj.__wbg_ptr = ptr;
        OnChainAuditTrailFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            creator: this.creator,
            id: this.id,
            immutableMetadata: this.immutableMetadata,
            lockingConfig: this.lockingConfig,
            records: this.records,
            roles: this.roles,
            sequenceNumber: this.sequenceNumber,
            tags: this.tags,
            updatableMetadata: this.updatableMetadata,
            version: this.version,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        OnChainAuditTrailFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_onchainaudittrail_free(ptr, 0);
    }
    /**
     * Returns the creation timestamp in milliseconds since the Unix epoch.
     *
     * @returns Creation timestamp in milliseconds.
     * @returns {bigint}
     */
    get createdAt() {
        const ret = wasm.onchainaudittrail_createdAt(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Returns the address that created this trail.
     *
     * @returns Stringified IOTA address of the trail creator.
     * @returns {string}
     */
    get creator() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.onchainaudittrail_creator(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Returns the trail object ID.
     *
     * @returns Stringified object ID of this trail.
     * @returns {string}
     */
    get id() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.onchainaudittrail_id(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Returns metadata fixed at creation time, when present.
     *
     * @returns The trail's {@link ImmutableMetadata}, or `null` when none was set.
     * @returns {ImmutableMetadata | undefined}
     */
    get immutableMetadata() {
        const ret = wasm.onchainaudittrail_immutableMetadata(this.__wbg_ptr);
        return ret === 0 ? undefined : ImmutableMetadata.__wrap(ret);
    }
    /**
     * Returns the active locking configuration that governs record deletion, trail deletion, and
     * record writes.
     *
     * @returns Active {@link LockingConfig} for the trail.
     * @returns {LockingConfig}
     */
    get lockingConfig() {
        const ret = wasm.onchainaudittrail_lockingConfig(this.__wbg_ptr);
        return LockingConfig.__wrap(ret);
    }
    /**
     * Returns the linked-table metadata for record storage.
     *
     * @remarks
     * Returns table size and head/tail sequence numbers; record contents must be loaded via
     * {@link TrailRecords}.
     *
     * @returns {@link LinkedTable} metadata for the record table.
     * @returns {LinkedTable}
     */
    get records() {
        const ret = wasm.onchainaudittrail_records(this.__wbg_ptr);
        return LinkedTable.__wrap(ret);
    }
    /**
     * Returns the trail's role definitions, the revoked-capability denylist, and the permissions
     * required to administer roles and capabilities.
     *
     * @returns The trail's {@link RoleMap}.
     * @returns {RoleMap}
     */
    get roles() {
        const ret = wasm.onchainaudittrail_roles(this.__wbg_ptr);
        return RoleMap.__wrap(ret);
    }
    /**
     * Returns the next sequence number that will be assigned to a new record.
     *
     * @remarks
     * This is a monotonic counter that never decrements, even after records are deleted, so
     * existing sequence numbers remain unique for the lifetime of the trail.
     *
     * @returns Sequence number that the next added record will receive.
     * @returns {bigint}
     */
    get sequenceNumber() {
        const ret = wasm.onchainaudittrail_sequenceNumber(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Returns the canonical list of tags that may be attached to records in this trail, together
     * with their combined usage counts.
     *
     * @returns Tag entries sorted alphabetically by tag name.
     * @returns {RecordTagEntry[]}
     */
    get tags() {
        const ret = wasm.onchainaudittrail_tags(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Returns metadata that holders of {@link Permission.UpdateMetadata} can change after
     * creation, when present.
     *
     * @returns Current value of `updatableMetadata`, or `null` when the field is unset.
     * @returns {string | undefined}
     */
    get updatableMetadata() {
        const ret = wasm.onchainaudittrail_updatableMetadata(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Returns the on-chain package version of the trail object.
     *
     * @remarks
     * Use {@link AuditTrailHandle.migrate} after a package upgrade if this lags behind the SDK's
     * expected version.
     *
     * @returns Stored package version of the trail object.
     * @returns {bigint}
     */
    get version() {
        const ret = wasm.onchainaudittrail_version(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
}
if (Symbol.dispose) OnChainAuditTrail.prototype[Symbol.dispose] = OnChainAuditTrail.prototype.free;

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
    toJSON() {
        return {
            auditTrailPackageId: this.auditTrailPackageId,
            tfComponentsPackageId: this.tfComponentsPackageId,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        PackageOverridesFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_packageoverrides_free(ptr, 0);
    }
    /**
     * Override for the audit-trail package ID.
     * @returns {string | undefined}
     */
    get auditTrailPackageId() {
        const ret = wasm.__wbg_get_packageoverrides_auditTrailPackageId(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Override for the `tf_components` package ID.
     * @returns {string | undefined}
     */
    get tfComponentsPackageId() {
        const ret = wasm.__wbg_get_packageoverrides_tfComponentsPackageId(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Creates package overrides for custom deployments.
     *
     * @param auditTrailPackageId - Optional audit-trail package ID to use instead of the registry
     * entry.
     * @param tfComponentsPackageId - Optional `tf_components` package ID to use instead of the
     * registry entry.
     * @param {string | null} [audit_trail_package_id]
     * @param {string | null} [tf_components_package_id]
     */
    constructor(audit_trail_package_id, tf_components_package_id) {
        var ptr0 = isLikeNone(audit_trail_package_id) ? 0 : passStringToWasm0(audit_trail_package_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = isLikeNone(tf_components_package_id) ? 0 : passStringToWasm0(tf_components_package_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        const ret = wasm.packageoverrides_new(ptr0, len0, ptr1, len1);
        this.__wbg_ptr = ret >>> 0;
        PackageOverridesFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Override for the audit-trail package ID.
     * @param {string | null} [arg0]
     */
    set auditTrailPackageId(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_packageoverrides_auditTrailPackageId(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Override for the `tf_components` package ID.
     * @param {string | null} [arg0]
     */
    set tfComponentsPackageId(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_packageoverrides_tfComponentsPackageId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) PackageOverrides.prototype[Symbol.dispose] = PackageOverrides.prototype.free;

/**
 * One page of records returned by {@link TrailRecords.listPage}.
 */
export class PaginatedRecord {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(PaginatedRecord.prototype);
        obj.__wbg_ptr = ptr;
        PaginatedRecordFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            hasNextPage: this.hasNextPage,
            nextCursor: this.nextCursor,
            records: this.records,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        PaginatedRecordFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_paginatedrecord_free(ptr, 0);
    }
    /**
     * Indicates whether another page may be available.
     * @returns {boolean}
     */
    get hasNextPage() {
        const ret = wasm.__wbg_get_paginatedrecord_hasNextPage(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * Cursor to pass to the next {@link TrailRecords.listPage} call.
     * @returns {bigint | undefined}
     */
    get nextCursor() {
        const ret = wasm.__wbg_get_paginatedrecord_nextCursor(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Records included in the current page, ordered by sequence number.
     * @returns {Record[]}
     */
    get records() {
        const ret = wasm.__wbg_get_paginatedrecord_records(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Indicates whether another page may be available.
     * @param {boolean} arg0
     */
    set hasNextPage(arg0) {
        wasm.__wbg_set_paginatedrecord_hasNextPage(this.__wbg_ptr, arg0);
    }
    /**
     * Cursor to pass to the next {@link TrailRecords.listPage} call.
     * @param {bigint | null} [arg0]
     */
    set nextCursor(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * Records included in the current page, ordered by sequence number.
     * @param {Record[]} arg0
     */
    set records(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_paginatedrecord_records(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) PaginatedRecord.prototype[Symbol.dispose] = PaginatedRecord.prototype.free;

/**
 * Permission variants enumerated by the audit trail.
 *
 * @remarks
 * Each variant authorizes one operation on a trail. Variants are grouped by the proposed role
 * that typically owns them (`Admin`, `RecordAdmin`, `LockingAdmin`, `RoleAdmin`, `CapAdmin`,
 * `MetadataAdmin`, `TagAdmin`); see {@link PermissionSet} for the recommended sets.
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18}
 */
export const Permission = Object.freeze({
    /**
     * Authorizes deleting the trail itself.
     */
    DeleteAuditTrail: 0, "0": "DeleteAuditTrail",
    /**
     * Authorizes the batched record-deletion entry point.
     */
    DeleteAllRecords: 1, "1": "DeleteAllRecords",
    /**
     * Authorizes appending a record.
     */
    AddRecord: 2, "2": "AddRecord",
    /**
     * Authorizes deleting an individual record.
     */
    DeleteRecord: 3, "3": "DeleteRecord",
    /**
     * Authorizes adding a record that supersedes earlier records via `RecordCorrection`.
     */
    CorrectRecord: 4, "4": "CorrectRecord",
    /**
     * Authorizes replacing the full {@link LockingConfig}.
     */
    UpdateLockingConfig: 5, "5": "UpdateLockingConfig",
    /**
     * Authorizes updating only the delete-record window of the locking configuration.
     */
    UpdateLockingConfigForDeleteRecord: 6, "6": "UpdateLockingConfigForDeleteRecord",
    /**
     * Authorizes updating only the delete-trail lock of the locking configuration.
     */
    UpdateLockingConfigForDeleteTrail: 7, "7": "UpdateLockingConfigForDeleteTrail",
    /**
     * Authorizes updating only the write lock of the locking configuration.
     */
    UpdateLockingConfigForWrite: 8, "8": "UpdateLockingConfigForWrite",
    /**
     * Authorizes creating roles.
     */
    AddRoles: 9, "9": "AddRoles",
    /**
     * Authorizes updating existing roles.
     */
    UpdateRoles: 10, "10": "UpdateRoles",
    /**
     * Authorizes deleting roles.
     */
    DeleteRoles: 11, "11": "DeleteRoles",
    /**
     * Authorizes issuing capabilities.
     */
    AddCapabilities: 12, "12": "AddCapabilities",
    /**
     * Authorizes revoking, destroying, and cleaning up capabilities.
     */
    RevokeCapabilities: 13, "13": "RevokeCapabilities",
    /**
     * Authorizes replacing the trail's `updatableMetadata`.
     */
    UpdateMetadata: 14, "14": "UpdateMetadata",
    /**
     * Authorizes clearing the trail's `updatableMetadata`.
     */
    DeleteMetadata: 15, "15": "DeleteMetadata",
    /**
     * Authorizes the migration entry point used after package upgrades.
     */
    Migrate: 16, "16": "Migrate",
    /**
     * Authorizes adding entries to the trail's record-tag registry.
     */
    AddRecordTags: 17, "17": "AddRecordTags",
    /**
     * Authorizes removing entries from the trail's record-tag registry.
     */
    DeleteRecordTags: 18, "18": "DeleteRecordTags",
});

/**
 * Set of permissions granted by a role.
 */
export class PermissionSet {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(PermissionSet.prototype);
        obj.__wbg_ptr = ptr;
        PermissionSetFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            permissions: this.permissions,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        PermissionSetFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_permissionset_free(ptr, 0);
    }
    /**
     * Permissions granted by this set.
     * @returns {any[]}
     */
    get permissions() {
        const ret = wasm.__wbg_get_permissionset_permissions(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Returns the recommended permission set for the reserved initial-admin role.
     *
     * @returns A {@link PermissionSet} that authorizes role and capability administration.
     * @returns {PermissionSet}
     */
    static adminPermissions() {
        const ret = wasm.permissionset_adminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * Returns the permissions needed to issue and revoke capabilities.
     *
     * @returns A {@link PermissionSet} that authorizes the capability lifecycle.
     * @returns {PermissionSet}
     */
    static capAdminPermissions() {
        const ret = wasm.permissionset_capAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * Returns the permissions needed to administer locking rules.
     *
     * @returns A {@link PermissionSet} that authorizes updates to all locking dimensions.
     * @returns {PermissionSet}
     */
    static lockingAdminPermissions() {
        const ret = wasm.permissionset_lockingAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * Returns the permissions needed to administer mutable metadata.
     *
     * @returns A {@link PermissionSet} that authorizes updating and clearing
     * `updatableMetadata`.
     * @returns {PermissionSet}
     */
    static metadataAdminPermissions() {
        const ret = wasm.permissionset_metadataAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * Creates a permission set from an explicit list of permissions.
     *
     * @param permissions - Permissions to include in the set.
     * @param {any[]} permissions
     */
    constructor(permissions) {
        const ptr0 = passArrayJsValueToWasm0(permissions, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.permissionset_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        PermissionSetFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Returns the permissions needed to administer records.
     *
     * @returns A {@link PermissionSet} that authorizes record reads, writes, and deletions.
     * @returns {PermissionSet}
     */
    static recordAdminPermissions() {
        const ret = wasm.permissionset_recordAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * Returns the permissions needed to administer roles.
     *
     * @returns A {@link PermissionSet} that authorizes adding, updating, and deleting roles.
     * @returns {PermissionSet}
     */
    static roleAdminPermissions() {
        const ret = wasm.permissionset_roleAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * Returns the permissions needed to administer record tags.
     *
     * @returns A {@link PermissionSet} that authorizes adding and removing entries from the
     * trail's record-tag registry.
     * @returns {PermissionSet}
     */
    static tagAdminPermissions() {
        const ret = wasm.permissionset_tagAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * Permissions granted by this set.
     * @param {any[]} arg0
     */
    set permissions(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_permissionset_permissions(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) PermissionSet.prototype[Symbol.dispose] = PermissionSet.prototype.free;

/**
 * Single audit-trail record.
 *
 * @remarks
 * Records form a tamper-evident, sequential chain: each record has a monotonically increasing
 * sequence number that is never reused, even after the record is deleted.
 */
export class Record {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Record.prototype);
        obj.__wbg_ptr = ptr;
        RecordFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    static __unwrap(jsValue) {
        if (!(jsValue instanceof Record)) {
            return 0;
        }
        return jsValue.__destroy_into_raw();
    }
    toJSON() {
        return {
            addedAt: this.addedAt,
            addedBy: this.addedBy,
            correction: this.correction,
            data: this.data,
            metadata: this.metadata,
            sequenceNumber: this.sequenceNumber,
            tag: this.tag,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RecordFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_record_free(ptr, 0);
    }
    /**
     * Millisecond timestamp at which the record was added.
     * @returns {bigint}
     */
    get addedAt() {
        const ret = wasm.__wbg_get_record_addedAt(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Address that added the record.
     * @returns {string}
     */
    get addedBy() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_record_addedBy(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Correction relationships for this record.
     * @returns {RecordCorrection}
     */
    get correction() {
        const ret = wasm.__wbg_get_record_correction(this.__wbg_ptr);
        return RecordCorrection.__wrap(ret);
    }
    /**
     * Record payload stored on-chain.
     * @returns {Data}
     */
    get data() {
        const ret = wasm.__wbg_get_record_data(this.__wbg_ptr);
        return Data.__wrap(ret);
    }
    /**
     * Optional application-defined metadata.
     * @returns {string | undefined}
     */
    get metadata() {
        const ret = wasm.__wbg_get_record_metadata(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Monotonic record sequence number inside the trail.
     * @returns {bigint}
     */
    get sequenceNumber() {
        const ret = wasm.__wbg_get_record_sequenceNumber(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Optional trail-owned tag attached to the record.
     * @returns {string | undefined}
     */
    get tag() {
        const ret = wasm.__wbg_get_record_tag(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Millisecond timestamp at which the record was added.
     * @param {bigint} arg0
     */
    set addedAt(arg0) {
        wasm.__wbg_set_record_addedAt(this.__wbg_ptr, arg0);
    }
    /**
     * Address that added the record.
     * @param {string} arg0
     */
    set addedBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_record_addedBy(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Correction relationships for this record.
     * @param {RecordCorrection} arg0
     */
    set correction(arg0) {
        _assertClass(arg0, RecordCorrection);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_record_correction(this.__wbg_ptr, ptr0);
    }
    /**
     * Record payload stored on-chain.
     * @param {Data} arg0
     */
    set data(arg0) {
        _assertClass(arg0, Data);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_record_data(this.__wbg_ptr, ptr0);
    }
    /**
     * Optional application-defined metadata.
     * @param {string | null} [arg0]
     */
    set metadata(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_record_metadata(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Monotonic record sequence number inside the trail.
     * @param {bigint} arg0
     */
    set sequenceNumber(arg0) {
        wasm.__wbg_set_record_sequenceNumber(this.__wbg_ptr, arg0);
    }
    /**
     * Optional trail-owned tag attached to the record.
     * @param {string | null} [arg0]
     */
    set tag(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_record_tag(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) Record.prototype[Symbol.dispose] = Record.prototype.free;

/**
 * Event payload emitted when a record is added.
 */
export class RecordAdded {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RecordAdded.prototype);
        obj.__wbg_ptr = ptr;
        RecordAddedFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            addedBy: this.addedBy,
            sequenceNumber: this.sequenceNumber,
            timestamp: this.timestamp,
            trailId: this.trailId,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RecordAddedFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_recordadded_free(ptr, 0);
    }
    /**
     * Address that added the record.
     * @returns {string}
     */
    get addedBy() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_recordadded_addedBy(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Sequence number assigned to the new record.
     * @returns {bigint}
     */
    get sequenceNumber() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Millisecond event timestamp.
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_recordadded_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Trail object ID receiving the new record.
     * @returns {string}
     */
    get trailId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_recordadded_trailId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Address that added the record.
     * @param {string} arg0
     */
    set addedBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordadded_addedBy(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Sequence number assigned to the new record.
     * @param {bigint} arg0
     */
    set sequenceNumber(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Millisecond event timestamp.
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_recordadded_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Trail object ID receiving the new record.
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordadded_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RecordAdded.prototype[Symbol.dispose] = RecordAdded.prototype.free;

/**
 * Correction metadata attached to a record.
 *
 * @remarks
 * {@link RecordCorrection.replaces} is fixed at record creation and lists the sequence numbers
 * this record supersedes; {@link RecordCorrection.isReplacedBy} is a back-pointer the trail sets
 * later when this record itself is corrected.
 */
export class RecordCorrection {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RecordCorrection.prototype);
        obj.__wbg_ptr = ptr;
        RecordCorrectionFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            isReplacedBy: this.isReplacedBy,
            replaces: this.replaces,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RecordCorrectionFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_recordcorrection_free(ptr, 0);
    }
    /**
     * Sequence number of the record that supersedes this one, if any.
     * @returns {bigint | undefined}
     */
    get isReplacedBy() {
        const ret = wasm.__wbg_get_recordcorrection_isReplacedBy(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * Sorted sequence numbers that this record supersedes.
     * @returns {BigUint64Array}
     */
    get replaces() {
        const ret = wasm.__wbg_get_recordcorrection_replaces(this.__wbg_ptr);
        var v1 = getArrayU64FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 8, 8);
        return v1;
    }
    /**
     * Sequence number of the record that supersedes this one, if any.
     * @param {bigint | null} [arg0]
     */
    set isReplacedBy(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * Sorted sequence numbers that this record supersedes.
     * @param {BigUint64Array} arg0
     */
    set replaces(arg0) {
        const ptr0 = passArray64ToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordcorrection_replaces(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RecordCorrection.prototype[Symbol.dispose] = RecordCorrection.prototype.free;

/**
 * Event payload emitted when a record is deleted.
 */
export class RecordDeleted {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RecordDeleted.prototype);
        obj.__wbg_ptr = ptr;
        RecordDeletedFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            deletedBy: this.deletedBy,
            sequenceNumber: this.sequenceNumber,
            timestamp: this.timestamp,
            trailId: this.trailId,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RecordDeletedFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_recorddeleted_free(ptr, 0);
    }
    /**
     * Address that deleted the record.
     * @returns {string}
     */
    get deletedBy() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_recorddeleted_deletedBy(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Sequence number of the deleted record.
     * @returns {bigint}
     */
    get sequenceNumber() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Millisecond event timestamp.
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_recordadded_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Trail object ID from which the record was deleted.
     * @returns {string}
     */
    get trailId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_recorddeleted_trailId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Address that deleted the record.
     * @param {string} arg0
     */
    set deletedBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordadded_addedBy(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Sequence number of the deleted record.
     * @param {bigint} arg0
     */
    set sequenceNumber(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Millisecond event timestamp.
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_recordadded_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Trail object ID from which the record was deleted.
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordadded_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RecordDeleted.prototype[Symbol.dispose] = RecordDeleted.prototype.free;

/**
 * Trail-owned record tag plus its usage count.
 */
export class RecordTagEntry {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RecordTagEntry.prototype);
        obj.__wbg_ptr = ptr;
        RecordTagEntryFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            tag: this.tag,
            usageCount: this.usageCount,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RecordTagEntryFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_recordtagentry_free(ptr, 0);
    }
    /**
     * Tag name.
     * @returns {string}
     */
    get tag() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_recordtagentry_tag(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Combined number of records and roles currently referencing the tag.
     * @returns {bigint}
     */
    get usageCount() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Tag name.
     * @param {string} arg0
     */
    set tag(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Combined number of records and roles currently referencing the tag.
     * @param {bigint} arg0
     */
    set usageCount(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) RecordTagEntry.prototype[Symbol.dispose] = RecordTagEntry.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RemoveRecordTag.prototype);
        obj.__wbg_ptr = ptr;
        RemoveRecordTagFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RemoveRecordTagFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_removerecordtag_free(ptr, 0);
    }
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Empty>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.removerecordtag_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.removerecordtag_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) RemoveRecordTag.prototype[Symbol.dispose] = RemoveRecordTag.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RevokeCapability.prototype);
        obj.__wbg_ptr = ptr;
        RevokeCapabilityFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RevokeCapabilityFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_revokecapability_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<CapabilityRevoked>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.revokecapability_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.revokecapability_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) RevokeCapability.prototype[Symbol.dispose] = RevokeCapability.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RevokeInitialAdminCapability.prototype);
        obj.__wbg_ptr = ptr;
        RevokeInitialAdminCapabilityFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RevokeInitialAdminCapabilityFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_revokeinitialadmincapability_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<CapabilityRevoked>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.revokeinitialadmincapability_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.revokeinitialadmincapability_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) RevokeInitialAdminCapability.prototype[Symbol.dispose] = RevokeInitialAdminCapability.prototype.free;

/**
 * Event payload emitted when expired revoked-capability entries are cleaned up.
 */
export class RevokedCapabilitiesCleanedUp {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RevokedCapabilitiesCleanedUp.prototype);
        obj.__wbg_ptr = ptr;
        RevokedCapabilitiesCleanedUpFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            cleanedBy: this.cleanedBy,
            cleanedCount: this.cleanedCount,
            timestamp: this.timestamp,
            trailId: this.trailId,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RevokedCapabilitiesCleanedUpFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_revokedcapabilitiescleanedup_free(ptr, 0);
    }
    /**
     * Address that triggered the cleanup.
     * @returns {string}
     */
    get cleanedBy() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_revokedcapabilitiescleanedup_cleanedBy(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Number of expired entries removed by this cleanup call.
     * @returns {bigint}
     */
    get cleanedCount() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Millisecond event timestamp.
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_recordadded_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Trail object ID whose denylist was pruned.
     * @returns {string}
     */
    get trailId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_revokedcapabilitiescleanedup_trailId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Address that triggered the cleanup.
     * @param {string} arg0
     */
    set cleanedBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordadded_addedBy(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Number of expired entries removed by this cleanup call.
     * @param {bigint} arg0
     */
    set cleanedCount(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Millisecond event timestamp.
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_recordadded_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Trail object ID whose denylist was pruned.
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordadded_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RevokedCapabilitiesCleanedUp.prototype[Symbol.dispose] = RevokedCapabilitiesCleanedUp.prototype.free;

/**
 * Permissions required to administer roles, as enforced by the trail.
 */
export class RoleAdminPermissions {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RoleAdminPermissions.prototype);
        obj.__wbg_ptr = ptr;
        RoleAdminPermissionsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            add: this.add,
            delete: this.delete,
            update: this.update,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RoleAdminPermissionsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_roleadminpermissions_free(ptr, 0);
    }
    /**
     * Permission required to create roles.
     * @returns {Permission}
     */
    get add() {
        const ret = wasm.__wbg_get_capabilityadminpermissions_add(this.__wbg_ptr);
        return ret;
    }
    /**
     * Permission required to delete roles.
     * @returns {Permission}
     */
    get delete() {
        const ret = wasm.__wbg_get_capabilityadminpermissions_revoke(this.__wbg_ptr);
        return ret;
    }
    /**
     * Permission required to update roles.
     * @returns {Permission}
     */
    get update() {
        const ret = wasm.__wbg_get_roleadminpermissions_update(this.__wbg_ptr);
        return ret;
    }
    /**
     * Permission required to create roles.
     * @param {Permission} arg0
     */
    set add(arg0) {
        wasm.__wbg_set_capabilityadminpermissions_add(this.__wbg_ptr, arg0);
    }
    /**
     * Permission required to delete roles.
     * @param {Permission} arg0
     */
    set delete(arg0) {
        wasm.__wbg_set_capabilityadminpermissions_revoke(this.__wbg_ptr, arg0);
    }
    /**
     * Permission required to update roles.
     * @param {Permission} arg0
     */
    set update(arg0) {
        wasm.__wbg_set_roleadminpermissions_update(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) RoleAdminPermissions.prototype[Symbol.dispose] = RoleAdminPermissions.prototype.free;

/**
 * Event payload emitted when a role is created.
 */
export class RoleCreated {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RoleCreated.prototype);
        obj.__wbg_ptr = ptr;
        RoleCreatedFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            createdBy: this.createdBy,
            permissions: this.permissions,
            roleTags: this.roleTags,
            role: this.role,
            timestamp: this.timestamp,
            trailId: this.trailId,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RoleCreatedFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rolecreated_free(ptr, 0);
    }
    /**
     * Address that created the role.
     * @returns {string}
     */
    get createdBy() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_rolecreated_createdBy(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Permissions granted by the new role.
     * @returns {PermissionSet}
     */
    get permissions() {
        const ret = wasm.__wbg_get_rolecreated_permissions(this.__wbg_ptr);
        return PermissionSet.__wrap(ret);
    }
    /**
     * Optional record-tag restrictions stored as role data.
     * @returns {RoleTags | undefined}
     */
    get roleTags() {
        const ret = wasm.__wbg_get_rolecreated_roleTags(this.__wbg_ptr);
        return ret === 0 ? undefined : RoleTags.__wrap(ret);
    }
    /**
     * Role name.
     * @returns {string}
     */
    get role() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_rolecreated_role(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Millisecond event timestamp.
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Trail object ID that owns the role.
     * @returns {string}
     */
    get trailId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_rolecreated_trailId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Address that created the role.
     * @param {string} arg0
     */
    set createdBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_targetKey(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Permissions granted by the new role.
     * @param {PermissionSet} arg0
     */
    set permissions(arg0) {
        _assertClass(arg0, PermissionSet);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_rolecreated_permissions(this.__wbg_ptr, ptr0);
    }
    /**
     * Optional record-tag restrictions stored as role data.
     * @param {RoleTags | null} [arg0]
     */
    set roleTags(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, RoleTags);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_rolecreated_roleTags(this.__wbg_ptr, ptr0);
    }
    /**
     * Role name.
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_creator(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Millisecond event timestamp.
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Trail object ID that owns the role.
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RoleCreated.prototype[Symbol.dispose] = RoleCreated.prototype.free;

/**
 * Event payload emitted when a role is deleted.
 */
export class RoleDeleted {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RoleDeleted.prototype);
        obj.__wbg_ptr = ptr;
        RoleDeletedFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            deletedBy: this.deletedBy,
            role: this.role,
            timestamp: this.timestamp,
            trailId: this.trailId,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RoleDeletedFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_roledeleted_free(ptr, 0);
    }
    /**
     * Address that deleted the role.
     * @returns {string}
     */
    get deletedBy() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_roledeleted_deletedBy(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Role name.
     * @returns {string}
     */
    get role() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_roledeleted_role(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Millisecond event timestamp.
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Trail object ID that owned the role.
     * @returns {string}
     */
    get trailId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_roledeleted_trailId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Address that deleted the role.
     * @param {string} arg0
     */
    set deletedBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_id(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Role name.
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_creator(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Millisecond event timestamp.
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Trail object ID that owned the role.
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RoleDeleted.prototype[Symbol.dispose] = RoleDeleted.prototype.free;

/**
 * Role-scoped access-control API.
 *
 * @remarks
 * Identifies one role name inside the trail's access-control state and builds transactions that
 * act on that role.
 */
export class RoleHandle {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RoleHandle.prototype);
        obj.__wbg_ptr = ptr;
        RoleHandleFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            name: this.name,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RoleHandleFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rolehandle_free(ptr, 0);
    }
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
     * @param {PermissionSet} permissions
     * @param {RoleTags | null} [role_tags]
     * @returns {TransactionBuilder<CreateRole>}
     */
    create(permissions, role_tags) {
        _assertClass(permissions, PermissionSet);
        var ptr0 = permissions.__destroy_into_raw();
        let ptr1 = 0;
        if (!isLikeNone(role_tags)) {
            _assertClass(role_tags, RoleTags);
            ptr1 = role_tags.__destroy_into_raw();
        }
        const ret = wasm.rolehandle_create(this.__wbg_ptr, ptr0, ptr1);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @returns {TransactionBuilder<DeleteRole>}
     */
    delete() {
        const ret = wasm.rolehandle_delete(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @param {CapabilityIssueOptions} options
     * @returns {TransactionBuilder<IssueCapability>}
     */
    issueCapability(options) {
        _assertClass(options, CapabilityIssueOptions);
        var ptr0 = options.__destroy_into_raw();
        const ret = wasm.rolehandle_issueCapability(this.__wbg_ptr, ptr0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
    /**
     * Returns the role name represented by this handle.
     *
     * @returns The role name bound to this handle.
     * @returns {string}
     */
    get name() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.rolehandle_name(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
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
     * @param {PermissionSet} permissions
     * @param {RoleTags | null} [role_tags]
     * @returns {TransactionBuilder<UpdateRole>}
     */
    updatePermissions(permissions, role_tags) {
        _assertClass(permissions, PermissionSet);
        var ptr0 = permissions.__destroy_into_raw();
        let ptr1 = 0;
        if (!isLikeNone(role_tags)) {
            _assertClass(role_tags, RoleTags);
            ptr1 = role_tags.__destroy_into_raw();
        }
        const ret = wasm.rolehandle_updatePermissions(this.__wbg_ptr, ptr0, ptr1);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
}
if (Symbol.dispose) RoleHandle.prototype[Symbol.dispose] = RoleHandle.prototype.free;

/**
 * Snapshot of the trail's role map.
 *
 * @remarks
 * Mirrors the access-control state maintained by the audit-trail package, including the reserved
 * initial-admin role, the revoked-capability denylist, and the role data used for tag-aware
 * authorization.
 */
export class RoleMap {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RoleMap.prototype);
        obj.__wbg_ptr = ptr;
        RoleMapFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            capabilityAdminPermissions: this.capabilityAdminPermissions,
            initialAdminCapIds: this.initialAdminCapIds,
            initialAdminRoleName: this.initialAdminRoleName,
            revokedCapabilities: this.revokedCapabilities,
            roleAdminPermissions: this.roleAdminPermissions,
            roles: this.roles,
            targetKey: this.targetKey,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RoleMapFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rolemap_free(ptr, 0);
    }
    /**
     * Permissions required to administer capabilities.
     * @returns {CapabilityAdminPermissions}
     */
    get capabilityAdminPermissions() {
        const ret = wasm.__wbg_get_rolemap_capabilityAdminPermissions(this.__wbg_ptr);
        return CapabilityAdminPermissions.__wrap(ret);
    }
    /**
     * Capability IDs currently recognized as initial-admin capabilities.
     * @returns {string[]}
     */
    get initialAdminCapIds() {
        const ret = wasm.__wbg_get_rolemap_initialAdminCapIds(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Reserved role name used for initial-admin capabilities.
     *
     * Always equals `"Admin"`. The role bearing this name cannot be deleted.
     * @returns {string}
     */
    get initialAdminRoleName() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_rolemap_initialAdminRoleName(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Denylist of revoked capability IDs.
     * @returns {ObjectIdLinkedTable}
     */
    get revokedCapabilities() {
        const ret = wasm.__wbg_get_rolemap_revokedCapabilities(this.__wbg_ptr);
        return ObjectIdLinkedTable.__wrap(ret);
    }
    /**
     * Permissions required to administer roles.
     * @returns {RoleAdminPermissions}
     */
    get roleAdminPermissions() {
        const ret = wasm.__wbg_get_rolemap_roleAdminPermissions(this.__wbg_ptr);
        return RoleAdminPermissions.__wrap(ret);
    }
    /**
     * Role definitions sorted by role name.
     * @returns {RolePermissionsEntry[]}
     */
    get roles() {
        const ret = wasm.__wbg_get_rolemap_roles(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Trail object ID that this role map protects.
     * @returns {string}
     */
    get targetKey() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_rolemap_targetKey(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Permissions required to administer capabilities.
     * @param {CapabilityAdminPermissions} arg0
     */
    set capabilityAdminPermissions(arg0) {
        _assertClass(arg0, CapabilityAdminPermissions);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_rolemap_capabilityAdminPermissions(this.__wbg_ptr, ptr0);
    }
    /**
     * Capability IDs currently recognized as initial-admin capabilities.
     * @param {string[]} arg0
     */
    set initialAdminCapIds(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_rolemap_initialAdminCapIds(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Reserved role name used for initial-admin capabilities.
     *
     * Always equals `"Admin"`. The role bearing this name cannot be deleted.
     * @param {string} arg0
     */
    set initialAdminRoleName(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_rolemap_initialAdminRoleName(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Denylist of revoked capability IDs.
     * @param {ObjectIdLinkedTable} arg0
     */
    set revokedCapabilities(arg0) {
        _assertClass(arg0, ObjectIdLinkedTable);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_rolemap_revokedCapabilities(this.__wbg_ptr, ptr0);
    }
    /**
     * Permissions required to administer roles.
     * @param {RoleAdminPermissions} arg0
     */
    set roleAdminPermissions(arg0) {
        _assertClass(arg0, RoleAdminPermissions);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_rolemap_roleAdminPermissions(this.__wbg_ptr, ptr0);
    }
    /**
     * Role definitions sorted by role name.
     * @param {RolePermissionsEntry[]} arg0
     */
    set roles(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_rolemap_roles(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Trail object ID that this role map protects.
     * @param {string} arg0
     */
    set targetKey(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_rolemap_targetKey(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RoleMap.prototype[Symbol.dispose] = RoleMap.prototype.free;

/**
 * Flattened role entry exposed inside {@link RoleMap}.
 */
export class RolePermissionsEntry {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RolePermissionsEntry.prototype);
        obj.__wbg_ptr = ptr;
        RolePermissionsEntryFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    static __unwrap(jsValue) {
        if (!(jsValue instanceof RolePermissionsEntry)) {
            return 0;
        }
        return jsValue.__destroy_into_raw();
    }
    toJSON() {
        return {
            name: this.name,
            permissions: this.permissions,
            roleTags: this.roleTags,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RolePermissionsEntryFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rolepermissionsentry_free(ptr, 0);
    }
    /**
     * Role name.
     * @returns {string}
     */
    get name() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_rolepermissionsentry_name(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Permissions granted by the role.
     * @returns {any[]}
     */
    get permissions() {
        const ret = wasm.__wbg_get_rolepermissionsentry_permissions(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Optional role-scoped record-tag restrictions.
     * @returns {RoleTags | undefined}
     */
    get roleTags() {
        const ret = wasm.__wbg_get_rolepermissionsentry_roleTags(this.__wbg_ptr);
        return ret === 0 ? undefined : RoleTags.__wrap(ret);
    }
    /**
     * Role name.
     * @param {string} arg0
     */
    set name(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_immutablemetadata_name(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Permissions granted by the role.
     * @param {any[]} arg0
     */
    set permissions(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_rolepermissionsentry_permissions(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Optional role-scoped record-tag restrictions.
     * @param {RoleTags | null} [arg0]
     */
    set roleTags(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, RoleTags);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_rolepermissionsentry_roleTags(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) RolePermissionsEntry.prototype[Symbol.dispose] = RolePermissionsEntry.prototype.free;

/**
 * Allowlisted record tags stored on a role.
 *
 * @remarks
 * Every tag listed here must already exist in the trail's record-tag registry before the role is
 * created or updated; otherwise the on-chain call aborts.
 */
export class RoleTags {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RoleTags.prototype);
        obj.__wbg_ptr = ptr;
        RoleTagsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            tags: this.tags,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RoleTagsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_roletags_free(ptr, 0);
    }
    /**
     * Sorted tag names allowed by the role.
     * @returns {string[]}
     */
    get tags() {
        const ret = wasm.__wbg_get_roletags_tags(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Creates role-tag restrictions from a list of tag names.
     *
     * @remarks
     * The supplied names are sorted alphabetically and de-duplicated.
     *
     * @param tags - Tag names allowed by the role.
     * @param {string[]} tags
     */
    constructor(tags) {
        const ptr0 = passArrayJsValueToWasm0(tags, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.roletags_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        RoleTagsFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Sorted tag names allowed by the role.
     * @param {string[]} arg0
     */
    set tags(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_roletags_tags(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RoleTags.prototype[Symbol.dispose] = RoleTags.prototype.free;

/**
 * Event payload emitted when a role is updated.
 */
export class RoleUpdated {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(RoleUpdated.prototype);
        obj.__wbg_ptr = ptr;
        RoleUpdatedFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            permissions: this.permissions,
            roleTags: this.roleTags,
            role: this.role,
            timestamp: this.timestamp,
            trailId: this.trailId,
            updatedBy: this.updatedBy,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RoleUpdatedFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_roleupdated_free(ptr, 0);
    }
    /**
     * Updated permissions for the role.
     * @returns {PermissionSet}
     */
    get permissions() {
        const ret = wasm.__wbg_get_rolecreated_permissions(this.__wbg_ptr);
        return PermissionSet.__wrap(ret);
    }
    /**
     * Updated record-tag restrictions, if any.
     * @returns {RoleTags | undefined}
     */
    get roleTags() {
        const ret = wasm.__wbg_get_rolecreated_roleTags(this.__wbg_ptr);
        return ret === 0 ? undefined : RoleTags.__wrap(ret);
    }
    /**
     * Role name.
     * @returns {string}
     */
    get role() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_roleupdated_role(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Millisecond event timestamp.
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * Trail object ID that owns the role.
     * @returns {string}
     */
    get trailId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_roleupdated_trailId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Address that updated the role.
     * @returns {string}
     */
    get updatedBy() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_roleupdated_updatedBy(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Updated permissions for the role.
     * @param {PermissionSet} arg0
     */
    set permissions(arg0) {
        _assertClass(arg0, PermissionSet);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_rolecreated_permissions(this.__wbg_ptr, ptr0);
    }
    /**
     * Updated record-tag restrictions, if any.
     * @param {RoleTags | null} [arg0]
     */
    set roleTags(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, RoleTags);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_rolecreated_roleTags(this.__wbg_ptr, ptr0);
    }
    /**
     * Role name.
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_creator(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Millisecond event timestamp.
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * Trail object ID that owns the role.
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * Address that updated the role.
     * @param {string} arg0
     */
    set updatedBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_targetKey(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RoleUpdated.prototype[Symbol.dispose] = RoleUpdated.prototype.free;

/**
 * Time-based lock used in the trail's {@link LockingConfig}.
 *
 * @remarks
 * {@link TimeLock.withUntilDestroyed} is rejected by the audit-trail package when used as the
 * trail-delete lock; pass it only for the write lock.
 */
export class TimeLock {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(TimeLock.prototype);
        obj.__wbg_ptr = ptr;
        TimeLockFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            args: this.args,
            type: this.type,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TimeLockFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_timelock_free(ptr, 0);
    }
    /**
     * Returns the lock argument for parameterized variants.
     *
     * @returns The numeric argument for `UnlockAt`/`UnlockAtMs` variants, or `undefined`
     * otherwise.
     * @returns {any}
     */
    get args() {
        const ret = wasm.timelock_args(this.__wbg_ptr);
        return ret;
    }
    /**
     * Returns the lock variant.
     *
     * @returns The {@link TimeLockType} discriminant for this lock.
     * @returns {TimeLockType}
     */
    get type() {
        const ret = wasm.timelock_type(this.__wbg_ptr);
        return ret;
    }
    /**
     * Creates a lock that never unlocks.
     *
     * @returns A lock that is always active.
     * @returns {TimeLock}
     */
    static withInfinite() {
        const ret = wasm.timelock_withInfinite();
        return TimeLock.__wrap(ret);
    }
    /**
     * Creates a disabled lock.
     *
     * @returns A lock that does not gate the protected operation.
     * @returns {TimeLock}
     */
    static withNone() {
        const ret = wasm.timelock_withNone();
        return TimeLock.__wrap(ret);
    }
    /**
     * Creates a lock that unlocks at a Unix timestamp in seconds.
     *
     * @param timeSec - Unlock time in seconds since the Unix epoch.
     *
     * @returns A lock that unlocks once the on-chain clock reaches `timeSec`.
     * @param {number} time_sec
     * @returns {TimeLock}
     */
    static withUnlockAt(time_sec) {
        const ret = wasm.timelock_withUnlockAt(time_sec);
        return TimeLock.__wrap(ret);
    }
    /**
     * Creates a lock that unlocks at a Unix timestamp in milliseconds.
     *
     * @param timeMs - Unlock time in milliseconds since the Unix epoch.
     *
     * @returns A lock that unlocks once the on-chain clock reaches `timeMs`.
     * @param {bigint} time_ms
     * @returns {TimeLock}
     */
    static withUnlockAtMs(time_ms) {
        const ret = wasm.timelock_withUnlockAtMs(time_ms);
        return TimeLock.__wrap(ret);
    }
    /**
     * Creates a lock that stays active until the protected object is destroyed.
     *
     * @returns A lock that remains active until the protected object is destroyed.
     * @returns {TimeLock}
     */
    static withUntilDestroyed() {
        const ret = wasm.timelock_withUntilDestroyed();
        return TimeLock.__wrap(ret);
    }
}
if (Symbol.dispose) TimeLock.prototype[Symbol.dispose] = TimeLock.prototype.free;

/**
 * Discriminant for the shape stored inside {@link TimeLock}.
 * @enum {0 | 1 | 2 | 3 | 4}
 */
export const TimeLockType = Object.freeze({
    /**
     * The time lock is disabled.
     */
    None: 0, "0": "None",
    /**
     * The lock unlocks at a Unix timestamp in seconds.
     */
    UnlockAt: 1, "1": "UnlockAt",
    /**
     * The lock unlocks at a Unix timestamp in milliseconds.
     */
    UnlockAtMs: 2, "2": "UnlockAtMs",
    /**
     * The lock stays active until the protected object is explicitly destroyed.
     *
     * Not supported as the trail-delete lock.
     */
    UntilDestroyed: 3, "3": "UntilDestroyed",
    /**
     * The lock is always active.
     */
    Infinite: 4, "4": "Infinite",
});

/**
 * Access-control API scoped to a specific trail.
 *
 * @remarks
 * Exposes role-management and capability-management operations for one trail. Per-role operations
 * live on {@link RoleHandle}, which is reached through {@link TrailAccess.forRole}.
 */
export class TrailAccess {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(TrailAccess.prototype);
        obj.__wbg_ptr = ptr;
        TrailAccessFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TrailAccessFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_trailaccess_free(ptr, 0);
    }
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
     * @returns {TransactionBuilder<CleanupRevokedCapabilities>}
     */
    cleanupRevokedCapabilities() {
        const ret = wasm.trailaccess_cleanupRevokedCapabilities(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @param {string} capability_id
     * @returns {TransactionBuilder<DestroyCapability>}
     */
    destroyCapability(capability_id) {
        const ptr0 = passStringToWasm0(capability_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.trailaccess_destroyCapability(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @param {string} capability_id
     * @returns {TransactionBuilder<DestroyInitialAdminCapability>}
     */
    destroyInitialAdminCapability(capability_id) {
        const ptr0 = passStringToWasm0(capability_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.trailaccess_destroyInitialAdminCapability(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @param {string} name
     * @returns {RoleHandle}
     */
    forRole(name) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.trailaccess_forRole(this.__wbg_ptr, ptr0, len0);
        return RoleHandle.__wrap(ret);
    }
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
     * @param {string} capability_id
     * @param {bigint | null} [capability_valid_until]
     * @returns {TransactionBuilder<RevokeCapability>}
     */
    revokeCapability(capability_id, capability_valid_until) {
        const ptr0 = passStringToWasm0(capability_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.trailaccess_revokeCapability(this.__wbg_ptr, ptr0, len0, !isLikeNone(capability_valid_until), isLikeNone(capability_valid_until) ? BigInt(0) : capability_valid_until);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @param {string} capability_id
     * @param {bigint | null} [capability_valid_until]
     * @returns {TransactionBuilder<RevokeInitialAdminCapability>}
     */
    revokeInitialAdminCapability(capability_id, capability_valid_until) {
        const ptr0 = passStringToWasm0(capability_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.trailaccess_revokeInitialAdminCapability(this.__wbg_ptr, ptr0, len0, !isLikeNone(capability_valid_until), isLikeNone(capability_valid_until) ? BigInt(0) : capability_valid_until);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
}
if (Symbol.dispose) TrailAccess.prototype[Symbol.dispose] = TrailAccess.prototype.free;

/**
 * Locking API scoped to a specific trail.
 *
 * @remarks
 * Updates the trail's {@link LockingConfig} and queries whether an individual record is currently
 * locked against deletion.
 */
export class TrailLocking {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(TrailLocking.prototype);
        obj.__wbg_ptr = ptr;
        TrailLockingFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TrailLockingFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_traillocking_free(ptr, 0);
    }
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
     * @param {bigint} sequence_number
     * @returns {Promise<boolean>}
     */
    isRecordLocked(sequence_number) {
        const ret = wasm.traillocking_isRecordLocked(this.__wbg_ptr, sequence_number);
        return ret;
    }
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
     * @param {LockingConfig} config
     * @returns {TransactionBuilder<UpdateLockingConfig>}
     */
    update(config) {
        _assertClass(config, LockingConfig);
        var ptr0 = config.__destroy_into_raw();
        const ret = wasm.traillocking_update(this.__wbg_ptr, ptr0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @param {LockingWindow} window
     * @returns {TransactionBuilder<UpdateDeleteRecordWindow>}
     */
    updateDeleteRecordWindow(window) {
        _assertClass(window, LockingWindow);
        var ptr0 = window.__destroy_into_raw();
        const ret = wasm.traillocking_updateDeleteRecordWindow(this.__wbg_ptr, ptr0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @param {TimeLock} lock
     * @returns {TransactionBuilder<UpdateDeleteTrailLock>}
     */
    updateDeleteTrailLock(lock) {
        _assertClass(lock, TimeLock);
        var ptr0 = lock.__destroy_into_raw();
        const ret = wasm.traillocking_updateDeleteTrailLock(this.__wbg_ptr, ptr0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @param {TimeLock} lock
     * @returns {TransactionBuilder<UpdateWriteLock>}
     */
    updateWriteLock(lock) {
        _assertClass(lock, TimeLock);
        var ptr0 = lock.__destroy_into_raw();
        const ret = wasm.traillocking_updateWriteLock(this.__wbg_ptr, ptr0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
}
if (Symbol.dispose) TrailLocking.prototype[Symbol.dispose] = TrailLocking.prototype.free;

/**
 * Record API scoped to a specific trail.
 *
 * @remarks
 * Builds record-oriented transactions and loads record data from the trail's linked-table
 * storage.
 */
export class TrailRecords {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(TrailRecords.prototype);
        obj.__wbg_ptr = ptr;
        TrailRecordsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TrailRecordsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_trailrecords_free(ptr, 0);
    }
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
     * @param {Data} data
     * @param {string | null} [metadata]
     * @param {string | null} [tag]
     * @returns {TransactionBuilder<AddRecord>}
     */
    add(data, metadata, tag) {
        _assertClass(data, Data);
        var ptr0 = data.__destroy_into_raw();
        var ptr1 = isLikeNone(metadata) ? 0 : passStringToWasm0(metadata, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(tag) ? 0 : passStringToWasm0(tag, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        const ret = wasm.trailrecords_add(this.__wbg_ptr, ptr0, ptr1, len1, ptr2, len2);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @param {BigUint64Array} replaces
     * @param {Data} data
     * @param {string | null} [metadata]
     * @returns {Promise<Empty>}
     */
    correct(replaces, data, metadata) {
        const ptr0 = passArray64ToWasm0(replaces, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        _assertClass(data, Data);
        var ptr1 = data.__destroy_into_raw();
        var ptr2 = isLikeNone(metadata) ? 0 : passStringToWasm0(metadata, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        const ret = wasm.trailrecords_correct(this.__wbg_ptr, ptr0, len0, ptr1, ptr2, len2);
        return ret;
    }
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
     * @param {bigint} sequence_number
     * @returns {TransactionBuilder<DeleteRecord>}
     */
    delete(sequence_number) {
        const ret = wasm.trailrecords_delete(this.__wbg_ptr, sequence_number);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
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
     * @param {bigint} limit
     * @returns {TransactionBuilder<DeleteRecordsBatch>}
     */
    deleteBatch(limit) {
        const ret = wasm.trailrecords_deleteBatch(this.__wbg_ptr, limit);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
    /**
     * Loads one record by sequence number.
     *
     * @param sequenceNumber - Sequence number of the record to load.
     *
     * @returns The record stored at `sequenceNumber`.
     *
     * @throws When no record exists at the requested sequence number or the data cannot be
     * deserialized.
     * @param {bigint} sequence_number
     * @returns {Promise<Record>}
     */
    get(sequence_number) {
        const ret = wasm.trailrecords_get(this.__wbg_ptr, sequence_number);
        return ret;
    }
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
     * @returns {Promise<Record[]>}
     */
    list() {
        const ret = wasm.trailrecords_list(this.__wbg_ptr);
        return ret;
    }
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
     * @param {bigint | null | undefined} cursor
     * @param {number} limit
     * @returns {Promise<PaginatedRecord>}
     */
    listPage(cursor, limit) {
        const ret = wasm.trailrecords_listPage(this.__wbg_ptr, !isLikeNone(cursor), isLikeNone(cursor) ? BigInt(0) : cursor, limit);
        return ret;
    }
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
     * @param {number} max_entries
     * @returns {Promise<Record[]>}
     */
    listWithLimit(max_entries) {
        const ret = wasm.trailrecords_listWithLimit(this.__wbg_ptr, max_entries);
        return ret;
    }
    /**
     * Returns the number of records currently stored in the trail.
     *
     * @returns Current record count.
     *
     * @throws When the trail object cannot be fetched.
     * @returns {Promise<bigint>}
     */
    recordCount() {
        const ret = wasm.trailrecords_recordCount(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) TrailRecords.prototype[Symbol.dispose] = TrailRecords.prototype.free;

/**
 * Tag-registry API scoped to a specific trail.
 *
 * @remarks
 * The registry defines the canonical set of tags that record writes and {@link RoleTags}
 * restrictions may reference.
 */
export class TrailTags {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(TrailTags.prototype);
        obj.__wbg_ptr = ptr;
        TrailTagsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TrailTagsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_trailtags_free(ptr, 0);
    }
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
     * @param {string} tag
     * @returns {TransactionBuilder<AddRecordTag>}
     */
    add(tag) {
        const ptr0 = passStringToWasm0(tag, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.trailtags_add(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
    /**
     * Lists every tag in the trail's registry alongside its current usage count.
     *
     * @returns Tag entries sorted alphabetically by tag name.
     *
     * @throws When the trail object cannot be fetched.
     * @returns {Promise<RecordTagEntry[]>}
     */
    list() {
        const ret = wasm.trailtags_list(this.__wbg_ptr);
        return ret;
    }
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
     * @param {string} tag
     * @returns {TransactionBuilder<RemoveRecordTag>}
     */
    remove(tag) {
        const ptr0 = passStringToWasm0(tag, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.trailtags_remove(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
}
if (Symbol.dispose) TrailTags.prototype[Symbol.dispose] = TrailTags.prototype.free;

export class TransactionBuilder {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(TransactionBuilder.prototype);
        obj.__wbg_ptr = ptr;
        TransactionBuilderFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TransactionBuilderFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_transactionbuilder_free(ptr, 0);
    }
    /**
     * @param {CoreClient} client
     * @returns {[Uint8Array, string[], Transaction]}
     */
    build(client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.transactionbuilder_build(ptr, client);
        return ret;
    }
    /**
     * @param {CoreClient} client
     * @returns {TransactionOutput<unknown>}
     */
    buildAndExecute(client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.transactionbuilder_buildAndExecute(ptr, client);
        return ret;
    }
    /**
     * @param {CoreClientReadOnly} client
     * @returns {[Uint8Array, string[], Transaction]}
     */
    build_with_defaults(client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.transactionbuilder_build_with_defaults(ptr, client);
        return ret;
    }
    /**
     * Execute this transaction using an IOTA Gas Station.
     * @param {CoreClient} client
     * @param {string} gas_station_url
     * @param {HttpClient} http_client
     * @param {GasStationParams | null} [options]
     * @returns {Promise<TransactionOutput>}
     */
    executeWithGasStation(client, gas_station_url, http_client, options) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(gas_station_url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        let ptr1 = 0;
        if (!isLikeNone(options)) {
            _assertClass(options, GasStationParams);
            ptr1 = options.__destroy_into_raw();
        }
        const ret = wasm.transactionbuilder_executeWithGasStation(ptr, client, ptr0, len0, http_client, ptr1);
        return ret;
    }
    /**
     * @param {Transaction<unknown>} tx
     */
    constructor(tx) {
        const ret = wasm.transactionbuilder_new(tx);
        this.__wbg_ptr = ret >>> 0;
        TransactionBuilderFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {Transaction<unknown>}
     */
    get transaction() {
        const ret = wasm.transactionbuilder_transaction(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {bigint} budget
     * @returns {TransactionBuilder}
     */
    withGasBudget(budget) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.transactionbuilder_withGasBudget(ptr, budget);
        return TransactionBuilder.__wrap(ret);
    }
    /**
     * @param {string} owner
     * @returns {TransactionBuilder}
     */
    withGasOwner(owner) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(owner, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.transactionbuilder_withGasOwner(ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
    /**
     * @param {IotaObjectRef[]} payment
     * @returns {TransactionBuilder}
     */
    withGasPayment(payment) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passArrayJsValueToWasm0(payment, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.transactionbuilder_withGasPayment(ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
    /**
     * @param {bigint} price
     * @returns {TransactionBuilder}
     */
    withGasPrice(price) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.transactionbuilder_withGasPrice(ptr, price);
        return TransactionBuilder.__wrap(ret);
    }
    /**
     * @param {string} sender
     * @returns {TransactionBuilder}
     */
    withSender(sender) {
        const ptr = this.__destroy_into_raw();
        const ptr0 = passStringToWasm0(sender, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.transactionbuilder_withSender(ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return TransactionBuilder.__wrap(ret[0]);
    }
    /**
     * @param {CoreClient} client
     * @returns {Promise<TransactionBuilder>}
     */
    withSignature(client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.transactionbuilder_withSignature(ptr, client);
        return ret;
    }
    /**
     * @param {CoreClientReadOnly} client
     * @param {SponsorFn} sponsor_fn
     * @returns {Promise<TransactionBuilder>}
     */
    withSponsor(client, sponsor_fn) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.transactionbuilder_withSponsor(ptr, client, sponsor_fn);
        return ret;
    }
}
if (Symbol.dispose) TransactionBuilder.prototype[Symbol.dispose] = TransactionBuilder.prototype.free;

export class TransactionOutput {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(TransactionOutput.prototype);
        obj.__wbg_ptr = ptr;
        TransactionOutputFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
            output: this.output,
            response: this.response,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TransactionOutputFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_transactionoutput_free(ptr, 0);
    }
    /**
     * @returns {any}
     */
    get output() {
        const ret = wasm.__wbg_get_transactionoutput_output(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {IotaTransactionBlockResponse}
     */
    get response() {
        const ret = wasm.__wbg_get_transactionoutput_response(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {any} arg0
     */
    set output(arg0) {
        wasm.__wbg_set_transactionoutput_output(this.__wbg_ptr, arg0);
    }
    /**
     * @param {IotaTransactionBlockResponse} arg0
     */
    set response(arg0) {
        wasm.__wbg_set_transactionoutput_response(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) TransactionOutput.prototype[Symbol.dispose] = TransactionOutput.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(UpdateDeleteRecordWindow.prototype);
        obj.__wbg_ptr = ptr;
        UpdateDeleteRecordWindowFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        UpdateDeleteRecordWindowFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_updatedeleterecordwindow_free(ptr, 0);
    }
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Empty>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.updatedeleterecordwindow_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updatedeleterecordwindow_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateDeleteRecordWindow.prototype[Symbol.dispose] = UpdateDeleteRecordWindow.prototype.free;

/**
 * Transaction wrapper for updating the delete-trail lock.
 *
 * @remarks
 * The new lock must not be {@link TimeLock.withUntilDestroyed}.
 *
 * Requires the {@link Permission.UpdateLockingConfigForDeleteTrail} permission.
 */
export class UpdateDeleteTrailLock {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(UpdateDeleteTrailLock.prototype);
        obj.__wbg_ptr = ptr;
        UpdateDeleteTrailLockFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        UpdateDeleteTrailLockFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_updatedeletetraillock_free(ptr, 0);
    }
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Empty>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.updatedeletetraillock_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updatedeletetraillock_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateDeleteTrailLock.prototype[Symbol.dispose] = UpdateDeleteTrailLock.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(UpdateLockingConfig.prototype);
        obj.__wbg_ptr = ptr;
        UpdateLockingConfigFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        UpdateLockingConfigFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_updatelockingconfig_free(ptr, 0);
    }
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Empty>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.updatelockingconfig_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updatelockingconfig_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateLockingConfig.prototype[Symbol.dispose] = UpdateLockingConfig.prototype.free;

/**
 * Transaction wrapper for mutable-metadata updates.
 *
 * @remarks
 * Passing `null`/`undefined` for the new metadata clears the `updatableMetadata` field on-chain.
 *
 * Requires the {@link Permission.UpdateMetadata} permission.
 */
export class UpdateMetadata {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(UpdateMetadata.prototype);
        obj.__wbg_ptr = ptr;
        UpdateMetadataFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        UpdateMetadataFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_updatemetadata_free(ptr, 0);
    }
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Empty>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.updatemetadata_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updatemetadata_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateMetadata.prototype[Symbol.dispose] = UpdateMetadata.prototype.free;

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
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(UpdateRole.prototype);
        obj.__wbg_ptr = ptr;
        UpdateRoleFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        UpdateRoleFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_updaterole_free(ptr, 0);
    }
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<RoleUpdated>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.updaterole_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updaterole_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateRole.prototype[Symbol.dispose] = UpdateRole.prototype.free;

/**
 * Transaction wrapper for updating the write lock.
 *
 * @remarks
 * While the new lock is active, {@link TrailRecords.add} aborts on-chain.
 *
 * Requires the {@link Permission.UpdateLockingConfigForWrite} permission.
 */
export class UpdateWriteLock {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(UpdateWriteLock.prototype);
        obj.__wbg_ptr = ptr;
        UpdateWriteLockFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        UpdateWriteLockFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_updatewritelock_free(ptr, 0);
    }
    /**
     * Applies transaction effects and events.
     *
     * @param wasmEffects - Effects of the executed transaction.
     * @param wasmEvents - Events emitted by the executed transaction.
     * @param client - Read-only core client used during application.
     *
     * @throws When transaction application fails.
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Empty>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.updatewritelock_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * Builds the programmable transaction bytes for submission.
     *
     * @param client - Read-only core client used to resolve packages and serialize the
     * transaction.
     *
     * @returns BCS-encoded programmable transaction bytes ready for signing and submission.
     *
     * @throws When transaction serialization fails.
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updatewritelock_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateWriteLock.prototype[Symbol.dispose] = UpdateWriteLock.prototype.free;

export class WasmManagedCoreClient {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WasmManagedCoreClientFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmmanagedcoreclient_free(ptr, 0);
    }
    /**
     * @returns {IotaClient}
     */
    iotaClient() {
        const ret = wasm.wasmmanagedcoreclient_iotaClient(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {string}
     */
    network() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmmanagedcoreclient_network(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string[]}
     */
    packageHistory() {
        const ret = wasm.wasmmanagedcoreclient_packageHistory(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {string}
     */
    packageId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmmanagedcoreclient_packageId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    senderAddress() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmmanagedcoreclient_senderAddress(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {PublicKey}
     */
    senderPublicKey() {
        const ret = wasm.wasmmanagedcoreclient_senderPublicKey(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * @returns {TransactionSigner}
     */
    signer() {
        const ret = wasm.wasmmanagedcoreclient_signer(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {string | undefined}
     */
    tfComponentsPackageId() {
        const ret = wasm.wasmmanagedcoreclient_tfComponentsPackageId(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
}
if (Symbol.dispose) WasmManagedCoreClient.prototype[Symbol.dispose] = WasmManagedCoreClient.prototype.free;

export class WasmManagedCoreClientReadOnly {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(WasmManagedCoreClientReadOnly.prototype);
        obj.__wbg_ptr = ptr;
        WasmManagedCoreClientReadOnlyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WasmManagedCoreClientReadOnlyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmmanagedcoreclientreadonly_free(ptr, 0);
    }
    /**
     * @returns {IotaClient}
     */
    iotaClient() {
        const ret = wasm.wasmmanagedcoreclientreadonly_iotaClient(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {string}
     */
    network() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmmanagedcoreclientreadonly_network(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string[]}
     */
    packageHistory() {
        const ret = wasm.wasmmanagedcoreclientreadonly_packageHistory(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {string}
     */
    packageId() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmmanagedcoreclientreadonly_packageId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string | undefined}
     */
    tfComponentsPackageId() {
        const ret = wasm.wasmmanagedcoreclientreadonly_tfComponentsPackageId(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
}
if (Symbol.dispose) WasmManagedCoreClientReadOnly.prototype[Symbol.dispose] = WasmManagedCoreClientReadOnly.prototype.free;

/**
 * Installs the panic hook used by the wasm bindings.
 */
export function start() {
    wasm.start();
}

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_8c4e43fe74559d73: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_Number_04624de7d0e8332d: function(arg0) {
            const ret = Number(arg0);
            return ret;
        },
        __wbg_String_8f0eb39a4a4c2f66: function(arg0, arg1) {
            const ret = String(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_bigint_get_as_i64_8fcf4ce7f1ca72a2: function(arg0, arg1) {
            const v = arg1;
            const ret = typeof(v) === 'bigint' ? v : undefined;
            getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25: function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? v : undefined;
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_debug_string_0bc8482c6e3508ae: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_in_47fa6863be6f2f25: function(arg0, arg1) {
            const ret = arg0 in arg1;
            return ret;
        },
        __wbg___wbindgen_is_bigint_31b12575b56f32fc: function(arg0) {
            const ret = typeof(arg0) === 'bigint';
            return ret;
        },
        __wbg___wbindgen_is_function_0095a73b8b156f76: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_object_5ae8e5880f2c1fbd: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_string_cd444516edc5b180: function(arg0) {
            const ret = typeof(arg0) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_9e4d92534c42d778: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_jsval_eq_11888390b0186270: function(arg0, arg1) {
            const ret = arg0 === arg1;
            return ret;
        },
        __wbg___wbindgen_jsval_loose_eq_9dd77d8cd6671811: function(arg0, arg1) {
            const ret = arg0 == arg1;
            return ret;
        },
        __wbg___wbindgen_number_get_8ff4255516ccad3e: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'number' ? obj : undefined;
            getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_string_get_72fb696202c56729: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_be289d5034ed271b: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg___wbindgen_try_into_number_07cd61098e837866: function(arg0) {
            let result;
            try { result = +arg0 } catch (e) { result = e }
            const ret = result;
            return ret;
        },
        __wbg__wbg_cb_unref_d9b87ff7982e3b21: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_abort_2f0584e03e8e3950: function(arg0) {
            arg0.abort();
        },
        __wbg_abort_d549b92d3c665de1: function(arg0, arg1) {
            arg0.abort(arg1);
        },
        __wbg_addrecord_new: function(arg0) {
            const ret = AddRecord.__wrap(arg0);
            return ret;
        },
        __wbg_addrecordtag_new: function(arg0) {
            const ret = AddRecordTag.__wrap(arg0);
            return ret;
        },
        __wbg_append_a992ccc37aa62dc4: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_applyWithEvents_db3fab2faf607521: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.applyWithEvents(arg1, arg2, arg3);
            return ret;
        }, arguments); },
        __wbg_apply_ec64922ba7a410f2: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.apply(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_arrayBuffer_bb54076166006c39: function() { return handleError(function (arg0) {
            const ret = arg0.arrayBuffer();
            return ret;
        }, arguments); },
        __wbg_assign_6170c0d04d5c26f4: function(arg0, arg1) {
            const ret = Object.assign(arg0, arg1);
            return ret;
        },
        __wbg_audittrailclient_new: function(arg0) {
            const ret = AuditTrailClient.__wrap(arg0);
            return ret;
        },
        __wbg_audittrailclientreadonly_new: function(arg0) {
            const ret = AuditTrailClientReadOnly.__wrap(arg0);
            return ret;
        },
        __wbg_audittraildeleted_new: function(arg0) {
            const ret = AuditTrailDeleted.__wrap(arg0);
            return ret;
        },
        __wbg_buildProgrammableTransaction_7d04ad3675267caa: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.buildProgrammableTransaction(arg1);
            return ret;
        }, arguments); },
        __wbg_build_5dba5df94cae1cdc: function() { return handleError(function (arg0) {
            const ret = arg0.build();
            return ret;
        }, arguments); },
        __wbg_call_389efe28435a9388: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.call(arg1);
            return ret;
        }, arguments); },
        __wbg_call_4708e0c13bdc8e95: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_capabilitydestroyed_new: function(arg0) {
            const ret = CapabilityDestroyed.__wrap(arg0);
            return ret;
        },
        __wbg_capabilityissued_new: function(arg0) {
            const ret = CapabilityIssued.__wrap(arg0);
            return ret;
        },
        __wbg_capabilityrevoked_new: function(arg0) {
            const ret = CapabilityRevoked.__wrap(arg0);
            return ret;
        },
        __wbg_cleanuprevokedcapabilities_new: function(arg0) {
            const ret = CleanupRevokedCapabilities.__wrap(arg0);
            return ret;
        },
        __wbg_clearTimeout_26e350acd8252ec6: function(arg0) {
            const ret = clearTimeout(arg0);
            return ret;
        },
        __wbg_createrole_new: function(arg0) {
            const ret = CreateRole.__wrap(arg0);
            return ret;
        },
        __wbg_createtrail_new: function(arg0) {
            const ret = CreateTrail.__wrap(arg0);
            return ret;
        },
        __wbg_deleteaudittrail_new: function(arg0) {
            const ret = DeleteAuditTrail.__wrap(arg0);
            return ret;
        },
        __wbg_deleterecord_new: function(arg0) {
            const ret = DeleteRecord.__wrap(arg0);
            return ret;
        },
        __wbg_deleterecordsbatch_new: function(arg0) {
            const ret = DeleteRecordsBatch.__wrap(arg0);
            return ret;
        },
        __wbg_deleterole_new: function(arg0) {
            const ret = DeleteRole.__wrap(arg0);
            return ret;
        },
        __wbg_destroycapability_new: function(arg0) {
            const ret = DestroyCapability.__wrap(arg0);
            return ret;
        },
        __wbg_destroyinitialadmincapability_new: function(arg0) {
            const ret = DestroyInitialAdminCapability.__wrap(arg0);
            return ret;
        },
        __wbg_devInspectTransactionBlock_dbe778b28387b0ef: function(arg0, arg1) {
            const ret = arg0.devInspectTransactionBlock(arg1);
            return ret;
        },
        __wbg_digest_7f85dc89b92836cc: function(arg0, arg1) {
            const ret = arg1.digest;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_done_57b39ecd9addfe81: function(arg0) {
            const ret = arg0.done;
            return ret;
        },
        __wbg_empty_new: function(arg0) {
            const ret = Empty.__wrap(arg0);
            return ret;
        },
        __wbg_entries_04679661ea6e74fc: function(arg0) {
            const ret = arg0.entries();
            return ret;
        },
        __wbg_entries_58c7934c745daac7: function(arg0) {
            const ret = Object.entries(arg0);
            return ret;
        },
        __wbg_error_7534b8e9a36f1ab4: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_executeTransactionBlock_1ea5643da94aa162: function(arg0, arg1) {
            const ret = arg0.executeTransactionBlock(arg1);
            return ret;
        },
        __wbg_fetch_995a2faca6a97afe: function(arg0) {
            const ret = fetch(arg0);
            return ret;
        },
        __wbg_fetch_afb6a4b6cacf876d: function(arg0, arg1) {
            const ret = arg0.fetch(arg1);
            return ret;
        },
        __wbg_fromBytes_51fce44ca5e07718: function() { return handleError(function (arg0) {
            const ret = TransactionDataBuilder.fromBytes(arg0);
            return ret;
        }, arguments); },
        __wbg_gasstationparams_new: function(arg0) {
            const ret = GasStationParams.__wrap(arg0);
            return ret;
        },
        __wbg_getChainIdentifier_ad5a4f8ce2464b26: function(arg0) {
            const ret = arg0.getChainIdentifier();
            return ret;
        },
        __wbg_getCoins_23666fdb35e527c7: function(arg0, arg1) {
            const ret = arg0.getCoins(arg1);
            return ret;
        },
        __wbg_getDynamicFieldObjectV2_227432b95db96cde: function(arg0, arg1) {
            const ret = arg0.getDynamicFieldObjectV2(arg1);
            return ret;
        },
        __wbg_getDynamicFieldObject_1a055aeda68455f4: function(arg0, arg1) {
            const ret = arg0.getDynamicFieldObject(arg1);
            return ret;
        },
        __wbg_getObject_368bbae913cfd6ed: function(arg0, arg1) {
            const ret = arg0.getObject(arg1);
            return ret;
        },
        __wbg_getOwnedObjects_47c5b4eef5e1a6f4: function(arg0, arg1) {
            const ret = arg0.getOwnedObjects(arg1);
            return ret;
        },
        __wbg_getReferenceGasPrice_b3066b10e8bf827d: function(arg0) {
            const ret = arg0.getReferenceGasPrice();
            return ret;
        },
        __wbg_getTransactionBlock_4746277ec008b303: function(arg0, arg1) {
            const ret = arg0.getTransactionBlock(arg1);
            return ret;
        },
        __wbg_get_9b94d73e6221f75c: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_b3ed3ad4be2bc8ac: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_get_digest_bc5c4e90875195b1: function(arg0, arg1) {
            const ret = arg1.get_digest();
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_get_effects_973be000113df2f4: function(arg0) {
            const ret = arg0.get_effects();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_get_events_b308b7cb94770c11: function(arg0) {
            const ret = arg0.get_events();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_get_response_a72b90f85718f441: function(arg0) {
            const ret = arg0.get_response();
            return ret;
        },
        __wbg_get_with_ref_key_1dc361bd10053bfe: function(arg0, arg1) {
            const ret = arg0[arg1];
            return ret;
        },
        __wbg_has_d4e53238966c12b6: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.has(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_headers_59a2938db9f80985: function(arg0) {
            const ret = arg0.headers;
            return ret;
        },
        __wbg_instanceof_ArrayBuffer_c367199e2fa2aa04: function(arg0) {
            let result;
            try {
                result = arg0 instanceof ArrayBuffer;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Error_8573fe0b0b480f46: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Error;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Map_53af74335dec57f4: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Map;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Promise_0094681e3519d6ec: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Promise;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Response_ee1d54d79ae41977: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Response;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Uint8Array_9b9075935c74707c: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Uint8Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_iotaClient_24ddb3f83dea4291: function(arg0) {
            const ret = arg0.iotaClient();
            return ret;
        },
        __wbg_iotaPublicKeyBytes_7cec9ecfd368b7a4: function() { return handleError(function (arg0) {
            const ret = arg0.iotaPublicKeyBytes();
            return ret;
        }, arguments); },
        __wbg_isArray_d314bb98fcf08331: function(arg0) {
            const ret = Array.isArray(arg0);
            return ret;
        },
        __wbg_isSafeInteger_bfbc7332a9768d2a: function(arg0) {
            const ret = Number.isSafeInteger(arg0);
            return ret;
        },
        __wbg_issuecapability_new: function(arg0) {
            const ret = IssueCapability.__wrap(arg0);
            return ret;
        },
        __wbg_iterator_6ff6560ca1568e55: function() {
            const ret = Symbol.iterator;
            return ret;
        },
        __wbg_length_32ed9a279acd054c: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_35a7bace40f36eac: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_log_5d7b743e666d40ec: function(arg0, arg1) {
            console.log(getStringFromWasm0(arg0, arg1));
        },
        __wbg_message_9ddc4b9a62a7c379: function(arg0) {
            const ret = arg0.message;
            return ret;
        },
        __wbg_migrate_new: function(arg0) {
            const ret = Migrate.__wrap(arg0);
            return ret;
        },
        __wbg_network_d139b7a0473fb8b3: function(arg0, arg1) {
            const ret = arg1.network();
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_new_361308b2356cecd0: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_3eb36ae241fe6f44: function() {
            const ret = new Array();
            return ret;
        },
        __wbg_new_64284bd487f9d239: function() { return handleError(function () {
            const ret = new Headers();
            return ret;
        }, arguments); },
        __wbg_new_72b49615380db768: function(arg0, arg1) {
            const ret = new Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_8a6f238a6ece86ea: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_new_b5d9e2fb389fef91: function(arg0, arg1) {
            try {
                var state0 = {a: arg0, b: arg1};
                var cb0 = (arg0, arg1) => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return wasm_bindgen__convert__closures_____invoke__ha81af4b9cdb0031f(a, state0.b, arg0, arg1);
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = new Promise(cb0);
                return ret;
            } finally {
                state0.a = state0.b = 0;
            }
        },
        __wbg_new_b949e7f56150a5d1: function() { return handleError(function () {
            const ret = new AbortController();
            return ret;
        }, arguments); },
        __wbg_new_dca287b076112a51: function() {
            const ret = new Map();
            return ret;
        },
        __wbg_new_dd2b680c8bf6ae29: function(arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        },
        __wbg_new_eaf1720e8edc04b9: function(arg0) {
            const ret = new WasmIotaTransactionBlockResponseWrapper(arg0);
            return ret;
        },
        __wbg_new_ed25519_pk_base64_7486bde54235ce90: function() { return handleError(function (arg0, arg1) {
            const ret = new Ed25519PublicKey(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_new_from_slice_a3d2629dc1826784: function(arg0, arg1) {
            const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_no_args_1c7c842f08d00ebb: function(arg0, arg1) {
            const ret = new Function(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_secp256k1_pk_base64_aa1335dc4e1585b1: function() { return handleError(function (arg0, arg1) {
            const ret = new Secp256k1PublicKey(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_new_secp256r1_pk_base64_1535954d34de2151: function() { return handleError(function (arg0, arg1) {
            const ret = new Secp256r1PublicKey(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_new_with_str_and_init_a61cbc6bdef21614: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = new Request(getStringFromWasm0(arg0, arg1), arg2);
            return ret;
        }, arguments); },
        __wbg_next_3482f54c49e8af19: function() { return handleError(function (arg0) {
            const ret = arg0.next();
            return ret;
        }, arguments); },
        __wbg_next_418f80d8f5303233: function(arg0) {
            const ret = arg0.next;
            return ret;
        },
        __wbg_now_a3af9a2f4bbaa4d1: function() {
            const ret = Date.now();
            return ret;
        },
        __wbg_objectId_03aa49d2713a929a: function(arg0, arg1) {
            const ret = arg1.objectId;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_onchainaudittrail_new: function(arg0) {
            const ret = OnChainAuditTrail.__wrap(arg0);
            return ret;
        },
        __wbg_packageHistory_4a90483ab2cad04f: function(arg0, arg1) {
            const ret = arg1.packageHistory();
            const ptr1 = passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_paginatedrecord_new: function(arg0) {
            const ret = PaginatedRecord.__wrap(arg0);
            return ret;
        },
        __wbg_prototypesetcall_bdcdcc5842e4d77d: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_push_8ffdcb2063340ba5: function(arg0, arg1) {
            const ret = arg0.push(arg1);
            return ret;
        },
        __wbg_queueMicrotask_0aa0a927f78f5d98: function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        },
        __wbg_queueMicrotask_5bb536982f78a56f: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_record_new: function(arg0) {
            const ret = Record.__wrap(arg0);
            return ret;
        },
        __wbg_record_unwrap: function(arg0) {
            const ret = Record.__unwrap(arg0);
            return ret;
        },
        __wbg_recordadded_new: function(arg0) {
            const ret = RecordAdded.__wrap(arg0);
            return ret;
        },
        __wbg_recorddeleted_new: function(arg0) {
            const ret = RecordDeleted.__wrap(arg0);
            return ret;
        },
        __wbg_recordtagentry_new: function(arg0) {
            const ret = RecordTagEntry.__wrap(arg0);
            return ret;
        },
        __wbg_removerecordtag_new: function(arg0) {
            const ret = RemoveRecordTag.__wrap(arg0);
            return ret;
        },
        __wbg_resolve_002c4b7d9d8f6b64: function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        },
        __wbg_revokecapability_new: function(arg0) {
            const ret = RevokeCapability.__wrap(arg0);
            return ret;
        },
        __wbg_revokedcapabilitiescleanedup_new: function(arg0) {
            const ret = RevokedCapabilitiesCleanedUp.__wrap(arg0);
            return ret;
        },
        __wbg_revokeinitialadmincapability_new: function(arg0) {
            const ret = RevokeInitialAdminCapability.__wrap(arg0);
            return ret;
        },
        __wbg_rolecreated_new: function(arg0) {
            const ret = RoleCreated.__wrap(arg0);
            return ret;
        },
        __wbg_roledeleted_new: function(arg0) {
            const ret = RoleDeleted.__wrap(arg0);
            return ret;
        },
        __wbg_rolepermissionsentry_new: function(arg0) {
            const ret = RolePermissionsEntry.__wrap(arg0);
            return ret;
        },
        __wbg_rolepermissionsentry_unwrap: function(arg0) {
            const ret = RolePermissionsEntry.__unwrap(arg0);
            return ret;
        },
        __wbg_roleupdated_new: function(arg0) {
            const ret = RoleUpdated.__wrap(arg0);
            return ret;
        },
        __wbg_send_36d49e9cd9125289: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.send(arg1);
            return ret;
        }, arguments); },
        __wbg_senderAddress_80d51de0320d1203: function(arg0, arg1) {
            const ret = arg1.senderAddress();
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_senderPublicKey_d3c6a3cdf00e008b: function(arg0) {
            const ret = arg0.senderPublicKey();
            return ret;
        },
        __wbg_setTimeout_4360465139fa5dfe: function(arg0, arg1) {
            const ret = setTimeout(arg0, arg1);
            return ret;
        },
        __wbg_set_1eb0999cf5d27fc8: function(arg0, arg1, arg2) {
            const ret = arg0.set(arg1, arg2);
            return ret;
        },
        __wbg_set_3f1d0b984ed272ed: function(arg0, arg1, arg2) {
            arg0[arg1] = arg2;
        },
        __wbg_set_body_9a7e00afe3cfe244: function(arg0, arg1) {
            arg0.body = arg1;
        },
        __wbg_set_cache_315a3ed773a41543: function(arg0, arg1) {
            arg0.cache = __wbindgen_enum_RequestCache[arg1];
        },
        __wbg_set_credentials_c4a58d2e05ef24fb: function(arg0, arg1) {
            arg0.credentials = __wbindgen_enum_RequestCredentials[arg1];
        },
        __wbg_set_f43e577aea94465b: function(arg0, arg1, arg2) {
            arg0[arg1 >>> 0] = arg2;
        },
        __wbg_set_headers_cfc5f4b2c1f20549: function(arg0, arg1) {
            arg0.headers = arg1;
        },
        __wbg_set_method_c3e20375f5ae7fac: function(arg0, arg1, arg2) {
            arg0.method = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_mode_b13642c312648202: function(arg0, arg1) {
            arg0.mode = __wbindgen_enum_RequestMode[arg1];
        },
        __wbg_set_name_2aca19de8d382675: function(arg0, arg1, arg2) {
            arg0.name = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_signal_f2d3f8599248896d: function(arg0, arg1) {
            arg0.signal = arg1;
        },
        __wbg_sign_12917c68afef32dd: function() { return handleError(function (arg0, arg1, arg2) {
            var v0 = getArrayU8FromWasm0(arg1, arg2).slice();
            wasm.__wbindgen_free(arg1, arg2 * 1, 1);
            const ret = arg0.sign(v0);
            return ret;
        }, arguments); },
        __wbg_signal_d1285ecab4ebc5ad: function(arg0) {
            const ret = arg0.signal;
            return ret;
        },
        __wbg_signer_adb29f2463937462: function(arg0) {
            const ret = arg0.signer();
            return ret;
        },
        __wbg_stack_0ed75d68575b0f3c: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_static_accessor_GLOBAL_12837167ad935116: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_a621d3dfbb60d0ce: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_status_89d7e803db911ee7: function(arg0) {
            const ret = arg0.status;
            return ret;
        },
        __wbg_stringify_e4a940b133e6b7d8: function(arg0, arg1) {
            const ret = JSON.stringify(arg1);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_tfComponentsPackageId_c1fe4f98c2f72a7a: function(arg0, arg1) {
            const ret = arg1.tfComponentsPackageId();
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_then_0d9fe2c7b1857d32: function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        },
        __wbg_then_b9e7b3b5f1a9e1b5: function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        },
        __wbg_toIotaPublicKey_5c6209f1dc2bb09f: function(arg0, arg1) {
            const ret = arg1.toIotaPublicKey();
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_toString_029ac24421fd7a24: function(arg0) {
            const ret = arg0.toString();
            return ret;
        },
        __wbg_to_string_ca025be11ced4aec: function(arg0, arg1) {
            const ret = arg1.to_string();
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_transactionbuilder_new: function(arg0) {
            const ret = TransactionBuilder.__wrap(arg0);
            return ret;
        },
        __wbg_transactionoutput_new: function(arg0) {
            const ret = TransactionOutput.__wrap(arg0);
            return ret;
        },
        __wbg_updatedeleterecordwindow_new: function(arg0) {
            const ret = UpdateDeleteRecordWindow.__wrap(arg0);
            return ret;
        },
        __wbg_updatedeletetraillock_new: function(arg0) {
            const ret = UpdateDeleteTrailLock.__wrap(arg0);
            return ret;
        },
        __wbg_updatelockingconfig_new: function(arg0) {
            const ret = UpdateLockingConfig.__wrap(arg0);
            return ret;
        },
        __wbg_updatemetadata_new: function(arg0) {
            const ret = UpdateMetadata.__wrap(arg0);
            return ret;
        },
        __wbg_updaterole_new: function(arg0) {
            const ret = UpdateRole.__wrap(arg0);
            return ret;
        },
        __wbg_updatewritelock_new: function(arg0) {
            const ret = UpdateWriteLock.__wrap(arg0);
            return ret;
        },
        __wbg_url_c484c26b1fbf5126: function(arg0, arg1) {
            const ret = arg1.url;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_value_0546255b415e96c1: function(arg0) {
            const ret = arg0.value;
            return ret;
        },
        __wbg_version_41a27f9dbe949285: function(arg0, arg1) {
            const ret = arg1.version;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_waitForTransaction_2e0da294a2739905: function(arg0, arg1) {
            const ret = arg0.waitForTransaction(arg1);
            return ret;
        },
        __wbg_wasmmanagedcoreclientreadonly_new: function(arg0) {
            const ret = WasmManagedCoreClientReadOnly.__wrap(arg0);
            return ret;
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 1465, function: Function { arguments: [Externref], shim_idx: 1466, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h5881a399a337e4a2, wasm_bindgen__convert__closures_____invoke__ha54189d283321948);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 934, function: Function { arguments: [], shim_idx: 935, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h6ea63990b8676bb9, wasm_bindgen__convert__closures_____invoke__h69881d0468c0e87e);
            return ret;
        },
        __wbindgen_cast_0000000000000003: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000004: function(arg0) {
            // Cast intrinsic for `I64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000005: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000006: function(arg0) {
            // Cast intrinsic for `U64 -> Externref`.
            const ret = BigInt.asUintN(64, arg0);
            return ret;
        },
        __wbindgen_cast_0000000000000007: function(arg0, arg1) {
            var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
            wasm.__wbindgen_free(arg0, arg1 * 4, 4);
            // Cast intrinsic for `Vector(NamedExternref("Record")) -> Externref`.
            const ret = v0;
            return ret;
        },
        __wbindgen_cast_0000000000000008: function(arg0, arg1) {
            var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
            wasm.__wbindgen_free(arg0, arg1 * 4, 4);
            // Cast intrinsic for `Vector(NamedExternref("RecordTagEntry")) -> Externref`.
            const ret = v0;
            return ret;
        },
        __wbindgen_cast_0000000000000009: function(arg0, arg1) {
            var v0 = getArrayU64FromWasm0(arg0, arg1).slice();
            wasm.__wbindgen_free(arg0, arg1 * 8, 8);
            // Cast intrinsic for `Vector(U64) -> Externref`.
            const ret = v0;
            return ret;
        },
        __wbindgen_cast_000000000000000a: function(arg0, arg1) {
            var v0 = getArrayU8FromWasm0(arg0, arg1).slice();
            wasm.__wbindgen_free(arg0, arg1 * 1, 1);
            // Cast intrinsic for `Vector(U8) -> Externref`.
            const ret = v0;
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./audit_trail_wasm_bg.js": import0,
    };
}

function wasm_bindgen__convert__closures_____invoke__h69881d0468c0e87e(arg0, arg1) {
    wasm.wasm_bindgen__convert__closures_____invoke__h69881d0468c0e87e(arg0, arg1);
}

function wasm_bindgen__convert__closures_____invoke__ha54189d283321948(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__ha54189d283321948(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__ha81af4b9cdb0031f(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures_____invoke__ha81af4b9cdb0031f(arg0, arg1, arg2, arg3);
}


const __wbindgen_enum_RequestCache = ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"];


const __wbindgen_enum_RequestCredentials = ["omit", "same-origin", "include"];


const __wbindgen_enum_RequestMode = ["same-origin", "no-cors", "cors", "navigate"];
const AddRecordFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_addrecord_free(ptr >>> 0, 1));
const AddRecordTagFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_addrecordtag_free(ptr >>> 0, 1));
const AuditTrailBuilderFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_audittrailbuilder_free(ptr >>> 0, 1));
const AuditTrailClientFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_audittrailclient_free(ptr >>> 0, 1));
const AuditTrailClientReadOnlyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_audittrailclientreadonly_free(ptr >>> 0, 1));
const AuditTrailCreatedFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_audittrailcreated_free(ptr >>> 0, 1));
const AuditTrailDeletedFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_audittraildeleted_free(ptr >>> 0, 1));
const AuditTrailHandleFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_audittrailhandle_free(ptr >>> 0, 1));
const CapabilityFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_capability_free(ptr >>> 0, 1));
const CapabilityAdminPermissionsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_capabilityadminpermissions_free(ptr >>> 0, 1));
const CapabilityDestroyedFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_capabilitydestroyed_free(ptr >>> 0, 1));
const CapabilityIssueOptionsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_capabilityissueoptions_free(ptr >>> 0, 1));
const CapabilityIssuedFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_capabilityissued_free(ptr >>> 0, 1));
const CapabilityRevokedFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_capabilityrevoked_free(ptr >>> 0, 1));
const CleanupRevokedCapabilitiesFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_cleanuprevokedcapabilities_free(ptr >>> 0, 1));
const CreateRoleFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_createrole_free(ptr >>> 0, 1));
const CreateTrailFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_createtrail_free(ptr >>> 0, 1));
const DataFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_data_free(ptr >>> 0, 1));
const DefaultHttpClientFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_defaulthttpclient_free(ptr >>> 0, 1));
const DeleteAuditTrailFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_deleteaudittrail_free(ptr >>> 0, 1));
const DeleteRecordFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_deleterecord_free(ptr >>> 0, 1));
const DeleteRecordsBatchFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_deleterecordsbatch_free(ptr >>> 0, 1));
const DeleteRoleFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_deleterole_free(ptr >>> 0, 1));
const DestroyCapabilityFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_destroycapability_free(ptr >>> 0, 1));
const DestroyInitialAdminCapabilityFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_destroyinitialadmincapability_free(ptr >>> 0, 1));
const EmptyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_empty_free(ptr >>> 0, 1));
const GasStationParamsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_gasstationparams_free(ptr >>> 0, 1));
const ImmutableMetadataFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_immutablemetadata_free(ptr >>> 0, 1));
const IssueCapabilityFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_issuecapability_free(ptr >>> 0, 1));
const LinkedTableFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_linkedtable_free(ptr >>> 0, 1));
const LockingConfigFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_lockingconfig_free(ptr >>> 0, 1));
const LockingWindowFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_lockingwindow_free(ptr >>> 0, 1));
const MigrateFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_migrate_free(ptr >>> 0, 1));
const ObjectIdLinkedTableFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_objectidlinkedtable_free(ptr >>> 0, 1));
const OnChainAuditTrailFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_onchainaudittrail_free(ptr >>> 0, 1));
const PackageOverridesFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_packageoverrides_free(ptr >>> 0, 1));
const PaginatedRecordFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_paginatedrecord_free(ptr >>> 0, 1));
const PermissionSetFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_permissionset_free(ptr >>> 0, 1));
const RecordFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_record_free(ptr >>> 0, 1));
const RecordAddedFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_recordadded_free(ptr >>> 0, 1));
const RecordCorrectionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_recordcorrection_free(ptr >>> 0, 1));
const RecordDeletedFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_recorddeleted_free(ptr >>> 0, 1));
const RecordTagEntryFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_recordtagentry_free(ptr >>> 0, 1));
const RemoveRecordTagFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_removerecordtag_free(ptr >>> 0, 1));
const RevokeCapabilityFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_revokecapability_free(ptr >>> 0, 1));
const RevokeInitialAdminCapabilityFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_revokeinitialadmincapability_free(ptr >>> 0, 1));
const RevokedCapabilitiesCleanedUpFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_revokedcapabilitiescleanedup_free(ptr >>> 0, 1));
const RoleAdminPermissionsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_roleadminpermissions_free(ptr >>> 0, 1));
const RoleCreatedFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_rolecreated_free(ptr >>> 0, 1));
const RoleDeletedFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_roledeleted_free(ptr >>> 0, 1));
const RoleHandleFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_rolehandle_free(ptr >>> 0, 1));
const RoleMapFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_rolemap_free(ptr >>> 0, 1));
const RolePermissionsEntryFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_rolepermissionsentry_free(ptr >>> 0, 1));
const RoleTagsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_roletags_free(ptr >>> 0, 1));
const RoleUpdatedFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_roleupdated_free(ptr >>> 0, 1));
const TimeLockFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_timelock_free(ptr >>> 0, 1));
const TrailAccessFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_trailaccess_free(ptr >>> 0, 1));
const TrailLockingFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_traillocking_free(ptr >>> 0, 1));
const TrailRecordsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_trailrecords_free(ptr >>> 0, 1));
const TrailTagsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_trailtags_free(ptr >>> 0, 1));
const TransactionBuilderFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_transactionbuilder_free(ptr >>> 0, 1));
const TransactionOutputFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_transactionoutput_free(ptr >>> 0, 1));
const UpdateDeleteRecordWindowFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_updatedeleterecordwindow_free(ptr >>> 0, 1));
const UpdateDeleteTrailLockFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_updatedeletetraillock_free(ptr >>> 0, 1));
const UpdateLockingConfigFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_updatelockingconfig_free(ptr >>> 0, 1));
const UpdateMetadataFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_updatemetadata_free(ptr >>> 0, 1));
const UpdateRoleFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_updaterole_free(ptr >>> 0, 1));
const UpdateWriteLockFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_updatewritelock_free(ptr >>> 0, 1));
const WasmManagedCoreClientFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_wasmmanagedcoreclient_free(ptr >>> 0, 1));
const WasmManagedCoreClientReadOnlyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_wasmmanagedcoreclientreadonly_free(ptr >>> 0, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    wasm.__externref_drop_slice(ptr, len);
    return result;
}

function getArrayU64FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getBigUint64ArrayMemory0().subarray(ptr / 8, ptr / 8 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedBigUint64ArrayMemory0 = null;
function getBigUint64ArrayMemory0() {
    if (cachedBigUint64ArrayMemory0 === null || cachedBigUint64ArrayMemory0.byteLength === 0) {
        cachedBigUint64ArrayMemory0 = new BigUint64Array(wasm.memory.buffer);
    }
    return cachedBigUint64ArrayMemory0;
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArray64ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 8, 8) >>> 0;
    getBigUint64ArrayMemory0().set(arg, ptr / 8);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    for (let i = 0; i < array.length; i++) {
        const add = addToExternrefTable0(array[i]);
        getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedBigUint64ArrayMemory0 = null;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('audit_trail_wasm_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
let __initializedIotaWasm = false

export function init(path) {
    if (__initializedIotaWasm) {
        return Promise.resolve(wasm)
    }
    return __wbg_init(path || 'audit_trail_wasm_bg.wasm').then(() => {
        __initializedIotaWasm = true
        return wasm
    })
}
