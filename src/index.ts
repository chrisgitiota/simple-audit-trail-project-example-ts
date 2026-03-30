// Copyright 2025 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

import {
    AuditTrailClient,
    AuditTrailClientReadOnly,
    LockingConfig,
    LockingWindow,
    PackageOverrides,
    TimeLock
} from "@iota/audit-trail";
import {strict as assert} from "assert";
import {Ed25519Keypair} from "@iota/iota-sdk/keypairs/ed25519";
import {getNetwork, IotaClient, NetworkId} from "@iota/iota-sdk/client";
import { Transaction } from '@iota/iota-sdk/transactions';
import {getFaucetHost, requestIotaFromFaucetV0} from "@iota/iota-sdk/faucet";
import {Ed25519KeypairSigner} from "@iota/iota-interaction-ts/node/test_utils";

const networkId: NetworkId = "testnet"; // Change to "mainnet" for mainnet

const IOTA_AUDIT_TRAIL_PKG_ID = "0x7655d346145e2ba7fcb6a5c63b4b9ec18a92c435364206e5c3f3dfd8cb95d98d";   // testnet
const IOTA_TF_COMPONENTS_PKG_ID = "0x098767e6cd008f341847ad68089300375a274899b1c718e8cf8f5d57f96e8607"; // testnet

async function requestFunds(address: string) {
    await requestIotaFromFaucetV0({
        host: getFaucetHost(networkId),
        recipient: address,
    });
}

async function getFundedAuditTrailClient(iotaClient: IotaClient) {
    // generate new key
    const keypair = Ed25519Keypair.generate();
    // create signer
    let signer = new Ed25519KeypairSigner(keypair);
    // Request funds from faucet to execute the transactions resulting from this example
    await requestFunds(signer.keyId());

    const balance = await iotaClient.getBalance({owner: signer.keyId()});
    if (balance.totalBalance === "0") {
        throw new Error("Balance is still 0");
    } else {
        console.log(
            `Received gas from faucet: ${balance.totalBalance} for owner ${signer.keyId()}`,
        );
    }

    const notarizationClientReadOnly = await AuditTrailClientReadOnly.createWithPackageOverrides(
        iotaClient,
        new PackageOverrides(IOTA_AUDIT_TRAIL_PKG_ID, IOTA_TF_COMPONENTS_PKG_ID),
    );
    return await AuditTrailClient.create(notarizationClientReadOnly, signer);
}

export function defaultLockingConfig(): LockingConfig {
    return new LockingConfig(
        LockingWindow.withCountBased(BigInt(100)),
        TimeLock.withNone(),
        TimeLock.withNone(),
    );
}

export async function createTrailWithSeedRecord(client: AuditTrailClient) {
    return client
        .createTrail()
        .withTrailMetadata("Example Audit Trail", "WASM example trail")
        .withUpdatableMetadata("seed metadata")
        .withLockingConfig(defaultLockingConfig())
        .withInitialRecordString("seed record", "v1")
        .finish()
        .buildAndExecute(client);
}

export async function createTrail(): Promise<void> {
    console.log("Creating a simple audit trail example");

    const iotaClient = new IotaClient({url: getNetwork(networkId).url});

    const client = await getFundedAuditTrailClient(iotaClient);
    const { output: trail, response } = await createTrailWithSeedRecord(client);

    console.log(`Created trail ${trail.id} with transaction ${response.digest}`);
    console.log("Immutable metadata:", trail.immutableMetadata);
    console.log("Updatable metadata:", trail.updatableMetadata);
    console.log("Locking config:", trail.lockingConfig);

    assert.equal(trail.sequenceNumber, 1n);
    assert.ok(trail.immutableMetadata);
    assert.equal(trail.immutableMetadata?.name, "Example Audit Trail");
}

async function main(example?: string) {
    await createTrail();
}

main()
    .catch((error) => {
        console.error("Error creating audit trail:", error);
    });