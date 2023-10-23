// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Mission extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mission entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Mission must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Mission", id.toString(), this);
    }
  }

  static load(id: string): Mission | null {
    return changetype<Mission | null>(store.get("Mission", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get missionId(): BigInt {
    let value = this.get("missionId");
    return value!.toBigInt();
  }

  set missionId(value: BigInt) {
    this.set("missionId", Value.fromBigInt(value));
  }

  get blockCount(): BigInt {
    let value = this.get("blockCount");
    return value!.toBigInt();
  }

  set blockCount(value: BigInt) {
    this.set("blockCount", Value.fromBigInt(value));
  }

  get numberOfRepetitions(): BigInt {
    let value = this.get("numberOfRepetitions");
    return value!.toBigInt();
  }

  set numberOfRepetitions(value: BigInt) {
    this.set("numberOfRepetitions", Value.fromBigInt(value));
  }

  get missionUrl(): string {
    let value = this.get("missionUrl");
    return value!.toString();
  }

  set missionUrl(value: string) {
    this.set("missionUrl", Value.fromString(value));
  }

  get rewards(): Array<string> | null {
    let value = this.get("rewards");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rewards(value: Array<string> | null) {
    if (!value) {
      this.unset("rewards");
    } else {
      this.set("rewards", Value.fromStringArray(<Array<string>>value));
    }
  }

  get requirements(): Array<string> | null {
    let value = this.get("requirements");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set requirements(value: Array<string> | null) {
    if (!value) {
      this.unset("requirements");
    } else {
      this.set("requirements", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Reward extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Reward entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Reward must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Reward", id.toString(), this);
    }
  }

  static load(id: string): Reward | null {
    return changetype<Reward | null>(store.get("Reward", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get mission(): string {
    let value = this.get("mission");
    return value!.toString();
  }

  set mission(value: string) {
    this.set("mission", Value.fromString(value));
  }
}

export class Requirement extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Requirement entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Requirement must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Requirement", id.toString(), this);
    }
  }

  static load(id: string): Requirement | null {
    return changetype<Requirement | null>(store.get("Requirement", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get burnRate(): BigInt {
    let value = this.get("burnRate");
    return value!.toBigInt();
  }

  set burnRate(value: BigInt) {
    this.set("burnRate", Value.fromBigInt(value));
  }

  get mission(): string {
    let value = this.get("mission");
    return value!.toString();
  }

  set mission(value: string) {
    this.set("mission", Value.fromString(value));
  }
}

export class MissionSubscribe extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MissionSubscribe entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MissionSubscribe must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MissionSubscribe", id.toString(), this);
    }
  }

  static load(id: string): MissionSubscribe | null {
    return changetype<MissionSubscribe | null>(
      store.get("MissionSubscribe", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get walletAddress(): Bytes {
    let value = this.get("walletAddress");
    return value!.toBytes();
  }

  set walletAddress(value: Bytes) {
    this.set("walletAddress", Value.fromBytes(value));
  }

  get startBlock(): BigInt {
    let value = this.get("startBlock");
    return value!.toBigInt();
  }

  set startBlock(value: BigInt) {
    this.set("startBlock", Value.fromBigInt(value));
  }

  get endBlock(): BigInt {
    let value = this.get("endBlock");
    return value!.toBigInt();
  }

  set endBlock(value: BigInt) {
    this.set("endBlock", Value.fromBigInt(value));
  }

  get startDate(): BigInt {
    let value = this.get("startDate");
    return value!.toBigInt();
  }

  set startDate(value: BigInt) {
    this.set("startDate", Value.fromBigInt(value));
  }

  get mission(): string {
    let value = this.get("mission");
    return value!.toString();
  }

  set mission(value: string) {
    this.set("mission", Value.fromString(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value!.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }
}

export class MissionSubscribeHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save MissionSubscribeHistory entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MissionSubscribeHistory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MissionSubscribeHistory", id.toString(), this);
    }
  }

  static load(id: string): MissionSubscribeHistory | null {
    return changetype<MissionSubscribeHistory | null>(
      store.get("MissionSubscribeHistory", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get walletAddress(): Bytes {
    let value = this.get("walletAddress");
    return value!.toBytes();
  }

  set walletAddress(value: Bytes) {
    this.set("walletAddress", Value.fromBytes(value));
  }

  get subscribeId(): BigInt {
    let value = this.get("subscribeId");
    return value!.toBigInt();
  }

  set subscribeId(value: BigInt) {
    this.set("subscribeId", Value.fromBigInt(value));
  }

  get startBlock(): BigInt {
    let value = this.get("startBlock");
    return value!.toBigInt();
  }

  set startBlock(value: BigInt) {
    this.set("startBlock", Value.fromBigInt(value));
  }

  get endBlock(): BigInt {
    let value = this.get("endBlock");
    return value!.toBigInt();
  }

  set endBlock(value: BigInt) {
    this.set("endBlock", Value.fromBigInt(value));
  }

  get startDate(): BigInt {
    let value = this.get("startDate");
    return value!.toBigInt();
  }

  set startDate(value: BigInt) {
    this.set("startDate", Value.fromBigInt(value));
  }

  get endDate(): BigInt | null {
    let value = this.get("endDate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endDate(value: BigInt | null) {
    if (!value) {
      this.unset("endDate");
    } else {
      this.set("endDate", Value.fromBigInt(<BigInt>value));
    }
  }

  get missionId(): BigInt {
    let value = this.get("missionId");
    return value!.toBigInt();
  }

  set missionId(value: BigInt) {
    this.set("missionId", Value.fromBigInt(value));
  }

  get blockExplorerUrl(): string {
    let value = this.get("blockExplorerUrl");
    return value!.toString();
  }

  set blockExplorerUrl(value: string) {
    this.set("blockExplorerUrl", Value.fromString(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value!.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }
}
