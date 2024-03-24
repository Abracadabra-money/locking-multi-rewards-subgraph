import {
  BlastLockingMultiRewards,
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
} from "../generated/BlastLockingMultiRewards/BlastLockingMultiRewards";
import { getOrCreateLockingMultiRewards } from "./helpers/entities/getOrCreateLockingMultiStaking";
import { getOrCreateUser } from "./helpers/entities/getOrCreateUser";

import {
  createLogBlastGasClaimed,
  createLogBlastNativeClaimableEnabled,
  createLogBlastTokenClaimableEnabled,
  createLogBlastTokenClaimed,
  createLogFeeToChanged,
  createLogLockIndexChanged,
  createLogLocked,
  createLogRecovered,
  createLogRewardAdded,
  createLogRewardLockCreated,
  createLogRewardLocked,
  createLogRewardPaid,
  createLogRewardsDurationUpdated,
  createLogSetMinLockAmount,
  createLogStaked,
  createLogUnlocked,
  createLogWithdrawn,
  createOperatorChanged,
  createOwnershipTransferred,
  createPaused,
  createUnpaused,
} from "./helpers/events";
import { updateBalances } from "./helpers/updates/updateBalances";

export function handleLogBlastGasClaimed(event: LogBlastGasClaimedEvent): void {
  createLogBlastGasClaimed(event);

  getOrCreateLockingMultiRewards(event.address);
}

export function handleLogBlastNativeClaimableEnabled(
  event: LogBlastNativeClaimableEnabledEvent,
): void {
  createLogBlastNativeClaimableEnabled(event);

  getOrCreateLockingMultiRewards(event.address);
}

export function handleLogBlastTokenClaimableEnabled(
  event: LogBlastTokenClaimableEnabledEvent,
): void {
  createLogBlastTokenClaimableEnabled(event);

  getOrCreateLockingMultiRewards(event.address);
}

export function handleLogBlastTokenClaimed(
  event: LogBlastTokenClaimedEvent,
): void {
  createLogBlastTokenClaimed(event);

  getOrCreateLockingMultiRewards(event.address);
}

export function handleLogFeeToChanged(event: LogFeeToChangedEvent): void {
  createLogFeeToChanged(event);

  getOrCreateLockingMultiRewards(event.address);
}

export function handleLogLockIndexChanged(
  event: LogLockIndexChangedEvent,
): void {
  createLogLockIndexChanged(event);

  getOrCreateLockingMultiRewards(event.address);
  getOrCreateUser(event.params.user);
}

export function handleLogLocked(event: LogLockedEvent): void {
  createLogLocked(event);

  const lockingMultiRewards = getOrCreateLockingMultiRewards(event.address);
  const user = getOrCreateUser(event.params.user);
  const lockingMultiRewardsContract = BlastLockingMultiRewards.bind(
    event.address,
  );
  const unlockedAmount = lockingMultiRewardsContract.unlocked(
    event.params.user,
  );
  const directLock = user.unlockedAmount == unlockedAmount;

  if (!directLock) {
    // Unlocked balance was used. Deduct it...
    updateBalances(lockingMultiRewards, user, event.params.amount.neg(), false);
  }

  updateBalances(lockingMultiRewards, user, event.params.amount, true);
}

export function handleLogRecovered(event: LogRecoveredEvent): void {
  createLogRecovered(event);

  getOrCreateLockingMultiRewards(event.address);
}

export function handleLogRewardAdded(event: LogRewardAddedEvent): void {
  createLogRewardAdded(event);

  getOrCreateLockingMultiRewards(event.address);
}

export function handleLogRewardLockCreated(
  event: LogRewardLockCreatedEvent,
): void {
  createLogRewardLockCreated(event);

  getOrCreateLockingMultiRewards(event.address);
  getOrCreateUser(event.params.user);
}

export function handleLogRewardLocked(event: LogRewardLockedEvent): void {
  createLogRewardLocked(event);

  getOrCreateLockingMultiRewards(event.address);
  getOrCreateUser(event.params.user);
}

export function handleLogRewardPaid(event: LogRewardPaidEvent): void {
  createLogRewardPaid(event);

  getOrCreateLockingMultiRewards(event.address);
  getOrCreateUser(event.params.user);
}

export function handleLogRewardsDurationUpdated(
  event: LogRewardsDurationUpdatedEvent,
): void {
  createLogRewardsDurationUpdated(event);

  getOrCreateLockingMultiRewards(event.address);
}

export function handleLogSetMinLockAmount(
  event: LogSetMinLockAmountEvent,
): void {
  getOrCreateLockingMultiRewards(event.address);

  createLogSetMinLockAmount(event);
}

export function handleLogStaked(event: LogStakedEvent): void {
  createLogStaked(event);

  const lockingMultiRewards = getOrCreateLockingMultiRewards(event.address);
  const user = getOrCreateUser(event.params.user);

  updateBalances(lockingMultiRewards, user, event.params.amount, false);
}

export function handleLogUnlocked(event: LogUnlockedEvent): void {
  createLogUnlocked(event);

  const lockingMultiRewards = getOrCreateLockingMultiRewards(event.address);
  const user = getOrCreateUser(event.params.user);

  updateBalances(lockingMultiRewards, user, event.params.amount, false);
  updateBalances(lockingMultiRewards, user, event.params.amount.neg(), true);
}

export function handleLogWithdrawn(event: LogWithdrawnEvent): void {
  createLogWithdrawn(event);

  const lockingMultiRewards = getOrCreateLockingMultiRewards(event.address);
  const user = getOrCreateUser(event.params.user);

  updateBalances(lockingMultiRewards, user, event.params.amount.neg(), false);
}

export function handleOperatorChanged(event: OperatorChangedEvent): void {
  createOperatorChanged(event);

  getOrCreateLockingMultiRewards(event.address);
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  createOwnershipTransferred(event);

  getOrCreateLockingMultiRewards(event.address);
}

export function handlePaused(event: PausedEvent): void {
  createPaused(event);

  getOrCreateLockingMultiRewards(event.address);
}

export function handleUnpaused(event: UnpausedEvent): void {
  createUnpaused(event);

  getOrCreateLockingMultiRewards(event.address);
}
