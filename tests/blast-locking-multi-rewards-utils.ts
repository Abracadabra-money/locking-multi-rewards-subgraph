import { newMockEvent } from "matchstick-as";
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts";
import {
  LogBlastGasClaimed,
  LogBlastNativeClaimableEnabled,
  LogBlastTokenClaimableEnabled,
  LogBlastTokenClaimed,
  LogFeeToChanged,
  LogLockIndexChanged,
  LogLocked,
  LogRecovered,
  LogRewardAdded,
  LogRewardLockCreated,
  LogRewardLocked,
  LogRewardPaid,
  LogRewardsDurationUpdated,
  LogSetMinLockAmount,
  LogStaked,
  LogUnlocked,
  LogWithdrawn,
  OperatorChanged,
  OwnershipTransferred,
  Paused,
  Unpaused,
} from "../generated/BlastLockingMultiRewards/BlastLockingMultiRewards";

export function createLogBlastGasClaimedEvent(
  recipient: Address,
  amount: BigInt,
): LogBlastGasClaimed {
  const logBlastGasClaimedEvent = changetype<LogBlastGasClaimed>(
    newMockEvent(),
  );

  logBlastGasClaimedEvent.parameters = new Array();

  logBlastGasClaimedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient)),
  );
  logBlastGasClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );

  return logBlastGasClaimedEvent;
}

export function createLogBlastNativeClaimableEnabledEvent(
  contractAddress: Address,
): LogBlastNativeClaimableEnabled {
  const logBlastNativeClaimableEnabledEvent =
    changetype<LogBlastNativeClaimableEnabled>(newMockEvent());

  logBlastNativeClaimableEnabledEvent.parameters = new Array();

  logBlastNativeClaimableEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress),
    ),
  );

  return logBlastNativeClaimableEnabledEvent;
}

export function createLogBlastTokenClaimableEnabledEvent(
  contractAddress: Address,
  token: Address,
): LogBlastTokenClaimableEnabled {
  const logBlastTokenClaimableEnabledEvent =
    changetype<LogBlastTokenClaimableEnabled>(newMockEvent());

  logBlastTokenClaimableEnabledEvent.parameters = new Array();

  logBlastTokenClaimableEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress),
    ),
  );
  logBlastTokenClaimableEnabledEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token)),
  );

  return logBlastTokenClaimableEnabledEvent;
}

export function createLogBlastTokenClaimedEvent(
  recipient: Address,
  token: Address,
  amount: BigInt,
): LogBlastTokenClaimed {
  const logBlastTokenClaimedEvent = changetype<LogBlastTokenClaimed>(
    newMockEvent(),
  );

  logBlastTokenClaimedEvent.parameters = new Array();

  logBlastTokenClaimedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient)),
  );
  logBlastTokenClaimedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token)),
  );
  logBlastTokenClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );

  return logBlastTokenClaimedEvent;
}

export function createLogFeeToChangedEvent(feeTo: Address): LogFeeToChanged {
  const logFeeToChangedEvent = changetype<LogFeeToChanged>(newMockEvent());

  logFeeToChangedEvent.parameters = new Array();

  logFeeToChangedEvent.parameters.push(
    new ethereum.EventParam("feeTo", ethereum.Value.fromAddress(feeTo)),
  );

  return logFeeToChangedEvent;
}

export function createLogLockIndexChangedEvent(
  user: Address,
  fromIndex: BigInt,
  toIndex: BigInt,
): LogLockIndexChanged {
  const logLockIndexChangedEvent = changetype<LogLockIndexChanged>(
    newMockEvent(),
  );

  logLockIndexChangedEvent.parameters = new Array();

  logLockIndexChangedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user)),
  );
  logLockIndexChangedEvent.parameters.push(
    new ethereum.EventParam(
      "fromIndex",
      ethereum.Value.fromUnsignedBigInt(fromIndex),
    ),
  );
  logLockIndexChangedEvent.parameters.push(
    new ethereum.EventParam(
      "toIndex",
      ethereum.Value.fromUnsignedBigInt(toIndex),
    ),
  );

  return logLockIndexChangedEvent;
}

export function createLogLockedEvent(
  user: Address,
  amount: BigInt,
  unlockTime: BigInt,
  lockCount: BigInt,
): LogLocked {
  const logLockedEvent = changetype<LogLocked>(newMockEvent());

  logLockedEvent.parameters = new Array();

  logLockedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user)),
  );
  logLockedEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );
  logLockedEvent.parameters.push(
    new ethereum.EventParam(
      "unlockTime",
      ethereum.Value.fromUnsignedBigInt(unlockTime),
    ),
  );
  logLockedEvent.parameters.push(
    new ethereum.EventParam(
      "lockCount",
      ethereum.Value.fromUnsignedBigInt(lockCount),
    ),
  );

  return logLockedEvent;
}

export function createLogRecoveredEvent(
  token: Address,
  amount: BigInt,
): LogRecovered {
  const logRecoveredEvent = changetype<LogRecovered>(newMockEvent());

  logRecoveredEvent.parameters = new Array();

  logRecoveredEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token)),
  );
  logRecoveredEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );

  return logRecoveredEvent;
}

export function createLogRewardAddedEvent(reward: BigInt): LogRewardAdded {
  const logRewardAddedEvent = changetype<LogRewardAdded>(newMockEvent());

  logRewardAddedEvent.parameters = new Array();

  logRewardAddedEvent.parameters.push(
    new ethereum.EventParam(
      "reward",
      ethereum.Value.fromUnsignedBigInt(reward),
    ),
  );

  return logRewardAddedEvent;
}

