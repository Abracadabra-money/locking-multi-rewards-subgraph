import {
  LogBlastGasClaimed as LogBlastGasClaimedEvent,
  LogBlastNativeClaimableEnabled as LogBlastNativeClaimableEnabledEvent,
  LogBlastTokenClaimableEnabled as LogBlastTokenClaimableEnabledEvent,
  LogBlastTokenClaimed as LogBlastTokenClaimedEvent,
  LogFeeToChanged as LogFeeToChangedEvent,
  LogLockIndexChanged as LogLockIndexChangedEvent,
  LogLocked as LogLockedEvent,
  LogRecovered as LogRecoveredEvent,
  LogRewardAdded as LogRewardAddedEvent,
  LogRewardLockCreated as LogRewardLockCreatedEvent,
  LogRewardLocked as LogRewardLockedEvent,
  LogRewardPaid as LogRewardPaidEvent,
  LogRewardsDurationUpdated as LogRewardsDurationUpdatedEvent,
  LogSetMinLockAmount as LogSetMinLockAmountEvent,
  LogStaked as LogStakedEvent,
  LogUnlocked as LogUnlockedEvent,
  LogWithdrawn as LogWithdrawnEvent,
  OperatorChanged as OperatorChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Unpaused as UnpausedEvent,
} from "../../generated/BlastLockingMultiRewards/BlastLockingMultiRewards";
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
} from "../../generated/schema";
import { fillEvent } from "./common/fillEvent";

export function createLogBlastGasClaimed(
  event: LogBlastGasClaimedEvent,
): LogBlastGasClaimed {
  const entity = new LogBlastGasClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.recipient = event.params.recipient;
  entity.amount = event.params.amount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogBlastNativeClaimableEnabled(
  event: LogBlastNativeClaimableEnabledEvent,
): LogBlastNativeClaimableEnabled {
  const entity = new LogBlastNativeClaimableEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.contractAddress = event.params.contractAddress;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogBlastTokenClaimableEnabled(
  event: LogBlastTokenClaimableEnabledEvent,
): LogBlastTokenClaimableEnabled {
  const entity = new LogBlastTokenClaimableEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.contractAddress = event.params.contractAddress;
  entity.token = event.params.token;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogBlastTokenClaimed(
  event: LogBlastTokenClaimedEvent,
): LogBlastTokenClaimed {
  const entity = new LogBlastTokenClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.recipient = event.params.recipient;
  entity.token = event.params.token;
  entity.amount = event.params.amount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogFeeToChanged(
  event: LogFeeToChangedEvent,
): LogFeeToChanged {
  const entity = new LogFeeToChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.feeTo = event.params.feeTo;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogLockIndexChanged(
  event: LogLockIndexChangedEvent,
): LogLockIndexChanged {
  const entity = new LogLockIndexChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.fromIndex = event.params.fromIndex;
  entity.toIndex = event.params.toIndex;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogLocked(event: LogLockedEvent): LogLocked {
  const entity = new LogLocked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.amount = event.params.amount;
  entity.unlockTime = event.params.unlockTime;
  entity.lockCount = event.params.lockCount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogRecovered(event: LogRecoveredEvent): LogRecovered {
  const entity = new LogRecovered(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.token = event.params.token;
  entity.amount = event.params.amount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogRewardAdded(
  event: LogRewardAddedEvent,
): LogRewardAdded {
  const entity = new LogRewardAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.reward = event.params.reward;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogRewardLockCreated(
  event: LogRewardLockCreatedEvent,
): LogRewardLockCreated {
  const entity = new LogRewardLockCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.unlockTime = event.params.unlockTime;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogRewardLocked(
  event: LogRewardLockedEvent,
): LogRewardLocked {
  const entity = new LogRewardLocked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.rewardsToken = event.params.rewardsToken;
  entity.reward = event.params.reward;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogRewardPaid(event: LogRewardPaidEvent): LogRewardPaid {
  const entity = new LogRewardPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.rewardsToken = event.params.rewardsToken;
  entity.reward = event.params.reward;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogRewardsDurationUpdated(
  event: LogRewardsDurationUpdatedEvent,
): LogRewardsDurationUpdated {
  const entity = new LogRewardsDurationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.token = event.params.token;
  entity.newDuration = event.params.newDuration;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogSetMinLockAmount(
  event: LogSetMinLockAmountEvent,
): LogSetMinLockAmount {
  const entity = new LogSetMinLockAmount(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.previous = event.params.previous;
  entity.current = event.params.current;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogStaked(event: LogStakedEvent): LogStaked {
  const entity = new LogStaked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.amount = event.params.amount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogUnlocked(event: LogUnlockedEvent): LogUnlocked {
  const entity = new LogUnlocked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.amount = event.params.amount;
  entity.index = event.params.index;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogWithdrawn(event: LogWithdrawnEvent): LogWithdrawn {
  const entity = new LogWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.amount = event.params.amount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createOperatorChanged(
  event: OperatorChangedEvent,
): OperatorChanged {
  const entity = new OperatorChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.operator = event.params.operator;
  entity.status = event.params.status;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createOwnershipTransferred(
  event: OwnershipTransferredEvent,
): OwnershipTransferred {
  const entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.newOwner = event.params.newOwner;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createPaused(event: PausedEvent): Paused {
  const entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.account = event.params.account;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createUnpaused(event: UnpausedEvent): Unpaused {
  const entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.account = event.params.account;

  fillEvent(entity, event);

  entity.save();
  return entity;
}
