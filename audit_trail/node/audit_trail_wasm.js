/* @ts-self-types="./audit_trail_wasm.d.ts" */
const { WasmIotaTransactionBlockResponseWrapper } = require(`@iota/iota-interaction-ts/node/iota_client_helpers`);
const { Ed25519PublicKey } = require(`@iota/iota-sdk/keypairs/ed25519`);
const { Secp256k1PublicKey } = require(`@iota/iota-sdk/keypairs/secp256k1`);
const { Secp256r1PublicKey } = require(`@iota/iota-sdk/keypairs/secp256r1`);
const { TransactionDataBuilder } = require(`@iota/iota-sdk/transactions`);
const { inspect } = require(`util`);

class AddRecord {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.addrecord_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) AddRecord.prototype[Symbol.dispose] = AddRecord.prototype.free;
exports.AddRecord = AddRecord;

class AddRecordTag {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.addrecordtag_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) AddRecordTag.prototype[Symbol.dispose] = AddRecordTag.prototype.free;
exports.AddRecordTag = AddRecordTag;

class AuditTrailBuilder {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
exports.AuditTrailBuilder = AuditTrailBuilder;

class AuditTrailClient {
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
     * @returns {AuditTrailBuilder}
     */
    createTrail() {
        const ret = wasm.audittrailclient_createTrail(this.__wbg_ptr);
        return AuditTrailBuilder.__wrap(ret);
    }
    /**
     * @returns {IotaClient}
     */
    iotaClient() {
        const ret = wasm.audittrailclient_iotaClient(this.__wbg_ptr);
        return ret;
    }
    /**
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
     * @returns {string[]}
     */
    packageHistory() {
        const ret = wasm.audittrailclient_packageHistory(this.__wbg_ptr);
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
            const ret = wasm.audittrailclient_packageId(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {AuditTrailClientReadOnly}
     */
    readOnly() {
        const ret = wasm.audittrailclient_readOnly(this.__wbg_ptr);
        return AuditTrailClientReadOnly.__wrap(ret);
    }
    /**
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
     * @returns {TransactionSigner}
     */
    signer() {
        const ret = wasm.audittrailclient_signer(this.__wbg_ptr);
        return ret;
    }
    /**
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
exports.AuditTrailClient = AuditTrailClient;

class AuditTrailClientReadOnly {
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
     * @param {IotaClient} iota_client
     * @returns {Promise<AuditTrailClientReadOnly>}
     */
    static create(iota_client) {
        const ret = wasm.audittrailclientreadonly_create(iota_client);
        return ret;
    }
    /**
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
     * @returns {IotaClient}
     */
    iotaClient() {
        const ret = wasm.audittrailclientreadonly_iotaClient(this.__wbg_ptr);
        return ret;
    }
    /**
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
     * @returns {string[]}
     */
    packageHistory() {
        const ret = wasm.audittrailclientreadonly_packageHistory(this.__wbg_ptr);
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
            const ret = wasm.audittrailclientreadonly_packageId(this.__wbg_ptr);
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
exports.AuditTrailClientReadOnly = AuditTrailClientReadOnly;

class AuditTrailCreated {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
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
     * @param {string} arg0
     */
    set creator(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_creator(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) AuditTrailCreated.prototype[Symbol.dispose] = AuditTrailCreated.prototype.free;
exports.AuditTrailCreated = AuditTrailCreated;

class AuditTrailDeleted {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
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
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) AuditTrailDeleted.prototype[Symbol.dispose] = AuditTrailDeleted.prototype.free;
exports.AuditTrailDeleted = AuditTrailDeleted;

class AuditTrailHandle {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {TrailAccess}
     */
    access() {
        const ret = wasm.audittrailhandle_access(this.__wbg_ptr);
        return TrailAccess.__wrap(ret);
    }
    /**
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
     * @returns {Promise<OnChainAuditTrail>}
     */
    get() {
        const ret = wasm.audittrailhandle_get(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {TrailLocking}
     */
    locking() {
        const ret = wasm.audittrailhandle_locking(this.__wbg_ptr);
        return TrailLocking.__wrap(ret);
    }
    /**
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
     * @returns {TrailRecords}
     */
    records() {
        const ret = wasm.audittrailhandle_records(this.__wbg_ptr);
        return TrailRecords.__wrap(ret);
    }
    /**
     * @returns {TrailTags}
     */
    tags() {
        const ret = wasm.audittrailhandle_tags(this.__wbg_ptr);
        return TrailTags.__wrap(ret);
    }
    /**
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
exports.AuditTrailHandle = AuditTrailHandle;

class Capability {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint | undefined}
     */
    get validFrom() {
        const ret = wasm.__wbg_get_capability_validFrom(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * @returns {bigint | undefined}
     */
    get validUntil() {
        const ret = wasm.__wbg_get_capability_validUntil(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * @param {string} arg0
     */
    set id(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_id(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set issuedTo(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_issuedTo(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_role(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set targetKey(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_targetKey(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set validFrom(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set validUntil(arg0) {
        wasm.__wbg_set_capability_validUntil(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
}
if (Symbol.dispose) Capability.prototype[Symbol.dispose] = Capability.prototype.free;
exports.Capability = Capability;

class CapabilityAdminPermissions {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {Permission}
     */
    get add() {
        const ret = wasm.__wbg_get_capabilityadminpermissions_add(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Permission}
     */
    get revoke() {
        const ret = wasm.__wbg_get_capabilityadminpermissions_revoke(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {Permission} arg0
     */
    set add(arg0) {
        wasm.__wbg_set_capabilityadminpermissions_add(this.__wbg_ptr, arg0);
    }
    /**
     * @param {Permission} arg0
     */
    set revoke(arg0) {
        wasm.__wbg_set_capabilityadminpermissions_revoke(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) CapabilityAdminPermissions.prototype[Symbol.dispose] = CapabilityAdminPermissions.prototype.free;
exports.CapabilityAdminPermissions = CapabilityAdminPermissions;

class CapabilityDestroyed {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint | undefined}
     */
    get validFrom() {
        const ret = wasm.__wbg_get_capabilitydestroyed_validFrom(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * @returns {bigint | undefined}
     */
    get validUntil() {
        const ret = wasm.__wbg_get_capabilitydestroyed_validUntil(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * @param {string} arg0
     */
    set capabilityId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_targetKey(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set issuedTo(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_issuedTo(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_role(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set targetKey(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_id(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set validFrom(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set validUntil(arg0) {
        wasm.__wbg_set_capability_validUntil(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
}
if (Symbol.dispose) CapabilityDestroyed.prototype[Symbol.dispose] = CapabilityDestroyed.prototype.free;
exports.CapabilityDestroyed = CapabilityDestroyed;

class CapabilityIssueOptions {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint | undefined}
     */
    get validFromMs() {
        const ret = wasm.__wbg_get_capabilityissueoptions_validFromMs(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * @returns {bigint | undefined}
     */
    get validUntilMs() {
        const ret = wasm.__wbg_get_capabilityissueoptions_validUntilMs(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * @param {string | null} [arg0]
     */
    set issuedTo(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capabilityissueoptions_issuedTo(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set validFromMs(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set validUntilMs(arg0) {
        wasm.__wbg_set_capability_validUntil(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
}
if (Symbol.dispose) CapabilityIssueOptions.prototype[Symbol.dispose] = CapabilityIssueOptions.prototype.free;
exports.CapabilityIssueOptions = CapabilityIssueOptions;

class CapabilityIssued {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint | undefined}
     */
    get validFrom() {
        const ret = wasm.__wbg_get_capabilityissued_validFrom(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * @returns {bigint | undefined}
     */
    get validUntil() {
        const ret = wasm.__wbg_get_capabilityissued_validUntil(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * @param {string} arg0
     */
    set capabilityId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_targetKey(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set issuedTo(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_issuedTo(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_role(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set targetKey(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_id(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set validFrom(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set validUntil(arg0) {
        wasm.__wbg_set_capability_validUntil(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
}
if (Symbol.dispose) CapabilityIssued.prototype[Symbol.dispose] = CapabilityIssued.prototype.free;
exports.CapabilityIssued = CapabilityIssued;

class CapabilityRevoked {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint}
     */
    get validUntil() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * @param {string} arg0
     */
    set capabilityId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_creator(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set targetKey(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} arg0
     */
    set validUntil(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) CapabilityRevoked.prototype[Symbol.dispose] = CapabilityRevoked.prototype.free;
exports.CapabilityRevoked = CapabilityRevoked;

class CleanupRevokedCapabilities {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Empty>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.cleanuprevokedcapabilities_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.cleanuprevokedcapabilities_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) CleanupRevokedCapabilities.prototype[Symbol.dispose] = CleanupRevokedCapabilities.prototype.free;
exports.CleanupRevokedCapabilities = CleanupRevokedCapabilities;

class CreateRole {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.createrole_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) CreateRole.prototype[Symbol.dispose] = CreateRole.prototype.free;
exports.CreateRole = CreateRole;

class CreateTrail {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.createtrail_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
    /**
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
exports.CreateTrail = CreateTrail;

class Data {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {Uint8Array} data
     * @returns {Data}
     */
    static fromBytes(data) {
        const ret = wasm.data_fromBytes(data);
        return Data.__wrap(ret);
    }
    /**
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
     * @returns {Uint8Array}
     */
    toBytes() {
        const ret = wasm.data_toBytes(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
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
     * @returns {any}
     */
    get value() {
        const ret = wasm.data_value(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) Data.prototype[Symbol.dispose] = Data.prototype.free;
exports.Data = Data;

/**
 * A default implementation for {@link HttpClient}.
 */
class DefaultHttpClient {
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
exports.DefaultHttpClient = DefaultHttpClient;

class DeleteAuditTrail {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.deleteaudittrail_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DeleteAuditTrail.prototype[Symbol.dispose] = DeleteAuditTrail.prototype.free;
exports.DeleteAuditTrail = DeleteAuditTrail;

class DeleteRecord {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.deleterecord_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DeleteRecord.prototype[Symbol.dispose] = DeleteRecord.prototype.free;
exports.DeleteRecord = DeleteRecord;

class DeleteRecordsBatch {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {TransactionEffects} wasm_effects
     * @param {IotaEvent[]} wasm_events
     * @param {CoreClientReadOnly} client
     * @returns {Promise<bigint>}
     */
    applyWithEvents(wasm_effects, wasm_events, client) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.deleterecordsbatch_applyWithEvents(ptr, wasm_effects, wasm_events, client);
        return ret;
    }
    /**
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.deleterecordsbatch_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DeleteRecordsBatch.prototype[Symbol.dispose] = DeleteRecordsBatch.prototype.free;
exports.DeleteRecordsBatch = DeleteRecordsBatch;

class DeleteRole {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.deleterole_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DeleteRole.prototype[Symbol.dispose] = DeleteRole.prototype.free;
exports.DeleteRole = DeleteRole;

class DestroyCapability {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.destroycapability_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DestroyCapability.prototype[Symbol.dispose] = DestroyCapability.prototype.free;
exports.DestroyCapability = DestroyCapability;

class DestroyInitialAdminCapability {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.destroyinitialadmincapability_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) DestroyInitialAdminCapability.prototype[Symbol.dispose] = DestroyInitialAdminCapability.prototype.free;
exports.DestroyInitialAdminCapability = DestroyInitialAdminCapability;

class Empty {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
exports.Empty = Empty;

class GasStationParams {
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
exports.GasStationParams = GasStationParams;

class ImmutableMetadata {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {string | null} [arg0]
     */
    set description(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_immutablemetadata_description(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set name(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_immutablemetadata_name(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) ImmutableMetadata.prototype[Symbol.dispose] = ImmutableMetadata.prototype.free;
exports.ImmutableMetadata = ImmutableMetadata;

class IssueCapability {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.issuecapability_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) IssueCapability.prototype[Symbol.dispose] = IssueCapability.prototype.free;
exports.IssueCapability = IssueCapability;

class LinkedTable {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint | undefined}
     */
    get head() {
        const ret = wasm.__wbg_get_linkedtable_head(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
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
     * @returns {bigint}
     */
    get size() {
        const ret = wasm.__wbg_get_linkedtable_size(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * @returns {bigint | undefined}
     */
    get tail() {
        const ret = wasm.__wbg_get_linkedtable_tail(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set head(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * @param {string} arg0
     */
    set id(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_linkedtable_id(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} arg0
     */
    set size(arg0) {
        wasm.__wbg_set_linkedtable_size(this.__wbg_ptr, arg0);
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set tail(arg0) {
        wasm.__wbg_set_capability_validUntil(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
}
if (Symbol.dispose) LinkedTable.prototype[Symbol.dispose] = LinkedTable.prototype.free;
exports.LinkedTable = LinkedTable;

class LockingConfig {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {LockingWindow}
     */
    get deleteRecordWindow() {
        const ret = wasm.__wbg_get_lockingconfig_deleteRecordWindow(this.__wbg_ptr);
        return LockingWindow.__wrap(ret);
    }
    /**
     * @returns {TimeLock}
     */
    get deleteTrailLock() {
        const ret = wasm.__wbg_get_lockingconfig_deleteTrailLock(this.__wbg_ptr);
        return TimeLock.__wrap(ret);
    }
    /**
     * @returns {TimeLock}
     */
    get writeLock() {
        const ret = wasm.__wbg_get_lockingconfig_writeLock(this.__wbg_ptr);
        return TimeLock.__wrap(ret);
    }
    /**
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
     * @param {LockingWindow} arg0
     */
    set deleteRecordWindow(arg0) {
        _assertClass(arg0, LockingWindow);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_lockingconfig_deleteRecordWindow(this.__wbg_ptr, ptr0);
    }
    /**
     * @param {TimeLock} arg0
     */
    set deleteTrailLock(arg0) {
        _assertClass(arg0, TimeLock);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_lockingconfig_deleteTrailLock(this.__wbg_ptr, ptr0);
    }
    /**
     * @param {TimeLock} arg0
     */
    set writeLock(arg0) {
        _assertClass(arg0, TimeLock);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_lockingconfig_writeLock(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) LockingConfig.prototype[Symbol.dispose] = LockingConfig.prototype.free;
exports.LockingConfig = LockingConfig;

class LockingWindow {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {any}
     */
    get args() {
        const ret = wasm.lockingwindow_args(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {LockingWindowType}
     */
    get type() {
        const ret = wasm.lockingwindow_type(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {bigint} count
     * @returns {LockingWindow}
     */
    static withCountBased(count) {
        const ret = wasm.lockingwindow_withCountBased(count);
        return LockingWindow.__wrap(ret);
    }
    /**
     * @returns {LockingWindow}
     */
    static withNone() {
        const ret = wasm.lockingwindow_withNone();
        return LockingWindow.__wrap(ret);
    }
    /**
     * @param {bigint} seconds
     * @returns {LockingWindow}
     */
    static withTimeBased(seconds) {
        const ret = wasm.lockingwindow_withTimeBased(seconds);
        return LockingWindow.__wrap(ret);
    }
}
if (Symbol.dispose) LockingWindow.prototype[Symbol.dispose] = LockingWindow.prototype.free;
exports.LockingWindow = LockingWindow;

/**
 * @enum {0 | 1 | 2}
 */
const LockingWindowType = Object.freeze({
    None: 0, "0": "None",
    TimeBased: 1, "1": "TimeBased",
    CountBased: 2, "2": "CountBased",
});
exports.LockingWindowType = LockingWindowType;

class Migrate {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.migrate_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) Migrate.prototype[Symbol.dispose] = Migrate.prototype.free;
exports.Migrate = Migrate;

class ObjectIdLinkedTable {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint}
     */
    get size() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
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
     * @param {string | null} [arg0]
     */
    set head(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_objectidlinkedtable_head(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set id(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} arg0
     */
    set size(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set tail(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capabilityissueoptions_issuedTo(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) ObjectIdLinkedTable.prototype[Symbol.dispose] = ObjectIdLinkedTable.prototype.free;
exports.ObjectIdLinkedTable = ObjectIdLinkedTable;

class OnChainAuditTrail {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint}
     */
    get createdAt() {
        const ret = wasm.onchainaudittrail_createdAt(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
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
     * @returns {ImmutableMetadata | undefined}
     */
    get immutableMetadata() {
        const ret = wasm.onchainaudittrail_immutableMetadata(this.__wbg_ptr);
        return ret === 0 ? undefined : ImmutableMetadata.__wrap(ret);
    }
    /**
     * @returns {LockingConfig}
     */
    get lockingConfig() {
        const ret = wasm.onchainaudittrail_lockingConfig(this.__wbg_ptr);
        return LockingConfig.__wrap(ret);
    }
    /**
     * @returns {LinkedTable}
     */
    get records() {
        const ret = wasm.onchainaudittrail_records(this.__wbg_ptr);
        return LinkedTable.__wrap(ret);
    }
    /**
     * @returns {RoleMap}
     */
    get roles() {
        const ret = wasm.onchainaudittrail_roles(this.__wbg_ptr);
        return RoleMap.__wrap(ret);
    }
    /**
     * @returns {bigint}
     */
    get sequenceNumber() {
        const ret = wasm.onchainaudittrail_sequenceNumber(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * @returns {RecordTagEntry[]}
     */
    get tags() {
        const ret = wasm.onchainaudittrail_tags(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
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
     * @returns {bigint}
     */
    get version() {
        const ret = wasm.onchainaudittrail_version(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
}
if (Symbol.dispose) OnChainAuditTrail.prototype[Symbol.dispose] = OnChainAuditTrail.prototype.free;
exports.OnChainAuditTrail = OnChainAuditTrail;

class PackageOverrides {
    toJSON() {
        return {
            auditTrailPackageId: this.auditTrailPackageId,
            tfComponentsPackageId: this.tfComponentsPackageId,
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {string | null} [arg0]
     */
    set auditTrailPackageId(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_packageoverrides_auditTrailPackageId(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set tfComponentsPackageId(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_packageoverrides_tfComponentsPackageId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) PackageOverrides.prototype[Symbol.dispose] = PackageOverrides.prototype.free;
exports.PackageOverrides = PackageOverrides;

class PaginatedRecord {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {boolean}
     */
    get hasNextPage() {
        const ret = wasm.__wbg_get_paginatedrecord_hasNextPage(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {bigint | undefined}
     */
    get nextCursor() {
        const ret = wasm.__wbg_get_paginatedrecord_nextCursor(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * @returns {Record[]}
     */
    get records() {
        const ret = wasm.__wbg_get_paginatedrecord_records(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @param {boolean} arg0
     */
    set hasNextPage(arg0) {
        wasm.__wbg_set_paginatedrecord_hasNextPage(this.__wbg_ptr, arg0);
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set nextCursor(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * @param {Record[]} arg0
     */
    set records(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_paginatedrecord_records(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) PaginatedRecord.prototype[Symbol.dispose] = PaginatedRecord.prototype.free;
exports.PaginatedRecord = PaginatedRecord;

/**
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18}
 */
const Permission = Object.freeze({
    DeleteAuditTrail: 0, "0": "DeleteAuditTrail",
    DeleteAllRecords: 1, "1": "DeleteAllRecords",
    AddRecord: 2, "2": "AddRecord",
    DeleteRecord: 3, "3": "DeleteRecord",
    CorrectRecord: 4, "4": "CorrectRecord",
    UpdateLockingConfig: 5, "5": "UpdateLockingConfig",
    UpdateLockingConfigForDeleteRecord: 6, "6": "UpdateLockingConfigForDeleteRecord",
    UpdateLockingConfigForDeleteTrail: 7, "7": "UpdateLockingConfigForDeleteTrail",
    UpdateLockingConfigForWrite: 8, "8": "UpdateLockingConfigForWrite",
    AddRoles: 9, "9": "AddRoles",
    UpdateRoles: 10, "10": "UpdateRoles",
    DeleteRoles: 11, "11": "DeleteRoles",
    AddCapabilities: 12, "12": "AddCapabilities",
    RevokeCapabilities: 13, "13": "RevokeCapabilities",
    UpdateMetadata: 14, "14": "UpdateMetadata",
    DeleteMetadata: 15, "15": "DeleteMetadata",
    Migrate: 16, "16": "Migrate",
    AddRecordTags: 17, "17": "AddRecordTags",
    DeleteRecordTags: 18, "18": "DeleteRecordTags",
});
exports.Permission = Permission;

class PermissionSet {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {any[]}
     */
    get permissions() {
        const ret = wasm.__wbg_get_permissionset_permissions(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {PermissionSet}
     */
    static adminPermissions() {
        const ret = wasm.permissionset_adminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * @returns {PermissionSet}
     */
    static capAdminPermissions() {
        const ret = wasm.permissionset_capAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * @returns {PermissionSet}
     */
    static lockingAdminPermissions() {
        const ret = wasm.permissionset_lockingAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * @returns {PermissionSet}
     */
    static metadataAdminPermissions() {
        const ret = wasm.permissionset_metadataAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
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
     * @returns {PermissionSet}
     */
    static recordAdminPermissions() {
        const ret = wasm.permissionset_recordAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * @returns {PermissionSet}
     */
    static roleAdminPermissions() {
        const ret = wasm.permissionset_roleAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * @returns {PermissionSet}
     */
    static tagAdminPermissions() {
        const ret = wasm.permissionset_tagAdminPermissions();
        return PermissionSet.__wrap(ret);
    }
    /**
     * @param {any[]} arg0
     */
    set permissions(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_permissionset_permissions(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) PermissionSet.prototype[Symbol.dispose] = PermissionSet.prototype.free;
exports.PermissionSet = PermissionSet;

class Record {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint}
     */
    get addedAt() {
        const ret = wasm.__wbg_get_record_addedAt(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
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
     * @returns {RecordCorrection}
     */
    get correction() {
        const ret = wasm.__wbg_get_record_correction(this.__wbg_ptr);
        return RecordCorrection.__wrap(ret);
    }
    /**
     * @returns {Data}
     */
    get data() {
        const ret = wasm.__wbg_get_record_data(this.__wbg_ptr);
        return Data.__wrap(ret);
    }
    /**
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
     * @returns {bigint}
     */
    get sequenceNumber() {
        const ret = wasm.__wbg_get_record_sequenceNumber(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
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
     * @param {bigint} arg0
     */
    set addedAt(arg0) {
        wasm.__wbg_set_record_addedAt(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string} arg0
     */
    set addedBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_record_addedBy(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {RecordCorrection} arg0
     */
    set correction(arg0) {
        _assertClass(arg0, RecordCorrection);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_record_correction(this.__wbg_ptr, ptr0);
    }
    /**
     * @param {Data} arg0
     */
    set data(arg0) {
        _assertClass(arg0, Data);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_record_data(this.__wbg_ptr, ptr0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set metadata(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_record_metadata(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} arg0
     */
    set sequenceNumber(arg0) {
        wasm.__wbg_set_record_sequenceNumber(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set tag(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_record_tag(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) Record.prototype[Symbol.dispose] = Record.prototype.free;
exports.Record = Record;

class RecordAdded {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint}
     */
    get sequenceNumber() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_recordadded_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
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
     * @param {string} arg0
     */
    set addedBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordadded_addedBy(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} arg0
     */
    set sequenceNumber(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_recordadded_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordadded_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RecordAdded.prototype[Symbol.dispose] = RecordAdded.prototype.free;
exports.RecordAdded = RecordAdded;

class RecordCorrection {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint | undefined}
     */
    get isReplacedBy() {
        const ret = wasm.__wbg_get_recordcorrection_isReplacedBy(this.__wbg_ptr);
        return ret[0] === 0 ? undefined : BigInt.asUintN(64, ret[1]);
    }
    /**
     * @returns {BigUint64Array}
     */
    get replaces() {
        const ret = wasm.__wbg_get_recordcorrection_replaces(this.__wbg_ptr);
        var v1 = getArrayU64FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 8, 8);
        return v1;
    }
    /**
     * @param {bigint | null} [arg0]
     */
    set isReplacedBy(arg0) {
        wasm.__wbg_set_capability_validFrom(this.__wbg_ptr, !isLikeNone(arg0), isLikeNone(arg0) ? BigInt(0) : arg0);
    }
    /**
     * @param {BigUint64Array} arg0
     */
    set replaces(arg0) {
        const ptr0 = passArray64ToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordcorrection_replaces(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RecordCorrection.prototype[Symbol.dispose] = RecordCorrection.prototype.free;
exports.RecordCorrection = RecordCorrection;

class RecordDeleted {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint}
     */
    get sequenceNumber() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_recordadded_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
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
     * @param {string} arg0
     */
    set deletedBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordadded_addedBy(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} arg0
     */
    set sequenceNumber(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_recordadded_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_recordadded_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RecordDeleted.prototype[Symbol.dispose] = RecordDeleted.prototype.free;
exports.RecordDeleted = RecordDeleted;

class RecordTagEntry {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint}
     */
    get usageCount() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * @param {string} arg0
     */
    set tag(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} arg0
     */
    set usageCount(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) RecordTagEntry.prototype[Symbol.dispose] = RecordTagEntry.prototype.free;
exports.RecordTagEntry = RecordTagEntry;

class RemoveRecordTag {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.removerecordtag_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) RemoveRecordTag.prototype[Symbol.dispose] = RemoveRecordTag.prototype.free;
exports.RemoveRecordTag = RemoveRecordTag;

class RevokeCapability {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.revokecapability_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) RevokeCapability.prototype[Symbol.dispose] = RevokeCapability.prototype.free;
exports.RevokeCapability = RevokeCapability;

class RevokeInitialAdminCapability {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.revokeinitialadmincapability_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) RevokeInitialAdminCapability.prototype[Symbol.dispose] = RevokeInitialAdminCapability.prototype.free;
exports.RevokeInitialAdminCapability = RevokeInitialAdminCapability;

class RoleAdminPermissions {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {Permission}
     */
    get add() {
        const ret = wasm.__wbg_get_capabilityadminpermissions_add(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Permission}
     */
    get delete() {
        const ret = wasm.__wbg_get_capabilityadminpermissions_revoke(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Permission}
     */
    get update() {
        const ret = wasm.__wbg_get_roleadminpermissions_update(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {Permission} arg0
     */
    set add(arg0) {
        wasm.__wbg_set_capabilityadminpermissions_add(this.__wbg_ptr, arg0);
    }
    /**
     * @param {Permission} arg0
     */
    set delete(arg0) {
        wasm.__wbg_set_capabilityadminpermissions_revoke(this.__wbg_ptr, arg0);
    }
    /**
     * @param {Permission} arg0
     */
    set update(arg0) {
        wasm.__wbg_set_roleadminpermissions_update(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) RoleAdminPermissions.prototype[Symbol.dispose] = RoleAdminPermissions.prototype.free;
exports.RoleAdminPermissions = RoleAdminPermissions;

class RoleCreated {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {PermissionSet}
     */
    get permissions() {
        const ret = wasm.__wbg_get_rolecreated_permissions(this.__wbg_ptr);
        return PermissionSet.__wrap(ret);
    }
    /**
     * @returns {RoleTags | undefined}
     */
    get roleTags() {
        const ret = wasm.__wbg_get_rolecreated_roleTags(this.__wbg_ptr);
        return ret === 0 ? undefined : RoleTags.__wrap(ret);
    }
    /**
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
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
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
     * @param {string} arg0
     */
    set createdBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_targetKey(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {PermissionSet} arg0
     */
    set permissions(arg0) {
        _assertClass(arg0, PermissionSet);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_rolecreated_permissions(this.__wbg_ptr, ptr0);
    }
    /**
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
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_creator(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RoleCreated.prototype[Symbol.dispose] = RoleCreated.prototype.free;
exports.RoleCreated = RoleCreated;

class RoleDeleted {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
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
     * @param {string} arg0
     */
    set deletedBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_id(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_creator(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RoleDeleted.prototype[Symbol.dispose] = RoleDeleted.prototype.free;
exports.RoleDeleted = RoleDeleted;

class RoleHandle {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
exports.RoleHandle = RoleHandle;

class RoleMap {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {CapabilityAdminPermissions}
     */
    get capabilityAdminPermissions() {
        const ret = wasm.__wbg_get_rolemap_capabilityAdminPermissions(this.__wbg_ptr);
        return CapabilityAdminPermissions.__wrap(ret);
    }
    /**
     * @returns {string[]}
     */
    get initialAdminCapIds() {
        const ret = wasm.__wbg_get_rolemap_initialAdminCapIds(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
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
     * @returns {ObjectIdLinkedTable}
     */
    get revokedCapabilities() {
        const ret = wasm.__wbg_get_rolemap_revokedCapabilities(this.__wbg_ptr);
        return ObjectIdLinkedTable.__wrap(ret);
    }
    /**
     * @returns {RoleAdminPermissions}
     */
    get roleAdminPermissions() {
        const ret = wasm.__wbg_get_rolemap_roleAdminPermissions(this.__wbg_ptr);
        return RoleAdminPermissions.__wrap(ret);
    }
    /**
     * @returns {RolePermissionsEntry[]}
     */
    get roles() {
        const ret = wasm.__wbg_get_rolemap_roles(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
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
     * @param {CapabilityAdminPermissions} arg0
     */
    set capabilityAdminPermissions(arg0) {
        _assertClass(arg0, CapabilityAdminPermissions);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_rolemap_capabilityAdminPermissions(this.__wbg_ptr, ptr0);
    }
    /**
     * @param {string[]} arg0
     */
    set initialAdminCapIds(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_rolemap_initialAdminCapIds(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set initialAdminRoleName(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_rolemap_initialAdminRoleName(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {ObjectIdLinkedTable} arg0
     */
    set revokedCapabilities(arg0) {
        _assertClass(arg0, ObjectIdLinkedTable);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_rolemap_revokedCapabilities(this.__wbg_ptr, ptr0);
    }
    /**
     * @param {RoleAdminPermissions} arg0
     */
    set roleAdminPermissions(arg0) {
        _assertClass(arg0, RoleAdminPermissions);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_rolemap_roleAdminPermissions(this.__wbg_ptr, ptr0);
    }
    /**
     * @param {RolePermissionsEntry[]} arg0
     */
    set roles(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_rolemap_roles(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set targetKey(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_rolemap_targetKey(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RoleMap.prototype[Symbol.dispose] = RoleMap.prototype.free;
exports.RoleMap = RoleMap;

class RolePermissionsEntry {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {any[]}
     */
    get permissions() {
        const ret = wasm.__wbg_get_rolepermissionsentry_permissions(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {RoleTags | undefined}
     */
    get roleTags() {
        const ret = wasm.__wbg_get_rolepermissionsentry_roleTags(this.__wbg_ptr);
        return ret === 0 ? undefined : RoleTags.__wrap(ret);
    }
    /**
     * @param {string} arg0
     */
    set name(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_immutablemetadata_name(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {any[]} arg0
     */
    set permissions(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_rolepermissionsentry_permissions(this.__wbg_ptr, ptr0, len0);
    }
    /**
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
exports.RolePermissionsEntry = RolePermissionsEntry;

class RoleTags {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {string[]}
     */
    get tags() {
        const ret = wasm.__wbg_get_roletags_tags(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
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
     * @param {string[]} arg0
     */
    set tags(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_roletags_tags(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RoleTags.prototype[Symbol.dispose] = RoleTags.prototype.free;
exports.RoleTags = RoleTags;

class RoleUpdated {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {PermissionSet}
     */
    get permissions() {
        const ret = wasm.__wbg_get_rolecreated_permissions(this.__wbg_ptr);
        return PermissionSet.__wrap(ret);
    }
    /**
     * @returns {RoleTags | undefined}
     */
    get roleTags() {
        const ret = wasm.__wbg_get_rolecreated_roleTags(this.__wbg_ptr);
        return ret === 0 ? undefined : RoleTags.__wrap(ret);
    }
    /**
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
     * @returns {bigint}
     */
    get timestamp() {
        const ret = wasm.__wbg_get_audittrailcreated_timestamp(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
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
     * @param {PermissionSet} arg0
     */
    set permissions(arg0) {
        _assertClass(arg0, PermissionSet);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_rolecreated_permissions(this.__wbg_ptr, ptr0);
    }
    /**
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
     * @param {string} arg0
     */
    set role(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_creator(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {bigint} arg0
     */
    set timestamp(arg0) {
        wasm.__wbg_set_audittrailcreated_timestamp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string} arg0
     */
    set trailId(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_audittrailcreated_trailId(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set updatedBy(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_capability_targetKey(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) RoleUpdated.prototype[Symbol.dispose] = RoleUpdated.prototype.free;
exports.RoleUpdated = RoleUpdated;

class TimeLock {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @returns {any}
     */
    get args() {
        const ret = wasm.timelock_args(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {TimeLockType}
     */
    get type() {
        const ret = wasm.timelock_type(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {TimeLock}
     */
    static withInfinite() {
        const ret = wasm.timelock_withInfinite();
        return TimeLock.__wrap(ret);
    }
    /**
     * @returns {TimeLock}
     */
    static withNone() {
        const ret = wasm.timelock_withNone();
        return TimeLock.__wrap(ret);
    }
    /**
     * @param {number} time_sec
     * @returns {TimeLock}
     */
    static withUnlockAt(time_sec) {
        const ret = wasm.timelock_withUnlockAt(time_sec);
        return TimeLock.__wrap(ret);
    }
    /**
     * @param {bigint} time_ms
     * @returns {TimeLock}
     */
    static withUnlockAtMs(time_ms) {
        const ret = wasm.timelock_withUnlockAtMs(time_ms);
        return TimeLock.__wrap(ret);
    }
    /**
     * @returns {TimeLock}
     */
    static withUntilDestroyed() {
        const ret = wasm.timelock_withUntilDestroyed();
        return TimeLock.__wrap(ret);
    }
}
if (Symbol.dispose) TimeLock.prototype[Symbol.dispose] = TimeLock.prototype.free;
exports.TimeLock = TimeLock;

/**
 * @enum {0 | 1 | 2 | 3 | 4}
 */
const TimeLockType = Object.freeze({
    None: 0, "0": "None",
    UnlockAt: 1, "1": "UnlockAt",
    UnlockAtMs: 2, "2": "UnlockAtMs",
    UntilDestroyed: 3, "3": "UntilDestroyed",
    Infinite: 4, "4": "Infinite",
});
exports.TimeLockType = TimeLockType;

class TrailAccess {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
exports.TrailAccess = TrailAccess;

class TrailLocking {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {bigint} sequence_number
     * @returns {Promise<boolean>}
     */
    isRecordLocked(sequence_number) {
        const ret = wasm.traillocking_isRecordLocked(this.__wbg_ptr, sequence_number);
        return ret;
    }
    /**
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
exports.TrailLocking = TrailLocking;

class TrailRecords {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {bigint} sequence_number
     * @returns {Promise<Record>}
     */
    get(sequence_number) {
        const ret = wasm.trailrecords_get(this.__wbg_ptr, sequence_number);
        return ret;
    }
    /**
     * @returns {Promise<Record[]>}
     */
    list() {
        const ret = wasm.trailrecords_list(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {bigint | null | undefined} cursor
     * @param {number} limit
     * @returns {Promise<PaginatedRecord>}
     */
    listPage(cursor, limit) {
        const ret = wasm.trailrecords_listPage(this.__wbg_ptr, !isLikeNone(cursor), isLikeNone(cursor) ? BigInt(0) : cursor, limit);
        return ret;
    }
    /**
     * @param {number} max_entries
     * @returns {Promise<Record[]>}
     */
    listWithLimit(max_entries) {
        const ret = wasm.trailrecords_listWithLimit(this.__wbg_ptr, max_entries);
        return ret;
    }
    /**
     * @returns {Promise<bigint>}
     */
    recordCount() {
        const ret = wasm.trailrecords_recordCount(this.__wbg_ptr);
        return ret;
    }
}
if (Symbol.dispose) TrailRecords.prototype[Symbol.dispose] = TrailRecords.prototype.free;
exports.TrailRecords = TrailRecords;

class TrailTags {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
exports.TrailTags = TrailTags;

class TransactionBuilder {
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
exports.TransactionBuilder = TransactionBuilder;

class TransactionOutput {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
exports.TransactionOutput = TransactionOutput;

class UpdateDeleteRecordWindow {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updatedeleterecordwindow_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateDeleteRecordWindow.prototype[Symbol.dispose] = UpdateDeleteRecordWindow.prototype.free;
exports.UpdateDeleteRecordWindow = UpdateDeleteRecordWindow;

class UpdateDeleteTrailLock {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updatedeletetraillock_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateDeleteTrailLock.prototype[Symbol.dispose] = UpdateDeleteTrailLock.prototype.free;
exports.UpdateDeleteTrailLock = UpdateDeleteTrailLock;

class UpdateLockingConfig {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updatelockingconfig_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateLockingConfig.prototype[Symbol.dispose] = UpdateLockingConfig.prototype.free;
exports.UpdateLockingConfig = UpdateLockingConfig;

class UpdateMetadata {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updatemetadata_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateMetadata.prototype[Symbol.dispose] = UpdateMetadata.prototype.free;
exports.UpdateMetadata = UpdateMetadata;

class UpdateRole {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updaterole_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateRole.prototype[Symbol.dispose] = UpdateRole.prototype.free;
exports.UpdateRole = UpdateRole;

class UpdateWriteLock {
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
    [inspect.custom]() {
        return Object.assign(Object.create({constructor: this.constructor}), this.toJSON());
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
     * @param {CoreClientReadOnly} client
     * @returns {Promise<Uint8Array>}
     */
    buildProgrammableTransaction(client) {
        const ret = wasm.updatewritelock_buildProgrammableTransaction(this.__wbg_ptr, client);
        return ret;
    }
}
if (Symbol.dispose) UpdateWriteLock.prototype[Symbol.dispose] = UpdateWriteLock.prototype.free;
exports.UpdateWriteLock = UpdateWriteLock;

class WasmManagedCoreClient {
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
exports.WasmManagedCoreClient = WasmManagedCoreClient;

class WasmManagedCoreClientReadOnly {
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
exports.WasmManagedCoreClientReadOnly = WasmManagedCoreClientReadOnly;

function start() {
    wasm.start();
}
exports.start = start;

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
        __wbg_applyWithEvents_c454426bf9839c68: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.applyWithEvents(arg1, arg2, arg3);
            return ret;
        }, arguments); },
        __wbg_apply_317eb79698c55f0d: function() { return handleError(function (arg0, arg1, arg2) {
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
        __wbg_buildProgrammableTransaction_299a88990fa988d7: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.buildProgrammableTransaction(arg1);
            return ret;
        }, arguments); },
        __wbg_build_16306cb0ee9c2881: function() { return handleError(function (arg0) {
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
        __wbg_devInspectTransactionBlock_07f7670bfd7e2dce: function(arg0, arg1) {
            const ret = arg0.devInspectTransactionBlock(arg1);
            return ret;
        },
        __wbg_digest_dbe357479b6546d4: function(arg0, arg1) {
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
        __wbg_executeTransactionBlock_3e21f77827056ab6: function(arg0, arg1) {
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
        __wbg_fromBytes_8301e3936502cba6: function() { return handleError(function (arg0) {
            const ret = TransactionDataBuilder.fromBytes(arg0);
            return ret;
        }, arguments); },
        __wbg_gasstationparams_new: function(arg0) {
            const ret = GasStationParams.__wrap(arg0);
            return ret;
        },
        __wbg_getChainIdentifier_7803619c58ec01ec: function(arg0) {
            const ret = arg0.getChainIdentifier();
            return ret;
        },
        __wbg_getCoins_1c9317d9f9eee1de: function(arg0, arg1) {
            const ret = arg0.getCoins(arg1);
            return ret;
        },
        __wbg_getDynamicFieldObjectV2_299d991e6209bb63: function(arg0, arg1) {
            const ret = arg0.getDynamicFieldObjectV2(arg1);
            return ret;
        },
        __wbg_getDynamicFieldObject_8c341bf2c7340eb5: function(arg0, arg1) {
            const ret = arg0.getDynamicFieldObject(arg1);
            return ret;
        },
        __wbg_getObject_97d7377e349ed622: function(arg0, arg1) {
            const ret = arg0.getObject(arg1);
            return ret;
        },
        __wbg_getOwnedObjects_58c04c4291337473: function(arg0, arg1) {
            const ret = arg0.getOwnedObjects(arg1);
            return ret;
        },
        __wbg_getReferenceGasPrice_2d5730be6b76ef54: function(arg0) {
            const ret = arg0.getReferenceGasPrice();
            return ret;
        },
        __wbg_getTransactionBlock_87c4906566d3ff77: function(arg0, arg1) {
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
        __wbg_get_digest_87a4c998659f499f: function(arg0, arg1) {
            const ret = arg1.get_digest();
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_get_effects_868ff854440819ce: function(arg0) {
            const ret = arg0.get_effects();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_get_events_60a7d0d61cae81bc: function(arg0) {
            const ret = arg0.get_events();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_get_response_a137d0ded16b6ae7: function(arg0) {
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
        __wbg_iotaClient_a212f7452132b8a8: function(arg0) {
            const ret = arg0.iotaClient();
            return ret;
        },
        __wbg_iotaPublicKeyBytes_0fe5725eec923e29: function() { return handleError(function (arg0) {
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
        __wbg_log_e07e5e14b696924e: function(arg0, arg1) {
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
        __wbg_network_646b075c613e03fa: function(arg0, arg1) {
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
        __wbg_new_5b88e8c6e665432c: function(arg0) {
            const ret = new WasmIotaTransactionBlockResponseWrapper(arg0);
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
                        return wasm_bindgen__convert__closures_____invoke__h3c2c58ba82e1b53c(a, state0.b, arg0, arg1);
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
        __wbg_new_ed25519_pk_base64_ccda25677364dfe2: function() { return handleError(function (arg0, arg1) {
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
        __wbg_new_secp256k1_pk_base64_b6aec18d1be1e7e5: function() { return handleError(function (arg0, arg1) {
            const ret = new Secp256k1PublicKey(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_new_secp256r1_pk_base64_79baee8f09af303b: function() { return handleError(function (arg0, arg1) {
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
        __wbg_objectId_5d1011f1689f140c: function(arg0, arg1) {
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
        __wbg_packageHistory_fbbcfb89177f3284: function(arg0, arg1) {
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
        __wbg_send_5ad72b6776a27a57: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.send(arg1);
            return ret;
        }, arguments); },
        __wbg_senderAddress_6e4049a38851dd66: function(arg0, arg1) {
            const ret = arg1.senderAddress();
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_senderPublicKey_55a7b6679306dfa0: function(arg0) {
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
        __wbg_sign_a8a4dd5e34b3653e: function() { return handleError(function (arg0, arg1, arg2) {
            var v0 = getArrayU8FromWasm0(arg1, arg2).slice();
            wasm.__wbindgen_free(arg1, arg2 * 1, 1);
            const ret = arg0.sign(v0);
            return ret;
        }, arguments); },
        __wbg_signal_d1285ecab4ebc5ad: function(arg0) {
            const ret = arg0.signal;
            return ret;
        },
        __wbg_signer_3fb0df26da0b2db1: function(arg0) {
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
        __wbg_tfComponentsPackageId_81fe798fe14e3b8a: function(arg0, arg1) {
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
        __wbg_toIotaPublicKey_873e5a6861b75449: function(arg0, arg1) {
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
        __wbg_to_string_9bd72c89b21cc7bc: function(arg0, arg1) {
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
        __wbg_version_c167c920b4264a42: function(arg0, arg1) {
            const ret = arg1.version;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_waitForTransaction_631f3c339a41dfb4: function(arg0, arg1) {
            const ret = arg0.waitForTransaction(arg1);
            return ret;
        },
        __wbg_wasmmanagedcoreclientreadonly_new: function(arg0) {
            const ret = WasmManagedCoreClientReadOnly.__wrap(arg0);
            return ret;
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 1431, function: Function { arguments: [Externref], shim_idx: 1432, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h51a12a66d4da83b9, wasm_bindgen__convert__closures_____invoke__h6b4e9b9236ca6a14);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 921, function: Function { arguments: [], shim_idx: 922, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h8d7b4eaef5c6c593, wasm_bindgen__convert__closures_____invoke__h1622ecdfbc350ccf);
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

function wasm_bindgen__convert__closures_____invoke__h1622ecdfbc350ccf(arg0, arg1) {
    wasm.wasm_bindgen__convert__closures_____invoke__h1622ecdfbc350ccf(arg0, arg1);
}

function wasm_bindgen__convert__closures_____invoke__h6b4e9b9236ca6a14(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h6b4e9b9236ca6a14(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h3c2c58ba82e1b53c(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures_____invoke__h3c2c58ba82e1b53c(arg0, arg1, arg2, arg3);
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
function decodeText(ptr, len) {
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

const wasmPath = `${__dirname}/audit_trail_wasm_bg.wasm`;
const wasmBytes = require('fs').readFileSync(wasmPath);
const wasmModule = new WebAssembly.Module(wasmBytes);
const wasm = new WebAssembly.Instance(wasmModule, __wbg_get_imports()).exports;
wasm.__wbindgen_start();
