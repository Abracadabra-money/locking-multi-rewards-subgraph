import { Address, BigInt } from "@graphprotocol/graph-ts";
import { LockingMultiRewards } from "../../../generated/schema";

export function getOrCreateLockingMultiRewards(
  lockingMultiRewardsAddress: Address,
): LockingMultiRewards {
  let lockingMultiRewards = LockingMultiRewards.load(
    lockingMultiRewardsAddress,
  );

  if (lockingMultiRewards === null) {
    lockingMultiRewards = new LockingMultiRewards(lockingMultiRewardsAddress);

    lockingMultiRewards.unlockedAmount = BigInt.zero();
    lockingMultiRewards.lockedAmount = BigInt.zero();

    lockingMultiRewards.save();
  }

  return lockingMultiRewards;
}
