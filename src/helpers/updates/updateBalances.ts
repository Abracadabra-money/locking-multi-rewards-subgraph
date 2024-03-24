import { BigInt } from "@graphprotocol/graph-ts";
import { LockingMultiRewards, User } from "../../../generated/schema";

export function updateBalances(
  lockingMultiRewards: LockingMultiRewards,
  user: User,
  change: BigInt,
  locked: bool,
): void {
  if (locked) {
    lockingMultiRewards.lockedAmount =
      lockingMultiRewards.lockedAmount.plus(change);
    user.lockedAmount = user.lockedAmount.plus(change);
  } else {
    lockingMultiRewards.unlockedAmount =
      lockingMultiRewards.unlockedAmount.plus(change);
    user.unlockedAmount = user.unlockedAmount.plus(change);
  }

  lockingMultiRewards.save();
  user.save();
}