export function createLogRewardLockCreatedEvent(
  user: Address,
  unlockTime: BigInt,
): LogRewardLockCreated {
  const logRewardLockCreatedEvent = changetype<LogRewardLockCreated>(
    newMockEvent(),
  );

  logRewardLockCreatedEvent.parameters = new Array();

  logRewardLockCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user)),
  );
  logRewardLockCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "unlockTime",
      ethereum.Value.fromUnsignedBigInt(unlockTime),
    ),
  );

  return logRewardLockCreatedEvent;
}

export function createLogRewardLockedEvent(
  user: Address,
  rewardsToken: Address,
  reward: BigInt,
): LogRewardLocked {
  const logRewardLockedEvent = changetype<LogRewardLocked>(newMockEvent());

  logRewardLockedEvent.parameters = new Array();

  logRewardLockedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user)),
  );
  logRewardLockedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardsToken",
      ethereum.Value.fromAddress(rewardsToken),
    ),
  );
  logRewardLockedEvent.parameters.push(
    new ethereum.EventParam(
      "reward",
      ethereum.Value.fromUnsignedBigInt(reward),
    ),
  );

  return logRewardLockedEvent;
}

export function createLogRewardPaidEvent(
  user: Address,
  rewardsToken: Address,
  reward: BigInt,
): LogRewardPaid {
  const logRewardPaidEvent = changetype<LogRewardPaid>(newMockEvent());

  logRewardPaidEvent.parameters = new Array();

  logRewardPaidEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user)),
  );
  logRewardPaidEvent.parameters.push(
    new ethereum.EventParam(
      "rewardsToken",
      ethereum.Value.fromAddress(rewardsToken),
    ),
  );
  logRewardPaidEvent.parameters.push(
    new ethereum.EventParam(
      "reward",
      ethereum.Value.fromUnsignedBigInt(reward),
    ),
  );

  return logRewardPaidEvent;
}

export function createLogRewardsDurationUpdatedEvent(
  token: Address,
  newDuration: BigInt,
): LogRewardsDurationUpdated {
  const logRewardsDurationUpdatedEvent = changetype<LogRewardsDurationUpdated>(
    newMockEvent(),
  );

  logRewardsDurationUpdatedEvent.parameters = new Array();

  logRewardsDurationUpdatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token)),
  );
  logRewardsDurationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newDuration",
      ethereum.Value.fromUnsignedBigInt(newDuration),
    ),
  );

  return logRewardsDurationUpdatedEvent;
}

export function createLogSetMinLockAmountEvent(
  previous: BigInt,
  current: BigInt,
): LogSetMinLockAmount {
  const logSetMinLockAmountEvent = changetype<LogSetMinLockAmount>(
    newMockEvent(),
  );

  logSetMinLockAmountEvent.parameters = new Array();

  logSetMinLockAmountEvent.parameters.push(
    new ethereum.EventParam(
      "previous",
      ethereum.Value.fromUnsignedBigInt(previous),
    ),
  );
  logSetMinLockAmountEvent.parameters.push(
    new ethereum.EventParam(
      "current",
      ethereum.Value.fromUnsignedBigInt(current),
    ),
  );

  return logSetMinLockAmountEvent;
}

export function createLogStakedEvent(user: Address, amount: BigInt): LogStaked {
  const logStakedEvent = changetype<LogStaked>(newMockEvent());

  logStakedEvent.parameters = new Array();

  logStakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user)),
  );
  logStakedEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );

  return logStakedEvent;
}

export function createLogUnlockedEvent(
  user: Address,
  amount: BigInt,
  index: BigInt,
): LogUnlocked {
  const logUnlockedEvent = changetype<LogUnlocked>(newMockEvent());

  logUnlockedEvent.parameters = new Array();

  logUnlockedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user)),
  );
  logUnlockedEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );
  logUnlockedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index)),
  );

  return logUnlockedEvent;
}

export function createLogWithdrawnEvent(
  user: Address,
  amount: BigInt,
): LogWithdrawn {
  const logWithdrawnEvent = changetype<LogWithdrawn>(newMockEvent());

  logWithdrawnEvent.parameters = new Array();

  logWithdrawnEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user)),
  );
  logWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );

  return logWithdrawnEvent;
}

export function createOperatorChangedEvent(
  param0: Address,
  param1: boolean,
): OperatorChanged {
  const operatorChangedEvent = changetype<OperatorChanged>(newMockEvent());

  operatorChangedEvent.parameters = new Array();

  operatorChangedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0)),
  );
  operatorChangedEvent.parameters.push(
    new ethereum.EventParam("param1", ethereum.Value.fromBoolean(param1)),
  );

  return operatorChangedEvent;
}

export function createOwnershipTransferredEvent(
  user: Address,
  newOwner: Address,
): OwnershipTransferred {
  const ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent(),
  );

  ownershipTransferredEvent.parameters = new Array();

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user)),
  );
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner)),
  );

  return ownershipTransferredEvent;
}

export function createPausedEvent(account: Address): Paused {
  const pausedEvent = changetype<Paused>(newMockEvent());

  pausedEvent.parameters = new Array();

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account)),
  );

  return pausedEvent;
}

export function createUnpausedEvent(account: Address): Unpaused {
  const unpausedEvent = changetype<Unpaused>(newMockEvent());

  unpausedEvent.parameters = new Array();

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account)),
  );

  return unpausedEvent;
}
